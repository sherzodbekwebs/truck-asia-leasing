import raw from '../data.json'

export const formatSom = (value) => value.toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm"

const DOWN_PAYMENT_RATE = 0.5
const DAILY_PAYMENT = 300000
const TERM_MONTHS = 13

const buildTerms = (price) => {
  const downPayment = Math.round(price * DOWN_PAYMENT_RATE)
  const remaining = price - downPayment

  return {
    downPayment,
    remaining,
    items: [
      { label: "Boshlang'ich to'lov (avans)", value: `50% — ${formatSom(downPayment)}` },
      { label: 'Qolgan qism', value: formatSom(remaining) },
      { label: "To'lov muddati", value: `${TERM_MONTHS} oy` },
      { label: "Kunlik to'lov", value: `${formatSom(DAILY_PAYMENT)} / kun dan` },
      { label: 'Foiz stavka', value: '0%' },
      { label: "Sug'urta (yiliga)", value: '0,65%' },
      { label: 'Rasmiylashtirish', value: '1–2 ish kuni' },
    ],
  }
}

// price is not part of the spec sheet — kept here per model id
const PRICES = {
  bortovoy: 248640000,
  promtovarniy: 275520000,
}

// ---- small helpers to normalise the raw spec-sheet fields ----

const pickBase = (val, key = 'W5082') => {
  if (val && typeof val === 'object') return val[key] ?? Object.values(val)[0]
  return val
}

const mmToM = (mmStr) => {
  if (!mmStr) return null
  return mmStr
    .split('×')
    .map((n) => (Number(n.trim()) / 1000).toFixed(2))
    .join(' × ') + ' m'
}

const translateEco = (str) => (str ? str.replace('Евро', 'Yevro') : str)

const translateFuel = (str) => {
  if (!str) return ''
  return str
    .replace(/Бензин/i, 'Benzin')
    .replace(/Пропан/i, 'Propan')
    .replace(/Метан/i, 'Metan')
    .replace(/АИ/g, 'AI')
}

const translateBody = (body) => {
  if (body === 'бортовой') return 'Bortli (ochiq kuzov)'
  if (body === 'промтоварный') return 'Yopiq furgon'
  return body
}

const translateBrakes = (brake) => {
  const map = { дисковые: 'disk', барабанные: 'baraban' }
  const front = map[brake.front] || brake.front
  const rear = map[brake.rear] || brake.rear
  return `Old: ${front}, Orqa: ${rear}`
}

const parsePowerHp = (str) => {
  const first = str.split('/')[0].trim()
  return `${first} o.k.`
}

const parseEngineVolume = (str) => {
  const match = str.match(/\(([\d.]+)\)/)
  return match ? `${match[1]} l` : str
}

const parseTorque = (str) => {
  if (!str) return null
  return `${str.split('/')[0].trim()} Nm`
}

// ---- map one raw model entry into the shape the UI components expect ----

const mapModel = (model, id) => {
  const isBortovoy = model.main_indicators.body === 'бортовой'

  const fuelTank = pickBase(
    model.fuel_reserve?.fuel_tank_capacity_l ?? model.parameters_and_fuel?.fuel_tank_capacity_l
  )
  const maxSpeed = model.maneuverability?.max_speed_kmh ?? model.parameters_and_fuel?.max_speed_kmh
  const turningRadius =
    model.maneuverability?.min_turning_radius_m ?? model.parameters_and_fuel?.min_turning_radius_m
  const curbWeight = pickBase(model.weights.vehicle.curb_weight_kg)
  const payload = pickBase(model.weights.vehicle.payload_kg)
  const fuelGrade = pickBase(model.engine.fuel_type_grade)

  const bodyDims = isBortovoy
    ? mmToM(model.dimensions.length_width_height_side_mm)
    : mmToM(model.dimensions.length_width_height_body_mm)

  const quickSpecs = [
    { icon: 'standard', label: 'Standart', value: translateEco(model.engine.ecological_class) },
    { icon: 'wheel', label: "G'ildirak formulasi", value: '4x2' },
    { icon: 'power', label: 'Quvvat', value: parsePowerHp(model.engine.power_hp_kw_rpm) },
    {
      icon: 'weight',
      label: "To'liq og'irlik",
      value: `${model.weights.vehicle.gross_vehicle_weight_kg} kg`,
    },
    {
      icon: 'cabin',
      label: 'Kabina turi',
      value: model.comfort.air_conditioner ? 'Konditsioner, elektro oyna' : 'Standart kabina',
    },
    { icon: 'fuel', label: 'Baki hajmi', value: `${fuelTank} l` },
  ]

  const extraSpecs = [
    { label: 'Kuzov turi', value: translateBody(model.main_indicators.body) },
    { label: "Kuzov o'lchami", value: bodyDims },
    { label: "Umumiy o'lchamlari", value: mmToM(model.dimensions.length_width_height_mm) },
    {
      label: 'Dvigatel',
      value: `${parseEngineVolume(model.engine.volume_cm3_l)}, ${translateFuel(fuelGrade)}`,
    },
    ...(model.engine.torque_nm_rpm
      ? [{ label: 'Aylanish momenti', value: parseTorque(model.engine.torque_nm_rpm) }]
      : []),
    { label: "Yuk ko'tarish qobiliyati", value: `${payload} kg` },
    { label: "Snaryajennaya og'irligi", value: `${curbWeight} kg` },
    { label: 'Maksimal tezlik', value: `${maxSpeed} km/soat` },
    { label: 'Minimal burilish radiusi', value: `${turningRadius} m` },
    { label: 'Tormoz tizimi', value: translateBrakes(model.brake_system) },
    {
      label: 'Xavfsizlik',
      value: [
        model.safety.abs && 'ABS',
        model.safety.central_lock && 'markaziy qulflash',
        model.safety.anti_theft_system && 'signalizatsiya',
      ]
        .filter(Boolean)
        .join(', '),
    },
  ]

  return {
    id,
    variant: isBortovoy ? 'flatbed' : 'van',
    fullTitle: `Mini-yuk mashinasi — ${model.model}`,
    image: model.image,
    price: PRICES[id],
    quickSpecs,
    extraSpecs,
    leasing: buildTerms(PRICES[id]),
  }
}

const rawModels = raw.mini_truck.models
const bortovoyRaw = rawModels.find((m) => m.main_indicators.body === 'бортовой')
const promtovarniyRaw = rawModels.find((m) => m.main_indicators.body === 'промтоварный')

export const products = [mapModel(bortovoyRaw, 'bortovoy'), mapModel(promtovarniyRaw, 'promtovarniy')]

import { ShieldCheck, Layers, Gauge, Weight, Armchair, Fuel } from 'lucide-react'

const ICONS = {
  standard: ShieldCheck,
  wheel: Layers,
  power: Gauge,
  weight: Weight,
  cabin: Armchair,
  fuel: Fuel,
}

export default function SpecIcon({ name, size = 18 }) {
  const Cmp = ICONS[name] || ShieldCheck
  return <Cmp size={size} strokeWidth={2} />
}

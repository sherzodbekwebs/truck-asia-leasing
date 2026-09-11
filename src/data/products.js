export const formatSom = (value, lang = 'uz') => {
  const formatted = Math.round(value).toLocaleString('ru-RU').replace(/,/g, ' ')
  return lang === 'ru' ? `${formatted} сум` : `${formatted} so'm`
}

export const PRODUCTS_CONFIG = [
  {
    id: 'bortovoy',
    code: 'W5082',
    image: '/jacbortavoy.png',
    price: 248640000,
    dailyPayment: 300000,
    termMonths: 13,
    downPaymentRate: 0.5,
    titles: {
      uz: 'JAC X200 (Bortli ochiq kuzov)',
      ru: 'JAC X200 (Бортовой открытый кузов)',
    },
    tag: {
      uz: 'Ochiq bortli',
      ru: 'Бортовой',
    },
    shortDesc: {
      uz: 'Qurilish mollari, qishloq xo‘jaligi mahsulotlari va turli yuklar tashish uchun ideal tejamkor mini-yuk avtomobili.',
      ru: 'Идеальный манёвренный грузовик для перевозки стройматериалов, сельхозпродукции и негабаритных грузов.',
    },
    quickSpecs: {
      uz: [
        { icon: 'power', label: 'Dvigatel quvvati', value: '147 o.k. (2.0L Benzin)' },
        { icon: 'weight', label: 'Yuk ko‘tarishi', value: '1 740 kg' },
        { icon: 'standard', label: 'Ekologik toifa', value: 'Yevro-5' },
        { icon: 'fuel', label: 'Yoqilg‘i baki', value: '65 litr' },
      ],
      ru: [
        { icon: 'power', label: 'Мощность двигателя', value: '147 л.с. (2.0L Бензин)' },
        { icon: 'weight', label: 'Грузоподъёмность', value: '1 740 кг' },
        { icon: 'standard', label: 'Экологический класс', value: 'Евро-5' },
        { icon: 'fuel', label: 'Объём бака', value: '65 литров' },
      ],
    },
    sections: {
      uz: [
        {
          group: 'O‘lchamlar va kuzov',
          items: [
            { label: 'Kuzov turi', value: 'Bortli ochiq kuzov (alyumin/po‘lat)' },
            { label: 'Kuzov ichki o‘lchamlari (U×K×B)', value: '3.11 × 1.65 × 0.355 m' },
            { label: 'Avtomobil umumiy o‘lchami', value: '5.19 × 1.75 × 1.945 m' },
            { label: 'G‘ildirak bazasi', value: '2 640 mm' },
            { label: 'Klirens (yo‘l sathi oralig‘i)', value: '129 mm' },
            { label: 'O‘rindiqlar soni', value: '2 o‘rindiqli qulay salon' },
          ],
        },
        {
          group: 'Dvigatel va harakatlanish',
          items: [
            { label: 'Dvigatel modeli', value: 'HFC4GA3-3D (JAC Tech)' },
            { label: 'Ish hajmi va turi', value: '1997 sm³ (2.0 l), 4 silindrli atmosferik' },
            { label: 'Maksimal quvvat', value: '147 o.k. / 108 kVt @ 6600 ayl/daq' },
            { label: 'Aylanish momenti', value: '190 Nm @ 3000–4500 ayl/daq' },
            { label: 'Yoqilg‘i ta’minoti', value: 'Injektor (EFI), Benzin AI-91/92' },
            { label: 'Uzatish qutisi (KPP)', value: 'LC5T80B (5 pog‘onali mexanik)' },
            { label: 'Maksimal tezlik', value: '110 km/soat' },
            { label: 'Minimal burilish radiusi', value: '5.75 metr' },
          ],
        },
        {
          group: 'Vazn va yuk ko‘tarish',
          items: [
            { label: 'Pasport bo‘yicha yuk ko‘tarishi', value: '1 740 kg' },
            { label: 'To‘liq ruxsat etilgan vazn', value: '3 490 kg' },
            { label: 'Jihozlangan (quruq) vazni', value: '1 750 kg' },
            { label: 'Old/orqa o‘qqa tushadigan yuk', value: '1 345 kg / 2 145 kg' },
          ],
        },
        {
          group: 'Shassi, xavfsizlik va qulaylik',
          items: [
            { label: 'Old suspenziya', value: 'Mustaqil richagli, prujinali' },
            { label: 'Orqa suspenziya', value: 'Mustahkam ko‘p varaqli ressor' },
            { label: 'Tormoz tizimi', value: 'Oldi diskli, orqasi barabanli + ABS' },
            { label: 'Shinalar o‘lchami', value: 'Old: 195/70R15C, Orqa: 155R13C (qo‘sh g‘ildirak)' },
            { label: 'Komfort optsiyalari', value: 'Zavod konditsioneri, elektr oynako‘targichlar, pechka' },
            { label: 'Xavfsizlik', value: 'ABS, markaziy qulf, masofaviy pult, signalizatsiya' },
            { label: 'Multimedia', value: 'Radio/MP3 pleyer, USB va 12V 120W rozetka' },
          ],
        },
      ],
      ru: [
        {
          group: 'Габариты и кузов',
          items: [
            { label: 'Тип кузова', value: 'Бортовой открытый кузов' },
            { label: 'Внутренние размеры кузова (Д×Ш×В)', value: '3.11 × 1.65 × 0.355 м' },
            { label: 'Габаритные размеры автомобиля', value: '5.19 × 1.75 × 1.945 м' },
            { label: 'Колёсная база', value: '2 640 мм' },
            { label: 'Дорожный просвет (клиренс)', value: '129 мм' },
            { label: 'Количество мест', value: '2 посадочных места' },
          ],
        },
        {
          group: 'Двигатель и динамика',
          items: [
            { label: 'Модель двигателя', value: 'HFC4GA3-3D (JAC Tech)' },
            { label: 'Рабочий объём и тип', value: '1997 см³ (2.0 л), 4-цилиндровый бензиновый' },
            { label: 'Максимальная мощность', value: '147 л.с. / 108 кВт при 6600 об/мин' },
            { label: 'Крутящий момент', value: '190 Нм при 3000–4500 об/мин' },
            { label: 'Топливная система', value: 'Инжектор (EFI), Бензин АИ-91/92' },
            { label: 'Коробка передач (КПП)', value: 'LC5T80B (5-ступенчатая механическая)' },
            { label: 'Максимальная скорость', value: '110 км/ч' },
            { label: 'Минимальный радиус разворота', value: '5.75 м' },
          ],
        },
        {
          group: 'Массовые характеристики',
          items: [
            { label: 'Грузоподъёмность по паспорту', value: '1 740 кг' },
            { label: 'Полная разрешённая масса', value: '3 490 кг' },
            { label: 'Снаряжённая масса', value: '1 750 кг' },
            { label: 'Нагрузка на переднюю/заднюю ось', value: '1 345 кг / 2 145 кг' },
          ],
        },
        {
          group: 'Шасси, безопасность и комфорт',
          items: [
            { label: 'Передняя подвеска', value: 'Независимая пружинная' },
            { label: 'Задняя подвеска', value: 'Усиленная рессорная' },
            { label: 'Тормозная система', value: 'Передние дисковые, задние барабанные + ABS' },
            { label: 'Размерность шин', value: 'Спереди: 195/70R15C, Сзади: 155R13C (спаренные)' },
            { label: 'Оснащение кабины', value: 'Кондиционер, электростеклоподъёмники, печка' },
            { label: 'Безопасность', value: 'ABS, центральный замок, иммобилайзер' },
            { label: 'Мультимедиа', value: 'Штатное радио/MP3, USB, розетка 12V 120W' },
          ],
        },
      ],
    },
  },
  {
    id: 'promtovarniy',
    code: 'W5082PT',
    image: '/jacpromtavarniy.png',
    price: 275520000,
    dailyPayment: 330000,
    termMonths: 13,
    downPaymentRate: 0.5,
    titles: {
      uz: 'JAC X200 (Yopiq furgon / Promtovarniy)',
      ru: 'JAC X200 (Промтоварный фургон)',
    },
    tag: {
      uz: 'Yopiq furgon',
      ru: 'Промтоварный фургон',
    },
    shortDesc: {
      uz: 'Mahsulotlarni quyosh, yomg‘ir va changdan to‘liq himoyalangan holda xavfsiz yetkazib berish uchun mo‘ljallangan mustahkam furgon.',
      ru: 'Надёжный закрытый изотермический/промтоварный фургон для безопасной городской и региональной доставки грузов.',
    },
    quickSpecs: {
      uz: [
        { icon: 'power', label: 'Dvigatel quvvati', value: '147 o.k. (2.0L Benzin)' },
        { icon: 'weight', label: 'Yuk ko‘tarishi', value: '1 720 kg' },
        { icon: 'standard', label: 'Ekologik toifa', value: 'Yevro-5' },
        { icon: 'fuel', label: 'Yoqilg‘i baki', value: '65 litr' },
      ],
      ru: [
        { icon: 'power', label: 'Мощность двигателя', value: '147 л.с. (2.0L Бензин)' },
        { icon: 'weight', label: 'Грузоподъёмность', value: '1 720 кг' },
        { icon: 'standard', label: 'Экологический класс', value: 'Евро-5' },
        { icon: 'fuel', label: 'Объём бака', value: '65 литров' },
      ],
    },
    sections: {
      uz: [
        {
          group: 'O‘lchamlar va kuzov',
          items: [
            { label: 'Kuzov turi', value: 'Yopiq promtovarniy furgon' },
            { label: 'Furgon ichki o‘lchamlari (U×K×B)', value: '3.22 × 1.76 × 1.76 m' },
            { label: 'Furgon umumiy sig‘imi', value: 'Taxminan 10 m³' },
            { label: 'Avtomobil umumiy o‘lchami', value: '5.19 × 1.76 × 2.61 m' },
            { label: 'G‘ildirak bazasi', value: '2 640 mm' },
            { label: 'Klirens (yo‘l sathi oralig‘i)', value: '129 mm' },
          ],
        },
        {
          group: 'Dvigatel va harakatlanish',
          items: [
            { label: 'Dvigatel modeli', value: 'HFC4GA3-3D (JAC Tech)' },
            { label: 'Ish hajmi va turi', value: '1997 sm³ (2.0 l), 4 silindrli atmosferik' },
            { label: 'Maksimal quvvat', value: '147 o.k. / 108 kVt @ 6600 ayl/daq' },
            { label: 'Yoqilg‘i ta’minoti', value: 'Injektor (EFI), Benzin AI-91/92' },
            { label: 'Uzatish qutisi (KPP)', value: 'LC5T80B (5 pog‘onali mexanik)' },
            { label: 'Maksimal tezlik', value: '110 km/soat' },
            { label: 'Minimal burilish radiusi', value: '5.75 metr' },
          ],
        },
        {
          group: 'Vazn va yuk ko‘tarish',
          items: [
            { label: 'Pasport bo‘yicha yuk ko‘tarishi', value: '1 720 kg' },
            { label: 'To‘liq ruxsat etilgan vazn', value: '3 500 kg' },
            { label: 'Jihozlangan furgon vazni', value: '1 780 kg' },
            { label: 'Old/orqa o‘qqa tushadigan yuk', value: '1 345 kg / 2 145 kg' },
          ],
        },
        {
          group: 'Shassi, xavfsizlik va qulaylik',
          items: [
            { label: 'Old suspenziya', value: 'Mustaqil prujinali, podveska' },
            { label: 'Orqa suspenziya', value: 'Mustahkamlangan ko‘p qatlamli ressor' },
            { label: 'Tormoz tizimi', value: 'Oldi diskli, orqasi barabanli + ABS' },
            { label: 'Shinalar o‘lchami', value: 'Old: 195/70R15C, Orqa: 155R13C (qo‘shaloq g‘ildiraklar)' },
            { label: 'Komfort optsiyalari', value: 'Konditsioner, elektr oynalar, markaziy pult' },
            { label: 'Xavfsizlik', value: 'ABS, markaziy qulflash, signalizatsiya' },
            { label: 'Furgon eshiklari', value: 'Orqa ikki qanotli eshiklar, qulf mexanizmi' },
          ],
        },
      ],
      ru: [
        {
          group: 'Габариты и кузов',
          items: [
            { label: 'Тип кузова', value: 'Закрытый промтоварный фургон' },
            { label: 'Внутренние размеры фургона (Д×Ш×В)', value: '3.22 × 1.76 × 1.76 м' },
            { label: 'Полезный объём фургона', value: 'Около 10 м³' },
            { label: 'Габаритные размеры автомобиля', value: '5.19 × 1.76 × 2.61 м' },
            { label: 'Колёсная база', value: '2 640 мм' },
            { label: 'Дорожный просвет (клиренс)', value: '129 мм' },
          ],
        },
        {
          group: 'Двигатель и динамика',
          items: [
            { label: 'Модель двигателя', value: 'HFC4GA3-3D (JAC Tech)' },
            { label: 'Рабочий объём и тип', value: '1997 см³ (2.0 л), бензиновый' },
            { label: 'Максимальная мощность', value: '147 л.с. / 108 кВт при 6600 об/мин' },
            { label: 'Топливная система', value: 'Инжектор (EFI), Бензин АИ-91/92' },
            { label: 'Коробка передач (КПП)', value: 'LC5T80B (5-ступенчатая механическая)' },
            { label: 'Максимальная скорость', value: '110 км/ч' },
            { label: 'Минимальный радиус разворота', value: '5.75 м' },
          ],
        },
        {
          group: 'Массовые характеристики',
          items: [
            { label: 'Грузоподъёмность по паспорту', value: '1 720 кг' },
            { label: 'Полная разрешённая масса', value: '3 500 кг' },
            { label: 'Снаряжённая масса с фургоном', value: '1 780 кг' },
            { label: 'Нагрузка на переднюю/заднюю ось', value: '1 345 кг / 2 145 кг' },
          ],
        },
        {
          group: 'Шасси, безопасность и комфорт',
          items: [
            { label: 'Передняя подвеска', value: 'Независимая пружинная' },
            { label: 'Задняя подвеска', value: 'Усиленная рессорная' },
            { label: 'Тормозная система', value: 'Передние дисковые, задние барабанные + ABS' },
            { label: 'Размерность шин', value: 'Спереди: 195/70R15C, Сзади: 155R13C (спаренные)' },
            { label: 'Оснащение кабины', value: 'Кондиционер, электростеклоподъёмники, печка' },
            { label: 'Безопасность', value: 'ABS, центральный замок, иммобилайзер' },
            { label: 'Двери фургона', value: 'Задние распашные с надёжным замком' },
          ],
        },
      ],
    },
  },
]

export const getLeasingDetails = (product, lang = 'uz') => {
  const downPayment = Math.round(product.price * product.downPaymentRate)
  const remaining = product.price - downPayment
  const daily = product.dailyPayment

  if (lang === 'ru') {
    return {
      downPayment,
      remaining,
      daily,
      items: [
        { label: 'Полная стоимость автомобиля', value: formatSom(product.price, 'ru') },
        { label: 'Первоначальный взнос (50%)', value: formatSom(downPayment, 'ru') },
        { label: 'Остаток суммы финансирования', value: formatSom(remaining, 'ru') },
        { label: 'Срок лизинга', value: `${product.termMonths} месяцев` },
        { label: 'Ежедневный платёж (ориентир)', value: `${formatSom(daily, 'ru')} / день` },
        { label: 'Ежемесячный ориентировочный платёж', value: `~${formatSom(daily * 30, 'ru')} / мес` },
        { label: 'Процентная ставка', value: '0% (выгодные условия)' },
        { label: 'Страхование КАСКО (в год)', value: '0,65%' },
        { label: 'Срок одобрения и оформления', value: '1–2 рабочих дня' },
      ],
    }
  }

  return {
    downPayment,
    remaining,
    daily,
    items: [
      { label: "Avtomobilning to'liq narxi", value: formatSom(product.price, 'uz') },
      { label: "Boshlang'ich to'lov (avans 50%)", value: formatSom(downPayment, 'uz') },
      { label: 'Qolgan moliyalashtirish summasi', value: formatSom(remaining, 'uz') },
      { label: "To'lov muddati", value: `${product.termMonths} oy` },
      { label: "Kunlik to'lov (taxminiy)", value: `${formatSom(daily, 'uz')} / kun` },
      { label: "Oylik to'lov (taxminiy)", value: `~${formatSom(daily * 30, 'uz')} / oy` },
      { label: 'Ustama foiz stavkasi', value: '0% (qulay shartlar)' },
      { label: "Sug'urta (KASKO / yiliga)", value: '0,65%' },
      { label: 'Rasmiylashtirish muddati', value: '1–2 ish kuni' },
    ],
  }
}

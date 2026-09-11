export const formatSom = (value, lang = 'uz') => {
  const formatted = Math.round(value).toLocaleString('ru-RU').replace(/,/g, ' ')
  return lang === 'ru' ? `${formatted} сум` : `${formatted} so'm`
}

export const PRODUCTS_CONFIG = [
  {
    id: 'bortovoy',
    code: 'W5082 / W5082CNG / W5082LPG',
    image: '/jacbortavoy.png',
    price: 248640000,
    dailyPayment: 300000,
    termMonths: 13,
    downPaymentRate: 0.5,
    titles: {
      uz: 'JAC X200 (Bortli ochiq kuzov)',
      ru: 'JAC X200 (бортовой)',
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
        { icon: 'power', label: 'Dvigatel quvvati', value: '147 o.k.' },
        { icon: 'weight', label: 'Yuk ko‘tarishi', value: '1 740 kg' },
        { icon: 'standard', label: 'Ekologik toifa', value: 'Yevro-5' },
        { icon: 'fuel', label: 'Yoqilg‘i baki', value: '65 litr' },
      ],
      ru: [
        { icon: 'power', label: 'Мощность двигателя', value: '147 л.с.' },
        { icon: 'weight', label: 'Грузоподъёмность', value: '1 740 кг' },
        { icon: 'standard', label: 'Экологический класс', value: 'Евро-5' },
        { icon: 'fuel', label: 'Объём бака', value: '65 литров' },
      ],
    },
    sections: {
      uz: [
        {
          group: 'Asosiy ko‘rsatkichlar va o‘lchamlar',
          items: [
            { label: 'Kuzov turi va toifasi', value: 'Bortli ochiq kuzov (N1 toifasi)' },
            { label: 'Modifikatsiyalar', value: 'W5082 (benzin), W5082CNG (metan), W5082LPG (propan)' },
            { label: 'Avtomobil umumiy o‘lchamlari (U×K×B)', value: '5 190 × 1 750 × 1 945 mm' },
            { label: 'Bort ichki o‘lchamlari (U×K×B)', value: '3 110 × 1 650 × 355 mm' },
            { label: 'G‘ildirak bazasi', value: '2 640 mm' },
            { label: 'G‘ildiraklar izi (old / orqa)', value: '1 485 / 1 320 mm' },
            { label: 'Kuzov osilishi (old / orqa)', value: '1 210 / 1 340 mm' },
            { label: 'Klirens (yo‘l sathi oralig‘i)', value: '129 mm' },
            { label: 'Kirish / chiqish burchagi', value: '17° / 18°' },
            { label: 'O‘rindiqlar soni va rangi', value: '2 o‘rindiq, oq rang' },
          ],
        },
        {
          group: 'Dvigatel va transmissiya',
          items: [
            { label: 'Dvigatel modeli va turi', value: 'HFC4GA3-3D, atmosferik' },
            { label: 'Ish hajmi', value: '1997 sm³ (2.0 l)' },
            { label: 'Maksimal quvvat', value: '147 o.k. / 108 kVt @ 6600 ayl/daq' },
            { label: 'Aylanish momenti', value: '190 Nm @ 3000–4500 ayl/daq' },
            { label: 'Yoqilg‘i turi', value: 'Benzin AI-91/92 / Metan (CNG) / Propan (LPG)' },
            { label: 'Yoqilg‘i ta’minoti', value: 'Injektor (EFI) + BRC ALBA 32 gaz tizimi (Italiya)' },
            { label: 'Ekologik toifa', value: 'Yevro-5' },
            { label: 'Uzatish qutisi (KPP)', value: 'LC5T80B 5 pog‘onali mexanik, orqa uzatma' },
            { label: 'Ilashish muftasi (stsepleniye)', value: 'Quruq bir diskli, diametri 230 mm' },
            { label: 'Maksimal tezlik / Burilish radiusi', value: '110 km/soat / 5.75 m' },
          ],
        },
        {
          group: 'Vazn parametrlari va sig‘im',
          items: [
            { label: 'Shassi yuk ko‘tarishi / massasi', value: '2 080 kg / 1 535 kg' },
            { label: 'Avtomobil yuk ko‘tarishi', value: '1 740 kg (W5082) / 1 500 kg (CNG) / 1 670 kg (LPG)' },
            { label: 'Jihozlangan massasi', value: '1 750 kg (W5082) / 1 990 kg (CNG) / 1 820 kg (LPG)' },
            { label: 'To‘liq ruxsat etilgan vazn', value: '3 490 kg' },
            { label: 'Yuk bilan o‘qlar taqsimoti (old/orqa)', value: '1 345 kg / 2 145 kg' },
            { label: 'Yoqilg‘i baki sig‘imi', value: '65 litr' },
            { label: 'Gaz ballonlari sig‘imi', value: 'Metan: 180 l (100+80) / Propan: 65 l' },
          ],
        },
        {
          group: 'Xodovoy, xavfsizlik va qulaylik',
          items: [
            { label: 'Osma tizimi (old / orqa)', value: 'Old: mustaqil prujinali; Orqa: ressorli' },
            { label: 'Tormoz tizimi', value: 'Old: diskli; Orqa: barabanli; ABS mavjud' },
            { label: 'Shinalar o‘lchami', value: 'Old: 195/70R15C; Orqa: 155R13C (qo‘shaloq / sparka)' },
            { label: 'G‘ildirak disklari va zapas', value: 'Shtamplangan po‘lat, to‘liq o‘lchamli zaxira g‘ildirak' },
            { label: 'Komfort jihozlari', value: 'Konditsioner, salon pechkasi, elektr oynako‘targichlar, GUR' },
            { label: 'Xavfsizlik va himoya', value: 'ABS, markaziy qulf, immobilayzer, 2 ta kamar va eslatma' },
            { label: 'Optika va salon', value: 'Tumanga qarshi chiroqlar, faralar korrektori, qora salon' },
            { label: 'Multimedia', value: 'Radio + MP3, dinamiklar, USB + 12V 120W rozetka' },
          ],
        },
      ],
      ru: [
        {
          group: 'Основные показатели и габариты',
          items: [
            { label: 'Категория и кузов', value: 'N1, кузов бортовой' },
            { label: 'Модификации', value: 'W5082 (бензин), W5082CNG (метан), W5082LPG (пропан)' },
            { label: 'Габаритные размеры (Д×Ш×В)', value: '5190 × 1750 × 1945 мм' },
            { label: 'Размеры борта (Д×Ш×В)', value: '3110 × 1650 × 355 мм' },
            { label: 'Колёсная база', value: '2640 мм' },
            { label: 'Колея (передняя / задняя)', value: '1485 / 1320 мм' },
            { label: 'Свес (передний / задний)', value: '1210 / 1340 мм' },
            { label: 'Дорожный просвет (клиренс)', value: '129 мм' },
            { label: 'Угол (въезда / съезда)', value: '17° / 18°' },
            { label: 'Количество мест и цвет', value: '2 места, цвет белый' },
          ],
        },
        {
          group: 'Двигатель и трансмиссия',
          items: [
            { label: 'Модель и тип двигателя', value: 'HFC4GA3-3D, атмосферный' },
            { label: 'Объём двигателя', value: '1997 см³ (2.0 л)' },
            { label: 'Мощность двигателя', value: '147 л.с. / 108 кВт при 6600 об/мин' },
            { label: 'Крутящий момент', value: '190 Н·м при 3000–4500 об/мин' },
            { label: 'Вид топлива', value: 'Бензин (АИ-91, 92) / Метан / Пропан' },
            { label: 'Подача топлива', value: 'Инжектор (EFI) + газовая система BRC ALBA 32 (Италия)' },
            { label: 'Экологический класс', value: 'Евро-5' },
            { label: 'Коробка передач (КПП)', value: 'LC5T80B 5-ступенчатая, привод задний' },
            { label: 'Сцепление', value: 'Сухое однодисковое, диаметр 230 мм' },
            { label: 'Скорость и маневренность', value: '110 км/ч, мин. радиус поворота 5.75 м' },
          ],
        },
        {
          group: 'Весовые параметры и топливо',
          items: [
            { label: 'Параметры шасси (г/п / масса)', value: 'Грузоподъёмность 2080 кг, снаряж. масса 1535 кг' },
            { label: 'Грузоподъёмность автомобиля', value: '1740 кг (W5082) / 1500 кг (CNG) / 1670 кг (LPG)' },
            { label: 'Снаряженная масса автомобиля', value: '1750 кг (W5082) / 1990 кг (CNG) / 1820 кг (LPG)' },
            { label: 'Полная масса автомобиля', value: '3490 кг' },
            { label: 'Распределение веса с грузом', value: 'Спереди: 1345 кг / Сзади: 2145 кг' },
            { label: 'Ёмкость топливного бака', value: '65 л' },
            { label: 'Ёмкость газовых баллонов', value: 'Метан: 180 л (100+80) / Пропан: 65 л' },
          ],
        },
        {
          group: 'Ходовая, безопасность и комфорт',
          items: [
            { label: 'Подвеска (передняя / задняя)', value: 'Передняя: независимая пружинная; Задняя: рессорная' },
            { label: 'Тормозная система', value: 'Передние: дисковые; Задние: барабанные + ABS' },
            { label: 'Шины и колёсные диски', value: 'Передние: 195/70R15C; Задние: 155R13C (сдвоенные); Штампованные' },
            { label: 'Запасное колесо', value: 'Полноразмерное запасное колесо' },
            { label: 'Оснащение кабины', value: 'Кондиционер, отопитель, электростеклоподъёмники, ГУР' },
            { label: 'Безопасность', value: 'ABS, центральный замок, противоугонная система, 2 ремня' },
            { label: 'Обзор и салон', value: 'Противотуманные фары, корректор фар, чёрный салон' },
            { label: 'Мультимедиа', value: 'Радио + MP3, колонки, USB + розетка 12V 120W' },
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
      uz: 'JAC X200 (Yopiq promtovarniy furgon)',
      ru: 'JAC X200 (промтоварный)',
    },
    tag: {
      uz: 'Yopiq furgon',
      ru: 'Промтоварный',
    },
    shortDesc: {
      uz: 'Mahsulotlarni quyosh, yomg‘ir va changdan to‘liq himoyalangan holda xavfsiz yetkazib berish uchun mo‘ljallangan mustahkam furgon.',
      ru: 'Надёжный закрытый промтоварный фургон для безопасной городской и региональной доставки грузов.',
    },
    quickSpecs: {
      uz: [
        { icon: 'power', label: 'Dvigatel quvvati', value: '147 o.k.' },
        { icon: 'weight', label: 'Yuk ko‘tarishi', value: '1 720 kg' },
        { icon: 'standard', label: 'Ekologik toifa', value: 'Yevro-5' },
        { icon: 'fuel', label: 'Yoqilg‘i baki', value: '65 litr' },
      ],
      ru: [
        { icon: 'power', label: 'Мощность двигателя', value: '147 л.с.' },
        { icon: 'weight', label: 'Грузоподъёмность', value: '1 720 кг' },
        { icon: 'standard', label: 'Экологический класс', value: 'Евро-5' },
        { icon: 'fuel', label: 'Объём бака', value: '65 литров' },
      ],
    },
    sections: {
      uz: [
        {
          group: 'Asosiy ko‘rsatkichlar va o‘lchamlar',
          items: [
            { label: 'Kuzov turi va toifasi', value: 'Yopiq promtovarniy furgon (N1 toifasi)' },
            { label: 'Modifikatsiya kodi', value: 'JAC X200 – W5082PT' },
            { label: 'Avtomobil umumiy o‘lchamlari (U×K×B)', value: '5 190 × 1 760 × 2 610 mm' },
            { label: 'Kuzov (furgon) ichki o‘lchami (U×K×B)', value: '3 220 × 1 760 × 1 760 mm' },
            { label: 'G‘ildirak bazasi', value: '2 640 mm' },
            { label: 'G‘ildiraklar izi (old / orqa)', value: '1 485 / 1 320 mm' },
            { label: 'Kuzov osilishi (old / orqa)', value: '1 210 / 1 340 mm' },
            { label: 'Klirens (yo‘l sathi oralig‘i)', value: '129 mm' },
            { label: 'Kirish / chiqish burchagi', value: '17° / 18°' },
            { label: 'O‘rindiqlar soni va rangi', value: '2 o‘rindiq, oq rang' },
          ],
        },
        {
          group: 'Dvigatel va transmissiya',
          items: [
            { label: 'Dvigatel modeli va turi', value: 'HFC4GA3-3D, atmosferik' },
            { label: 'Ish hajmi', value: '1997 sm³ (2.0 l)' },
            { label: 'Maksimal quvvat', value: '147 o.k. / 108 kVt @ 6600 ayl/daq' },
            { label: 'Yoqilg‘i turi', value: 'Benzin (AI-91, AI-92)' },
            { label: 'Yoqilg‘i ta’minoti', value: 'Injektor (EFI)' },
            { label: 'Ekologik toifa', value: 'Yevro-5' },
            { label: 'Uzatish qutisi (KPP)', value: 'LC5T80B 5 pog‘onali mexanik, orqa uzatma' },
            { label: 'Ilashish muftasi (stsepleniye)', value: 'Quruq bir diskli, diametri 230 mm' },
            { label: 'Maksimal tezlik / Burilish radiusi', value: '110 km/soat / 5.75 m' },
          ],
        },
        {
          group: 'Vazn parametrlari va sig‘im',
          items: [
            { label: 'Shassi yuk ko‘tarishi / massasi', value: '2 080 kg / 1 420 kg' },
            { label: 'Furgon yuk ko‘tarishi', value: '1 720 kg' },
            { label: 'Jihozlangan furgon massasi', value: '1 780 kg' },
            { label: 'To‘liq ruxsat etilgan vazn', value: '3 500 kg' },
            { label: 'Yuk bilan o‘qlar taqsimoti (old/orqa)', value: '1 345 kg / 2 145 kg' },
            { label: 'Yoqilg‘i baki sig‘imi', value: '65 litr' },
          ],
        },
        {
          group: 'Xodovoy, xavfsizlik va qulaylik',
          items: [
            { label: 'Osma tizimi (old / orqa)', value: 'Old: mustaqil prujinali; Orqa: ressorli' },
            { label: 'Tormoz tizimi', value: 'Old: diskli; Orqa: barabanli; ABS mavjud' },
            { label: 'Shinalar o‘lchami', value: 'Old: 195/70R15C; Orqa: 155R13C (qo‘shaloq / sparka)' },
            { label: 'G‘ildirak disklari va zapas', value: 'Shtamplangan po‘lat, to‘liq o‘lchamli zaxira g‘ildirak' },
            { label: 'Furgon eshiklari', value: 'Orqa ikki qanotli ochiluvchi, mustahkam qulfli' },
            { label: 'Komfort jihozlari', value: 'Konditsioner, salon pechkasi, elektr oynako‘targichlar, GUR' },
            { label: 'Xavfsizlik va himoya', value: 'ABS, markaziy qulf, immobilayzer, 2 ta kamar va eslatma' },
            { label: 'Optika va salon', value: 'Tumanga qarshi chiroqlar, faralar korrektori, qora salon' },
            { label: 'Multimedia', value: 'Radio + MP3, dinamiklar, USB + 12V 120W rozetka' },
          ],
        },
      ],
      ru: [
        {
          group: 'Основные показатели и габариты',
          items: [
            { label: 'Категория и кузов', value: 'N1, кузов промтоварный' },
            { label: 'Модификация', value: 'JAC X200 – W5082PT' },
            { label: 'Габаритные размеры (Д×Ш×В)', value: '5190 × 1760 × 2610 мм' },
            { label: 'Размеры кузова (Д×Ш×В)', value: '3220 × 1760 × 1760 мм' },
            { label: 'Колёсная база', value: '2640 мм' },
            { label: 'Колея (передняя / задняя)', value: '1485 / 1320 мм' },
            { label: 'Свес (передний / задний)', value: '1210 / 1340 мм' },
            { label: 'Дорожный просвет (клиренс)', value: '129 мм' },
            { label: 'Угол (въезда / съезда)', value: '17° / 18°' },
            { label: 'Количество мест и цвет', value: '2 места, цвет белый' },
          ],
        },
        {
          group: 'Двигатель и трансмиссия',
          items: [
            { label: 'Модель и тип двигателя', value: 'HFC4GA3-3D, атмосферный' },
            { label: 'Объём двигателя', value: '1997 см³ (2.0 л)' },
            { label: 'Мощность двигателя', value: '147 л.с. / 108 кВт при 6600 об/мин' },
            { label: 'Вид топлива', value: 'Бензин (АИ-91, АИ-92)' },
            { label: 'Подача топлива', value: 'Инжектор (EFI)' },
            { label: 'Экологический класс', value: 'Евро-5' },
            { label: 'Коробка передач (КПП)', value: 'LC5T80B 5-ступенчатая, привод задний' },
            { label: 'Сцепление', value: 'Сухое однодисковое, диаметр 230 мм' },
            { label: 'Скорость и маневренность', value: '110 км/ч, мин. радиус 5.75 м' },
          ],
        },
        {
          group: 'Весовые параметры и топливо',
          items: [
            { label: 'Параметры шасси (г/п / масса)', value: 'Грузоподъёмность 2080 кг, масса шасси 1420 кг' },
            { label: 'Грузоподъёмность автомобиля', value: '1720 кг' },
            { label: 'Снаряженная масса автомобиля', value: '1780 кг' },
            { label: 'Полная масса автомобиля', value: '3500 кг' },
            { label: 'Распределение веса с грузом', value: 'Спереди: 1345 кг / Сзади: 2145 кг' },
            { label: 'Ёмкость топливного бака', value: '65 л' },
          ],
        },
        {
          group: 'Ходовая, безопасность и комфорт',
          items: [
            { label: 'Подвеска (передняя / задняя)', value: 'Передняя: независимая пружинная; Задняя: рессорная' },
            { label: 'Тормозная система', value: 'Передние: дисковые; Задние: барабанные + ABS' },
            { label: 'Шины и колёсные диски', value: 'Передние: 195/70R15C; Задние: 155R13C (сдвоенные); Штампованные' },
            { label: 'Запасное колесо', value: 'Полноразмерное запасное колесо' },
            { label: 'Оснащение фургона', value: 'Задние распашные двери с надёжным замком' },
            { label: 'Оснащение кабины', value: 'Кондиционер, отопитель, электростеклоподъёмники, ГУР' },
            { label: 'Безопасность', value: 'ABS, центральный замок, противоугонная система, 2 ремня' },
            { label: 'Обзор и салон', value: 'Противотуманные фары, корректор фар, чёрный салон' },
            { label: 'Мультимедиа', value: 'Радио + MP3, колонки, USB + розетка 12V 120W' },
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
        { label: 'Срок рассрочки (без процентов)', value: `${product.termMonths} месяцев` },
        { label: 'Ежедневный платёж (ориентир)', value: `${formatSom(daily, 'ru')} / день` },
        { label: 'Ежемесячный ориентировочный платёж', value: `~${formatSom(daily * 30, 'ru')} / мес` },
        { label: 'Процентная ставка', value: '0% (без процентов / переплат)' },
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
      { label: "Muddatli to'lov muddati", value: `${product.termMonths} oy (0% foizsiz)` },
      { label: "Kunlik to'lov (taxminiy)", value: `${formatSom(daily, 'uz')} / kun` },
      { label: "Oylik to'lov (taxminiy)", value: `~${formatSom(daily * 30, 'uz')} / oy` },
      { label: 'Ustama foiz stavkasi', value: '0% (mutlaqo foizsiz)' },
      { label: "Sug'urta (KASKO / yiliga)", value: '0,65%' },
      { label: 'Rasmiylashtirish muddati', value: '1–2 ish kuni' },
    ],
  }
}

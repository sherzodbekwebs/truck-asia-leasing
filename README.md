# JAC / Truck Asia Leasing — Landing Page (React + Vite)

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

## Build (production)

```bash
npm run build
npm run preview
```

`dist/` papkasi hosting uchun tayyor statik fayllarni saqlaydi.

## Telegram sozlamalari

`.env` faylida quyidagi o'zgaruvchilar mavjud:

```
VITE_TELEGRAM_BOT_TOKEN=...
VITE_TELEGRAM_CHAT_ID=...
```

Forma yuborilganda ariza shu bot orqali ko'rsatilgan Telegram kanal/guruhga yuboriladi.

> **Eslatma:** bu qiymatlar Vite tomonidan build vaqtida frontend bundle ichiga qo'shiladi, ya'ni brauzer orqali ko'rinadi. Agar tokenni to'liq yashirish kerak bo'lsa, so'rovni backend proksi (masalan, kichik serverless funksiya) orqali yuborish tavsiya etiladi.

## Tuzilma

```
src/
  components/
    Header.jsx       — ikkala logo (JAC, Truck Asia Leasing)
    ProductCard.jsx   — texnika kartasi
    Modal.jsx         — universal modal oyna
    LeadForm.jsx       — ism/telefon formasi + Telegram integratsiyasi
    TruckIcon.jsx      — SVG texnika illyustratsiyasi
  data/
    products.js         — texnikalar, narxlar, leasing shartlari
  App.jsx
  App.css
  index.css
  main.jsx
```

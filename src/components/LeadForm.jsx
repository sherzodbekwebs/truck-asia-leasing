import { useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from './Header.jsx'

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

export default function LeadForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'err'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setStatus('sending')

    const text =
      "Yangi ariza — JAC / Truck Asia Leasing\n" +
      `Ism: ${name.trim()}\n` +
      `Telefon: ${phone.trim()}`

    try {
      const url =
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage` +
        `?chat_id=${encodeURIComponent(TELEGRAM_CHAT_ID)}&text=${encodeURIComponent(text)}`

      const res = await fetch(url, { method: 'GET' })
      const data = await res.json()

      if (data.ok) {
        setStatus('ok')
        setName('')
        setPhone('')
      } else {
        throw new Error('Telegram API error')
      }
    } catch (err) {
      setStatus('err')
    }
  }

  return (
    <section className="lead" id="lead-form">
      <div className="panel">
        <h2>Ariza qoldiring</h2>
        <p className="lead-sub">
          Ism va telefon raqamingizni qoldiring, mutaxassisimiz siz bilan bog'lanadi. Yoki
          bevosita qo'ng'iroq qiling:{' '}
          <a href={PHONE_HREF} className="lead-phone">
            <Phone size={13} strokeWidth={2.4} />
            {PHONE_DISPLAY}
          </a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fname">Ismingiz</label>
            <input
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingizni kiriting"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="fphone">Telefon raqamingiz</label>
            <input
              type="tel"
              id="fphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 123 45 67"
              required
            />
          </div>
          <button type="submit" className="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Yuborilmoqda...' : 'Ariza yuborish'}
          </button>
          {status === 'ok' && (
            <div className="form-msg ok">
              Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
            </div>
          )}
          {status === 'err' && (
            <div className="form-msg err">
              Xatolik yuz berdi. Iltimos, birozdan so'ng qayta urinib ko'ring.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

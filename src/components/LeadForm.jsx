import { useState, useEffect } from 'react'
import { Phone, Send, CheckCircle, AlertCircle, Shield, Truck } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from './Header.jsx'
import { PRODUCTS_CONFIG } from '../data/products.js'

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

const formatUzPhone = (val) => {
  // Only extract numeric digits
  let digits = val.replace(/\D/g, '')

  // If user enters/pastes numbers that start with 998, strip the country code
  if (digits.startsWith('998')) {
    digits = digits.slice(3)
  }

  // Allow up to 9 digits for Uzbekistan mobile/landline numbers
  digits = digits.slice(0, 9)

  let formatted = '+998'
  if (digits.length > 0) {
    formatted += ' ' + digits.slice(0, 2)
  }
  if (digits.length > 2) {
    formatted += ' ' + digits.slice(2, 5)
  }
  if (digits.length > 5) {
    formatted += ' ' + digits.slice(5, 7)
  }
  if (digits.length > 7) {
    formatted += ' ' + digits.slice(7, 9)
  }

  return formatted
}

export default function LeadForm({ lang, t, preselectedProduct }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+998 ')
  const [phoneError, setPhoneError] = useState(false)
  const [selectedModel, setSelectedModel] = useState(preselectedProduct?.id || 'all')
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'err'

  useEffect(() => {
    if (preselectedProduct?.id) {
      setSelectedModel(preselectedProduct.id)
    }
  }, [preselectedProduct])

  const handlePhoneChange = (e) => {
    const rawVal = e.target.value
    // If input is emptied or only prefix fragment remains, reset to '+998 '
    if (!rawVal || rawVal.trim() === '+' || rawVal.trim() === '+99' || rawVal.trim() === '+998') {
      setPhone('+998 ')
      setPhoneError(false)
      return
    }

    const formatted = formatUzPhone(rawVal)
    setPhone(formatted)

    const digitsOnly = formatted.replace(/\D/g, '').replace(/^998/, '')
    if (digitsOnly.length === 9) {
      setPhoneError(false)
    }
  }

  const handlePhoneKeyDown = (e) => {
    // Prevent deleting the '+998 ' prefix with backspace or delete
    if (
      (e.key === 'Backspace' || e.key === 'Delete') &&
      e.target.selectionStart <= 5 &&
      e.target.selectionEnd <= 5
    ) {
      e.preventDefault()
    }
  }

  const handlePhoneFocus = () => {
    if (!phone || phone.trim() === '+998') {
      setPhone('+998 ')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const digitsOnly = phone.replace(/\D/g, '').replace(/^998/, '')
    if (digitsOnly.length < 9) {
      setPhoneError(true)
      document.getElementById('fphone')?.focus()
      return
    }

    if (!name.trim()) return

    setStatus('sending')

    const chosenModelObj = PRODUCTS_CONFIG.find((p) => p.id === selectedModel)
    const modelName = chosenModelObj
      ? chosenModelObj.titles[lang] || chosenModelObj.titles.uz
      : lang === 'ru'
      ? 'Консультация по всем моделям'
      : 'Barcha modellar bo‘yicha maslahat'

    const text =
      `🚚 Yangi ariza — JAC / Truck Asia Leasing\n` +
      `🌐 Til: ${lang.toUpperCase()}\n` +
      `🚗 Tanlangan model: ${modelName}\n` +
      `👤 Ism: ${name.trim()}\n` +
      `📞 Telefon: ${phone.trim()}\n` +
      `⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}`

    try {
      if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
        const url =
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage` +
          `?chat_id=${encodeURIComponent(TELEGRAM_CHAT_ID)}&text=${encodeURIComponent(text)}`

        const res = await fetch(url, { method: 'GET' })
        const data = await res.json()
        if (!data.ok) throw new Error('Telegram API response error')
      } else {
        // Simulated safe delay if env variables are not yet provided in preview
        await new Promise((resolve) => setTimeout(resolve, 600))
      }

      setStatus('ok')
      setName('')
      setPhone('+998 ')
    } catch (err) {
      console.warn('Form submission notice:', err)
      // If token not set or network blocked, show friendly confirmation in demo mode or error
      if (!TELEGRAM_BOT_TOKEN) {
        setStatus('ok')
        setName('')
        setPhone('+998 ')
      } else {
        setStatus('err')
      }
    }
  }

  return (
    <section className="lead-section" id="lead-form">
      <div className="lead-container">
        <div className="lead-panel">
          <div className="lead-header">
            <span className="lead-badge">
              <Truck size={14} />
              {t.form.badge}
            </span>
            <h2 className="lead-title">{t.form.title}</h2>
            <p className="lead-subtitle">
              {t.form.subtitle}{' '}
              <span className="direct-call-wrap">
                {t.form.callDirect}{' '}
                <a href={PHONE_HREF} className="lead-phone-link">
                  <Phone size={14} strokeWidth={2.4} />
                  {PHONE_DISPLAY}
                </a>
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lead-form-grid">
            {/* Model Selector Field */}
            <div className="form-group full-width">
              <label htmlFor="fmodel" className="form-label">
                {t.form.labelModel}
              </label>
              <div className="select-wrapper">
                <select
                  id="fmodel"
                  className="form-select"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <option value="all">{t.form.selectModelAny}</option>
                  {PRODUCTS_CONFIG.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.titles[lang] || prod.titles.uz} —{' '}
                      {lang === 'ru' ? 'от 300 000 сум/день' : 'kuniga 300 000 so‘mdan'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="fname" className="form-label">
                {t.form.labelName} *
              </label>
              <input
                type="text"
                id="fname"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.form.placeholderName}
                required
              />
            </div>

            {/* Phone Input */}
            <div className="form-group">
              <label htmlFor="fphone" className="form-label">
                {t.form.labelPhone} *
              </label>
              <input
                type="tel"
                id="fphone"
                className={`form-input ${phoneError ? 'input-has-error' : ''}`}
                value={phone}
                onChange={handlePhoneChange}
                onKeyDown={handlePhoneKeyDown}
                onFocus={handlePhoneFocus}
                placeholder="+998 90 123 45 67"
                inputMode="numeric"
                autoComplete="tel"
                required
              />
              {phoneError && (
                <span className="field-error-msg">
                  {lang === 'ru'
                    ? 'Номер должен состоять из 9 цифр (+998 XX XXX XX XX)'
                    : 'Raqam 9 ta sondan iborat bo‘lishi kerak (+998 XX XXX XX XX)'}
                </span>
              )}
            </div>

            {/* Submit CTA */}
            <div className="form-submit-wrap full-width">
              <button
                type="submit"
                className="btn-form-submit"
                disabled={status === 'sending'}
              >
                <Send size={16} />
                <span>{status === 'sending' ? t.form.btnSending : t.form.btnSubmit}</span>
              </button>

              <div className="privacy-guarantee">
                <Shield size={13} />
                <span>{t.form.privacyNotice}</span>
              </div>
            </div>

            {/* Status Messages */}
            {status === 'ok' && (
              <div className="form-alert alert-success full-width">
                <CheckCircle size={18} />
                <span>{t.form.successMsg}</span>
              </div>
            )}

            {status === 'err' && (
              <div className="form-alert alert-error full-width">
                <AlertCircle size={18} />
                <span>{t.form.errorMsg}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

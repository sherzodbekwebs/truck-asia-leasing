import { Phone, Globe } from 'lucide-react'

const PHONE_DISPLAY = '+998 71 202 32 23'
const PHONE_HREF = 'tel:+998712023223'

export default function Header({ lang, setLang, t }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-utility-bar">
        <div className="utility-container">
          <div className="utility-contact">
            <span className="utility-label">{t.topBar.callCenter}</span>
            <a href={PHONE_HREF} className="utility-phone">
              <Phone size={13} strokeWidth={2.4} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="utility-right">
            {/* Language Switcher */}
            <div className="lang-switcher" role="group" aria-label="Language selection">
              <Globe size={13} className="lang-icon" />
              <button
                type="button"
                className={`lang-btn ${lang === 'uz' ? 'active' : ''}`}
                onClick={() => setLang('uz')}
              >
                O‘Z
              </button>
              <span className="lang-sep">/</span>
              <button
                type="button"
                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
              >
                РУ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="brand-group">
            {/* JAC Logo */}
            <div className="brand-item jac-brand">
              <img src="/jac.png" alt="JAC Motors" className="logo-img jac-logo" />
            </div>

            <div className="brand-separator" />

            {/* Truck Asia Leasing Logo */}
            <div className="brand-item tal-brand">
              <img src="/tal_top.png" alt="Truck Asia Leasing" className="logo-img tal-logo" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="header-nav">
            <button type="button" className="nav-link" onClick={() => scrollTo('catalog-section')}>
              {t.header.modelsLink}
            </button>
            <button type="button" className="nav-link" onClick={() => scrollTo('advantages-section')}>
              {t.header.termsLink}
            </button>
            <button type="button" className="nav-link" onClick={() => scrollTo('lead-form')}>
              {t.header.contactBtn}
            </button>
            <button
              type="button"
              className="header-cta-btn"
              onClick={() => {
                scrollTo('lead-form')
                document.getElementById('fname')?.focus()
              }}
            >
              <Phone size={15} />
              <span>{PHONE_DISPLAY}</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export { PHONE_DISPLAY, PHONE_HREF }

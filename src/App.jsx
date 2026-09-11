import { useState, useEffect } from 'react'
import Header, { PHONE_DISPLAY, PHONE_HREF } from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import Modal from './components/Modal.jsx'
import LeadForm from './components/LeadForm.jsx'
import { translations } from './translations.js'
import { PRODUCTS_CONFIG } from './data/products.js'
import { ArrowRight, CheckCircle2, Phone, Sparkles } from 'lucide-react'
import './App.css'

export default function App() {
  // Default language is 'uz', with persistence in localStorage
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('tal_lang') || 'uz'
  })

  const [modal, setModal] = useState(null) // null | { type: 'specs' | 'lease', product }
  const [preselectedProduct, setPreselectedProduct] = useState(null)

  useEffect(() => {
    localStorage.setItem('tal_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang] || translations.uz

  const closeModal = () => setModal(null)

  const handleSelectForOrder = (product) => {
    setPreselectedProduct(product)
    if (modal) closeModal()
    requestAnimationFrame(() => {
      const formEl = document.getElementById('lead-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setTimeout(() => {
          document.getElementById('fname')?.focus()
        }, 400)
      }
    })
  }

  return (
    <div className="app-layout">
      {/* Top bar & Navigation Header */}
      <Header lang={lang} setLang={setLang} t={t} />

      <main className="main-content">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-badge-wrap">
              <span className="hero-badge">
                <Sparkles size={14} className="badge-sparkle" />
                {t.hero.badge}
              </span>
            </div>

            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={() => {
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
                  document.getElementById('fname')?.focus()
                }}
              >
                <span>{t.hero.ctaButton}</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="btn-hero-secondary"
                onClick={() => {
                  document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>{t.hero.viewModels}</span>
              </button>
            </div>

            {/* Hero Key Advantages Bento Grid */}
            <div className="advantages-grid" id="advantages-section">
              {t.hero.advantages.map((item, idx) => (
                <div className={`advantage-card card-accent-${idx + 1}`} key={item.title}>
                  <div className="adv-number-wrap">
                    <span className="adv-number">{item.num}</span>
                    {item.unit && <span className="adv-unit">{item.unit}</span>}
                  </div>
                  <h3 className="adv-title">{item.title}</h3>
                  <p className="adv-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATALOG SECTION */}
        <section className="catalog-section" id="catalog-section">
          <div className="catalog-container">
            <div className="section-header-center">
              <span className="section-pill">{lang === 'ru' ? 'Модельный ряд' : 'Modellar qatori'}</span>
              <h2 className="section-title">{t.catalog.heading}</h2>
              <p className="section-subtitle">{t.catalog.subheading}</p>
            </div>

            <div className="cards-grid">
              {PRODUCTS_CONFIG.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  lang={lang}
                  t={t}
                  onOpenSpec={(p) => setModal({ type: 'specs', product: p })}
                  onOpenLease={(p) => setModal({ type: 'lease', product: p })}
                  onSelectForOrder={handleSelectForOrder}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LEAD FORM APPLICATION SECTION */}
        <LeadForm lang={lang} t={t} preselectedProduct={preselectedProduct} />
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-top-row">
            <div className="footer-brand">
              <div className="footer-logos">
                <img src="/jac.png" alt="JAC Motors" className="footer-logo jac" />
                <div className="footer-logo-divider" />
                <img src="/tal.png" alt="Truck Asia" className="footer-logo tal" />
              </div>
            </div>

            <div className="footer-contact-block">
              <span className="footer-contact-title">{t.footer.callCenter}</span>
              <a href={PHONE_HREF} className="footer-phone">
                <Phone size={16} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="footer-bottom-row">
            <p className="footer-legal">
              &copy; {new Date().getFullYear()} Truck Asia &middot; {t.footer.allRights}
            </p>
            <div className="footer-tags">
              <span className="legal-tag">
                <CheckCircle2 size={13} />
                {lang === 'ru' ? 'Официальная гарантия' : 'Rasmiy kafolat'}
              </span>
              <span className="legal-tag">
                <CheckCircle2 size={13} />
                {lang === 'ru' ? 'Сервисная поддержка' : 'Servis xizmati'}
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ENLARGED & MODERN MODAL */}
      {modal && (
        <Modal
          type={modal.type}
          product={modal.product}
          lang={lang}
          t={t}
          onClose={closeModal}
          onOrder={handleSelectForOrder}
        />
      )}
    </div>
  )
}

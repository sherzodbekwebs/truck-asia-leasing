import { useEffect, useState } from 'react'
import {
  X,
  Phone,
  CheckCircle2,
  FileSpreadsheet,
  Calculator,
  Layers,
  Gauge,
  Weight,
  ShieldCheck,
  Calendar,
  CreditCard,
  Building2,
  ArrowRight,
} from 'lucide-react'
import { formatSom, getLeasingDetails } from '../data/products.js'
import { PHONE_DISPLAY, PHONE_HREF } from './Header.jsx'

export default function Modal({ type, product, lang = 'uz', t, onClose, onOrder }) {
  const [activeTab, setActiveTab] = useState(type === 'lease' ? 'lease' : 'specs')

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!product) return null

  const title = product.titles[lang] || product.titles.uz
  const tag = product.tag[lang] || product.tag.uz
  const sections = product.sections[lang] || product.sections.uz
  const leasing = getLeasingDetails(product, lang)
  const downPayment = Math.round(product.price * product.downPaymentRate)

  const groupIcons = [
    <Layers size={18} key="layers" className="group-icon" />,
    <Gauge size={18} key="gauge" className="group-icon" />,
    <Weight size={18} key="weight" className="group-icon" />,
    <ShieldCheck size={18} key="shield" className="group-icon" />,
  ]

  return (
    <div
      className="modal-overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-container-large">
        {/* Modal Top Header Bar */}
        <div className="modal-header-bar">
          <div className="modal-header-title-group">
            <span className="modal-badge">{tag}</span>
            <h2 className="modal-title">{title}</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label={t.specsModal.closeBtn}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <FileSpreadsheet size={16} />
            <span>{t.specsModal.tabSpecs}</span>
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'lease' ? 'active' : ''}`}
            onClick={() => setActiveTab('lease')}
          >
            <Calculator size={16} />
            <span>{t.specsModal.tabLeasing}</span>
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="modal-scroll-body">
          {/* Quick Vehicle Summary Banner */}
          <div className="modal-vehicle-banner">
            <div className="banner-image-box">
              <img src={product.image} alt={title} className="banner-img" />
            </div>

            <div className="banner-info-box">
              <div className="banner-price-lead">
                <span className="banner-label">{t.specsModal.priceTitle}</span>
                <span className="banner-price">{formatSom(product.price, lang)}</span>
              </div>

              <div className="banner-stats-row">
                <div className="stat-pill">
                  <span className="pill-sub">{t.specsModal.downPaymentTitle}</span>
                  <span className="pill-val">{formatSom(downPayment, lang)}</span>
                </div>
                <div className="stat-pill highlight">
                  <span className="pill-sub">{t.specsModal.dailyPaymentTitle}</span>
                  <span className="pill-val">
                    {formatSom(product.dailyPayment, lang)}
                    <small>/{lang === 'ru' ? 'день' : 'kun'}</small>
                  </span>
                </div>
              </div>

              <div className="banner-cta-row">
                <button
                  type="button"
                  className="modal-primary-btn"
                  onClick={() => onOrder(product)}
                >
                  <span>{t.specsModal.orderModalBtn}</span>
                  <ArrowRight size={16} />
                </button>
                <a href={PHONE_HREF} className="modal-phone-btn">
                  <Phone size={15} />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>

          {/* TAB 1: FULL DETAILED TECHNICAL SPECS */}
          {activeTab === 'specs' && (
            <div className="specs-sections-container">
              <div className="specs-section-grid">
                {sections.map((section, idx) => (
                  <div className="spec-category-card" key={section.group}>
                    <div className="category-header">
                      {groupIcons[idx % groupIcons.length]}
                      <h3>{section.group}</h3>
                    </div>
                    <div className="category-table">
                      {section.items.map((row) => (
                        <div className="table-row" key={row.label}>
                          <span className="row-key">{row.label}</span>
                          <span className="row-val">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: DETAILED LEASING CALCULATOR & CONDITIONS */}
          {activeTab === 'lease' && (
            <div className="lease-sections-container">
              {/* Highlight Cards */}
              <div className="lease-cards-grid">
                <div className="lease-stat-card">
                  <CreditCard className="card-ico" size={22} />
                  <span className="card-sub">{t.leaseModal.downPayment}</span>
                  <span className="card-num">{formatSom(downPayment, lang)}</span>
                  <span className="card-note">50% {lang === 'ru' ? 'от стоимости' : 'avans qiymati'}</span>
                </div>

                <div className="lease-stat-card highlight">
                  <Calculator className="card-ico" size={22} />
                  <span className="card-sub">{t.leaseModal.daily}</span>
                  <span className="card-num accent">
                    {formatSom(product.dailyPayment, lang)}
                  </span>
                  <span className="card-note">{lang === 'ru' ? 'от 300 000 сум в день' : 'kuniga to‘lov'}</span>
                </div>

                <div className="lease-stat-card">
                  <Calendar className="card-ico" size={22} />
                  <span className="card-sub">{t.leaseModal.period}</span>
                  <span className="card-num">{product.termMonths} {lang === 'ru' ? 'месяцев' : 'oy'}</span>
                  <span className="card-note">{lang === 'ru' ? 'Удобный срок выплаты' : 'Qulay to‘lov muddati'}</span>
                </div>
              </div>

              {/* Detailed Breakdown List */}
              <div className="lease-details-card">
                <h3 className="section-subtitle">
                  <Building2 size={18} />
                  {t.leaseModal.title}
                </h3>

                <div className="lease-table">
                  {leasing.items.map((item) => (
                    <div className="lease-row" key={item.label}>
                      <span className="lease-key">{item.label}</span>
                      <span className="lease-val">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="lease-doc-box">
                  <div className="doc-box-header">
                    <CheckCircle2 size={16} className="doc-icon" />
                    <strong>{t.leaseModal.documents}</strong>
                  </div>
                  <p className="doc-box-text">{t.leaseModal.docsDesc}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="modal-footer-bar">
          <div className="footer-callout">
            <Phone size={14} />
            <span>
              {lang === 'ru' ? 'Консультация эксперта по рассрочке (0%):' : 'Muddatli to‘lov (0%) bo‘yicha bepul maslahat:'}{' '}
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </span>
          </div>

          <div className="footer-actions">
            <button type="button" className="btn-modal-cancel" onClick={onClose}>
              {t.specsModal.closeBtn}
            </button>
            <button
              type="button"
              className="btn-modal-submit"
              onClick={() => onOrder(product)}
            >
              {t.specsModal.orderModalBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

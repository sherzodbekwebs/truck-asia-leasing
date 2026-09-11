import { ArrowUpRight, Calculator, FileText, CheckCircle2 } from 'lucide-react'
import SpecIcon from './SpecIcon.jsx'
import { formatSom } from '../data/products.js'

export default function ProductCard({ product, lang, t, onOpenSpec, onOpenLease, onSelectForOrder }) {
  const title = product.titles[lang] || product.titles.uz
  const tag = product.tag[lang] || product.tag.uz
  const shortDesc = product.shortDesc[lang] || product.shortDesc.uz
  const quickSpecs = product.quickSpecs[lang] || product.quickSpecs.uz
  const downPayment = Math.round(product.price * product.downPaymentRate)

  return (
    <article className="product-card" id={`model-${product.id}`}>
      {/* Card Header & Media */}
      <div className="product-media">
        <div className="product-badges">
          <span className="badge-tag">{tag}</span>
          <span className="badge-highlight">
            <CheckCircle2 size={13} />
            {lang === 'ru' ? '50% Аванс' : '50% Avans'}
          </span>
        </div>

        <img
          src={product.image}
          alt={title}
          className="product-img"
          loading="lazy"
        />

        <div className="media-gradient" />
      </div>

      {/* Card Content Body */}
      <div className="product-body">
        <div className="product-header-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-desc">{shortDesc}</p>
        </div>

        {/* Quick Specs Grid */}
        <div className="specs-grid">
          {quickSpecs.map((spec) => (
            <div className="spec-item" key={spec.label}>
              <div className="spec-icon-wrap">
                <SpecIcon name={spec.icon} size={16} />
              </div>
              <div className="spec-details">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leasing Price Box */}
        <div className="product-price-box">
          <div className="price-row-top">
            <span className="price-caption">{t.catalog.priceFrom}</span>
            <span className="main-price">{formatSom(product.price, lang)}</span>
          </div>

          <div className="price-calculation-grid">
            <div className="calc-col">
              <span className="calc-sub">{t.catalog.advancePayment}</span>
              <span className="calc-val">{formatSom(downPayment, lang)}</span>
            </div>
            <div className="calc-col calc-highlight">
              <span className="calc-sub">{t.catalog.dailyFrom}</span>
              <span className="calc-val accent-val">
                {formatSom(product.dailyPayment, lang)}
                <small className="unit">/{lang === 'ru' ? 'день' : 'kun'}</small>
              </span>
            </div>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="product-actions">
          <button
            type="button"
            className="btn-action btn-outline"
            onClick={() => onOpenSpec(product)}
            title={t.catalog.btnDetails}
          >
            <FileText size={15} />
            <span>{t.catalog.btnDetails}</span>
            <ArrowUpRight size={14} className="action-arrow" />
          </button>

          <button
            type="button"
            className="btn-action btn-secondary"
            onClick={() => onOpenLease(product)}
            title={t.catalog.btnLease}
          >
            <Calculator size={15} />
            <span>{t.catalog.btnLease}</span>
          </button>
        </div>

        {/* Primary Order CTA */}
        <button
          type="button"
          className="btn-order-full"
          onClick={() => onSelectForOrder(product)}
        >
          {t.catalog.btnOrder}
        </button>
      </div>
    </article>
  )
}

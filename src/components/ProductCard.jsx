import { ArrowUpRight } from 'lucide-react'
import SpecIcon from './SpecIcon.jsx'
import { formatSom } from '../data/products.js'

export default function ProductCard({ product, onOpenSpec, onOpenLease }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={product.image} alt={product.fullTitle} className="card-img" loading="lazy" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{product.fullTitle}</h3>

        <div className="spec-grid">
          {product.quickSpecs.map((spec) => (
            <div className="spec-item" key={spec.label}>
              <span className="spec-icon">
                <SpecIcon name={spec.icon} />
              </span>
              <span className="spec-text">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="card-footer">
          <span className="card-price">{formatSom(product.price)}</span>
          <div className="card-links">
            <button className="link-btn" onClick={() => onOpenSpec(product)}>
              Batafsil <ArrowUpRight size={15} strokeWidth={2.4} />
            </button>
            <button className="link-btn" onClick={() => onOpenLease(product)}>
              Leasing shartlari <ArrowUpRight size={15} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

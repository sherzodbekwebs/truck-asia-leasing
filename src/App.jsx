import { useState } from 'react'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import Modal from './components/Modal.jsx'
import LeadForm from './components/LeadForm.jsx'
import { PHONE_DISPLAY, PHONE_HREF } from './components/Header.jsx'
import { products } from './data/products.js'
import './App.css'

export default function App() {
  const [modal, setModal] = useState(null) // { type: 'spec' | 'lease', product }

  const closeModal = () => setModal(null)

  const goToForm = () => {
    closeModal()
    requestAnimationFrame(() => {
      document.getElementById('fname')?.focus()
      document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  return (
    <>
      <Header />

      <section className="intro">
        <h1>JAC texnikasini qulay lizing shartlarida oling</h1>
        <p>
          Truck Asia Leasing orqali rasmiy JAC texnikasini 50% avans to'lovi va
          qolgan qismini kuniga 300 000 so'mdan 13 oy davomida to'lash imkoniyati bilan
          rasmiylashtiring.
        </p>
      </section>

      <section className="cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenSpec={(p) => setModal({ type: 'spec', product: p })}
            onOpenLease={(p) => setModal({ type: 'lease', product: p })}
          />
        ))}
      </section>

      <LeadForm />

      <footer>
        JAC &middot; Truck Asia Leasing — rasmiy diler va lizing xizmati
        <br />
        Call-markaz: <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
      </footer>

      {modal?.type === 'spec' && (
        <Modal title={modal.product.fullTitle} subtitle="To'liq texnik tavsif" onClose={closeModal}>
          <table className="spec-table">
            <tbody>
              {modal.product.quickSpecs.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
              {modal.product.extraSpecs.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal>
      )}

      {modal?.type === 'lease' && (
        <Modal
          title={`${modal.product.fullTitle} — leasing shartlari`}
          subtitle="Truck Asia Leasing orqali rasmiylashtirish"
          onClose={closeModal}
        >
          <ul className="terms-list">
            {modal.product.leasing.items.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <span>{row.value}</span>
              </li>
            ))}
          </ul>
          <div className="cta-row">
            <button className="btn" onClick={goToForm}>
              Ariza qoldirish
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}

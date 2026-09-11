import { Phone } from 'lucide-react'
import jac from '../../public/jac.png'
import tal from '../../public/tal.png' // TAL logotipi uchun rasm import qilindi

const PHONE_DISPLAY = '+998 71 202 32 23'
const PHONE_HREF = 'tel:+998712023223'

export default function Header() {
  return (
    <>
      <div className="contact-bar">
        <div className="contact-bar-inner">
          <span className="contact-label">Call-markaz</span>
          <a href={PHONE_HREF} className="contact-phone">
            <Phone size={14} strokeWidth={2.4} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header className="top">
        <div className="top-inner">
          <div className="brand jac">
            <div className="name">
              <img
                style={{ width: '100%', height: '70px' }}
                src={jac}
                alt="JAC"
              />
            </div>
          </div>

          <div className="divider-x" />

          <div className="brand tal">
            <div className="name">
              <img
                style={{ width: '100%', height: '70px' }}
                src={tal}
                alt="Truck Asia Leasing"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export { PHONE_DISPLAY, PHONE_HREF }
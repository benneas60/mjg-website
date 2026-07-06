import { NavLink, Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { business } from '../../data/business'

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className="absolute inset-0 bg-charcoal-950/50"
      />
      <nav
        className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-white shadow-2xl flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile"
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => {
                  onClose()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={({ isActive }) =>
                  `block py-3.5 border-b border-charcoal-950/10 font-heading font-bold text-lg uppercase tracking-wide ${
                    isActive ? 'text-forest' : 'text-charcoal-950'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <Link to="/quote" onClick={onClose} className="btn-primary w-full">
            Get Free Quote
          </Link>
          <a href={business.phoneHref} className="btn-secondary w-full">
            <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            {business.phone}
          </a>
        </div>
      </nav>
    </div>
  )
}

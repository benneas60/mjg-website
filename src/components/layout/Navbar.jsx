import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import { asset } from '../../lib/asset'
import MobileMenu from './MobileMenu'
import { navLinks } from '../../data/navigation'
import { business } from '../../data/business'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-nav' : 'bg-white'
        }`}
      >
        <Container className="flex items-center justify-between py-2 md:py-3 gap-6">
          {/* Left cluster: logo + page links */}
          <div className="flex items-center gap-8 min-w-0">
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-3 shrink-0"
              aria-label="MJG Landscaping Design & Hardscaping home"
            >
              <img
                src={asset("/logo/mjg-logo-mark.png")}
                alt="MJG Landscaping Design & Hardscaping logo"
                className="h-16 w-auto md:h-20"
              />
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="font-heading font-extrabold text-lg text-charcoal-950">MJG</span>
                <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-forest">
                  Landscaping Design &amp; Hardscaping
                </span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `font-heading text-sm font-semibold uppercase tracking-wide link-underline whitespace-nowrap ${
                      isActive ? 'text-forest' : 'text-charcoal-950 hover:text-forest'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right cluster: call + quote CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-md bg-charcoal-950 text-white px-4 py-2.5 font-heading font-bold text-sm hover:bg-forest transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              {business.phone}
            </a>
            <Link to="/quote" onClick={scrollToTop} className="btn-primary whitespace-nowrap">
              Get Free Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-charcoal-950"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

import { Link } from 'react-router-dom'
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import Container from '../ui/Container'
import { asset } from '../../lib/asset'
import { navLinks } from '../../data/navigation'
import { business } from '../../data/business'
import { services } from '../../data/services'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <Container className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-4">
            <img
              src={asset("/logo/mjg-logo-mark.png")}
              alt="MJG Landscaping Design & Hardscaping logo"
              className="h-16 w-auto bg-white rounded-md p-1.5"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-heading font-extrabold text-base">MJG</span>
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-leaf">
                Landscaping Design &amp; Hardscaping
              </span>
            </span>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed">{business.tagline}</p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={business.social.facebook}
              aria-label="MJG Landscaping on Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors"
            >
              <Facebook className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href={business.social.instagram}
              aria-label="MJG Landscaping on Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-leaf mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/quote"
                onClick={scrollToTop}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-leaf mb-4">Services</h3>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-leaf mb-4">Get In Touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-leaf shrink-0" strokeWidth={2} />
              <a href={business.phoneHref} className="hover:text-white transition-colors">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-leaf shrink-0" strokeWidth={2} />
              <span>Serving the {business.serviceArea} area</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p>Locally owned &amp; operated, based in {business.city}, {business.stateFull}.</p>
        </Container>
      </div>
    </footer>
  )
}

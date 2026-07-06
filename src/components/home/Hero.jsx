import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Container from '../ui/Container'
import Badge from '../ui/Badge'
import { asset } from '../../lib/asset'
import { business } from '../../data/business'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo: drop /public/images/hero/featured-job.jpg in to replace the placeholder */}
      <div
        className="absolute inset-0 bg-forest-800 bg-paver-pattern bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(180deg, rgba(18,37,13,0.55) 0%, rgba(18,37,13,0.82) 100%), url(${asset('/images/hero/featured-job.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      <Container className="relative py-24 md:py-36 flex flex-col">
        {/* Logo + business name on the front page hero */}
        <div className="flex items-center gap-4 mb-8 animate-fadeUp">
          <img
            src={asset("/logo/mjg-logo-mark.png")}
            alt="MJG Landscaping Design & Hardscaping logo"
            className="h-20 md:h-24 w-auto bg-white rounded-lg p-2 shadow-card"
          />
          <div className="leading-tight">
            <p className="font-heading font-extrabold text-xl md:text-2xl text-white">
              MJG Landscaping
            </p>
            <p className="font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-leaf-200">
              Design &amp; Hardscaping
            </p>
          </div>
        </div>

        <div className="mb-7 animate-fadeUp [animation-delay:80ms]">
          <Badge>Proudly serving the South Jersey area</Badge>
        </div>

        <h1 className="text-display-lg text-white max-w-3xl mb-6 animate-fadeUp [animation-delay:140ms]">
          {business.tagline}
        </h1>

        <p className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed animate-fadeUp [animation-delay:200ms]">
          Professional landscaping and hardscaping services throughout South Jersey.
        </p>

        <div className="flex flex-wrap gap-4 animate-fadeUp [animation-delay:260ms]">
          <Link to="/quote" className="btn-accent">
            Get Free Quote
          </Link>
          <a href={business.phoneHref} className="btn-ghost-light">
            <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            Call Now: {business.phone}
          </a>
        </div>
      </Container>
    </section>
  )
}

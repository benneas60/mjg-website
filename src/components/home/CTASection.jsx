import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Container from '../ui/Container'
import { business } from '../../data/business'

export default function CTASection() {
  return (
    <section className="section bg-forest-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-paver-pattern opacity-40" aria-hidden="true" />
      <Container className="relative flex flex-col items-center text-center gap-6">
        <p className="font-accent text-2xl md:text-3xl text-leaf-200">Ready when you are.</p>
        <h2 className="text-display-sm text-white max-w-xl">
          Get a free estimate for your next landscaping or hardscaping project.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link to="/quote" className="btn-accent">
            Get Free Quote
          </Link>
          <a href={business.phoneHref} className="btn-ghost-light">
            <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            Call {business.phone}
          </a>
        </div>
      </Container>
    </section>
  )
}

import { Phone } from 'lucide-react'
import { business } from '../../data/business'

export default function FloatingCallButton() {
  return (
    <a
      href={business.phoneHref}
      className="lg:hidden fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-forest text-white shadow-card-hover active:scale-95 transition-transform"
      aria-label={`Call MJG Landscaping at ${business.phone}`}
    >
      <Phone className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
    </a>
  )
}

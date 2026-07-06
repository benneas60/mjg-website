import { Phone, MapPin } from 'lucide-react'
import { business } from '../../data/business'

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-forest text-white flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-charcoal-950 mb-1">
            Phone
          </h3>
          <a href={business.phoneHref} className="text-forest font-semibold link-underline">
            {business.phone}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-forest text-white flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-charcoal-950 mb-1">
            Service Area
          </h3>
          <p className="text-charcoal/75 text-sm">
            Serving the {business.serviceArea} area, based in {business.city}, {business.state}
          </p>
        </div>
      </div>
    </div>
  )
}

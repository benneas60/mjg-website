import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { asset } from '../../lib/asset'
import { galleryItems } from '../../data/gallery'

export default function GalleryPreview() {
  const items = galleryItems.slice(0, 6)

  return (
    <section className="section bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="Recent work"
            title="See the transformation"
            description="A look at landscaping, hardscaping, and seasonal projects completed across the South Jersey area."
          />
          <Link
            to="/gallery"
            className="hidden md:inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wide text-forest link-underline shrink-0"
          >
            View full gallery
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-forest-100">
              <img
                src={asset(item.src)}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link to="/gallery" className="btn-secondary w-full">
            View full gallery
          </Link>
        </div>
      </Container>
    </section>
  )
}

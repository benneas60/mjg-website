import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceIcon from '../components/ui/ServiceIcon'
import CTASection from '../components/home/CTASection'
import SEO from '../components/seo/SEO'
import { asset } from '../lib/asset'
import { services } from '../data/services'

export default function Services() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (!section) return
    const el = document.getElementById(section)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [searchParams])

  return (
    <>
      <SEO
        title="Landscaping & Hardscaping Services"
        description="Explore MJG Landscaping's services across South Jersey: landscaping, mowing, mulching, hardscaping, yard cleanups, and snow removal."
        path="/services"
      />

      <section className="bg-forest-900 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="Everything your property needs, every season"
            description="From spring planting to winter plowing, MJG handles the full calendar of landscaping and hardscaping work across South Jersey."
            light
          />
        </Container>
      </section>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-28 section ${index % 2 === 0 ? 'bg-white' : 'bg-forest-50/60'}`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-forest text-white flex items-center justify-center mb-5">
                  <ServiceIcon name={service.icon} />
                </div>
                <h2 className="text-display-sm text-charcoal-950 mb-4">{service.name}</h2>
                <p className="text-charcoal/75 leading-relaxed mb-6">{service.description}</p>
                <Link to="/quote" className="btn-primary">
                  Get Free Quote
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {service.images.map((src, i) => (
                  <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-forest-100">
                    <img
                      src={asset(src)}
                      alt={`${service.name} example ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="section bg-white">
        <Container className="text-center flex flex-col items-center gap-5">
          <h2 className="text-display-sm text-charcoal-950 max-w-xl">
            Not sure which service fits your project?
          </h2>
          <p className="text-charcoal/75 max-w-lg">
            Tell us what you're working with and we'll recommend the right approach for your yard.
          </p>
          <Link to="/quote" className="btn-primary">
            Request a Free Quote
          </Link>
        </Container>
      </section>

      <CTASection />
    </>
  )
}

import { Link } from 'react-router-dom'
import { Home, MapPinned, ShieldCheck, Clock } from 'lucide-react'
import SEO from '../components/seo/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/home/CTASection'
import { business } from '../data/business'

const values = [
  { icon: Home, title: 'Locally owned', text: 'Based in South Jersey, not a franchise, not a call center.' },
  { icon: MapPinned, title: 'South Jersey roots', text: 'We know the soil, the seasons, and the neighborhoods we work in.' },
  { icon: ShieldCheck, title: 'Quality first', text: 'Every retaining wall, patio, and bed is built to actually hold up.' },
  { icon: Clock, title: 'Show up, follow through', text: 'Clear communication and a crew that shows up when they say they will.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About MJG Landscaping"
        description="MJG Landscaping Design & Hardscaping is a locally owned company serving the South Jersey area with quality landscaping and hardscaping work year-round."
        path="/about"
      />

      <section className="section bg-forest-900">
        <Container>
          <SectionHeading
            eyebrow="About MJG"
            title="Built on local roots and steady work"
            description={`${business.name} is a locally owned landscaping and hardscaping company serving property owners across ${business.serviceArea}, based in ${business.city}, ${business.stateFull}.`}
            light
          />
        </Container>
      </section>

      <section className="section bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Our approach</span>
            <h2 className="text-display-sm text-charcoal-950">
              Landscaping that fits how you actually live outside
            </h2>
            <p className="text-charcoal/75 leading-relaxed">
              We started MJG to bring dependable, detail-oriented landscaping and hardscaping to South
              Jersey homeowners, the kind of work that holds up through hot summers, wet falls, and
              icy winters. Whether it's a full landscape design, a new paver patio, or getting your
              driveway cleared before the morning commute, we treat every property like it's our own
              neighborhood.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Because we're local, we're also available year-round: spring and fall cleanups, mulching
              and garden bed work through the growing season, and snow removal, salting, and car
              clearing once winter hits.
            </p>
            <Link to="/quote" className="btn-primary w-fit mt-2">
              Request a Free Quote
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-forest-50/70 rounded-xl p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-forest text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-sm text-charcoal-950">{title}</h3>
                <p className="text-xs text-charcoal/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-forest-50/60">
        <Container className="text-center flex flex-col items-center gap-4">
          <span className="eyebrow">Service area</span>
          <h2 className="text-display-sm text-charcoal-950 max-w-xl">
            Proudly serving {business.serviceArea}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {business.serviceCounties.map((county) => (
              <span
                key={county}
                className="px-4 py-2 rounded-full bg-white border border-forest/20 text-sm font-heading font-semibold text-forest"
              >
                {county}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}

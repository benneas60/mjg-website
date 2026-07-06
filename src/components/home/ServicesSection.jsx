import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from './ServiceCard'
import { services } from '../../data/services'

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <Container>
        <div className="mb-14">
          <SectionHeading
            eyebrow="What we do"
            title="Year-round services"
            description="Landscaping, mowing, mulching, and hardscaping keep your property looking sharp through the growing season. When the leaves drop, we're there for yard cleanups, and when the snow flies, we handle removal so you're never stuck."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.slug} to={`/services?section=${service.slug}`} className="block h-full">
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

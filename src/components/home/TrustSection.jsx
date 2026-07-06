import { Home, MapPinned, ShieldCheck, Clock } from 'lucide-react'
import Container from '../ui/Container'

const pillars = [
  {
    icon: Home,
    title: 'Locally Owned',
    description: 'A South Jersey-based team, invested in the communities we work in.',
  },
  {
    icon: MapPinned,
    title: 'Serving South Jersey',
    description: 'From Gloucester County out across the wider South Jersey area.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Workmanship',
    description: 'Careful, detail-driven work on every landscaping and hardscaping project.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'On time, responsive, and easy to reach, season after season.',
  },
]

export default function TrustSection() {
  return (
    <section className="section bg-forest-50/60">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <div className="w-11 h-11 rounded-lg bg-forest text-white flex items-center justify-center">
                <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-base text-charcoal-950">{title}</h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

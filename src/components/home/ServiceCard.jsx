import ServiceIcon from '../ui/ServiceIcon'

export default function ServiceCard({ service, detailed = false }) {
  return (
    <div className="group h-full bg-white border border-charcoal-950/10 rounded-xl p-7 hover:shadow-card-hover hover:-translate-y-1 hover:border-forest/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-forest-50 flex items-center justify-center mb-5 text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-300">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="font-heading font-bold text-lg text-charcoal-950 mb-2">{service.name}</h3>
      <p className="text-sm text-charcoal/75 leading-relaxed">
        {detailed ? service.description : service.short}
      </p>
    </div>
  )
}

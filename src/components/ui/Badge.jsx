import { MapPin } from 'lucide-react'

export default function Badge({ children, icon = true, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-card text-sm font-heading font-semibold text-forest-700 ${className}`}
    >
      {icon && <MapPin className="w-4 h-4 text-leaf-600 shrink-0" strokeWidth={2} aria-hidden="true" />}
      <span>{children}</span>
    </div>
  )
}

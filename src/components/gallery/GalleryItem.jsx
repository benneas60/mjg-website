import { asset } from '../../lib/asset'

export default function GalleryItem({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-forest-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
    >
      <img
        src={asset(item.src)}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-300" />
      <span className="sr-only">{item.alt}</span>
    </button>
  )
}

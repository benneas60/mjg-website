import { useState } from 'react'
import { X } from 'lucide-react'
import { asset } from '../../lib/asset'
import GalleryItem from './GalleryItem'

export default function GalleryGrid({ items }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <GalleryItem key={item.id} item={item} onOpen={setActive} />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal-950/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/10"
            aria-label="Close preview"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh]">
            <img
              src={asset(active.src)}
              alt={active.alt}
              className="w-full max-h-[85vh] object-contain rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
    </>
  )
}

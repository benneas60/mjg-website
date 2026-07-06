// Icon names map to lucide-react components; see components/ui/ServiceIcon.jsx
// `images` holds exactly 3 photo slots shown in that service's section on
// the Services page. Drop real photos into public/images/services/<slug>/
// and update the paths below (no leading slash).
export const services = [
  {
    slug: 'landscaping',
    icon: 'Trees',
    name: 'Landscaping',
    short: 'Custom outdoor plans built around how you actually use your yard.',
    description:
      'Full landscape design and installation: plant selection, layout, and grading, tailored to your property and South Jersey\u2019s growing conditions.',
    images: [
      'images/services/landscaping/1.jpg',
      'images/services/landscaping/2.jpg',
      'images/services/landscaping/3.jpg',
    ],
  },
  {
    slug: 'mowing',
    icon: 'LawnMower',
    name: 'Mowing',
    short: 'Consistent, reliable lawn care through the growing season.',
    description:
      'Regular mowing and lawn maintenance to keep your property looking sharp week after week.',
    images: [
      'images/services/mowing/1.jpg',
      'images/services/mowing/2.jpg',
      'images/services/mowing/3.jpg',
    ],
  },
  {
    slug: 'mulching',
    icon: 'MulchMound',
    name: 'Mulching',
    short: 'Fresh mulch that protects beds and finishes the look.',
    description:
      'Professional mulch installation that locks in moisture, suppresses weeds, and gives every garden bed a clean, finished edge.',
    images: [
      'images/services/mulching/1.jpg',
      'images/services/mulching/2.jpg',
      'images/services/mulching/3.jpg',
    ],
  },
  {
    slug: 'hardscaping',
    icon: 'BrickWall',
    name: 'Hardscaping',
    short: 'Patios, walkways, and retaining walls built to last.',
    description:
      'Paver patios, walkways, retaining walls, and outdoor living spaces constructed with quality materials and precise craftsmanship.',
    images: [
      'images/services/hardscaping/1.jpg',
      'images/services/hardscaping/2.jpg',
      'images/services/hardscaping/3.jpg',
    ],
  },
  {
    slug: 'yard-cleanups',
    icon: 'Leaf',
    name: 'Yard Cleanups',
    short: 'Spring and fall cleanups to keep your property in shape.',
    description:
      'Debris removal, leaf cleanup, and seasonal tidying so your property looks its best year-round.',
    images: [
      'images/services/yard-cleanups/1.jpg',
      'images/services/yard-cleanups/2.jpg',
      'images/services/yard-cleanups/3.jpg',
    ],
  },
  {
    slug: 'snow-removal',
    icon: 'Snowflake',
    name: 'Snow Removal',
    short: 'Plowing, salting, and clearing all winter long.',
    description:
      'Dependable snow and ice management: plowing, pre-storm salting, and clearing snow off driveways, walkways, and vehicles.',
    images: [
      'images/services/snow-removal/1.jpg',
      'images/services/snow-removal/2.jpg',
      'images/services/snow-removal/3.jpg',
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)

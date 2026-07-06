import { Helmet } from 'react-helmet-async'
import { business } from '../../data/business'
import { services } from '../../data/services'

// LocalBusiness + Landscaping structured data for rich local search results.
export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: business.name,
    alternateName: business.shortName,
    description:
      'Landscaping and hardscaping company serving South Jersey, based in West Deptford, NJ, offering landscaping, mowing, mulching, hardscaping, yard cleanups, and snow removal.',
    image: `https://www.mjglandscapingnj.com/logo/mjg-logo-mark.png`,
    logo: `https://www.mjglandscapingnj.com/logo/mjg-logo-mark.png`,
    telephone: business.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'State', name: 'New Jersey' },
      ...business.serviceCounties.map((c) => ({ '@type': 'AdministrativeArea', name: c })),
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    sameAs: [business.social.facebook, business.social.instagram, business.social.google],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping & Hardscaping Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.short,
        },
      })),
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

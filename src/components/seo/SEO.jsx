import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.mjglandscapingnj.com'

export default function SEO({ title, description, path = '/', image = '/logo/mjg-logo-mark.png' }) {
  const fullTitle = title
    ? `${title} | MJG Landscaping Design & Hardscaping`
    : 'MJG Landscaping Design & Hardscaping | South Jersey'
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

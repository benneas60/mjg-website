import SEO from '../components/seo/SEO'
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema'
import Hero from '../components/home/Hero'
import ServicesSection from '../components/home/ServicesSection'
import TrustSection from '../components/home/TrustSection'
import GalleryPreview from '../components/home/GalleryPreview'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <SEO
        title="South Jersey Landscaping & Hardscaping"
        description="MJG Landscaping Design & Hardscaping serves the South Jersey area with landscaping, mowing, mulching, hardscaping, yard cleanups, and snow removal. Get a free quote today."
        path="/"
      />
      <LocalBusinessSchema />
      <Hero />
      <ServicesSection />
      <TrustSection />
      <GalleryPreview />
      <CTASection />
    </>
  )
}

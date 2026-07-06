import SEO from '../components/seo/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import GalleryGrid from '../components/gallery/GalleryGrid'
import CTASection from '../components/home/CTASection'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
  return (
    <>
      <SEO
        title="Project Gallery"
        description="Browse photos of MJG Landscaping's completed landscaping, hardscaping, mowing, mulching, yard cleanup, and snow removal projects across the South Jersey area."
        path="/gallery"
      />

      <section className="section bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="Project gallery"
            description="Real projects completed across the South Jersey area."
          />

          <div className="mt-10">
            <GalleryGrid items={galleryItems} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}

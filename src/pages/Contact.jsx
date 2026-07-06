import SEO from '../components/seo/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact MJG Landscaping Design & Hardscaping, serving the South Jersey area. Call 609-675-5587 or send a message for landscaping and hardscaping services."
        path="/contact"
      />

      <section className="section bg-forest-900">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="We'd love to hear about your project"
            description="Reach out by phone or send a message. We typically respond within one business day."
            light
          />
        </Container>
      </section>

      <section className="section bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3 bg-white border border-charcoal-950/10 rounded-2xl shadow-card p-6 sm:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}

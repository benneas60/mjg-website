import SEO from '../components/seo/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import QuoteForm from '../components/quote/QuoteForm'
import { business } from '../data/business'

export default function RequestQuote() {
  return (
    <>
      <SEO
        title="Request a Free Quote"
        description="Request a free landscaping or hardscaping estimate from MJG Landscaping, serving the South Jersey area. Tell us about your project and we'll schedule your estimate."
        path="/quote"
      />

      <section className="section bg-forest-900">
        <Container>
          <SectionHeading
            eyebrow="Request a quote"
            title="Get a free estimate"
            description="Tell us about your project and MJG will contact you to schedule a free estimate."
            light
          />
        </Container>
      </section>

      <section className="section bg-white">
        <Container className="max-w-3xl">
          <div className="bg-white border border-charcoal-950/10 rounded-2xl shadow-card p-6 sm:p-10">
            <QuoteForm />
          </div>
          <p className="text-center text-sm text-charcoal/60 mt-8">
            Prefer to talk it through? Call us at{' '}
            <a href={business.phoneHref} className="text-forest font-semibold link-underline">
              {business.phone}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  )
}

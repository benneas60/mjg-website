import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import Container from '../components/ui/Container'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="This page could not be found." path="/404" />
      <section className="section bg-white min-h-[60vh] flex items-center">
        <Container className="text-center flex flex-col items-center gap-5">
          <p className="font-accent text-3xl text-leaf-600">404</p>
          <h1 className="text-display-sm text-charcoal-950">This page wandered off the property.</h1>
          <p className="text-charcoal/70 max-w-md">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Container>
      </section>
    </>
  )
}

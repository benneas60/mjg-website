import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ensures every navigation between pages starts at the top of the page.
// Clicking a nav link while already on that page is handled separately by
// the onClick handlers in Navbar/MobileMenu, since the location doesn't
// change in that case and this effect wouldn't re-fire.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

import Navbar from './Navbar'
import Footer from './Footer'
import FloatingCallButton from './FloatingCallButton'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}

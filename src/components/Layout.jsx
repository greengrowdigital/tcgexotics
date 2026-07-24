import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import MobileCTABar from './MobileCTABar.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Loader from './Loader.jsx'

export default function Layout() {
  return (
    <div className="relative min-h-dvh bg-paper">
      <Loader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:ember focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main id="main" tabIndex={-1} className="relative z-[2] outline-none">
        <Outlet />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  )
}

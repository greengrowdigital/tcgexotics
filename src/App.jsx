import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { ReserveProvider } from './components/Reserve.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Fleet from './pages/Fleet.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ReserveProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </ReserveProvider>
    </MotionConfig>
  )
}

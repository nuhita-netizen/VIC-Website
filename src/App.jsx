import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SmoothScrollProvider from './components/SmoothScroll'
import Home from './pages/Home'
import {
  Countries,
  CountryDetail,
  Services,
  Exams,
  Universities,
  Scholarships,
  Blog,
  About,
  Contact,
  TestimonialsPage
} from './pages/StandardPages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-full flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:slug" element={<CountryDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScrollProvider>
  )
}

import { Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SmoothScrollProvider from './components/SmoothScroll'

// 5 Top-Level Pages Only
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // If navigating to an anchor hash (e.g. #test-preparation), let the anchor handler scroll
    if (hash) return
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

function LegacyCountryRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/destinations?country=${slug}`} replace />
}

function AnimatedRoutes() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full flex-grow"
      >
        <Routes location={location}>
          {/* Exactly 5 Top-Level Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Graceful 301/SPA Redirects for All Removed Routes */}
          <Route path="/countries" element={<Navigate to="/destinations" replace />} />
          <Route path="/countries/:slug" element={<LegacyCountryRedirect />} />
          <Route path="/exams" element={<Navigate to="/services#test-preparation" replace />} />
          <Route path="/universities" element={<Navigate to="/services#university-shortlisting" replace />} />
          <Route path="/scholarships" element={<Navigate to="/services#scholarships-funding" replace />} />
          <Route path="/testimonials" element={<Navigate to="/#reviews" replace />} />
          <Route path="/blog" element={<Navigate to="/" replace />} />

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
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

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { social, whatsappUrl } from '../config/social'

const links = [
  ['Home', '/'],
  ['Destinations', '/destinations'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Contact', '/contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-vic-purple/10 bg-white/95 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div
        className={`container-shell flex items-center justify-between gap-5 transition-all duration-300 ${
          scrolled ? 'h-[72px]' : 'h-[84px]'
        }`}
      >
        {/* Brand Logo & Tagline */}
        <Link
          to="/"
          className="flex shrink-0 items-center py-2 px-1 group"
          onClick={() => setOpen(false)}
          aria-label="VIC Overseas home"
        >
          <img
            src="/images/vic-logo.png"
            srcSet="/images/vic-logo.png 1x, /images/vic-logo@2x.png 2x"
            alt="VIC Overseas Education logo"
            className="h-[40px] sm:h-[48px] w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation (5 links + CTA) */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive ? 'text-vic-purple font-bold' : 'text-slate-700 hover:text-vic-purple hover:bg-vic-lilac/40'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 z-0 rounded-xl bg-vic-lilac/70 border border-vic-purple/15"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="ml-3"
          >
            <Link
              to="/contact#book-counselling"
              className="btn-primary inline-flex items-center gap-2 py-2.5 px-5 text-sm font-bold shadow-md hover:shadow-lg"
            >
              <span>Book Free Counselling</span>
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close main navigation' : 'Open main navigation'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-vic-purple/15 bg-white text-vic-purple transition hover:bg-vic-lilac lg:hidden focus:outline-none focus:ring-2 focus:ring-vic-purple/30"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-vic-purple/10 bg-white shadow-xl lg:hidden"
          >
            <div className="container-shell space-y-1 py-5">
              {links.map(([label, path], idx) => (
                <motion.div
                  key={path}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                >
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition ${
                        isActive
                          ? 'bg-vic-purple text-white'
                          : 'text-slate-800 hover:bg-vic-lilac hover:text-vic-purple'
                      }`
                    }
                  >
                    <span>{label}</span>
                    <ArrowRight size={16} className="opacity-70" />
                  </NavLink>
                </motion.div>
              ))}

              <div className="pt-4 pb-2">
                <Link
                  to="/contact#book-counselling"
                  onClick={() => setOpen(false)}
                  className="btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-center font-bold text-base"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Mobile Social Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-around">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition"
                >
                  <FaInstagram size={19} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

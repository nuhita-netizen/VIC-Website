import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { social, whatsappUrl } from '../config/social'

const links = [
  ['Home', '/'],
  ['Countries', '/countries'],
  ['Services', '/services'],
  ['Exams', '/exams'],
  ['Universities', '/universities'],
  ['Scholarships', '/scholarships'],
  ['Testimonials', '/testimonials'],
  ['Blog', '/blog'],
  ['About', '/about'],
  ['Contact', '/contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-vic-purple/10 bg-white/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div
        className={`container-shell flex items-center justify-between gap-5 transition-all duration-300 ${
          scrolled ? 'h-[72px]' : 'h-[86px]'
        }`}
      >
        <Link
          to="/"
          className="flex shrink-0 items-center py-1"
          onClick={() => setOpen(false)}
          aria-label="VIC Overseas home"
        >
          <img
            src="/images/vic-overseas-logo.png"
            alt="VIC International Consultants - VIC Overseas Education"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-12 max-w-[230px]' : 'h-14 sm:h-16 max-w-[270px] sm:max-w-[300px]'
            }`}
          />
        </Link>

        {/* Desktop Navigation with Animated Underline */}
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative py-1 text-xs font-bold transition-colors ${
                  isActive
                    ? 'text-vic-purple font-extrabold'
                    : 'text-[#514b68] hover:text-vic-purple'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{label}</span>
                  {isActive && !shouldReduceMotion && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-vic-purple"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive && shouldReduceMotion && (
                    <div className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-vic-purple" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Book Free Counselling Button */}
        <motion.a
          className="btn-primary group hidden xl:inline-flex"
          href="/#book-counselling"
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <span>Book Free Counselling</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-[3px]"
          />
        </motion.a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-vic-purple/15 text-vic-purple focus:outline-none focus:ring-2 focus:ring-vic-purple/30 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-vic-purple/10 bg-white shadow-soft xl:hidden"
          >
            <div className="container-shell py-4 grid gap-1 sm:grid-cols-2">
              {links.map(([label, to], i) => (
                <motion.div
                  key={to}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                >
                  <NavLink
                    onClick={() => setOpen(false)}
                    to={to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                        isActive
                          ? 'bg-vic-lilac text-vic-purple'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.03 }}
                className="mt-3 flex flex-col gap-4 border-t border-slate-100 pt-3 sm:col-span-2"
              >
                <motion.a
                  className="btn-primary group w-full text-center"
                  href="/#book-counselling"
                  onClick={() => setOpen(false)}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight
                    size={16}
                    className="inline transition-transform duration-200 group-hover:translate-x-[3px]"
                  />
                </motion.a>

                {/* Mobile Menu Social Icons */}
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5">
                  <span className="text-xs font-bold text-slate-500">Connect with us:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open VIC Overseas on WhatsApp"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-vic-purple/20 bg-white text-[#25D366] transition hover:scale-110 hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-vic-purple/40"
                    >
                      <FaWhatsapp size={19} />
                    </a>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open VIC Overseas on Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-vic-purple/20 bg-white text-[#E4405F] transition hover:scale-110 hover:bg-[#E4405F] hover:text-white focus:outline-none focus:ring-2 focus:ring-vic-purple/40"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open VIC Overseas on LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-vic-purple/20 bg-white text-[#0A66C2] transition hover:scale-110 hover:bg-[#0A66C2] hover:text-white focus:outline-none focus:ring-2 focus:ring-vic-purple/40"
                    >
                      <FaLinkedinIn size={17} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

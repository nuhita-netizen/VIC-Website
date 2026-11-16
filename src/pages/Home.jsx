import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  Globe2,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  MapPin,
  Phone,
  ChevronRight,
  Mail
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import LeadForm from '../components/LeadForm'
import Testimonials from '../components/Testimonials'
import GoogleReviews from '../components/GoogleReviews'
import MarqueeTicker from '../components/MarqueeTicker'
import JourneySection from '../components/JourneySection'
import { countries, services } from '../data'
import { social, whatsappUrl } from '../config/social'

const headlineWords = ['Your', 'Global', 'Education', 'Journey']

export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  const handleHeroMouseMove = (e) => {
    if (shouldReduceMotion || window.innerWidth < 1024) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMouseOffset({ x, y })
  }

  return (
    <>
      <SEO
        title="Study Abroad Consultancy in Secunderabad"
        description="Start your global education journey with VIC Overseas. Explore study destinations in the USA, UK, Canada, Australia, New Zealand and Europe, with university applications, exam preparation and visa guidance."
      />

      {/* Hero Section */}
      <section
        onMouseMove={handleHeroMouseMove}
        className="hero-bg relative overflow-hidden"
      >
        {/* Floating Decorative Blurred Gradient Shapes */}
        <motion.div
          className="pointer-events-none absolute -top-12 -right-12 h-72 w-72 rounded-full bg-vic-purple/15 blur-3xl"
          animate={shouldReduceMotion ? {} : { y: [-12, 12, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute -bottom-16 -left-12 h-64 w-64 rounded-full bg-vic-red/10 blur-3xl"
          animate={shouldReduceMotion ? {} : { y: [12, -12, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute top-1/2 left-1/3 h-56 w-56 -translate-y-1/2 rounded-full bg-vic-lilac blur-2xl opacity-60"
          animate={shouldReduceMotion ? {} : { y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        {/* Small Floating Airplane SVG echoing the VIC logo */}
        <motion.div
          className="pointer-events-none absolute top-12 right-12 z-20 hidden md:block text-vic-red opacity-85"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 30, 8, 0],
                  y: [0, -16, -4, 0],
                  rotate: [18, 23, 14, 18]
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </motion.div>

        <div className="container-shell grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-[1.03fr_.97fr] lg:py-20">
          <div className="relative z-10">
            {/* 1. Badge fades in first */}
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-vic-purple/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-vic-purple"
            >
              <Sparkles size={14} /> Your future has no borders
            </motion.span>

            {/* 2. Headline reveals word-by-word (0.08s stagger), accent arrives last with underline draw */}
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-vic-ink sm:text-5xl lg:text-6xl flex flex-wrap gap-x-3 gap-y-1">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + i * 0.08,
                    ease: 'easeOut'
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <span className="relative inline-block text-vic-purple">
                <motion.span
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + headlineWords.length * 0.08,
                    ease: 'easeOut'
                  }}
                >
                  Starts Here.
                </motion.span>
                {/* Soft animated underline draw */}
                <motion.span
                  className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full bg-vic-purple"
                  initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.15 + (headlineWords.length + 1) * 0.08,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{ transformOrigin: 'left center' }}
                />
              </span>
            </h1>

            {/* 3. Subtext reveals next */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Turn your international education dreams into reality with personalised guidance for university selection, applications and your next steps abroad.
            </motion.p>

            {/* 4. Both CTAs fade in */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                className="btn-primary group inline-flex"
                href="#book-counselling"
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <span>Book Free Counselling</span>
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-[3px]"
                />
              </motion.a>
              <Link className="btn-outline" to="/countries">
                Explore Destinations
              </Link>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-vic-purple" /> Personalised guidance
              </span>
              <span className="flex items-center gap-2">
                <Globe2 size={17} className="text-vic-purple" /> Global & European destinations
              </span>
            </motion.div>
          </div>

          {/* Hero Image with clip-path/scale reveal and optional desktop mouse-move parallax */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mouseOffset.x,
              y: mouseOffset.y
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-vic-purple/10 blur-2xl" />
            <img
              className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[470px]"
              src="/images/hero-campus.jpg"
              alt="University students walking across a campus"
              width="700"
              height="470"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-soft sm:left-[-24px] sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-vic-lilac text-vic-purple">
                  <GraduationCap />
                </span>
                <div>
                  <p className="font-extrabold text-vic-ink">Your next chapter</p>
                  <p className="text-xs text-slate-500">Starts with a conversation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Horizontal Marquee Ticker */}
      <MarqueeTicker />

      {/* Statistics Band */}
      <section className="border-b border-vic-purple/10 bg-white py-7">
        <div className="container-shell grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            ['10', 'Study destinations'],
            ['04', 'Test pathways'],
            ['1:1', 'Personalised guidance'],
            ['08', 'Journey milestones']
          ].map(([n, t]) => (
            <div key={t}>
              <p className="text-3xl font-black text-vic-purple">{n}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{t}</p>
            </div>
          ))}
        </div>
        <p className="container-shell mt-3 text-center text-[11px] text-slate-400">
          Counts describe the destinations, exam categories and proposed guidance journey shown on this website; they are not student outcome or achievement claims.
        </p>
      </section>

      {/* Services Section with Icon Tilt/Bounce on Hover */}
      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How we can help"
            title="Guidance for every step of your journey"
            text="From choosing a destination to preparing your application, get support to make informed decisions."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="service-card group cursor-pointer"
              >
                <motion.span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vic-lilac text-vic-purple"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.15, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                >
                  <s.icon size={24} strokeWidth={2} />
                </motion.span>
                <h3 className="mt-5 text-lg font-extrabold text-vic-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{s.text}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-vic-purple group-hover:underline">
                  Explore service <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section with Card Lift, Image 1.06 Zoom & Arrow Slide on Hover */}
      <section className="section-pad bg-[#F8F7FC]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Choose your destination"
            title="Where would you like to study?"
            text="Explore popular study destinations across North America, the UK, Europe and Australasia, and discover which one suits your ambitions."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.04, duration: 0.45 }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
              >
                <Link to={`/countries/${c.slug}`} className="country-card group block h-full">
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                    <img
                      src={c.image}
                      alt={`${c.name} study destination`}
                      width="400"
                      height="208"
                      loading={i < 3 ? 'eager' : 'lazy'}
                      fetchPriority={i < 3 ? 'high' : 'auto'}
                      className="relative z-[1] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-5 z-[3] text-2xl">{c.flag}</span>
                    <span className="absolute bottom-4 right-5 z-[3] text-white transition-transform duration-200 group-hover:translate-x-1">
                      <ChevronRight />
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-vic-ink">{c.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{c.summary}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/countries" className="btn-outline">
              View all destinations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Testimonials (consent gated - renders only when consented entries exist) */}
      <Testimonials />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Journey Pathway Section with Scroll Progress Line & Center Card Activation */}
      <JourneySection />

      {/* Student Stories Dark Band */}
      <section className="bg-vic-deep py-16 text-white">
        <div className="container-shell grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-white/60">Student testimonials</p>
            <h2 className="mt-3 text-3xl font-black">Your review could be next.</h2>
            <p className="mt-3 max-w-xl leading-7 text-white/70">
              We are preparing this space for genuine student reviews and testimony. Testimonials will be published here once approved by the students.
            </p>
          </div>
          <Link to="/contact" className="btn-light">
            Talk to our team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Events & Visit Us Grid */}
      <section className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Events & webinars"
              title="Learn, ask questions and plan ahead"
              text="Join a future information session to learn more about destinations, applications and student preparation."
            />
            <div className="mt-7 rounded-2xl border border-vic-purple/10 bg-vic-lilac/60 p-6">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-vic-purple">
                  <CalendarDays />
                </span>
                <div>
                  <h3 className="font-extrabold text-vic-ink">Upcoming events will be announced</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Check back for webinar dates and registration details from VIC Overseas.
                  </p>
                  <Link to="/contact" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-vic-purple">
                    Ask about upcoming sessions <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              center={false}
              eyebrow="Visit us"
              title="Connect with VIC Overseas"
              text="Start a conversation with our team in Secunderabad, Telangana."
            />
            <div className="mt-7 overflow-hidden rounded-2xl bg-slate-100">
              <div className="flex min-h-[210px] flex-col items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#e8e2ff,transparent_35%),linear-gradient(135deg,#f4f1ff,#e9e6f4)] p-8 text-center">
                <MapPin className="text-vic-purple" size={34} />
                <h3 className="mt-3 text-xl font-extrabold text-vic-ink">Secunderabad, Telangana</h3>
                <p className="mt-1 text-sm text-slate-600">India</p>
                <p className="mt-3 max-w-sm text-xs text-slate-500">
                  Please contact us for the exact office address and directions.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-5">
                <a
                  href={`tel:${social.phoneTel}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-vic-purple hover:underline"
                >
                  <Phone size={16} /> {social.phoneDisplay}
                </a>
                <Link to="/contact" className="text-sm font-bold text-vic-purple">
                  Contact us <ArrowRight size={15} className="inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counselling Enquiry Form Section with Slide-In */}
      <section id="book-counselling" className="section-pad scroll-mt-24 bg-[#F8F7FC] overflow-hidden">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="pt-3"
          >
            <p className="eyebrow">Let’s plan your next step</p>
            <h2 className="section-title">Book your free counselling session.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Tell us a little about your study plans. The VIC Overseas team can help you understand possible next steps for your international education journey.
            </p>
            <div className="mt-8 grid gap-4 text-sm font-semibold text-slate-700">
              <a
                href={`tel:${social.phoneTel}`}
                className="flex items-center gap-3 transition hover:text-vic-purple"
              >
                <Phone className="text-vic-purple" size={18} /> {social.phoneDisplay}
              </a>
              <a
                href="mailto:apply@vicoverseas.com"
                className="flex items-center gap-3 transition hover:text-vic-purple"
              >
                <Mail className="text-vic-purple" size={18} /> apply@vicoverseas.com
              </a>
              <a
                href={social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-vic-purple"
              >
                <Globe2 className="text-vic-purple" size={18} /> vicoverseas.com
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="text-vic-purple" size={18} /> Secunderabad, Telangana
              </span>
            </div>

            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp instead"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-white px-5 py-3 text-xs font-extrabold text-slate-800 shadow-sm transition hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <FaWhatsapp size={19} className="text-[#25D366] group-hover:text-white" />
                Chat on WhatsApp instead
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}

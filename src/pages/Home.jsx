import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  Globe2,
  ShieldCheck,
  Compass,
  FileCheck2,
  BookOpenCheck,
  CheckCircle2,
  Sparkles,
  MapPin
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import FAQAccordion from '../components/FAQAccordion'
import CountryModal from '../components/CountryModal'
import GoogleReviews from '../components/GoogleReviews'
import LeadForm from '../components/LeadForm'
import { destinations } from '../data/destinations'
import { homeHowItWorks, homeFaqs } from '../data/servicesData'
import { whatsappUrl } from '../config/social'
import { officeContact } from '../data/contact'

const topServices = [
  {
    icon: Compass,
    title: 'Career & Course Counselling',
    desc: 'Align your personal strengths, academic background, and budget with high-growth global disciplines.',
    anchor: '/services#counselling'
  },
  {
    icon: GraduationCap,
    title: 'University Shortlisting',
    desc: 'Data-driven curation categorised into Ambitious, Moderate, and Safe target tiers for optimal success.',
    anchor: '/services#university-shortlisting'
  },
  {
    icon: FileCheck2,
    title: 'Application & SOP Assistance',
    desc: 'Professional storycrafting for SOPs, LOR reviews, and end-to-end deadline and document tracking.',
    anchor: '/services#application-assistance'
  },
  {
    icon: BookOpenCheck,
    title: 'Standardised Test Prep',
    desc: 'Comprehensive diagnostic coaching for IELTS, TOEFL, GRE, PTE, and Duolingo English Test.',
    anchor: '/services#test-preparation'
  },
  {
    icon: ShieldCheck,
    title: 'Visa Guidance & Mock Interviews',
    desc: 'Embassy file curation, financial proof vetting, and 1-on-1 consular interview simulations.',
    anchor: '/services#visa-guidance'
  }
]

export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // ONLY first 6 countries for Home
  const topSixCountries = destinations.slice(0, 6)

  const handleOpenCountry = (country) => {
    setSelectedCountry(country)
    setModalOpen(true)
  }

  return (
    <>
      <SEO
        title="VIC Overseas - Best Guidance for Bright Future | Study Abroad Consultancy"
        description="Best Guidance for Bright Future. Trusted study abroad consultancy guiding admissions, test prep, and student visas for USA, UK, Canada, Australia, Europe, Dubai, and Singapore."
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-vic-lilac/70 via-vic-lilac/30 to-white pt-12 pb-20 sm:pt-16 sm:pb-28">
        {/* Subtle decorative glow shapes */}
        <div
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-vic-purple/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-vic-red/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-shell grid items-center gap-12 lg:grid-cols-12">
          {/* Hero Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-vic-purple/20 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-vic-purple shadow-xs"
            >
              <Sparkles size={14} className="text-vic-purple" />
              <span>Best Guidance for Bright Future</span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-4xl font-black tracking-tight text-vic-ink sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Your Global Education Journey Starts Here
              <span className="block mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vic-purple">
                Best Guidance for Bright Future
              </span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Expert, transparent guidance for course shortlisting, university applications, test preparation, and student visas across top global destinations including the <strong>USA, UK, Canada, Australia, Europe, Dubai, and Singapore</strong>.
            </motion.p>

            {/* Two Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#book-counselling"
                className="btn-primary inline-flex items-center gap-2 py-3.5 px-6 text-base font-bold shadow-lg hover:shadow-xl"
              >
                <span>Book Free Counselling</span>
                <ArrowRight size={17} />
              </a>

              <Link
                to="/destinations"
                className="btn-outline inline-flex items-center gap-2 py-3.5 px-6 text-base font-bold bg-white/90"
              >
                <Globe2 size={18} className="text-vic-purple" />
                <span>Explore Destinations</span>
              </Link>
            </motion.div>

            {/* Key trust bullets */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-600"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                100% Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Direct University Applications
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                High Visa Approval Track Record
              </span>
            </motion.div>
          </div>

          {/* Hero Right Visual Banner */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border-4 border-white">
                <img
                  src="/images/hero-counselling.jpg"
                  alt="Personalised study abroad counselling and profile evaluation session at VIC Overseas"
                  width="600"
                  height="450"
                  className="h-[360px] sm:h-[420px] w-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vic-deep/90 via-vic-deep/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold text-white mb-2">
                    <span>USA • UK • Canada • Australia • Europe • Dubai • Singapore</span>
                  </div>
                  <h3 className="text-xl font-black">Empowering Dreams Worldwide</h3>
                  <p className="mt-1 text-xs text-white/80">From profile assessment to campus arrival</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW (5 ICON CARDS + VIEW ALL) */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">OUR EXPERTISE</p>
            <h2 className="section-title">Comprehensive Study Abroad Services</h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              End-to-end guidance designed to simplify each phase of your international application process.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((svc, i) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={svc.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          boxShadow: '0 12px 28px -6px rgba(56, 37, 142, 0.12)'
                        }
                  }
                  className="group flex flex-col justify-between rounded-3xl border border-vic-purple/10 bg-white p-7 shadow-sm transition-all"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vic-lilac text-vic-purple group-hover:bg-vic-purple group-hover:text-white transition-colors duration-200">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-vic-ink">{svc.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{svc.desc}</p>
                  </div>

                  <Link
                    to={svc.anchor}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-vic-purple group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              )
            })}

            {/* View All Services Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col justify-between rounded-3xl border border-dashed border-vic-purple/30 bg-vic-lilac/40 p-7"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-vic-purple">FULL SUPPORT</span>
                <h3 className="mt-3 text-xl font-extrabold text-vic-ink">Explore All Guidance Areas</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Including course selection, university shortlisting, forex card assistance, and post-landing student housing.
                </p>
              </div>

              <Link
                to="/services"
                className="btn-primary mt-6 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold"
              >
                <span>View All Services</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TOP DESTINATIONS (FIRST 6 COUNTRIES) */}
      <section className="section-pad bg-[#F9F8FD]">
        <div className="container-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow">POPULAR DESTINATIONS</p>
              <h2 className="section-title">Top Countries for Indian Students</h2>
              <p className="mt-3 max-w-xl text-slate-600 text-sm sm:text-base">
                Explore premier global education hubs. Click on any country for admissions, top courses, and post-study work rights.
              </p>
            </div>
            <Link
              to="/destinations"
              className="btn-outline hidden md:inline-flex items-center gap-2 text-sm font-bold bg-white"
            >
              <span>Explore More Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 6 Country Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topSixCountries.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-vic-purple/10 shadow-sm hover:shadow-md transition-all"
              >
                {/* Photo banner */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={c.image}
                    alt={c.name}
                    width="400"
                    height="192"
                    loading={i < 3 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-vic-ink backdrop-blur-sm shadow-xs">
                    {c.code}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{c.flag}</span>
                      <h3 className="text-xl font-extrabold text-vic-ink">{c.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
                      {c.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        {c.tuitionRange.split('/')[0]?.trim()} (approx)
                      </span>
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        Bachelors & Masters
                      </span>
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        {c.region}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenCountry(c)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-vic-purple group-hover:text-vic-deep group-hover:translate-x-1 transition-all"
                    >
                      <span>Learn more</span>
                      <ArrowRight size={15} />
                    </button>
                    <span className="text-xs font-semibold text-slate-400">
                      {c.region}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button leading to Destinations page */}
          <div className="mt-12 text-center">
            <Link
              to="/destinations"
              className="btn-primary inline-flex items-center gap-2 py-3.5 px-8 text-base font-bold shadow-md hover:shadow-lg"
            >
              <span>Explore More Destinations (10+ Countries)</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (5 STEPS) */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">STREAMLINED PROCESS</p>
            <h2 className="section-title">How It Works</h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              A structured 5-step roadmap engineered to turn your global education ambition into confirmed university admission.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {homeHowItWorks.map((st, i) => (
              <motion.div
                key={st.step}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-3xl border border-vic-purple/10 bg-vic-lilac/30 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-vic-purple/40">{st.step}</span>
                  <h3 className="mt-3 text-lg font-extrabold text-vic-ink">{st.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {st.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOOGLE REVIEWS / SUCCESS STORIES */}
      <section id="reviews" className="section-pad scroll-mt-24 bg-[#F9F8FD]">
        <div className="container-shell">
          <GoogleReviews />
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Clear answers regarding fees, eligibility, intakes, and student visas.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* 7. FINAL CTA BANNER & COUNSELLING FORM */}
      <section id="book-counselling" className="section-pad scroll-mt-24 bg-gradient-to-b from-[#F9F8FD] to-white border-t border-vic-purple/10">
        <div className="container-shell grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr]">
          {/* Left Column: Reassuring Copy */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-vic-lilac px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-vic-purple">
              START YOUR APPLICATION
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-vic-ink">
              Ready to start? Talk to a counsellor today.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Share your details for a 1-on-1 profile evaluation. Our senior advisors will help you evaluate universities, entry prerequisites, and post-study opportunities.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <CheckCircle2 size={18} className="text-vic-purple shrink-0" />
                <span>Zero service charges for initial profile evaluation</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <CheckCircle2 size={18} className="text-vic-purple shrink-0" />
                <span>Enquiries delivered directly to <strong className="text-vic-purple font-bold">apply@vicoverseas.com</strong></span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <CheckCircle2 size={18} className="text-vic-purple shrink-0" />
                <span>In-person sessions in Secunderabad or virtual Zoom counselling</span>
              </div>
            </div>

            {/* Instant WhatsApp alternative */}
            <div className="mt-8 rounded-3xl bg-white p-6 border border-vic-purple/10 shadow-sm">
              <h4 className="font-extrabold text-vic-ink text-base">Prefer an immediate chat?</h4>
              <p className="mt-1 text-xs text-slate-600">
                Connect directly with our study abroad helpdesk on WhatsApp for instant guidance.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-4 inline-flex items-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-2.5 px-4 text-sm transition"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp (+91 91085 60255)</span>
              </a>
            </div>
          </div>

          {/* Right Column: LeadForm */}
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* 8. COMPACT VISIT OUR OFFICE STRIP */}
      <section className="bg-vic-lilac/70 border-t border-vic-purple/15 py-6">
        <div className="container-shell flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-vic-purple shadow-xs">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-vic-purple block">
                VISIT OUR OFFICE
              </span>
              <p className="text-sm font-bold text-vic-ink">
                Area: {officeContact.displayAddress}
              </p>
            </div>
          </div>

          <a
            href={officeContact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 py-2.5 px-5 text-xs font-black uppercase tracking-wider border-vic-purple/30 text-vic-purple hover:bg-white transition"
          >
            <span>GET DIRECTIONS</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Country Detail Modal */}
      <CountryModal
        country={selectedCountry}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

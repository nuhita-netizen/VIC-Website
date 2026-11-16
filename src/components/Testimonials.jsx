import { useState, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, MessageSquare, ExternalLink, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { FaWhatsapp, FaGoogle } from 'react-icons/fa'
import { testimonials } from '../config/testimonials'
import { getWhatsAppUrl } from '../config/social'
import { googleReviewsUrl } from '../config/reviews'

const countryFlagMap = {
  usa: '🇺🇸',
  'united states': '🇺🇸',
  uk: '🇬🇧',
  'united kingdom': '🇬🇧',
  canada: '🇨🇦',
  australia: '🇦🇺',
  'new zealand': '🇳🇿',
  ireland: '🇮🇪',
  france: '🇫🇷',
  italy: '🇮🇹',
  netherlands: '🇳🇱',
  sweden: '🇸🇪'
}

function getInitials(name = '') {
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Testimonials({
  countryFilter,
  isStandalonePage = false,
  title = 'Student Reviews & Testimonials',
  eyebrow = 'TESTIMONIALS'
}) {
  const shouldReduceMotion = useReducedMotion()

  // STRICT CONSENT GATE: only consented entries are accessible
  const consentedList = useMemo(() => {
    let list = testimonials.filter((t) => t && t.consent === true)
    if (countryFilter) {
      const target = countryFilter.toLowerCase()
      list = list.filter(
        (t) =>
          t.country &&
          (t.country.toLowerCase() === target ||
            (target === 'usa' && t.country.toLowerCase() === 'united states') ||
            (target === 'uk' && t.country.toLowerCase() === 'united kingdom'))
      )
    }
    return list
  }, [countryFilter])

  // Extract unique countries present in consented data for filter tabs
  const availableCountries = useMemo(() => {
    const set = new Set()
    consentedList.forEach((t) => {
      if (t.country) set.add(t.country)
    })
    return ['All', ...Array.from(set)]
  }, [consentedList])

  const [activeTab, setActiveTab] = useState('All')
  const [mobileIndex, setMobileIndex] = useState(0)

  const displayedList = useMemo(() => {
    if (activeTab === 'All') return consentedList
    return consentedList.filter(
      (t) => t.country && t.country.toLowerCase() === activeTab.toLowerCase()
    )
  }, [consentedList, activeTab])

  // Empty state handling
  if (consentedList.length === 0) {
    if (!isStandalonePage) {
      // Hide completely on homepage / country pages when no consented entries exist
      return null
    }

    return (
      <section className="section-pad bg-[#FBFBFE]">
        <div className="container-shell max-w-4xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-2">{title}</h2>
          <div className="mt-10 rounded-3xl border border-dashed border-vic-purple/20 bg-white p-10 shadow-soft sm:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-vic-lilac text-vic-purple">
              <MessageSquare size={32} />
            </div>
            <h3 className="mt-5 text-2xl font-black text-vic-ink">Student reviews coming soon</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
              We are currently compiling verified student reviews and university testimonials. Verified reviews will be featured here with student consent.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={getWhatsAppUrl("Hi VIC Overseas, I'd like to share my review/testimony regarding my study abroad experience.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaWhatsapp size={17} /> Share your review
              </a>
              {googleReviewsUrl && (
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FaGoogle size={14} /> See our Google reviews
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Generate Review JSON-LD for consented entries with ratings
  const reviewJsonLd = consentedList
    .filter((t) => typeof t.rating === 'number' && t.rating >= 1 && t.rating <= 5)
    .map((t) => ({
      '@context': 'https://schema.org',
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name
      },
      reviewBody: t.quote,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5'
      },
      itemReviewed: {
        '@type': 'EducationalOrganization',
        name: 'VIC Overseas',
        telephone: '+919108560255',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Secunderabad',
          addressRegion: 'Telangana',
          addressCountry: 'IN'
        }
      }
    }))

  return (
    <section className="section-pad bg-[#F9F8FD] relative overflow-hidden">
      {/* Review JSON-LD Injection */}
      {reviewJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
      )}

      <div className="container-shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title mt-2">{title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Real reflections and university journeys from students guided by VIC Overseas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl("Hi VIC Overseas, I'd like to share my review/testimony regarding my study abroad experience.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share your review or testimony on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full border border-vic-purple/20 bg-white px-4 py-2.5 text-xs font-bold text-vic-purple shadow-sm transition hover:bg-vic-lilac hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-vic-purple"
            >
              <FaWhatsapp size={15} className="text-[#25D366]" /> Share your review
            </a>
            {googleReviewsUrl && (
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read VIC Overseas Google Reviews"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-vic-purple"
              >
                <FaGoogle size={13} className="text-[#4285F4]" /> Google reviews
              </a>
            )}
          </div>
        </div>

        {/* Filter Chips (shown only when multiple country options exist) */}
        {!countryFilter && availableCountries.length > 2 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {availableCountries.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActiveTab(c)
                  setMobileIndex(0)
                }}
                className={`rounded-full px-4 py-2 text-xs font-extrabold transition-all ${
                  activeTab === c
                    ? 'bg-vic-purple text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-vic-purple/30'
                }`}
              >
                {c !== 'All' && countryFlagMap[c.toLowerCase()] && (
                  <span className="mr-1.5">{countryFlagMap[c.toLowerCase()]}</span>
                )}
                {c}
              </button>
            ))}
          </div>
        )}

        {/* Desktop & Tablet Grid View */}
        <div className="mt-10 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedList.map((item, idx) => (
              <TestimonialCard
                key={item.id || idx}
                item={item}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipeable Carousel View */}
        <div className="mt-8 sm:hidden">
          {displayedList.length > 0 && (
            <div>
              <AnimatePresence mode="wait">
                <TestimonialCard
                  key={displayedList[mobileIndex]?.id || mobileIndex}
                  item={displayedList[mobileIndex]}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </AnimatePresence>

              {/* Mobile Carousel Controls & Dots */}
              {displayedList.length > 1 && (
                <div className="mt-5 flex items-center justify-between">
                  <button
                    onClick={() =>
                      setMobileIndex((prev) =>
                        prev === 0 ? displayedList.length - 1 : prev - 1
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-vic-purple"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex gap-1.5">
                    {displayedList.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setMobileIndex(i)}
                        className={`h-2.5 rounded-full transition-all ${
                          mobileIndex === i ? 'w-6 bg-vic-purple' : 'w-2.5 bg-slate-300'
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setMobileIndex((prev) =>
                        prev === displayedList.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-vic-purple"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ item, shouldReduceMotion }) {
  const [expanded, setExpanded] = useState(false)
  const flag = countryFlagMap[item.country?.toLowerCase()] || '🌍'

  return (
    <motion.div
      layout
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-between rounded-3xl border border-vic-purple/10 bg-white p-6 sm:p-7 shadow-sm hover:shadow-soft transition-shadow"
    >
      <div>
        {/* Header: Destination & Intake Chips */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-vic-lilac px-3 py-1 text-xs font-extrabold text-vic-purple">
            <span>{flag}</span> {item.country}
          </span>
          {item.intake && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
              <Calendar size={12} className="text-slate-400" /> {item.intake}
            </span>
          )}
        </div>

        {/* Star Rating */}
        {typeof item.rating === 'number' && (
          <div className="mt-4 flex gap-1 text-amber-400" aria-label={`Rating: ${item.rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                className={star <= item.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}
              />
            ))}
          </div>
        )}

        {/* Student Quote with 5-line Clamp and Read More */}
        <div className="mt-4">
          <p
            className={`text-sm leading-7 text-slate-700 italic ${
              !expanded ? 'line-clamp-5' : ''
            }`}
          >
            “{item.quote}”
          </p>
          {item.quote && item.quote.length > 220 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs font-bold text-vic-purple hover:underline focus:outline-none"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      </div>

      {/* Student Profile Footer */}
      <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4">
        {item.photo ? (
          <img
            src={item.photo}
            alt={item.name}
            width="48"
            height="48"
            loading="lazy"
            className="h-12 w-12 rounded-full object-cover shadow-sm"
          />
        ) : (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-vic-lilac text-sm font-black text-vic-purple shadow-sm"
            aria-hidden="true"
          >
            {getInitials(item.name)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h4 className="truncate font-extrabold text-vic-ink text-sm sm:text-base">{item.name}</h4>
          <p className="truncate text-xs font-medium text-slate-500">
            {item.course}
            {item.university ? ` • ${item.university}` : ''}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

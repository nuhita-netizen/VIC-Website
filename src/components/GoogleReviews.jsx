import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { FaGoogle } from 'react-icons/fa'
import {
  googleReviewsUrl,
  rating,
  totalReviews,
  reviews,
  reviewsAsOf
} from '../config/reviews'

function getInitials(name = '') {
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function GoogleReviews({ compact = false }) {
  const shouldReduceMotion = useReducedMotion()
  const [mobileIndex, setMobileIndex] = useState(0)
  const [expandedCompact, setExpandedCompact] = useState(false)

  // Compact Mode: for Contact page and above footer CTA band
  // Allows reading all reviews directly in place without navigating away
  if (compact) {
    return (
      <div className="rounded-3xl border border-vic-purple/10 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-xs">
              <FcGoogle size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-vic-ink">{rating}</span>
                <div className="flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-500">
                Based on {totalReviews} Google reviews
              </p>
            </div>
          </div>

          <button
            onClick={() => setExpandedCompact(!expandedCompact)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-vic-purple/20 bg-vic-lilac/60 px-5 py-2.5 text-xs font-extrabold text-vic-purple transition hover:bg-vic-purple hover:text-white focus:outline-none focus:ring-2 focus:ring-vic-purple cursor-pointer"
            aria-expanded={expandedCompact}
            aria-label={expandedCompact ? 'Hide reviews' : 'Read student and parent reviews here'}
          >
            <span>{expandedCompact ? 'Hide reviews' : 'Read reviews here'}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${expandedCompact ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Displayed reviews in place without leaving the page */}
        <AnimatePresence>
          {expandedCompact && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mt-6 overflow-hidden border-t border-slate-100 pt-6"
            >
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((rev) => (
                  <ReviewCard key={rev.id} rev={rev} shouldReduceMotion={shouldReduceMotion} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Full Section Mode: renders all reviews directly on the page
  return (
    <section id="google-reviews" className="section-pad bg-white relative overflow-hidden scroll-mt-20">
      <div className="container-shell">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">GOOGLE REVIEWS</p>
            <h2 className="section-title mt-2">What our students and parents say</h2>

            {/* Overall Rating Row */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <FcGoogle size={22} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-vic-ink">{rating}</span>
                <div className="flex gap-0.5 text-amber-400" aria-label={`Rating: ${rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-500">
                • Based on {totalReviews} Google reviews
              </span>
            </div>
          </div>

          {/* Action Button: Optional review submission */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Write a review on Google for VIC Overseas Education"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-vic-purple/20 bg-white px-5 py-2.5 text-xs font-extrabold text-vic-purple shadow-sm transition hover:bg-vic-lilac hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-vic-purple"
            >
              <FaGoogle size={13} />
              <span>Write a review on Google</span>
            </a>
          </div>
        </div>

        {/* Desktop & Tablet Grid View: All reviews displayed directly */}
        <div className="mt-12 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} rev={rev} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </div>

        {/* Mobile Swipeable Carousel View: Displayed directly with touch controls */}
        <div className="mt-8 sm:hidden">
          <AnimatePresence mode="wait">
            <ReviewCard
              key={reviews[mobileIndex]?.id || mobileIndex}
              rev={reviews[mobileIndex]}
              shouldReduceMotion={shouldReduceMotion}
            />
          </AnimatePresence>

          {/* Mobile Carousel Navigation */}
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={() =>
                setMobileIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-vic-purple"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    mobileIndex === i ? 'w-6 bg-vic-purple' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setMobileIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-vic-purple"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Small Footnote with Configurable Date */}
        <p className="mt-10 text-center text-xs leading-5 text-slate-400">
          Reviews shown from Google. Ratings and review counts are as of {reviewsAsOf} and may have changed.
        </p>
      </div>
    </section>
  )
}

function ReviewCard({ rev, shouldReduceMotion }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="service-card flex flex-col justify-between"
    >
      <div>
        {/* Reviewer Header: Initials Avatar + Name & Label */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vic-lilac text-sm font-black text-vic-purple shadow-xs"
              aria-hidden="true"
            >
              {getInitials(rev.name)}
            </div>
            <div>
              <h3 className="font-extrabold text-vic-ink text-sm sm:text-base leading-snug">
                {rev.name}
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                <FcGoogle size={13} /> Google review
              </span>
            </div>
          </div>
        </div>

        {/* Star Rating Row */}
        <div className="mt-3.5 flex gap-1 text-amber-400" aria-label={`Rating: ${rev.rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Review Text Displayed In-Place */}
        <div className="mt-3.5">
          <p
            className={`text-sm leading-7 text-slate-600 transition-all ${
              !expanded ? 'line-clamp-6' : ''
            }`}
          >
            “{rev.text}”
          </p>

          {/* Toggle directly on page — does NOT open external web page */}
          {(rev.text && rev.text.length > 220) || rev.truncated ? (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-vic-purple hover:underline focus:outline-none cursor-pointer"
              aria-label={expanded ? `Show less of ${rev.name}'s review` : `Read more of ${rev.name}'s review`}
            >
              <span>{expanded ? 'Show less' : 'Read full review'}</span>
            </button>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}

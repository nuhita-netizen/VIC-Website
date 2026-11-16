import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { journey } from '../data'

export default function JourneySection() {
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%']
  })

  // Smooth scroll progress line
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="section-pad bg-white relative overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Your pathway"
          title="A clear journey, one step at a time"
          text="An illustrative eight-stage pathway to help you understand the study abroad process. Actual timelines vary by university, destination and individual circumstances."
        />

        {/* Scroll Progress Track */}
        <div className="mt-10 relative">
          <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <motion.div
              style={shouldReduceMotion ? { width: '100%' } : { scaleX: progressScale, transformOrigin: '0%' }}
              className="h-full bg-gradient-to-r from-vic-purple via-[#6D59C4] to-vic-red rounded-full"
            />
          </div>
        </div>

        {/* 8 Journey Step Cards with Viewport-Center Activation */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map(([num, title, desc], i) => (
            <JourneyCard
              key={num}
              step={num}
              title={title}
              desc={desc}
              index={i}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function JourneyCard({ step, title, desc, index, shouldReduceMotion }) {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 16 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.04 }
      }}
      viewport={{ once: false, amount: 0.45 }}
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      className="group relative rounded-2xl border border-vic-purple/10 bg-white p-6 shadow-xs hover:border-vic-purple/30 hover:shadow-soft transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-black tracking-widest text-vic-red transition-colors group-hover:text-vic-purple">
          {step} / 08
        </span>
        <span className="h-2 w-2 rounded-full bg-vic-purple/20 transition-all group-hover:bg-vic-red group-hover:scale-125" />
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-vic-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </motion.div>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-3xl border border-vic-purple/10 bg-white p-6 sm:p-8 shadow-sm">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={idx} className="py-4 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 text-left font-bold text-vic-ink hover:text-vic-purple transition-colors"
            >
              <span className="text-base sm:text-lg leading-snug">{item.q}</span>
              <span
                className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-vic-lilac text-vic-purple transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-vic-purple text-white' : ''
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

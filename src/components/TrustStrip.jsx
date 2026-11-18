import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { trustStats } from '../data/servicesData'
import { Users, Globe2, Building2, Award } from 'lucide-react'

const icons = [Users, Globe2, Building2, Award]

function CounterItem({ stat, index }) {
  const shouldReduceMotion = useReducedMotion()
  const [count, setCount] = useState(shouldReduceMotion ? stat.value : 0)
  const Icon = icons[index % icons.length]

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => {
        if (shouldReduceMotion) return
        let start = 0
        const duration = 1500
        const stepTime = 25
        const totalSteps = duration / stepTime
        const increment = stat.value / totalSteps
        const timer = setInterval(() => {
          start += increment
          if (start >= stat.value) {
            setCount(stat.value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, stepTime)
      }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-vic-purple/10 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-vic-lilac text-vic-purple mb-3">
        <Icon size={24} />
      </div>
      <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl font-black text-vic-ink tracking-tight">
        <span>{count}</span>
        <span className="text-vic-purple">{stat.suffix}</span>
      </div>
      <p className="mt-1 text-sm font-semibold text-slate-700">{stat.label}</p>
      {/* TODO: Placeholder note clearly indicated */}
      <span className="sr-only">[{stat.note}]</span>
    </motion.div>
  )
}

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-12 container-shell">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {trustStats.map((stat, i) => (
          <CounterItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}

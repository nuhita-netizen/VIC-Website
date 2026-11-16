import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsappUrl } from '../config/social'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.aside
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring', damping: 20 }}
      className="fixed bottom-5 right-5 z-40"
    >
      {/* 4s gentle pulse ring, pauses on hover or reduced motion */}
      {!shouldReduceMotion && !isHovered && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.45, 1.55],
            opacity: [0.65, 0.25, 0]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 2.2, // ~4s cycle
            ease: 'easeOut'
          }}
        />
      )}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VIC Overseas on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-shadow hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </motion.aside>
  )
}

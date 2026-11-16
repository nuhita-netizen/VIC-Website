import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reusable <Reveal> component:
 * Fade + translateY (24px -> 0), 0.6s, easeOut curve, triggers once when 20% in view.
 * Respects prefers-reduced-motion by rendering static content with no transforms.
 * Animates strictly transform (y) and opacity.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 24,
  amount = 0.2,
  as = 'div',
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = motion[as] || motion.div

  if (shouldReduceMotion) {
    const Component = as
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    )
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // smooth easeOut
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * Parent container for orchestrated staggered entrances.
 * Default stagger: 0.08s per child.
 */
export function StaggerGroup({
  children,
  className = '',
  staggerDelay = 0.08,
  delayChildren = 0,
  amount = 0.2,
  as = 'div',
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = motion[as] || motion.div

  if (shouldReduceMotion) {
    const Component = as
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren
      }
    }
  }

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * Child item for <StaggerGroup>
 */
export function StaggerItem({
  children,
  className = '',
  y = 24,
  duration = 0.6,
  as = 'div',
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = motion[as] || motion.div

  if (shouldReduceMotion) {
    const Component = as
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    )
  }

  const itemVariants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <MotionComponent variants={itemVariants} className={className} {...rest}>
      {children}
    </MotionComponent>
  )
}

import { motion, useScroll, useSpring } from 'framer-motion'

// Hairline ember progress line pinned to the very top edge.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left ember"
    />
  )
}

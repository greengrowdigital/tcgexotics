import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion.js'

// Scroll-reveal wrapper. Enhances an already-visible default: content is
// laid out normally; the animation only nudges opacity/position on enter.
export default function Reveal({ children, variants = fadeUp, amount = 0.25, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

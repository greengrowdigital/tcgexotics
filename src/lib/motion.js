// Shared Framer Motion variants. Motion is intentional, quiet, and
// reduced-motion aware (Framer's MotionConfig handles the toggle).

const EASE = [0.16, 1, 0.3, 1] // ease-out-expo

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export const stagger = (delay = 0, each = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
})

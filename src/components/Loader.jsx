import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Mark from './Mark.jsx'

// Brief first-load splash — dark screen, the gold gauge settling into place.
// Short by design; never gates content for long, and honors reduced motion.
export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = window.setTimeout(() => setShow(false), reduce ? 200 : 700)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -40 }}
              animate={{ scale: 1, opacity: 1, rotate: 128 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="text-ink"
            >
              <Mark size={78} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-graphite"
            >
              TCG<span className="text-flame">EXOTICS</span>
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

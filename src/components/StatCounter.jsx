import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Count-up on first view. Serif figures, tabular to keep the layout still.
export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }
    const duration = 1100
    let raf
    let start
    const tick = (t) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = window.requestAnimationFrame(tick)
    }
    raf = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="font-display text-[clamp(2.6rem,6vw,3.8rem)] font-medium leading-none tabular-nums text-ink">
        {display}
        {suffix}
      </span>
      <span className="label">{label}</span>
    </div>
  )
}

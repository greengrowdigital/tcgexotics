import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Loader2, Phone, X } from 'lucide-react'
import { FLEET } from '../data/fleet.js'
import { SITE, AREAS, DURATIONS } from '../data/site.js'
import GaugeMark from './GaugeMark.jsx'
import { Field, Select, inputCls, today, useFakeSubmit } from './formKit.jsx'

const ReserveContext = createContext(null)

export function useReserve() {
  const ctx = useContext(ReserveContext)
  if (!ctx) throw new Error('useReserve must be used inside <ReserveProvider>')
  return ctx
}

const EMPTY = { name: '', phone: '', car: '', date: '', duration: 'Daily', area: 'NYC' }

export function ReserveProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [car, setCar] = useState(null)
  const trigger = useRef(null)

  const openReserve = useCallback((carName = null) => {
    trigger.current = document.activeElement
    setCar(carName)
    setOpen(true)
  }, [])

  const closeReserve = useCallback(() => {
    setOpen(false)
    window.requestAnimationFrame(() => {
      if (trigger.current && trigger.current.focus) trigger.current.focus()
    })
  }, [])

  const value = useMemo(
    () => ({ open: openReserve, close: closeReserve }),
    [openReserve, closeReserve],
  )

  return (
    <ReserveContext.Provider value={value}>
      {children}
      <ReserveModal open={open} car={car} onClose={closeReserve} />
    </ReserveContext.Provider>
  )
}

function ReserveModal({ open, car, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const { status, setStatus, submit } = useFakeSubmit()
  const panelRef = useRef(null)
  const firstFieldRef = useRef(null)
  const doneRef = useRef(null)

  useEffect(() => {
    if (open) {
      setForm({ ...EMPTY, car: car || '' })
      setStatus('idle')
    }
  }, [open, car])

  // Move focus to the confirmation when the request completes
  useEffect(() => {
    if (status === 'done') doneRef.current?.focus()
  }, [status])

  // Body scroll lock + Escape + focus trap
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 60)

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const nodes = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!nodes || nodes.length === 0) return
      const list = Array.from(nodes).filter((n) => n.offsetParent !== null)
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            aria-label="Close reservation"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reserve-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-line bg-paper shadow-float sm:rounded-3xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
              <div className="flex items-center gap-2.5 text-ink">
                <GaugeMark size={26} />
                <h2 id="reserve-title" className="font-display text-lg font-medium">
                  {status === 'done' ? 'Request received' : 'Reserve your car'}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-graphite transition-colors hover:border-line-strong hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {status === 'done' ? (
              <div
                ref={doneRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="flex flex-col items-center gap-4 px-6 py-12 text-center outline-none"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full ember text-on-accent">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </div>
                <p className="font-display text-2xl font-medium text-ink">
                  You&apos;re all set{form.name ? `, ${form.name.split(' ')[0]}` : ''}.
                </p>
                <p className="max-w-xs text-[0.95rem] text-graphite">
                  We&apos;ll text you at <span className="text-ink">{form.phone || 'your number'}</span>{' '}
                  to confirm{form.car ? ` the ${form.car}` : ' your car'} and lock in pickup. Usually
                  within the hour.
                </p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="mt-2 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-flame hover:underline"
                >
                  <Phone className="h-4 w-4" /> Or call {SITE.phoneDisplay} now
                </a>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4 overflow-y-auto px-6 py-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="r-name" required>
                    <input
                      ref={firstFieldRef}
                      id="r-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jordan Rivera"
                      value={form.name}
                      onChange={set('name')}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone" htmlFor="r-phone" required>
                    <input
                      id="r-phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(347) 000-0000"
                      value={form.phone}
                      onChange={set('phone')}
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="Car" htmlFor="r-car">
                  <Select id="r-car" value={form.car} onChange={set('car')}>
                    <option value="">Help me choose</option>
                    {FLEET.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} — ${c.price}/day
                      </option>
                    ))}
                  </Select>
                </Field>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Pickup date" htmlFor="r-date" required>
                    <input
                      id="r-date"
                      type="date"
                      required
                      min={today()}
                      value={form.date}
                      onChange={set('date')}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Duration" htmlFor="r-duration">
                    <Select id="r-duration" value={form.duration} onChange={set('duration')}>
                      {DURATIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </div>

                <Field label="Pickup area" htmlFor="r-area">
                  <Select id="r-area" value={form.area} onChange={set('area')}>
                    {AREAS.map((a) => (
                      <option key={a.short} value={a.short}>
                        {a.full} ({a.short})
                      </option>
                    ))}
                  </Select>
                </Field>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full ember px-6 py-4 text-[0.95rem] font-semibold text-on-accent transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-card active:scale-[0.98] disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>Request my car</>
                  )}
                </button>
                <p className="text-center text-[0.78rem] text-mist">
                  No charge now. We confirm availability &amp; price before anything is booked.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

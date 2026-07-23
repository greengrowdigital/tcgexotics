import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Clock, Instagram, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { Field, Select, inputCls, today, useFakeSubmit } from '../components/formKit.jsx'
import { FLEET } from '../data/fleet.js'
import { SITE, AREAS, DURATIONS } from '../data/site.js'

const EMPTY = { name: '', phone: '', email: '', car: '', date: '', duration: 'Daily', area: 'NYC', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const { status, submit } = useFakeSubmit()
  const doneRef = useRef(null)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  useEffect(() => {
    if (status === 'done') doneRef.current?.focus()
  }, [status])

  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's get you moving."
        intro="Call, text, DM or fill out the form — whatever's fastest for you. We reply quickly and get you on the road the same day."
      />

      <section className="shell grid gap-6 pb-16 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        {/* Contact methods */}
        <div className="flex flex-col gap-4">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-flame/60"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl ember text-on-accent">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-graphite">Call or text</p>
                <p className="font-display text-xl font-medium text-ink">{SITE.phoneDisplay}</p>
              </div>
            </div>
          </a>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-flame/60"
            >
              <Instagram className="h-6 w-6 text-flame" />
              <div>
                <p className="font-semibold text-ink">DM on Instagram</p>
                <p className="text-sm text-graphite">{SITE.instagramHandle}</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-flame/60"
            >
              <Mail className="h-6 w-6 text-flame" />
              <div>
                <p className="font-semibold text-ink">Email us</p>
                <p className="break-all text-sm text-graphite">{SITE.email}</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-flame" />
              <div>
                <p className="font-semibold text-ink">Every day · 8am – 10pm</p>
                <p className="text-sm text-graphite">Same-day pickup &amp; delivery available</p>
              </div>
            </div>
            <div className="h-px bg-line" />
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-flame" />
              <div>
                <p className="font-semibold text-ink">Serving four states</p>
                <p className="text-sm text-graphite">{AREAS.map((a) => a.full).join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <Reveal
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          className="rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-8"
        >
          <AnimatePresence mode="wait">
            {status === 'done' ? (
              <motion.div
                key="done"
                ref={doneRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-14 text-center outline-none"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full ember text-on-accent">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </span>
                <p className="font-display text-2xl font-medium">
                  Message sent{form.name ? `, ${form.name.split(' ')[0]}` : ''}.
                </p>
                <p className="max-w-sm text-[0.95rem] text-graphite">
                  We&apos;ll reach out at {form.phone || 'your number'} shortly to confirm
                  {form.car ? ` the ${form.car}` : ' your car'} and lock in pickup. Need it now?
                </p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="mt-1 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-flame hover:underline"
                >
                  <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="c-name" required>
                    <input
                      id="c-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jordan Rivera"
                      value={form.name}
                      onChange={set('name')}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone" htmlFor="c-phone" required>
                    <input
                      id="c-phone"
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

                <Field label="Email (optional)" htmlFor="c-email">
                  <input
                    id="c-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={set('email')}
                    className={inputCls}
                  />
                </Field>

                <Field label="Which car?" htmlFor="c-car">
                  <Select id="c-car" value={form.car} onChange={set('car')}>
                    <option value="">Help me choose</option>
                    {FLEET.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} — ${c.price}/day
                      </option>
                    ))}
                  </Select>
                </Field>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <Field label="Pickup" htmlFor="c-date">
                    <input
                      id="c-date"
                      type="date"
                      min={today()}
                      value={form.date}
                      onChange={set('date')}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Duration" htmlFor="c-duration">
                    <Select id="c-duration" value={form.duration} onChange={set('duration')}>
                      {DURATIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Area" htmlFor="c-area">
                    <Select id="c-area" value={form.area} onChange={set('area')}>
                      {AREAS.map((a) => (
                        <option key={a.short} value={a.short}>
                          {a.short}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </div>

                <Field label="Anything else?" htmlFor="c-message">
                  <textarea
                    id="c-message"
                    rows={3}
                    placeholder="Dates are flexible, need delivery to Brooklyn, etc."
                    value={form.message}
                    onChange={set('message')}
                    className={`${inputCls} resize-none`}
                  />
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
                    <>Send &amp; get my quote</>
                  )}
                </button>
                <p className="text-center text-[0.78rem] text-mist">
                  No charge now. We confirm availability &amp; price before anything is booked.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </section>
    </>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, CreditCard, FileCheck, Minus, Plus, ShieldCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTABand from '../components/CTABand.jsx'
import { DURATIONS, REQUIREMENTS, FAQS } from '../data/site.js'
import { useReserve } from '../components/Reserve.jsx'
import { fadeUp, stagger } from '../lib/motion.js'

const REQ_ICONS = [FileCheck, ShieldCheck, CreditCard]

export default function Pricing() {
  const { open } = useReserve()

  return (
    <>
      <PageHeader
        label="Rentals"
        title="Priced honestly."
        intro="Rent by the day, week or month. The longer you keep it, the less you pay per day — and the number we quote is the number you pay."
      />

      <section className="shell pb-6">
        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {DURATIONS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? 'border-flame/60 bg-paper shadow-card lg:-translate-y-3'
                  : 'border-line bg-paper'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full ember px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-on-accent">
                  {plan.kicker}
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-2xl font-medium">{plan.name}</h2>
                {plan.save && (
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-flame">
                    {plan.save}
                  </span>
                )}
              </div>
              {!plan.featured && (
                <span className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-graphite">
                  {plan.kicker}
                </span>
              )}
              <p className="mt-5 font-display text-2xl font-medium text-ink">{plan.from}</p>
              <p className="mt-3 leading-relaxed text-graphite">{plan.blurb}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-flame" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => open()}
                className={`mt-8 rounded-full px-6 py-3.5 text-center text-[0.95rem] font-semibold transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 ${
                  plan.featured
                    ? 'ember text-on-accent hover:shadow-card'
                    : 'border border-line-strong text-ink hover:border-ink'
                }`}
              >
                Reserve {plan.name.toLowerCase()}
              </button>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-[0.82rem] uppercase tracking-[0.1em] text-mist">
          Rates vary by vehicle · deposit refundable · taxes &amp; delivery quoted upfront
        </p>
      </section>

      <section className="bg-cloud py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            title="What you need to drive off."
            intro="Three things, verified in minutes. No paperwork marathon."
          />
          <motion.div
            variants={stagger(0, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {REQUIREMENTS.map((req, i) => {
              const Icon = REQ_ICONS[i]
              return (
                <motion.div
                  key={req.title}
                  variants={fadeUp}
                  className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-cloud text-flame">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-medium">{req.title}</h3>
                  <p className="leading-relaxed text-graphite">{req.body}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="shell py-24 sm:py-28">
        <SectionHeading title="Questions, answered." className="!max-w-xl" />
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq />
        </div>
      </section>

      <CTABand
        title="Know the car? Let's book it."
        sub="Pick your dates and we'll confirm availability and the exact price in minutes."
        image="mercReflect"
      />
    </>
  )
}

function Faq() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <ul className="flex flex-col divide-y divide-line border-y border-line">
      {FAQS.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <li key={item.q}>
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg font-medium text-ink">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors ${
                  isOpen ? 'border-transparent ember text-on-accent' : 'border-line-strong text-graphite'
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 leading-relaxed text-graphite">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

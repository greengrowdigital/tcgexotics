import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatCounter from '../components/StatCounter.jsx'
import CTABand from '../components/CTABand.jsx'
import { uns, IMG } from '../data/images.js'
import { AREAS, STATS } from '../data/site.js'
import { fadeUp, stagger } from '../lib/motion.js'

export default function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="Built for the Northeast."
        intro="TCGEXOTICS started with a simple idea: renting a great car shouldn't feel like a chore. No airport counters, no surprise fees — just the car you want, when you want it."
      />

      <section className="shell grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={fadeUp} className="order-2 flex flex-col gap-5 lg:order-1">
          <p className="text-pretty text-lg leading-relaxed text-graphite">
            We're a New York–based rental company serving drivers across{' '}
            <span className="text-ink">New York, New Jersey, Connecticut and Pennsylvania</span>.
            Whether you need a dependable daily between cars, a luxury sedan for a client, or a
            supercar for the weekend of your life — we keep it clean, insured and ready.
          </p>
          <p className="text-pretty text-lg leading-relaxed text-graphite">
            Everything runs by message. Tell us the car and the dates, send your license, insurance
            and deposit, and we handle the rest — usually inside the hour. Pick up from us or have it
            delivered to your door.
          </p>
        </Reveal>
        <Reveal variants={fadeUp} className="order-1 overflow-hidden rounded-2xl border border-line lg:order-2">
          <img
            src={uns(IMG.bentleyInt, 1100)}
            alt="Luxury car interior detail"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
      </section>

      {/* Manifesto */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="shell flex flex-col gap-6">
          <Reveal>
            <p className="max-w-md text-sm uppercase tracking-[0.14em] text-graphite">
              Most rental counters treat you like a line item.
            </p>
          </Reveal>
          <Reveal variants={fadeUp}>
            <p className="max-w-4xl text-balance font-display text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1.05]">
              We hand you the keys like the car&apos;s already{' '}
              <span className="serif-italic">yours.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-20 sm:py-24">
        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-10 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="shell grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            title="Four states. Door-to-door."
            intro="Pick up from us or we deliver. Wherever New York, New Jersey, Connecticut or Pennsylvania takes you, we get the car there."
          />
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {AREAS.map((a) => (
              <li
                key={a.short}
                className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-4"
              >
                <MapPin className="h-5 w-5 text-flame" />
                <div>
                  <p className="font-semibold text-ink">{a.full}</p>
                  <p className="text-[0.7rem] uppercase tracking-[0.14em] text-graphite">{a.short}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Reveal variants={fadeUp} className="overflow-hidden rounded-2xl border border-line">
          <img
            src={uns(IMG.nyNight, 1100)}
            alt="New York City at night"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover lg:aspect-[4/3]"
          />
        </Reveal>
      </section>

      <CTABand
        title="Let's put you in the right car."
        sub="From a Camry to a McLaren — tell us what the day needs and we'll make it happen."
        image="yellowNight"
      />
    </>
  )
}

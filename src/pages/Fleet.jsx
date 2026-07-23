import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import CarCard from '../components/CarCard.jsx'
import CTABand from '../components/CTABand.jsx'
import { FLEET, CATEGORIES } from '../data/fleet.js'
import { stagger } from '../lib/motion.js'

export default function Fleet() {
  const [active, setActive] = useState('All')

  const counts = useMemo(() => {
    const c = { All: FLEET.length }
    for (const car of FLEET) c[car.tag] = (c[car.tag] || 0) + 1
    return c
  }, [])

  const cars = active === 'All' ? FLEET : FLEET.filter((c) => c.tag === active)

  return (
    <>
      <PageHeader
        label="The fleet"
        title="Pick your ride."
        intro={`${FLEET.length} cars, three lanes, one honest price each. Filter by what the day calls for — then reserve in a tap.`}
      />

      <section className="shell pb-10">
        <div role="group" aria-label="Filter fleet by category" className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                aria-pressed={isActive}
                onClick={() => setActive(cat)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-transparent ember text-on-accent'
                    : 'border-line-strong bg-paper text-graphite hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
                <span className={`text-[0.7rem] ${isActive ? 'text-on-accent/70' : 'text-mist'}`}>
                  {counts[cat] || 0}
                </span>
              </button>
            )
          })}
        </div>

        <motion.div
          key={active}
          variants={stagger(0, 0.07)}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </motion.div>
      </section>

      <CTABand
        title="Don't see the one?"
        sub="We source cars beyond the site every week. Tell us what you're after and we'll track it down."
        image="blackBuilding"
      />
    </>
  )
}

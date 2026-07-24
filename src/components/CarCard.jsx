import { motion } from 'framer-motion'
import { uns, IMG } from '../data/images.js'
import { fadeUp } from '../lib/motion.js'
import { useReserve } from './Reserve.jsx'

export default function CarCard({ car }) {
  const { open } = useReserve()
  const specs = [car.power, car.mpg || `0–60 ${car.zero}`, `${car.seats} seats`].join('  ·  ')

  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-3xl border-2 border-line bg-paper shadow-card transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-float"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={uns(IMG[car.img], 900)}
          srcSet={`${uns(IMG[car.img], 640)} 640w, ${uns(IMG[car.img], 1100)} 1100w`}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
          alt={car.name}
          loading="lazy"
          decoding="async"
          width="1100"
          height="825"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-paper/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink backdrop-blur-md">
          {car.tag}
        </span>
        {car.badge && (
          <span className="absolute right-3.5 top-3.5 rounded-full ember px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-on-accent">
            {car.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl font-medium leading-tight text-ink">{car.name}</h3>
        <p className="text-[0.82rem] tracking-wide text-graphite">{specs}</p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-medium tabular-nums text-ink">
              ${car.price.toLocaleString()}
            </span>
            <span className="text-[0.78rem] text-graphite">/day</span>
          </div>
          <button
            onClick={() => open(car.name)}
            className="rounded-full ember px-5 py-2.5 text-[0.82rem] font-semibold text-on-accent transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-card active:scale-95"
          >
            Reserve
          </button>
        </div>
      </div>
    </motion.article>
  )
}

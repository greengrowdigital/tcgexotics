import { Phone } from 'lucide-react'
import { SITE } from '../data/site.js'
import { useReserve } from './Reserve.jsx'

// Always-present conversion bar on mobile. Two clear actions: call or reserve.
export default function MobileCTABar() {
  const { open } = useReserve()
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-line bg-paper/90 px-3 pt-2.5 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: 'calc(0.7rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line-strong bg-paper py-3.5 text-[0.92rem] font-semibold text-ink active:scale-[0.98]"
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <button
        onClick={() => open()}
        className="flex flex-[1.4] items-center justify-center gap-2 rounded-full ember py-3.5 text-[0.92rem] font-semibold text-on-accent active:scale-[0.98]"
      >
        Reserve now
      </button>
    </div>
  )
}

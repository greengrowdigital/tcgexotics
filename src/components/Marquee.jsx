// Quiet, slow marquee. Editorial trust strip — small tracked labels with a
// tiny ember dot between them. Duplicated track + edge mask for a clean loop.
export default function Marquee({ items, className = '' }) {
  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {[0, 1].map((dup) => (
          <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <li key={`${dup}-${i}`} className="flex items-center">
                <span className="px-6 text-[0.82rem] font-medium uppercase tracking-[0.18em] text-graphite">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full gauge-conic" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

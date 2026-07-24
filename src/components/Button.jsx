import { Link } from 'react-router-dom'

// One button, a few intents. Renders as <button>, router <Link>, or <a>.
// Sentence case + soft motion for an editorial, premium feel.
const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold whitespace-nowrap ' +
  'transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ' +
  'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 select-none'

const sizes = {
  sm: 'text-sm px-5 py-2.5',
  md: 'text-[0.95rem] px-6 py-3',
  lg: 'text-base px-8 py-3.5',
}

const variants = {
  primary: 'ember text-on-accent hover:-translate-y-0.5 hover:shadow-float',
  secondary: 'bg-paper text-ink border border-line-strong hover:-translate-y-0.5 hover:bg-cloud',
  outline: 'text-white border border-white/35 bg-white/5 backdrop-blur-md hover:bg-white/15',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  icon: Icon,
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {Icon && (
        <Icon
          className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}

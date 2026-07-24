// The TCGEXOTICS brand mark — the chrome-tire carbon badge (client's logo).
export default function Mark({ size = 34, className = '' }) {
  return (
    <img
      src="/logo.jpg"
      alt="TCGEXOTICS"
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

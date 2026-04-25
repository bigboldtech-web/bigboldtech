type Props = {
  size?: number
  className?: string
  color?: string
  title?: string
}

/**
 * Big Bold Tech mark — BB monogram only.
 * Two angular B's mirrored across a shared center spine.
 * 4-unit chamfers on outer corners, 3-unit chamfers on counters,
 * 3-unit wall thickness throughout. Flat cobalt.
 */
export function LogoMark({
  size = 44,
  className,
  color = '#4A74FF',
  title = 'Big Bold Tech',
}: Props) {
  const w = size
  const h = (size * 44) / 46
  return (
    <svg
      width={w}
      height={h}
      viewBox="27 19 46 44"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      {/* Center spine — binds both B's */}
      <rect x="47" y="22" width="6" height="38" fill={color} />

      {/* Right B */}
      <path
        fill={color}
        fillRule="evenodd"
        d="
          M 53 22 L 66 22 L 70 26 L 70 36 L 66 40 L 53 40 Z
          M 56 25 L 63 25 L 66 28 L 66 34 L 63 37 L 56 37 Z
          M 53 42 L 67 42 L 71 46 L 71 56 L 67 60 L 53 60 Z
          M 56 45 L 64 45 L 67 48 L 67 54 L 64 57 L 56 57 Z
        "
      />

      {/* Left B — mirrored across x=50 */}
      <path
        fill={color}
        fillRule="evenodd"
        d="
          M 47 22 L 34 22 L 30 26 L 30 36 L 34 40 L 47 40 Z
          M 44 25 L 37 25 L 34 28 L 34 34 L 37 37 L 44 37 Z
          M 47 42 L 33 42 L 29 46 L 29 56 L 33 60 L 47 60 Z
          M 44 45 L 36 45 L 33 48 L 33 54 L 36 57 L 44 57 Z
        "
      />

      {/* Top-edge hairline highlight on each lobe */}
      <path
        d="M 34 22 L 66 22 M 33 42 L 67 42"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  )
}

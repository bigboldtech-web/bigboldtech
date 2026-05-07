type Props = {
  size?: number
  className?: string
  color?: string
  title?: string
}

/**
 * Big Bold Tech mark — bold "B" tile with a live-pulse accent.
 * Reads as: Big · Bold · live/shipping. Rounded-square brandmark
 * with a thick custom B-glyph and a small accent dot at top-right.
 */
export function LogoMark({
  size = 44,
  className,
  color = '#4A74FF',
  title = 'Big Bold Tech',
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="bbt-tile" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#2D55F5" />
        </linearGradient>
        <linearGradient id="bbt-sheen" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Rounded-square tile with cobalt gradient */}
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#bbt-tile)" />

      {/* Top sheen for depth */}
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#bbt-sheen)" />

      {/* Bold "B" — vertical spine + two stacked rounded lobes */}
      <path
        fill="#FFFFFF"
        d="
          M 14 12
          L 26 12
          C 31.5 12 35 14.8 35 19
          C 35 21.6 33.6 23.4 31.4 24
          C 34 24.7 35.8 26.7 35.8 29.6
          C 35.8 34 32.2 36.8 26.4 36.8
          L 14 36.8
          Z
          M 19.6 16.6
          L 19.6 22.4
          L 25.2 22.4
          C 27.8 22.4 29.4 21.4 29.4 19.5
          C 29.4 17.6 27.8 16.6 25.2 16.6
          Z
          M 19.6 26.6
          L 19.6 32.2
          L 25.8 32.2
          C 28.6 32.2 30.2 31.1 30.2 29.4
          C 30.2 27.7 28.6 26.6 25.8 26.6
          Z
        "
      />

      {/* Inner highlight — top-edge hairline */}
      <path
        d="M 8 6 H 40"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.6"
        fill="none"
      />

      {/* Accent live-dot — top right of the tile */}
      <circle cx="40" cy="8" r="3.4" fill="#9AB6FF" />
      <circle cx="40" cy="8" r="1.6" fill="#FFFFFF" />
    </svg>
  )
}

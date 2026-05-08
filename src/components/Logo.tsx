type Props = {
  size?: number
  className?: string
}

/**
 * Big Bold Tech mark — rounded-square cobalt tile with a custom "B"
 * cut out of it. The B has a strong vertical spine, two crisp lobes,
 * and a deliberate notch at the top-right that doubles as a "+"
 * signal — a small mnemonic for "Big Bold + something next".
 *
 * Renders the same SVG that ships as the favicon (src/app/icon.svg)
 * so the brand mark is consistent everywhere.
 */
export function Logo({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Big Bold Tech"
      className={className}
    >
      <defs>
        <linearGradient id="bbt-tile" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="#5B86FF" />
          <stop offset="55%" stopColor="#3F66F0" />
          <stop offset="100%" stopColor="#2342C9" />
        </linearGradient>
        <linearGradient id="bbt-sheen" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="rgba(255,255,255,0.28)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Tile */}
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#bbt-tile)" />
      {/* Top sheen for depth */}
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#bbt-sheen)" />

      {/*
        Custom "B" — punched out of the tile via fill-rule="evenodd".
        Outer shape = whole letter; inner two paths = the eyes of the B.
        Designed at the 48×48 art-board with a 4-unit grid:
          spine x:13–18 (5w), upper lobe out to x=33, lower lobe out to x=34.
      */}
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        d="
          M 13 11
          H 27
          C 31.5 11 34 13.5 34 17.2
          C 34 19.6 32.7 21.4 30.7 22.4
          C 33.3 23.2 35 25.1 35 28
          C 35 32.4 31.6 35 26 35
          H 13
          Z
          M 18 15.5
          V 21
          H 25.6
          C 27.7 21 29 19.9 29 18.2
          C 29 16.7 27.7 15.5 25.6 15.5
          Z
          M 18 25
          V 30.5
          H 26.2
          C 28.6 30.5 30 29.3 30 27.7
          C 30 26.1 28.6 25 26.2 25
          Z
        "
      />

      {/* "+" notch at the top-right of the tile — a small, deliberate
          identity mark. Two-tone: white core + subtle outer halo. */}
      <g transform="translate(38 9)">
        <circle r="3.6" fill="rgba(255,255,255,0.18)" />
        <path
          d="M -1.6 0 H 1.6 M 0 -1.6 V 1.6"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}

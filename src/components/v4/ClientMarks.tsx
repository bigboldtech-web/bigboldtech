/**
 * Inline SVG marks for placeholder client logos.
 *
 * Each mark is a wordmark + small symbol, sized to ~120×32. They render
 * mono-color (currentColor) so the logo strip can theme them uniformly.
 *
 * IMPORTANT: All names are INVENTED. Not real companies. Replace before launch.
 */

import type { ClientLogoId } from '@/data/clients'

type MarkProps = { className?: string }

const Wordmark = ({
  glyph,
  text,
  letterSpacing = '0.02em',
}: {
  glyph: React.ReactNode
  text: string
  letterSpacing?: string
}) => (
  <svg
    viewBox="0 0 160 32"
    role="img"
    aria-label={text}
    style={{ width: 'auto', height: '100%', maxWidth: '100%' }}
  >
    <g transform="translate(0, 6)">{glyph}</g>
    <text
      x="32"
      y="22"
      fill="currentColor"
      fontFamily="var(--v4-display, sans-serif)"
      fontSize="16"
      fontWeight="700"
      letterSpacing={letterSpacing}
    >
      {text}
    </text>
  </svg>
)

const AtlasBank = (_: MarkProps) => (
  <Wordmark
    text="ATLAS BANK"
    letterSpacing="0.08em"
    glyph={
      <g fill="currentColor">
        {/* a stacked block monogram — banking solidity */}
        <rect x="2" y="2" width="20" height="6" />
        <rect x="2" y="10" width="14" height="6" />
        <rect x="2" y="18" width="20" height="2" />
      </g>
    }
  />
)

const Northwind = (_: MarkProps) => (
  <Wordmark
    text="NORTHWIND"
    glyph={
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        {/* arrow + horizon — logistics / movement */}
        <path d="M2 14 L20 14" />
        <path d="M14 8 L20 14 L14 20" />
      </g>
    }
  />
)

const Meridian = (_: MarkProps) => (
  <Wordmark
    text="MERIDIAN"
    glyph={
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {/* concentric arcs — insurance gravitas */}
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12 H22" />
      </g>
    }
  />
)

const Kestrel = (_: MarkProps) => (
  <Wordmark
    text="KESTREL"
    glyph={
      <g fill="currentColor">
        {/* abstract bird-of-prey wedge */}
        <path d="M2 18 L12 4 L22 18 L17 18 L12 11 L7 18 Z" />
      </g>
    }
  />
)

const HelixLabs = (_: MarkProps) => (
  <Wordmark
    text="HELIX LABS"
    glyph={
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {/* double-helix sketch */}
        <path d="M4 4 C 12 8, 12 16, 20 20" />
        <path d="M20 4 C 12 8, 12 16, 4 20" />
      </g>
    }
  />
)

const Orbis = (_: MarkProps) => (
  <Wordmark
    text="ORBIS"
    letterSpacing="0.12em"
    glyph={
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      </g>
    }
  />
)

const LumenCo = (_: MarkProps) => (
  <Wordmark
    text="LUMEN & CO."
    glyph={
      <g fill="currentColor">
        {/* sunrise / lumen burst */}
        <circle cx="12" cy="14" r="5" />
        <rect x="11" y="0" width="2" height="4" />
        <rect x="11" y="20" width="2" height="4" />
        <rect x="0" y="13" width="4" height="2" />
        <rect x="20" y="13" width="4" height="2" />
      </g>
    }
  />
)

const VergeHealth = (_: MarkProps) => (
  <Wordmark
    text="VERGE HEALTH"
    glyph={
      <g fill="currentColor">
        {/* plus + heartbeat hint */}
        <rect x="9" y="2" width="6" height="20" rx="1.5" />
        <rect x="2" y="9" width="20" height="6" rx="1.5" />
      </g>
    }
  />
)

const CobaltPay = (_: MarkProps) => (
  <Wordmark
    text="COBALT PAY"
    glyph={
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {/* abstract coin / chip */}
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 12 H17" />
        <path d="M12 7 V17" />
      </g>
    }
  />
)

const ArcSystems = (_: MarkProps) => (
  <Wordmark
    text="ARC SYSTEMS"
    glyph={
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        {/* arc */}
        <path d="M3 19 A 10 10 0 0 1 21 19" />
      </g>
    }
  />
)

const registry: Record<ClientLogoId, (props: MarkProps) => React.ReactElement> = {
  'atlas-bank':   AtlasBank,
  'northwind':    Northwind,
  'meridian':     Meridian,
  'kestrel':      Kestrel,
  'helix-labs':   HelixLabs,
  'orbis':        Orbis,
  'lumen-co':     LumenCo,
  'verge-health': VergeHealth,
  'cobalt-pay':   CobaltPay,
  'arc-systems':  ArcSystems,
}

export function ClientMark({ id, className }: { id: ClientLogoId; className?: string }) {
  const Mark = registry[id]
  return <Mark className={className} />
}

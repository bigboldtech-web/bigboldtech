/**
 * Inline SVG marks for placeholder client logos.
 * Render mono-color (currentColor) so the LogoStrip can theme uniformly.
 */
import type { ClientLogoId } from '@/data/clients'

const Wordmark = ({
  glyph,
  text,
  letterSpacing = '0.04em',
}: {
  glyph: React.ReactNode
  text: string
  letterSpacing?: string
}) => (
  <svg
    viewBox="0 0 168 32"
    role="img"
    aria-label={text}
    style={{ width: 'auto', height: '100%', maxWidth: '100%' }}
  >
    <g transform="translate(0, 6)">{glyph}</g>
    <text
      x="34"
      y="22"
      fill="currentColor"
      fontFamily="var(--font-display, sans-serif)"
      fontSize="15"
      fontWeight="700"
      letterSpacing={letterSpacing}
    >
      {text}
    </text>
  </svg>
)

const marks: Record<ClientLogoId, () => React.ReactElement> = {
  cashkr: () => (
    <svg
      viewBox="0 0 168 32"
      role="img"
      aria-label="Cashkr"
      style={{ width: 'auto', height: '100%', maxWidth: '100%' }}
    >
      {/* Glyph: stacked bills hint + accent dot */}
      <g transform="translate(0, 7)" fill="currentColor">
        <rect x="2" y="3" width="22" height="11" rx="2.5" />
        <rect x="0" y="6" width="26" height="11" rx="2.5" opacity="0.55" />
      </g>
      {/* Wordmark: 'Cash' in currentColor, 'kr' in brand cobalt */}
      <text
        x="34"
        y="22"
        fontFamily="var(--font-display, sans-serif)"
        fontSize="16"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        <tspan fill="currentColor">Cash</tspan>
        <tspan fill="#4A74FF">kr</tspan>
      </text>
    </svg>
  ),
  'atlas-bank': () => (
    <Wordmark
      text="ATLAS BANK"
      letterSpacing="0.1em"
      glyph={
        <g fill="currentColor">
          <rect x="2" y="2" width="22" height="5" />
          <rect x="2" y="9" width="14" height="5" />
          <rect x="2" y="16" width="22" height="3" />
        </g>
      }
    />
  ),
  northwind: () => (
    <Wordmark
      text="NORTHWIND"
      glyph={
        <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M2 14 L22 14" />
          <path d="M16 8 L22 14 L16 20" />
        </g>
      }
    />
  ),
  meridian: () => (
    <Wordmark
      text="MERIDIAN"
      glyph={
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="13" cy="12" r="10" />
          <path d="M3 12 H23" />
        </g>
      }
    />
  ),
  kestrel: () => (
    <Wordmark
      text="KESTREL"
      glyph={
        <g fill="currentColor">
          <path d="M2 18 L13 4 L24 18 L19 18 L13 11 L7 18 Z" />
        </g>
      }
    />
  ),
  'helix-labs': () => (
    <Wordmark
      text="HELIX LABS"
      glyph={
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4 C 13 8, 13 16, 22 20" />
          <path d="M22 4 C 13 8, 13 16, 4 20" />
        </g>
      }
    />
  ),
  orbis: () => (
    <Wordmark
      text="ORBIS"
      letterSpacing="0.14em"
      glyph={
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="13" cy="12" r="9" />
          <ellipse cx="13" cy="12" rx="9" ry="3.5" />
        </g>
      }
    />
  ),
  'lumen-co': () => (
    <Wordmark
      text="LUMEN & CO."
      glyph={
        <g fill="currentColor">
          <circle cx="13" cy="14" r="5" />
          <rect x="12" y="0" width="2" height="4" />
          <rect x="12" y="20" width="2" height="4" />
          <rect x="0" y="13" width="4" height="2" />
          <rect x="22" y="13" width="4" height="2" />
        </g>
      }
    />
  ),
  'verge-health': () => (
    <Wordmark
      text="VERGE HEALTH"
      glyph={
        <g fill="currentColor">
          <rect x="10" y="2" width="6" height="20" rx="1.5" />
          <rect x="3" y="9" width="20" height="6" rx="1.5" />
        </g>
      }
    />
  ),
}

export function ClientMark({ id }: { id: ClientLogoId }) {
  const Mark = marks[id]
  return <Mark />
}

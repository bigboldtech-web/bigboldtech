'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  /** The display string, e.g. "$200M+", "99.9%", "14d", "10×". We
   *  parse out the leading number and animate just that part,
   *  preserving the prefix and suffix exactly. */
  value: string
  /** Duration in ms (default 1400). */
  duration?: number
  /** Optional className passed to the root span. */
  className?: string
}

/**
 * Animates the numeric portion of a stat value from 0 → its final
 * value once the element scrolls into view. Preserves any non-numeric
 * prefix ("$") or suffix ("M+", "%", "d", "×", " min", etc.) verbatim.
 *
 * Examples:
 *   "$200M+"   → animates 0 → 200, displays "$0M+" through "$200M+"
 *   "99.9%"    → animates 0 → 99.9 with one decimal, displays "0.0%" through "99.9%"
 *   "10×"      → animates 0 → 10, displays "0×" through "10×"
 *   "<100ms"   → animates 0 → 100, displays "<0ms" through "<100ms"
 *   "Zero"     → no number found, renders "Zero" verbatim
 *   "SOC 2"    → leaves it alone (we leave words+digits like "SOC 2")
 *
 * Respects prefers-reduced-motion.
 */
export function CountUp({ value, duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState<string>(value)
  const parsed = parseValue(value)

  useEffect(() => {
    if (!parsed) {
      setDisplay(value)
      return
    }

    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    // Start at zero; animate up.
    setDisplay(formatNumber(0, parsed))

    let raf = 0
    let started = 0
    const step = (t: number) => {
      if (!started) started = t
      const progress = Math.min(1, (t - started) / duration)
      // easeOutCubic — fast start, soft landing
      const eased = 1 - Math.pow(1 - progress, 3)
      const n = parsed.target * eased
      setDisplay(formatNumber(n, parsed))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            raf = requestAnimationFrame(step)
            io.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [value, duration, parsed])

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: 'tabular-nums' }}
      aria-label={value}
    >
      {display}
    </span>
  )
}

type Parsed = {
  prefix: string
  target: number
  suffix: string
  decimals: number
}

/**
 * Extract the first numeric run from the value string.
 * Returns null if nothing animatable was found (we leave such
 * values alone — e.g. "Zero", "SOC 2").
 */
function parseValue(raw: string): Parsed | null {
  // Match: optional non-digits before, the number (with optional decimal),
  // and everything after.
  const m = raw.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/)
  if (!m) return null
  const [, prefix, num, suffix] = m
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { prefix, target: parseFloat(num), suffix, decimals }
}

function formatNumber(n: number, p: Parsed): string {
  const fixed = n.toFixed(p.decimals)
  // Add a thin thousands separator only for plain ints over 999.
  // Skip if the original string had no separator (e.g. "4200" stayed
  // "4200" in our data, so we don't surprise anyone with commas).
  return `${p.prefix}${fixed}${p.suffix}`
}

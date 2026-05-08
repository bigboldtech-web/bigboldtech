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

type Parsed = {
  prefix: string
  target: number
  suffix: string
  decimals: number
}

/**
 * Animates the numeric portion of a stat string from 0 → its final
 * value once the element scrolls into view. Preserves any non-numeric
 * prefix ("$") or suffix ("M+", "%", "d", "×", " min", etc.).
 *
 * Examples:
 *   "$200M+"  → animates 0 → 200, displays "$0M+" through "$200M+"
 *   "99.9%"   → animates 0 → 99.9 with one decimal
 *   "10×"     → animates 0 → 10
 *   "<100ms"  → animates 0 → 100, prefix "<" preserved
 *   "Zero"    → no number, renders verbatim
 */
export function CountUp({ value, duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState<string>(value)

  useEffect(() => {
    const parsed = parseValue(value)
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

    // Start at zero so the animation has somewhere to go.
    setDisplay(formatNumber(0, parsed))

    let raf = 0
    let started = 0
    let finished = false

    const step = (t: number) => {
      if (!started) started = t
      const progress = Math.min(1, (t - started) / duration)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const n = parsed.target * eased
      setDisplay(formatNumber(n, parsed))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        finished = true
        // Snap to the original string so any rounding diff doesn't show
        setDisplay(value)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !finished) {
            raf = requestAnimationFrame(step)
            io.disconnect()
            return
          }
        }
      },
      // Low threshold so even the bottom edge of the cell triggers
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    )

    io.observe(el)

    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
    // `value` is the only real dep. `duration` is a constant in
    // every callsite. Re-running the effect when those change is fine.
  }, [value, duration])

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

function parseValue(raw: string): Parsed | null {
  const m = raw.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/)
  if (!m) return null
  const [, prefix, num, suffix] = m
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { prefix, target: parseFloat(num), suffix, decimals }
}

function formatNumber(n: number, p: Parsed): string {
  return `${p.prefix}${n.toFixed(p.decimals)}${p.suffix}`
}

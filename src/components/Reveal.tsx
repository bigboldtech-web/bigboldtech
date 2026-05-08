'use client'

import { createElement, useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  /** Delay in ms before this element animates after entering view */
  delay?: number
  /** Element tag to render. Defaults to 'div'. */
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
  className?: string
  /** How far to slide up while fading in (px). Default 16. */
  offset?: number
}

/**
 * Fades + slides content in once it's scrolled into view.
 * Uses IntersectionObserver — no scroll listeners, no jank.
 * Respects prefers-reduced-motion (renders fully visible immediately).
 */
export function Reveal({
  children,
  delay = 0,
  as = 'div',
  className,
  offset = 16,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Use createElement so TypeScript doesn't try to intersect every
  // element type's ref signature when validating the polymorphic Tag.
  return createElement(
    as,
    {
      ref,
      className: cn('reveal-bbt', visible && 'is-visible', className),
      style: {
        '--reveal-delay': `${delay}ms`,
        '--reveal-offset': `${offset}px`,
      } as CSSProperties,
    },
    children,
  )
}

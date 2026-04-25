'use client'

import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

type Props = {
  as?: ElementType
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ as: Tag = 'div', children, delay = 0, className }: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('is-in'), delay)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  const Component = Tag as ElementType
  return (
    <Component ref={ref as never} className={`v4-reveal ${className ?? ''}`}>
      {children}
    </Component>
  )
}

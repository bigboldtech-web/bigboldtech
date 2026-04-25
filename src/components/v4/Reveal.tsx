'use client'

import { useEffect, useRef, type ReactNode, type JSX } from 'react'

type Props = {
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ as = 'div', children, delay = 0, className }: Props) {
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

  // Dynamic JSX tag — using React.createElement so the children typing isn't
  // narrowed to 'never' under strict mode.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = as
  return (
    <Tag ref={ref} className={`v4-reveal ${className ?? ''}`}>
      {children}
    </Tag>
  )
}

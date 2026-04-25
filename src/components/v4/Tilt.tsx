'use client'

import { type ReactNode, useEffect, useRef } from 'react'

export function Tilt({ children, max = 8 }: { children: ReactNode; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    const inner = el.firstElementChild as HTMLElement | null
    if (!inner) return

    let raf = 0
    let trx = 0, try_ = 0, crx = 0, cry = 0

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      try_ = (0.5 - px) * max * 2
      trx = (py - 0.5) * max * 2
    }
    const onLeave = () => { trx = 0; try_ = 0 }

    const tick = () => {
      crx += (trx - crx) * 0.12
      cry += (try_ - cry) * 0.12
      inner.style.transform = `rotateX(${crx.toFixed(2)}deg) rotateY(${cry.toFixed(2)}deg)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [max])

  return (
    <div ref={ref} className="v4-tilt-wrap">
      <div className="v4-tilt">{children}</div>
    </div>
  )
}

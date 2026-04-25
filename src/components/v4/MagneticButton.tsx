'use client'

import { type ReactNode, useEffect, useRef } from 'react'

export function MagneticButton({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    const child = el.firstElementChild as HTMLElement | null
    if (!child) return

    let raf = 0
    let tx = 0, ty = 0, cx = 0, cy = 0

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - (r.left + r.width / 2)) * strength
      ty = (e.clientY - (r.top + r.height / 2)) * strength
    }
    const onLeave = () => { tx = 0; ty = 0 }

    const tick = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      child.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`
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
  }, [strength])

  return <span ref={ref} className="v4-magnet">{children}</span>
}

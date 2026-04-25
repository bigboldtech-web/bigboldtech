'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      document.body.setAttribute('data-touch', 'true')
      return
    }
    document.body.removeAttribute('data-touch')

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let dx = mx, dy = my, rx = mx, ry = my
    let raf = 0

    const onMove = (e: PointerEvent) => { mx = e.clientX; my = e.clientY }
    const onDown = () => dot.classList.add('is-down')
    const onUp = () => dot.classList.remove('is-down')

    const tick = () => {
      dx += (mx - dx) * 0.6
      dy += (my - dy) * 0.6
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const isHover = !!target.closest(
        'a, button, input, [role="button"], [data-cursor="hover"], .v4-product, .v4-feature, .v4-tile, .v4-rail-item'
      )
      dot.classList.toggle('is-hover', isHover)
      ring.classList.toggle('is-hover', isHover)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="v4-cursor-ring" aria-hidden />
      <div ref={dotRef} className="v4-cursor" aria-hidden />
    </>
  )
}

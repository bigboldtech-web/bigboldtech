'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    let raf = 0

    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0
      bar.style.width = `${pct}%`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="v4-progress" aria-hidden>
      <div ref={barRef} className="v4-progress-bar" />
    </div>
  )
}

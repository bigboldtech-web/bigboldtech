'use client'

import { useEffect, useState } from 'react'

function pad(n: number) { return n < 10 ? `0${n}` : `${n}` }

export function HudChip() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const update = () => {
      const d = new Date()
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`)
    }
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="v4-hud" aria-hidden>
      <span className="v4-hud-dot" />
      <span>SYSTEM</span>
      <span className="v4-hud-sep" />
      <span>BBT &middot; v4.2</span>
      <span className="v4-hud-sep" />
      <span className="v4-hud-time">{time}</span>
    </div>
  )
}

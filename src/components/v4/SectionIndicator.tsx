'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero',      label: 'Hero',      num: '00' },
  { id: 'gap',       label: 'Gap',       num: '01' },
  { id: 'solution',  label: 'Solution',  num: '02' },
  { id: 'products',  label: 'Portfolio', num: '03' },
  { id: 'values',    label: 'Values',    num: '04' },
  { id: 'about',     label: 'About',     num: '05' },
  { id: 'contact',   label: 'Contact',   num: '06' },
]

export function SectionIndicator() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handlers: IntersectionObserver[] = []
    const candidates = sections
      .map(({ id }) => document.getElementById(id) || document.querySelector(`section[id="${id}"]`))
      .filter((el): el is Element => Boolean(el))

    candidates.forEach((el) => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
              const id = (entry.target as HTMLElement).id
              if (id) setActive(id)
            }
          })
        },
        { threshold: [0.35, 0.6] }
      )
      io.observe(el)
      handlers.push(io)
    })

    return () => handlers.forEach((io) => io.disconnect())
  }, [])

  return (
    <nav className="v4-rail" aria-label="Page sections">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`v4-rail-item ${active === s.id ? 'is-active' : ''}`}
        >
          <span className="v4-rail-label">{s.num} &mdash; {s.label}</span>
          <span className="v4-rail-dot" />
        </a>
      ))}
    </nav>
  )
}

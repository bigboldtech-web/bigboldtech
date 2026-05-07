'use client'

import dynamic from 'next/dynamic'
import { useState, type CSSProperties } from 'react'
import { Reveal } from './Reveal'

const CrystalCore = dynamic(
  () => import('./CrystalCore').then((m) => m.CrystalCore),
  { ssr: false, loading: () => null }
)

const features = [
  {
    title: 'Full-stack ownership',
    body: 'Strategy, design, backend, mobile, infra, growth. One team end-to-end so nothing drops between handoffs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M12 2 L2 7 L12 12 L22 7 Z M2 17 L12 22 L22 17 M2 12 L12 17 L22 12" />
      </svg>
    ),
  },
  {
    title: 'AI-native by default',
    body: 'Every product is built with AI agents and intent-aware flows at the core — not as a sidebar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2 V5 M12 19 V22 M2 12 H5 M19 12 H22 M4.5 4.5 L6.5 6.5 M17.5 17.5 L19.5 19.5 M4.5 19.5 L6.5 17.5 M17.5 6.5 L19.5 4.5" />
      </svg>
    ),
  },
  {
    title: 'Ship in weeks, not quarters',
    body: 'Tight teams, opinionated tooling, ruthless prioritization. We compress the cycle without compromising the craft.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M13 2 L3 14 H12 L11 22 L21 10 H12 Z" />
      </svg>
    ),
  },
  {
    title: 'Ops-grade reliability',
    body: 'Cashkr runs 4,200+ orders/month on our infra. We design for the day after launch, not just demo day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12 H7 L10 4 L14 20 L17 12 H21" />
      </svg>
    ),
  },
]

export function SolutionV4() {
  const [active, setActive] = useState(0)
  return (
    <section className="v4-section v4-solution" id="solution">
      <div className="v4-container">
        <Reveal>
          <span className="v4-eyebrow">The Solution</span>
          <h2 className="v4-h2">
            An AI-native studio that ships{' '}
            <span className="v4-italic">whole products</span>, not pitch decks.
          </h2>
          <p className="v4-sub">
            We&rsquo;re a product studio + venture lab. We build SaaS for our
            own portfolio, and we partner with founders to ship theirs. Same
            team. Same standard. Same speed.
          </p>
        </Reveal>

        <div className="v4-solution-grid">
          <div
            className="v4-solution-features"
            style={{ '--active-index': active } as CSSProperties}
          >
            <span className="v4-feature-rail" aria-hidden />
            {features.map((f, i) => (
              <button
                key={f.title}
                type="button"
                className={`v4-feature ${active === i ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <div className="v4-feature-counter">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="v4-feature-icon">{f.icon}</div>
                <div className="v4-feature-body">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </button>
            ))}
          </div>

          <Reveal className="v4-solution-visual">
            <span className="v4-sv-badge">Live &middot; WebGL</span>
            <CrystalCore activeIndex={active} />
            <div className="v4-sv-progress" aria-hidden>
              {features.map((_, i) => (
                <span key={i} className={`v4-sv-tick ${i <= active ? 'is-on' : ''}`} />
              ))}
            </div>
            <div className="v4-sv-label">
              <span>BBT.STUDIO / {String(active + 1).padStart(3, '0')}</span>
              <span>{features[active].title}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

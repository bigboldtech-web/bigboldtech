'use client'

import dynamic from 'next/dynamic'
import { CharReveal } from './CharReveal'
import { MagneticButton } from './MagneticButton'

const WaveMesh = dynamic(
  () => import('./WaveMesh').then((m) => m.WaveMesh),
  { ssr: false, loading: () => null }
)

export function HeroV4() {
  return (
    <section className="v4-hero" id="hero">
      <span className="v4-hero-eyebrow">Now onboarding new partners — open</span>

      <h1 className="has-chars">
        <span className="v4-line"><CharReveal>Big ideas.</CharReveal></span>
        <br />
        <span className="v4-italic"><CharReveal baseDelay={0.55}>Bolder</CharReveal></span>
        {' '}
        <span className="v4-line"><CharReveal baseDelay={0.85}>execution.</CharReveal></span>
      </h1>

      <p className="v4-hero-sub">
        We design and ship AI-native software for the operators, founders, and
        teams shaping what comes next. Built decisively. Shipped relentlessly.
      </p>

      <div className="v4-hero-cta-row">
        <MagneticButton>
          <a href="#products" className="v4-btn v4-btn-primary">
            See our work
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12">
              <path d="M3 9 L9 3 M5 3 H9 V7" />
            </svg>
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href="#contact" className="v4-btn v4-btn-ghost">Build with us</a>
        </MagneticButton>
      </div>

      <div className="v4-hero-visual">
        <WaveMesh />
      </div>

      <div className="v4-hero-trust">
        <span>50+ engagements shipped</span>
        <span className="dot" />
        <span>6 live products</span>
        <span className="dot" />
        <span>$50M+ revenue moved</span>
      </div>
    </section>
  )
}

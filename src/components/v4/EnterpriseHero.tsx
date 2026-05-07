'use client'

import { Reveal } from './Reveal'
import { MediaHero } from './MediaHero'
import { videos } from '@/data/media'

export function EnterpriseHero() {
  return (
    <section className="v4-ehero" id="enterprise-hero">
      <div className="v4-container">
        <div className="v4-ehero-grid">
          <Reveal className="v4-ehero-copy">
            <span className="v4-eyebrow">For Enterprise</span>
            <h1>
              Senior product teams,{' '}
              <span className="v4-italic">on demand.</span>
              <br />
              Indemnified, audited, on-call.
            </h1>
            <p>
              Big Bold Tech runs production software for fintech, healthcare,
              logistics, and SaaS leaders. We slot into your stack with a
              named team, a real SLA, and the documentation procurement
              actually wants.
            </p>

            <div className="v4-ehero-actions">
              <a href="#capabilities" className="v4-btn v4-btn-primary">
                Request capabilities deck
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12">
                  <path d="M3 9 L9 3 M5 3 H9 V7" />
                </svg>
              </a>
              <a href="#trust" className="v4-btn v4-btn-ghost">
                Read the trust page
              </a>
            </div>

            <ul className="v4-ehero-bullets">
              <li>SOC 2 Type II audit underway · bridge letter on request</li>
              <li>Two-timezone on-call rotation · P0 acked &lt; 15 min</li>
              <li>Source code owned by the client from day one</li>
            </ul>
          </Reveal>

          <Reveal className="v4-ehero-media" delay={120}>
            <MediaHero
              kind="video"
              media={videos.cityNight}
              tint="strong"
              ratio="4/5"
              caption="Live · production telemetry"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

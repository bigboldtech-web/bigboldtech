'use client'

import { Reveal } from './Reveal'

export function CTAV4() {
  return (
    <section className="v4-cta" id="contact">
      <Reveal className="v4-cta-card">
        <div className="content">
          <span className="v4-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            Build with us
          </span>
          <h2>
            Got a bold idea? <span className="v4-italic">Let&rsquo;s ship it.</span>
          </h2>
          <p>
            Tell us what you&rsquo;re building. We&rsquo;ll come back within
            48 hours with a sharp first take, and a path to v1.
          </p>
          <div className="v4-cta-actions">
            <a href="mailto:hello@bigboldtech.com" className="v4-btn v4-btn-primary">
              Start a project
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12">
                <path d="M3 9 L9 3 M5 3 H9 V7" />
              </svg>
            </a>
            <a href="#" className="v4-btn v4-btn-ghost">Book a 30-min call</a>
          </div>
        </div>
      </Reveal>

      <div className="v4-bigword">BIG&nbsp;BOLD</div>
    </section>
  )
}

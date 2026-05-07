'use client'

import { Reveal } from './Reveal'

export function EnterpriseCTA() {
  return (
    <section className="v4-cta v4-ecta" id="contact">
      <Reveal className="v4-cta-card">
        <div className="content">
          <span
            className="v4-eyebrow"
            style={{ justifyContent: 'center', display: 'inline-flex' }}
          >
            Procurement-ready
          </span>
          <h2>
            Ready when your <span className="v4-italic">RFP is.</span>
          </h2>
          <p>
            Send us your scope, your security questionnaire, or just an
            org chart. We&rsquo;ll come back within two business days with a
            shaped proposal, named team leads, and a path through your
            vendor-onboarding.
          </p>
          <div className="v4-cta-actions">
            <a
              href="mailto:enterprise@bigboldtech.com?subject=Enterprise%20engagement%20enquiry"
              className="v4-btn v4-btn-primary"
            >
              Email enterprise@bigboldtech.com
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                width="12"
                height="12"
              >
                <path d="M3 9 L9 3 M5 3 H9 V7" />
              </svg>
            </a>
            <a href="/contact?topic=enterprise" className="v4-btn v4-btn-ghost">
              Submit an RFP
            </a>
          </div>
        </div>
      </Reveal>
      <div className="v4-bigword">ENTERPRISE</div>
    </section>
  )
}

import { InlineContactForm } from '@/components/sections/InlineContactForm'

export function CTABanner() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="cta-split reveal">
          <div className="cta-left">
            <div className="sec-label">Ready to Start?</div>
            <h2 className="sec-title">Let&apos;s Engineer<br />Your Next Chapter</h2>
            <p className="sec-sub">No pitch decks, no fluff — just a real conversation about what&apos;s possible. Tell us about your project and we&apos;ll show you exactly how we can help.</p>
            <div className="cta-trust-signals">
              <div className="trust-item">
                <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 10l4 4 8-8"/><circle cx="10" cy="10" r="9"/></svg>
                <span>Response within 24 hours</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 10l4 4 8-8"/><circle cx="10" cy="10" r="9"/></svg>
                <span>No commitment required</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 10l4 4 8-8"/><circle cx="10" cy="10" r="9"/></svg>
                <span>Enterprise-only engagements</span>
              </div>
            </div>
          </div>
          <div className="cta-right">
            <InlineContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

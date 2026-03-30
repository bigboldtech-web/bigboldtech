import Link from 'next/link'

export function FounderNote() {
  return (
    <section className="sec founder-section">
      <div className="wrap">
        <div className="founder-layout reveal">
          <div className="founder-avatar">
            <div className="founder-initials">MC</div>
          </div>
          <div className="founder-content">
            <blockquote className="founder-quote">
              &ldquo;We don&apos;t build technology for the sake of it. Every line of code, every campaign, every system we deploy exists for one reason: to move the needle on your business outcomes. If it doesn&apos;t drive revenue, reduce cost, or create a competitive moat, we don&apos;t ship it.&rdquo;
            </blockquote>
            <div className="founder-info">
              <div>
                <div className="founder-name">Marcus Chen</div>
                <div className="founder-role">Founder & CEO, BigBoldTech</div>
              </div>
              <div className="founder-links">
                <a href="https://linkedin.com/company/bigboldtech" target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                  Connect on LinkedIn
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <Link href="/about" className="founder-about-link">
                  Meet Our Team
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

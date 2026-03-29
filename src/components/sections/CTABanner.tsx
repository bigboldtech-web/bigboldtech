import Link from 'next/link'

export function CTABanner() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="cta reveal">
          <h2 className="sec-title">Ready to Build<br />Something Bold?</h2>
          <p className="sec-sub" style={{ margin: '0 auto 40px', textAlign: 'center', maxWidth: '480px' }}>
            Let&apos;s talk about your next project. No pitch decks, no fluff — just a real conversation about what&apos;s possible.
          </p>
          <Link href="/contact" className="btn-glow">
            Book Discovery Call
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

import { trustHighlights } from '@/data/stats'

export function TrustBadges() {
  return (
    <section className="v4-section v4-trust">
      <div className="v4-container">
        <span className="v4-eyebrow">Trust & Security</span>
        <h2 className="v4-h2">
          Built to <span className="v4-italic">survive procurement</span>.
        </h2>
        <p className="v4-sub">
          Documentation our buyers actually need. Bridge letters, sub-processor
          lists, on-call SLAs — available before the first NDA.
        </p>

        <div className="v4-trust-grid">
          {trustHighlights.map((t) => (
            <article key={t.title} className="v4-trust-card">
              <div className="v4-trust-status" data-placeholder={t.placeholder ? 'true' : 'false'}>
                {t.status}
              </div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </article>
          ))}
        </div>

        <p className="v4-trust-foot">
          Need a specific control mapped (HIPAA, PCI-DSS, ISO 27001)?{' '}
          <a href="/contact?topic=trust">Ask for the document pack.</a>
        </p>
      </div>
    </section>
  )
}

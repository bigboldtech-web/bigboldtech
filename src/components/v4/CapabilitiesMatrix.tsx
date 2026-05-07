type Capability = {
  area: string
  detail: string
  /** Engagement type tags this row covers */
  models: ('fixed' | 'embedded' | 'partner')[]
}

const capabilities: Capability[] = [
  { area: 'Product strategy & discovery',     detail: 'Wedge sharpening, GTM, competitive teardown', models: ['fixed', 'embedded', 'partner'] },
  { area: 'AI / LLM application engineering', detail: 'Agents, RAG, eval harnesses, on-call for prod models', models: ['fixed', 'embedded', 'partner'] },
  { area: 'Full-stack web (Next.js, RSC)',    detail: 'Marketing + product surfaces, internal tools, B2B portals', models: ['fixed', 'embedded', 'partner'] },
  { area: 'Mobile (React Native, Expo)',      detail: 'Cross-platform consumer + ops apps with crash analytics', models: ['fixed', 'embedded'] },
  { area: 'Backend & data',                   detail: 'Postgres, event pipelines, vector DBs, OLAP for analytics', models: ['embedded', 'partner'] },
  { area: 'Infrastructure & SRE',             detail: 'AWS / GCP, IaC, on-call rotation, P0–P2 SLAs', models: ['embedded', 'partner'] },
  { area: 'Brand, design system, motion',     detail: 'Conviction-led identity work, design tokens, R3F/WebGL', models: ['fixed', 'embedded'] },
  { area: 'Growth & lifecycle',               detail: 'Performance marketing, attribution, lifecycle automation', models: ['embedded', 'partner'] },
]

const modelLabels = {
  fixed: 'Fixed scope',
  embedded: 'Embedded squad',
  partner: 'Long-term partner',
} as const

export function CapabilitiesMatrix() {
  return (
    <section className="v4-section v4-caps">
      <div className="v4-container">
        <span className="v4-eyebrow">Capabilities</span>
        <h2 className="v4-h2">
          One team. <span className="v4-italic">Whole-stack</span> coverage.
        </h2>
        <p className="v4-sub">
          What we do, and which engagement model it fits under. Mix and match
          across the same retainer.
        </p>

        <div className="v4-caps-table" role="table" aria-label="Capabilities matrix">
          <div className="v4-caps-row v4-caps-head" role="row">
            <div className="v4-caps-cell" role="columnheader">Capability</div>
            <div className="v4-caps-cell v4-caps-detail" role="columnheader">What it includes</div>
            <div className="v4-caps-cell v4-caps-models" role="columnheader">
              <span>{modelLabels.fixed}</span>
              <span>{modelLabels.embedded}</span>
              <span>{modelLabels.partner}</span>
            </div>
          </div>

          {capabilities.map((cap) => (
            <div key={cap.area} className="v4-caps-row" role="row">
              <div className="v4-caps-cell v4-caps-area" role="cell">{cap.area}</div>
              <div className="v4-caps-cell v4-caps-detail" role="cell">{cap.detail}</div>
              <div className="v4-caps-cell v4-caps-models" role="cell">
                <span className={cap.models.includes('fixed')    ? 'is-on' : ''} aria-label={modelLabels.fixed} />
                <span className={cap.models.includes('embedded') ? 'is-on' : ''} aria-label={modelLabels.embedded} />
                <span className={cap.models.includes('partner')  ? 'is-on' : ''} aria-label={modelLabels.partner} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

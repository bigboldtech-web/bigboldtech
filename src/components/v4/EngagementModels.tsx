type Model = {
  name: string
  tagline: string
  startingAt: string
  duration: string
  team: string
  bestFor: string
  includes: string[]
  isFlagship?: boolean
  /** Mark numbers as placeholder so we can find/replace before launch */
  placeholder?: boolean
}

const models: Model[] = [
  {
    name: 'Fixed scope',
    tagline: 'A defined deliverable, a fixed timeline, a fixed price.',
    startingAt: '$60K',
    duration: '4–10 weeks',
    team: '3–4 specialists',
    bestFor:
      'A v1 rebuild, a new product surface, an AI-feature drop, or a brand + design-system refresh.',
    includes: [
      'Discovery, scope-locking, and signed SOW',
      'Weekly demos with stakeholders',
      'Production handover with documentation',
      'One month of post-launch support',
    ],
    placeholder: true,
  },
  {
    name: 'Embedded squad',
    tagline: 'A senior team that ships alongside yours, every sprint.',
    startingAt: '$45K / month',
    duration: '6–12 month minimum',
    team: '4–6 cross-functional',
    bestFor:
      'Building a new line of business, scaling an AI product, or augmenting in-house engineering when hiring is slow.',
    includes: [
      'Named team leads with multi-year tenure',
      'Daily standups, your project management tools',
      'Two-timezone coverage with on-call',
      'Quarterly business reviews with metrics',
    ],
    isFlagship: true,
    placeholder: true,
  },
  {
    name: 'Long-term partner',
    tagline: 'We own a critical surface end-to-end. You own the relationship.',
    startingAt: 'Custom',
    duration: '12+ months',
    team: 'Scales with the work',
    bestFor:
      'Enterprises who want a single vendor accountable for a product line, with executive sponsorship and full P&L transparency.',
    includes: [
      'Joint roadmap with quarterly OKRs',
      'Full SRE / on-call ownership',
      'Strategy + commercial reviews with the leadership team',
      'Source-code escrow + key-person insurance',
    ],
    placeholder: true,
  },
]

export function EngagementModels() {
  return (
    <section className="v4-section v4-models" id="engagement">
      <div className="v4-container">
        <span className="v4-eyebrow">Engagement</span>
        <h2 className="v4-h2">
          Three ways to <span className="v4-italic">work with us</span>.
        </h2>
        <p className="v4-sub">
          Pick the shape that fits the problem. Move between them as the work
          changes — same team, same standard, no re-onboarding.
        </p>

        <div className="v4-models-grid">
          {models.map((m) => (
            <article
              key={m.name}
              className={`v4-model-card ${m.isFlagship ? 'is-flagship' : ''}`}
            >
              {m.isFlagship && <div className="v4-model-flag">Most chosen</div>}
              <div className="v4-model-head">
                <h3>{m.name}</h3>
                <p className="v4-model-tagline">{m.tagline}</p>
              </div>

              <dl className="v4-model-meta">
                <div>
                  <dt>Starting at</dt>
                  <dd>{m.startingAt}</dd>
                </div>
                <div>
                  <dt>Duration</dt>
                  <dd>{m.duration}</dd>
                </div>
                <div>
                  <dt>Team</dt>
                  <dd>{m.team}</dd>
                </div>
              </dl>

              <p className="v4-model-best">
                <strong>Best for: </strong>
                {m.bestFor}
              </p>

              <ul className="v4-model-includes">
                {m.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <a href="#contact" className="v4-model-cta">
                Talk about a {m.name.toLowerCase()} engagement
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12">
                  <path d="M3 6 H9 M6 3 L9 6 L6 9" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <p className="v4-models-foot">
          Pricing is a starting point. Final structure depends on team size,
          duration, IP arrangement, and on-call coverage. All numbers are
          before discounts for multi-year commitments.
        </p>
      </div>
    </section>
  )
}

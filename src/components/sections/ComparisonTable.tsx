export function ComparisonTable() {
  const rows = [
    { criteria: 'Team Structure', traditional: 'Siloed departments, hand-offs between teams', bbt: 'Full-stack squad owns everything end-to-end' },
    { criteria: 'Technology Approach', traditional: 'Off-the-shelf tools, cookie-cutter templates', bbt: 'Custom-built systems engineered for your scale' },
    { criteria: 'AI Integration', traditional: 'Bolt-on AI as an afterthought or upsell', bbt: 'AI-native thinking embedded in every solution' },
    { criteria: 'Security Standard', traditional: 'Basic SSL and shared hosting', bbt: 'Enterprise WAF, server hardening, SOC 2 practices' },
    { criteria: 'Reporting', traditional: 'Vanity metrics and templated PDFs', bbt: 'Custom Looker dashboards tied to revenue outcomes' },
    { criteria: 'Communication', traditional: 'Project manager relay, weekly status emails', bbt: 'Direct engineer access, real-time collaboration' },
    { criteria: 'SEO Strategy', traditional: 'Traditional keyword targeting only', bbt: 'GEO + AEO + LLMO for AI search visibility' },
    { criteria: 'Post-Launch', traditional: 'Hand off and move on', bbt: 'Ongoing optimization, monitoring, and scaling' },
  ]

  return (
    <section className="sec sec-dark" id="compare">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label">The Difference</div>
          <h2 className="sec-title">Why BigBoldTech<br />Over Traditional Agencies?</h2>
          <p className="sec-sub">We are not another vendor. Here is how we stack up against the industry norm.</p>
        </div>

        <div className="comparison-table reveal">
          <div className="comp-header">
            <div className="comp-cell comp-criteria">Criteria</div>
            <div className="comp-cell comp-trad">Traditional Agency</div>
            <div className="comp-cell comp-bbt">BigBoldTech</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="comp-row">
              <div className="comp-cell comp-criteria">{row.criteria}</div>
              <div className="comp-cell comp-trad">{row.traditional}</div>
              <div className="comp-cell comp-bbt">{row.bbt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Audit',
      description: 'Deep-dive into your business, tech stack, and growth goals. We audit what exists, identify gaps, and map the highest-impact opportunities.',
    },
    {
      num: '02',
      title: 'Architect & Plan',
      description: 'Blueprint the solution with clear milestones, tech decisions, and success metrics. No ambiguity, no surprises — you see the roadmap before we write a line of code.',
    },
    {
      num: '03',
      title: 'Build & Ship',
      description: 'Agile sprints with working demos every two weeks. CI/CD from day one, automated testing, and staging environments that mirror production.',
    },
    {
      num: '04',
      title: 'Optimize & Scale',
      description: 'Post-launch monitoring, performance tuning, and continuous optimization. We track the metrics that matter and iterate based on real data.',
    },
  ]

  return (
    <section className="sec methodology-sec">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>Our Process</div>
          <h2 className="sec-title">How We Deliver<br />Outcomes, Not Outputs</h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>A battle-tested methodology refined across 50+ enterprise engagements. Every step is designed to reduce risk and accelerate time-to-value.</p>
        </div>

        <div className="method-grid">
          {steps.map((step) => (
            <div key={step.num} className="method-card reveal">
              <div className="method-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

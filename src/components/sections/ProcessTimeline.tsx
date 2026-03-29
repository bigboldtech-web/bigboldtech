export function ProcessTimeline() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 className="sec-title">Discovery → Domination</h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>A battle-tested process refined across 50+ projects. No surprises.</p>
        </div>
        <div className="proc-track">
          <div className="proc-step reveal">
            <div className="proc-dot">01</div>
            <h4>Discovery & Audit</h4>
            <p>Deep dive into your business, tech, competitors, and bottlenecks. We find what&apos;s broken before we build.</p>
          </div>
          <div className="proc-step reveal">
            <div className="proc-dot">02</div>
            <h4>Architecture & Strategy</h4>
            <p>Blueprint the system — stack decisions, infra design, funnels, KPIs. Nothing ships without a plan.</p>
          </div>
          <div className="proc-step reveal">
            <div className="proc-dot">03</div>
            <h4>Build & Ship</h4>
            <p>Agile sprints, weekly demos, CI/CD from day one. You see progress in real-time, not after months of silence.</p>
          </div>
          <div className="proc-step reveal">
            <div className="proc-dot">04</div>
            <h4>Scale & Optimize</h4>
            <p>Launch is the starting line. Continuous A/B testing, monitoring, and performance tuning to compound results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

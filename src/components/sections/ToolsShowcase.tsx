import Link from 'next/link'

export function ToolsShowcase() {
  const tools = [
    {
      name: 'BBT Deploy Engine',
      tag: 'CI/CD Automation',
      description: 'Our proprietary deployment pipeline that takes enterprise applications from code to production in under 8 minutes. Zero-downtime deployments, automated rollbacks, and real-time health monitoring built in.',
      features: ['Zero-downtime deploys', 'Auto-rollback on errors', 'Multi-environment staging', 'Real-time health checks'],
      color: 'var(--cyan)',
    },
    {
      name: 'GrowthOS Dashboard',
      tag: 'Analytics & Attribution',
      description: 'A unified command center that connects your ad platforms, analytics, CRM, and revenue data into a single real-time dashboard. Custom-built for enterprise marketing teams who need signal, not noise.',
      features: ['Multi-touch attribution', 'Revenue-linked reporting', 'Real-time ROAS tracking', 'Custom KPI scorecards'],
      color: 'var(--green)',
    },
    {
      name: 'AI Visibility Tracker',
      tag: 'GEO / AEO / LLMO',
      description: 'Track how your brand appears across AI search engines — ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. Monitor citation frequency, sentiment, and competitive share-of-voice in AI-generated answers.',
      features: ['AI citation monitoring', 'Competitor benchmarking', 'Prompt-level tracking', 'Weekly visibility reports'],
      color: 'var(--violet)',
    },
    {
      name: 'LeadForge',
      tag: 'Lead Qualification Engine',
      description: 'An AI-powered lead scoring and routing system that qualifies inbound leads in real-time based on firmographic data, behavioral signals, and intent indicators. Integrates with your CRM and ad platforms.',
      features: ['Real-time lead scoring', 'CRM auto-sync', 'Intent signal detection', 'Smart routing rules'],
      color: 'var(--amber)',
    },
  ]

  return (
    <section className="sec sec-dark" id="tools">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label">Proprietary Technology</div>
          <h2 className="sec-title">Tools & Frameworks<br />We Built In-House</h2>
          <p className="sec-sub">We do not just use third-party tools — we build our own. These proprietary systems give our clients an unfair advantage that no off-the-shelf solution can match.</p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, i) => (
            <div key={i} className="tool-card reveal">
              <div className="tool-header">
                <span className="tool-tag" style={{ color: tool.color, borderColor: tool.color }}>{tool.tag}</span>
                <h3>{tool.name}</h3>
              </div>
              <p className="tool-desc">{tool.description}</p>
              <ul className="tool-features">
                {tool.features.map((f, j) => (
                  <li key={j}>
                    <svg width="16" height="16" fill="none" stroke={tool.color} strokeWidth="2"><path d="M3 8l3 3 7-7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
          <Link href="/contact" className="btn-glow">
            Request a Demo
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

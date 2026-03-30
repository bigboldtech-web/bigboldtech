import Link from 'next/link'

export function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-tag">
              <span className="dot" />
              Now Accepting Partners — Q2 2026
            </div>
            <h1>We Engineer<br /><span className="glow">Technology That<br />Scales Empires</span></h1>
            <p className="hero-desc">Enterprise-grade AI systems, SaaS platforms, mobile apps, and performance marketing — built for businesses doing $1M+ that refuse to settle for average technology.</p>
            <div className="hero-platforms">
              <span className="platform-tag">AI &amp; Automation</span>
              <span className="platform-tag">SaaS</span>
              <span className="platform-tag">SEO / GEO / AEO</span>
              <span className="platform-tag">Performance Ads</span>
            </div>
            <div className="hero-btns">
              <Link href="/contact" className="btn-glow">
                Book Discovery Call
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
              <a href="#services" className="btn-ghost">
                Explore Capabilities
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot r" />
                <div className="terminal-dot y" />
                <div className="terminal-dot g" />
                <span className="terminal-title">bigboldtech — deployment pipeline</span>
              </div>
              <div className="terminal-body">
                <div className="line"><span className="cmt">{'// Initializing your growth engine...'}</span></div>
                <div className="line"><span className="cmd">$</span> bbt deploy <span className="flag">--stack</span> <span className="str">&quot;enterprise&quot;</span></div>
                <div className="line"><span className="cmd">[done]</span> AI Models trained &amp; deployed</div>
                <div className="line"><span className="cmd">[done]</span> SaaS platform live (99.9% uptime)</div>
                <div className="line"><span className="cmd">[done]</span> CI/CD pipeline configured</div>
                <div className="line"><span className="cmd">[done]</span> Performance ads launched</div>
                <div className="line"><span className="cmd">[done]</span> Analytics dashboards streaming</div>
                <div className="line"><br /><span className="cmd">$</span> bbt status <span className="flag">--revenue</span></div>
                <div className="line"><span className="str">&gt; Revenue up 340% — System nominal</span><span className="terminal-cursor" /></div>
              </div>
            </div>
            <div className="stats-bar">
              <div className="stat-chip"><div className="stat-val">50+</div><div className="stat-lbl">Projects</div></div>
              <div className="stat-chip"><div className="stat-val">21+</div><div className="stat-lbl">Cities</div></div>
              <div className="stat-chip"><div className="stat-val">9.2x</div><div className="stat-lbl">Avg ROAS</div></div>
              <div className="stat-chip"><div className="stat-val">99.9%</div><div className="stat-lbl">Uptime</div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

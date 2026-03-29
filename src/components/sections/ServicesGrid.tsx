import Link from 'next/link'

const ArrowIcon = () => (
  <div className="svc-arrow">
    <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  </div>
)

export function ServicesGrid() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label">Capabilities</div>
          <h2 className="sec-title">Full-Spectrum Technology<br />& Growth Engine</h2>
          <p className="sec-sub">Nine verticals. One team. Zero gaps. Every service is built to compound your growth — not just check a box.</p>
        </div>
        <div className="svc-grid">
          {/* Service 1: AI & Automation */}
          <Link href="/services/ai-automation" className="svc reveal">
            <div className="svc-num">001</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3>AI & Automation</h3>
            <p>Custom AI agents, LLM integrations, intelligent chatbots, workflow automation, and predictive analytics that transform operations at scale.</p>
            <ArrowIcon />
          </Link>

          {/* Service 2: SaaS Product Development */}
          <Link href="/services/saas-development" className="svc reveal">
            <div className="svc-num">002</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h2"/><path d="M7 12h4"/>
              </svg>
            </div>
            <h3>SaaS Product Development</h3>
            <p>Multi-tenant platforms from architecture to scale. Billing systems, APIs, admin dashboards, and user management — production-ready from day one.</p>
            <ArrowIcon />
          </Link>

          {/* Service 3: Web Applications */}
          <Link href="/services/web-apps" className="svc reveal">
            <div className="svc-num">003</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 8l-4 4 4 4"/><path d="M17 8l4 4-4 4"/><path d="M14 4l-4 16"/>
              </svg>
            </div>
            <h3>Web Applications</h3>
            <p>Next.js platforms, admin panels, e-commerce engines, and customer portals built for speed, conversion, and SEO dominance.</p>
            <ArrowIcon />
          </Link>

          {/* Service 4: Mobile Applications */}
          <Link href="/services/mobile-apps" className="svc reveal">
            <div className="svc-num">004</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <path d="M12 18h.01"/>
              </svg>
            </div>
            <h3>Mobile Applications</h3>
            <p>Cross-platform Flutter apps for iOS and Android. Push notifications, real-time features, offline-first architecture, and App Store optimization.</p>
            <ArrowIcon />
          </Link>

          {/* Service 5: Performance Marketing */}
          <Link href="/services/performance-marketing" className="svc reveal">
            <div className="svc-num">005</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <h3>Performance Marketing</h3>
            <p>Google Ads, Meta Ads, LinkedIn campaigns. ROAS-first strategy with full-funnel attribution, creative testing, and intelligent budget allocation.</p>
            <ArrowIcon />
          </Link>

          {/* Service 6: SEO & Organic Growth */}
          <Link href="/services/seo" className="svc reveal">
            <div className="svc-num">006</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#06D6A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/>
              </svg>
            </div>
            <h3>SEO & Organic Growth</h3>
            <p>Technical SEO, content strategy, and next-gen optimization — GEO, AEO, LLMO — so you dominate search, AI answers, and LLM citations alike.</p>
            <ArrowIcon />
          </Link>

          {/* Service 7: Email & CRM Automation */}
          <Link href="/services/email-marketing" className="svc reveal">
            <div className="svc-num">007</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4CC9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
              </svg>
            </div>
            <h3>Email & CRM Automation</h3>
            <p>Lifecycle email flows, transactional messaging, WhatsApp Business API, CRM integration, and deliverability infrastructure that hits the inbox.</p>
            <ArrowIcon />
          </Link>

          {/* Service 8: DevOps & Cloud */}
          <Link href="/services/devops" className="svc reveal">
            <div className="svc-num">008</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#E0AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3>DevOps & Cloud</h3>
            <p>CI/CD pipelines, server hardening, WAF, monitoring, auto-scaling, and disaster recovery. Security-first infrastructure that never goes down.</p>
            <ArrowIcon />
          </Link>

          {/* Service 9: Analytics & Intelligence */}
          <Link href="/services/analytics" className="svc reveal">
            <div className="svc-num">009</div>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F72585" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M2 20h20"/>
              </svg>
            </div>
            <h3>Analytics & Intelligence</h3>
            <p>GA4 advanced setups, custom Looker dashboards, event tracking, attribution modeling, and real-time business intelligence that drives decisions.</p>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

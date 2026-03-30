import type { Metadata } from 'next'
import Link from 'next/link'
import { team } from '@/data/team'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { FounderNote } from '@/components/sections/FounderNote'
import { InlineContactForm } from '@/components/sections/InlineContactForm'

export const metadata: Metadata = {
  title: 'About',
  description: 'BigBoldTech is an enterprise technology agency building AI systems, SaaS platforms, and growth engines for ambitious businesses.',
}

export default function AboutPage() {
  const values = [
    { num: '01', title: 'Ownership Over Output', desc: 'We do not ship tasks — we own outcomes. Every team member thinks like a co-founder of your project. Your success is our reputation on the line.' },
    { num: '02', title: 'Radical Transparency', desc: 'No hidden costs, no scope surprises. You see exactly what we are building, why, and what it costs — in real-time dashboards, not monthly PDFs.' },
    { num: '03', title: 'Engineering Excellence', desc: 'Clean code, tested systems, documented architecture. We build for the long term, not the demo. Every system ships with monitoring, CI/CD, and security baked in.' },
    { num: '04', title: 'AI-Native Thinking', desc: 'Every system we design considers where AI can multiply efficiency. We do not bolt AI on as an afterthought — it is woven into our engineering DNA.' },
    { num: '05', title: 'Data Over Opinions', desc: 'Every decision is backed by data. Every rupee is tracked. Every result is measured. We build custom dashboards so you never have to ask "is this working?"' },
    { num: '06', title: 'Build, Do Not Blame', desc: 'When something breaks, we fix it. When something is unclear, we clarify. We do not point fingers between teams — because there is only one team: yours.' },
  ]

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '12', label: 'A-Star Engineers' },
    { value: '9', label: 'Service Verticals' },
    { value: '21+', label: 'Cities Reached' },
    { value: '99.9%', label: 'Uptime Record' },
    { value: '$50M+', label: 'Client Revenue Impacted' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
            <div className="sec-label">About BigBoldTech</div>
            <h1 className="sec-title">We Build What<br />Others Won&apos;t Attempt</h1>
            <p className="sec-sub" style={{ maxWidth: '640px' }}>BigBoldTech is an enterprise technology agency headquartered in India, serving ambitious businesses globally. We combine deep engineering expertise with growth marketing to deliver technology that compounds your success — not just checks a box.</p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-glow">
                Book Discovery Call
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
              <a href="#team" className="btn-ghost">
                Meet the Team
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="diff-layout" style={{ marginTop: 0 }}>
            <div className="reveal">
              <div className="sec-label">Our Story</div>
              <h2 className="sec-title" style={{ fontSize: '36px' }}>Born from Frustration.<br />Built for Impact.</h2>
            </div>
            <div className="reveal">
              <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
                BigBoldTech started because our founder, Marcus Chen, spent years watching enterprise companies get burned by fragmented vendor ecosystems. One agency for the website. Another for the app. A third for ads. A fourth for analytics. None of them talking to each other — and none of them accountable for the actual business outcome.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
                We built BigBoldTech to be the anti-agency: a single, engineering-led team that owns your entire technology and growth stack — from infrastructure to UI to marketing pixels. No hand-offs. No finger-pointing. No vanity metrics. Just measurable outcomes tied to revenue.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8 }}>
                Today, we are a team of 12+ A-star engineers, designers, and growth experts serving enterprise clients across fintech, healthcare, e-commerce, real estate, SaaS, and manufacturing. We have delivered 50+ projects, impacted $50M+ in client revenue, and maintain a 99.9% uptime record across all managed infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="sec">
        <div className="wrap">
          <div className="about-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="counter-stat reveal">
                <div className="counter-val">{stat.value}</div>
                <div className="counter-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BigBoldTech Exists */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <div className="sec-label" style={{ justifyContent: 'center' }}>Why We Exist</div>
            <h2 className="sec-title">Three Problems<br />We Refuse to Ignore</h2>
          </div>
          <div className="problem-grid" style={{ marginTop: '56px' }}>
            <div className="problem-card reveal">
              <div className="problem-num">01</div>
              <h3>Fragmented Tech Stacks Kill Growth</h3>
              <p>Enterprises juggle 5-10 vendors who never coordinate. Every handoff leaks context, budget, and momentum. You need one team that owns everything end-to-end.</p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-num">02</div>
              <h3>Agencies Optimize for Deliverables, Not Results</h3>
              <p>Your agency celebrates traffic milestones while your revenue is flat. Vanity metrics and templated PDFs are not accountability. You need partners who tie every action to revenue.</p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-num">03</div>
              <h3>AI Changed the Game — Most Have Not Noticed</h3>
              <p>Customers get answers from ChatGPT instead of your website. Traditional SEO is table stakes. GEO, AEO, and LLMO are the new battleground — and most agencies cannot even define them.</p>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* Leadership */}
      <section className="sec" id="team">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">Leadership</div>
            <h2 className="sec-title">The Team Behind<br />Your Growth Engine</h2>
            <p className="sec-sub">12+ A-star professionals across engineering, AI, design, and growth marketing. Builder-led, not sales-led — your point of contact writes your code.</p>
          </div>
          <div className="team-grid-v2">
            {team.map((member) => (
              <div key={member.name} className="team-card-v2 reveal">
                <div className="team-avatar">{member.initials}</div>
                <h4>{member.name}</h4>
                <div className="role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">Our DNA</div>
            <h2 className="sec-title">What Drives Us</h2>
            <p className="sec-sub">Six principles that guide every decision, every line of code, and every client engagement.</p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.num} className="diff-card reveal">
                <div className="diff-idx">{v.num}</div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <FounderNote />

      {/* CTA */}
      <section className="sec">
        <div className="wrap">
          <div className="cta-split reveal">
            <div className="cta-left">
              <div className="sec-label">Join Us</div>
              <h2 className="sec-title">Want to Build the<br />Future With Us?</h2>
              <p className="sec-sub">Whether you are a potential client or a talented engineer looking for your next challenge — we would love to hear from you.</p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/careers" className="btn-ghost">
                  View Open Roles
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </Link>
              </div>
            </div>
            <div className="cta-right">
              <InlineContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

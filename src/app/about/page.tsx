import type { Metadata } from 'next'
import { team } from '@/data/team'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About',
  description: 'BigBoldTech is an enterprise technology agency building AI systems, SaaS platforms, and growth engines for ambitious businesses.',
}

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
          <div className="sec-label">About Us</div>
          <h1 className="sec-title">We Build What<br />Others Won&apos;t Attempt</h1>
          <p className="sec-sub">BigBoldTech is an enterprise technology agency headquartered in India, serving ambitious businesses globally. We combine deep engineering expertise with growth marketing to deliver technology that compounds your success.</p>
        </div>

        <div style={{ marginTop: '100px' }}>
          <div className="reveal">
            <div className="sec-label">Leadership</div>
            <h2 className="sec-title" style={{ fontSize: '36px' }}>The Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card reveal">
                <div className="team-avatar">{member.initials}</div>
                <h4>{member.name}</h4>
                <div className="role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '100px' }}>
          <div className="diff-layout" style={{ marginTop: 0 }}>
            <div className="reveal">
              <div className="sec-label">Our Values</div>
              <h2 className="sec-title" style={{ fontSize: '36px' }}>What Drives Us</h2>
            </div>
            <div className="diff-list">
              <div className="diff-card reveal">
                <div className="diff-idx">01</div>
                <div>
                  <h4>Ownership Over Output</h4>
                  <p>We don&apos;t ship tasks — we own outcomes. Every team member thinks like a co-founder of your project.</p>
                </div>
              </div>
              <div className="diff-card reveal">
                <div className="diff-idx">02</div>
                <div>
                  <h4>Radical Transparency</h4>
                  <p>No hidden costs, no scope surprises. You see exactly what we&apos;re building, why, and what it costs — in real-time.</p>
                </div>
              </div>
              <div className="diff-card reveal">
                <div className="diff-idx">03</div>
                <div>
                  <h4>Engineering Excellence</h4>
                  <p>Clean code, tested systems, documented architecture. We build for the long term, not the demo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

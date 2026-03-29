import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join BigBoldTech. We are looking for builders, thinkers, and doers who want to create enterprise technology that matters.',
}

export default function CareersPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Careers', href: '/careers' }]} />
          <div className="sec-label">Careers</div>
          <h1 className="sec-title">Build With Us</h1>
          <p className="sec-sub">We&apos;re always looking for exceptional engineers, designers, and marketers who want to work on ambitious projects with real impact.</p>
        </div>

        <div className="diff-layout" style={{ marginTop: '80px' }}>
          <div className="reveal">
            <h2 className="sec-title" style={{ fontSize: '32px' }}>Why BigBoldTech</h2>
            <p className="sec-sub">We&apos;re a small, elite team that punches way above our weight. You&apos;ll work directly with founders, ship real products, and grow faster than anywhere else.</p>
          </div>
          <div className="diff-list">
            <div className="diff-card reveal">
              <div className="diff-idx">01</div>
              <div>
                <h4>Real Impact</h4>
                <p>No maintenance tickets or legacy code babysitting. You build new systems from scratch for ambitious businesses.</p>
              </div>
            </div>
            <div className="diff-card reveal">
              <div className="diff-idx">02</div>
              <div>
                <h4>Modern Stack</h4>
                <p>Next.js, Flutter, AI/ML, cloud-native infrastructure. We use the best tools, not the safe ones.</p>
              </div>
            </div>
            <div className="diff-card reveal">
              <div className="diff-idx">03</div>
              <div>
                <h4>Remote-First</h4>
                <p>Work from anywhere. We care about output, not hours in a chair. Async communication, clear documentation.</p>
              </div>
            </div>
            <div className="diff-card reveal">
              <div className="diff-idx">04</div>
              <div>
                <h4>Growth Path</h4>
                <p>Learn across the full stack — from AI to marketing to DevOps. We invest in people who want to be excellent.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '80px' }} className="reveal">
          <div className="cta">
            <h2 className="sec-title">No Open Positions?</h2>
            <p className="sec-sub" style={{ margin: '0 auto 40px', textAlign: 'center', maxWidth: '480px' }}>
              We&apos;re always interested in hearing from talented people. Send us your portfolio and tell us what excites you.
            </p>
            <Link href="mailto:careers@bigboldtech.com" className="btn-glow">
              Send Your Application
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

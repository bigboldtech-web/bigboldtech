import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'

export const metadata: Metadata = {
  title: 'Careers — Build with us',
  description:
    'Big Bold Tech is hiring senior engineers, designers, and operators who want to ship AI-native software with conviction.',
}

const principles = [
  { num: '01', title: 'Real impact, every cycle', body: 'No legacy babysitting. Every quarter you ship a new system that moves a real metric for a real operator.' },
  { num: '02', title: 'Modern stack, opinionated', body: 'Next.js, R3F, Flutter, Postgres, Cloud-native. We use the best tools for the problem, not the safe ones.' },
  { num: '03', title: 'Remote-first, async-default', body: 'Mumbai · Bengaluru · Kathmandu hubs. Output over hours. Documentation as part of the job.' },
  { num: '04', title: 'Senior teams only', body: 'No staffing churn. The person who scopes your project ships your project.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        crumbs={[{ label: 'Careers', href: '/careers' }]}
        title={
          <>
            Build with <span className="v4-italic">us.</span>
          </>
        }
        sub="We are always looking for senior engineers, designers, and operators who want to ship AI-native software at the studio cadence — not at agency cadence."
        actions={
          <a href="mailto:careers@bigboldtech.com" className="v4-btn v4-btn-primary">
            Send your application
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
          </a>
        }
      />

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-block-head">
            <div>
              <span className="v4-eyebrow">Why this place</span>
              <h2>What you get when you <span className="v4-italic">join.</span></h2>
            </div>
            <p>We are small and elite by design. The work compounds because the team compounds.</p>
          </div>
          <div className="v4-index-grid cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.num} delay={i * 60}>
                <div className="v4-card">
                  <div className="v4-card-num">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-mid-cta">
            <div>
              <h3 className="v4-display">No open posting that fits?</h3>
              <p>Send us your portfolio, your favourite shipped thing, and a sentence on what you want to work on next. If it lands, we will make a role.</p>
            </div>
            <Link href="mailto:careers@bigboldtech.com" className="v4-btn v4-btn-primary">
              careers@bigboldtech.com
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

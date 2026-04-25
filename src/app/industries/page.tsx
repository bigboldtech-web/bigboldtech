import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/data/industries'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { MidCta } from '@/components/v4/MidCta'

export const metadata: Metadata = {
  title: 'Industries — Where we operate',
  description:
    'Big Bold Tech serves operators across fintech, healthcare, e-commerce, real estate, SaaS, and manufacturing.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we operate"
        crumbs={[{ label: 'Industries', href: '/industries' }]}
        title={
          <>
            Six sectors. <span className="v4-italic">Deep context.</span>
          </>
        }
        sub="We build for operators in industries we already understand. No discovery call required to know what HIPAA means, how PCI scoping works, or what a healthy cohort retention curve should look like."
        actions={
          <Link href="/contact" className="v4-btn v4-btn-primary">
            Talk about your sector
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
          </Link>
        }
      />

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-index-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 60}>
                <Link href={`/industries/${ind.slug}`} className="v4-card v4-card-link">
                  <div className="v4-card-num">{String(i + 1).padStart(2, '0')} / Sector</div>
                  <h3>{ind.name}</h3>
                  <p>{ind.description}</p>
                  <span className="v4-card-arrow">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M3 9 L9 3 M5 3 H9 V7" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="v4-section" style={{ padding: '40px 0' }}>
        <MidCta title="Sector not listed?" body="We take on engagements outside these verticals when the problem is interesting and the operator is serious." buttonText="Tell us about it" />
      </section>
    </>
  )
}

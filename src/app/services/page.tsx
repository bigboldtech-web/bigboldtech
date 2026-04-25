import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { MidCta } from '@/components/v4/MidCta'
import { Scene } from '@/components/v4/Scene'

export const metadata: Metadata = {
  title: 'Capabilities — The Practice',
  description:
    'Nine disciplines, one studio. AI agents, SaaS, web, mobile, performance marketing, organic visibility, email, devops, analytics — all engineered in-house.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Practice"
        crumbs={[{ label: 'Capabilities', href: '/services' }]}
        title={
          <>
            Nine disciplines, <span className="v4-italic">one studio.</span>
          </>
        }
        sub="Most engagements braid two or three together. Engineering, marketing, and intelligence travel further when they ship from the same room."
        actions={
          <>
            <Link href="/contact" className="v4-btn v4-btn-primary">
              Begin a project
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
            </Link>
            <Link href="/case-studies" className="v4-btn v4-btn-ghost">See engagements</Link>
          </>
        }
        visual={<Scene name="orbit" />}
      />

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-index-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link href={`/services/${s.slug}`} className="v4-card v4-card-link">
                  <div className="v4-card-num">{String(i + 1).padStart(2, '0')} / {s.shortName}</div>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <div className="v4-card-tags">
                    {s.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="v4-tag">{t}</span>
                    ))}
                  </div>
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
        <MidCta
          title="Not sure which discipline to start with?"
          body="Book a thirty-minute call — we will map the highest-leverage move for your stage in under an hour."
          buttonText="Book the call"
        />
      </section>
    </>
  )
}

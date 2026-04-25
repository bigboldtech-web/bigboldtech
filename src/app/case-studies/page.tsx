'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { caseStudies } from '@/data/case-studies'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { MidCta } from '@/components/v4/MidCta'

export default function CaseStudiesPage() {
  const filters = useMemo(
    () => ['All', ...Array.from(new Set(caseStudies.map((c) => c.industry)))],
    []
  )
  const [active, setActive] = useState('All')
  const filtered = active === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.industry === active)

  return (
    <>
      <PageHero
        eyebrow="Engagements"
        crumbs={[{ label: 'Work', href: '/case-studies' }]}
        title={
          <>
            Outcomes shipped, <span className="v4-italic">measured.</span>
          </>
        }
        sub="A selection of recent engagements. Each one tied to a metric the work was hired to move."
        actions={
          <Link href="/contact" className="v4-btn v4-btn-primary">
            Begin a project
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
          </Link>
        }
      />

      <section className="v4-section">
        <div className="v4-container">
          {/* filter row */}
          <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 48,
            paddingBottom: 24,
            borderBottom: '1px solid var(--v4-border)',
          }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: '10px 18px',
                  borderRadius: 999,
                  fontFamily: 'var(--v4-mono)',
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  background: active === f ? 'var(--v4-blue)' : 'transparent',
                  color: active === f ? '#FFFFFF' : 'var(--v4-text-muted)',
                  border: `1px solid ${active === f ? 'var(--v4-blue)' : 'var(--v4-border-strong)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.25s var(--v4-ease)',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="v4-index-grid cols-2">
            {filtered.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 60}>
                <Link href={`/case-studies/${cs.slug}`} className="v4-card v4-card-link" style={{ minHeight: 320 }}>
                  <div className="v4-card-num">{cs.industry}</div>
                  <h3 style={{ fontSize: 26, lineHeight: 1.15 }}>{cs.client}</h3>
                  <p>{cs.description}</p>
                  <div className="v4-card-tags">
                    {cs.results.slice(0, 3).map((r) => (
                      <span key={r.metric} className="v4-tag">{r.value} · {r.metric}</span>
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
          title="Want a similar outcome?"
          body="Tell us your constraint. We&rsquo;ll come back with a sharp first take in 48 hours."
          buttonText="Begin a project"
        />
      </section>
    </>
  )
}

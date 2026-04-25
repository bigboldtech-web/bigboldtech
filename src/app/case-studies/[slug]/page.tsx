import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/data/case-studies'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { MidCta } from '@/components/v4/MidCta'
import { Scene } from '@/components/v4/Scene'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return { title: cs.title, description: cs.description }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={cs.industry}
        crumbs={[
          { label: 'Work', href: '/case-studies' },
          { label: cs.client, href: `/case-studies/${cs.slug}` },
        ]}
        title={cs.title}
        sub={cs.description}
        visual={<Scene name="crystal" />}
      />

      {/* Results strip */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-stat-grid">
            {cs.results.map((r) => (
              <div key={r.metric} className="v4-stat-block">
                <div className="num">{r.value}</div>
                <div className="lbl">{r.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-two-col">
            <div>
              <Reveal>
                <span className="v4-eyebrow">The challenge</span>
                <h2 className="v4-h2" style={{ marginTop: 16 }}>
                  Where they were <span className="v4-italic">stuck.</span>
                </h2>
                <div className="v4-prose" style={{ marginTop: 24, maxWidth: 'none' }}>
                  <p>{cs.challenge}</p>
                </div>
              </Reveal>

              <Reveal>
                <div style={{ marginTop: 64 }}>
                  <span className="v4-eyebrow">The solution</span>
                  <h2 className="v4-h2" style={{ marginTop: 16 }}>
                    What we <span className="v4-italic">shipped.</span>
                  </h2>
                  <div className="v4-prose" style={{ marginTop: 24, maxWidth: 'none' }}>
                    <p>{cs.solution}</p>
                  </div>
                </div>
              </Reveal>

              {cs.testimonial && (
                <Reveal>
                  <div style={{ marginTop: 64, paddingLeft: 32, borderLeft: '2px solid var(--v4-blue)' }}>
                    <p style={{ fontFamily: 'var(--v4-italic)', fontStyle: 'italic', fontSize: 28, lineHeight: 1.3, color: 'var(--v4-text)' }}>
                      &ldquo;{cs.testimonial.quote}&rdquo;
                    </p>
                    <div style={{ marginTop: 18 }}>
                      <strong style={{ color: 'var(--v4-text)', fontWeight: 500 }}>{cs.testimonial.author}</strong>
                      <span style={{ display: 'block', fontFamily: 'var(--v4-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--v4-text-dim)', marginTop: 6 }}>
                        {cs.testimonial.role}
                      </span>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            <aside className="v4-sidebar">
              <div className="v4-side-card">
                <h4>Client</h4>
                <p style={{ color: 'var(--v4-text)', fontSize: 16 }}>{cs.client}</p>
              </div>
              <div className="v4-side-card">
                <h4>Industry</h4>
                <p style={{ color: 'var(--v4-text)' }}>{cs.industry}</p>
              </div>
              <div className="v4-side-card">
                <h4>Capabilities used</h4>
                <ul className="v4-side-list">
                  {cs.services.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className="v4-side-card">
                <h4>Bring us a similar problem</h4>
                <p><Link href="/contact">Begin a project →</Link></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-block-head">
            <div>
              <span className="v4-eyebrow">More engagements</span>
              <h2>Other <span className="v4-italic">recent work.</span></h2>
            </div>
          </div>
          <div className="v4-index-grid">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 60}>
                <Link href={`/case-studies/${o.slug}`} className="v4-card v4-card-link">
                  <div className="v4-card-num">{o.industry}</div>
                  <h3>{o.client}</h3>
                  <p>{o.description}</p>
                  <span className="v4-card-arrow">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="v4-section" style={{ padding: '40px 0' }}>
        <MidCta title="Want a similar outcome?" buttonText="Begin a project" />
      </section>
    </>
  )
}

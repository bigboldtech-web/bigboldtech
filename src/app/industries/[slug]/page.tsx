import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { industries } from '@/data/industries'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { MidCta } from '@/components/v4/MidCta'

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) return {}
  return { title: ind.name, description: ind.description }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) notFound()

  const others = industries.filter((i) => i.slug !== ind.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Sector"
        crumbs={[
          { label: 'Industries', href: '/industries' },
          { label: ind.name, href: `/industries/${ind.slug}` },
        ]}
        title={ind.name}
        sub={ind.description}
        actions={
          <Link href="/contact" className="v4-btn v4-btn-primary">
            Discuss your {ind.name.split(' ')[0].toLowerCase()} project
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
          </Link>
        }
      />

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-two-col">
            <div>
              <Reveal>
                <span className="v4-eyebrow">The challenges</span>
                <h2 className="v4-h2" style={{ marginTop: 16 }}>
                  What operators here <span className="v4-italic">struggle with.</span>
                </h2>
                <ul className="v4-side-list" style={{ marginTop: 32 }}>
                  {ind.challenges.map((c, i) => (
                    <li key={c} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, padding: '20px 0' }}>
                      <span className="v4-mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--v4-text-dim)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontFamily: 'var(--v4-display)', fontWeight: 500, fontSize: 18, color: 'var(--v4-text)', lineHeight: 1.35 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <div style={{ marginTop: 64 }}>
                  <span className="v4-eyebrow">What we ship</span>
                  <h2 className="v4-h2" style={{ marginTop: 16 }}>
                    Our typical <span className="v4-italic">solution surfaces.</span>
                  </h2>
                  <ul className="v4-side-list" style={{ marginTop: 32 }}>
                    {ind.solutions.map((s, i) => (
                      <li key={s} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, padding: '20px 0' }}>
                        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--v4-blue-bright)', marginTop: 8, boxShadow: '0 0 8px var(--v4-blue-bright)' }} />
                        <span style={{ fontFamily: 'var(--v4-display)', fontWeight: 500, fontSize: 18, color: 'var(--v4-text)', lineHeight: 1.35 }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <aside className="v4-sidebar">
              <div className="v4-side-card">
                <h4>Sector</h4>
                <p style={{ color: 'var(--v4-text)', fontSize: 16 }}>{ind.name}</p>
              </div>
              <div className="v4-side-card">
                <h4>Common engagements</h4>
                <p>SaaS platforms, AI agents, performance marketing, infrastructure hardening — typically braided.</p>
              </div>
              <div className="v4-side-card">
                <h4>Talk it through</h4>
                <p><Link href="/contact">Begin a project →</Link></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="v4-section">
          <div className="v4-container">
            <div className="v4-block-head">
              <div>
                <span className="v4-eyebrow">Other sectors</span>
                <h2>Where else we <span className="v4-italic">operate.</span></h2>
              </div>
            </div>
            <div className="v4-index-grid">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 60}>
                  <Link href={`/industries/${o.slug}`} className="v4-card v4-card-link">
                    <div className="v4-card-num">Sector</div>
                    <h3>{o.name}</h3>
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
      )}

      <section className="v4-section" style={{ padding: '40px 0' }}>
        <MidCta title={`Building in ${ind.name.split(' ')[0]}?`} buttonText="Begin a project" />
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { industries } from '@/data/industries'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) return {}
  return { title: ind.name, description: ind.description }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) notFound()

  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Industries', href: '/industries' }, { label: ind.name, href: '/industries/' + ind.slug }]} />
          <div className="sec-label">Industry</div>
          <h1 className="sec-title">{ind.name}</h1>
          <p className="sec-sub">{ind.description}</p>
        </div>

        <div className="diff-layout" style={{ marginTop: '80px' }}>
          <div className="reveal">
            <h2 className="sec-title" style={{ fontSize: '28px' }}>Challenges</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
              {ind.challenges.map((c) => (
                <div key={c} className="diff-card">
                  <div className="diff-idx" style={{ background: 'var(--cyan)', width: '8px', height: '8px', borderRadius: '50%', minWidth: '8px' }} />
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <h2 className="sec-title" style={{ fontSize: '28px' }}>Our Solutions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
              {ind.solutions.map((s) => (
                <div key={s} className="diff-card">
                  <div className="diff-idx" style={{ background: 'linear-gradient(135deg, var(--cyan), var(--green))', width: '8px', height: '8px', borderRadius: '50%', minWidth: '8px' }} />
                  <p>{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center' }} className="reveal">
          <Link href="/contact" className="btn-glow">
            Discuss Your {ind.name} Project
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

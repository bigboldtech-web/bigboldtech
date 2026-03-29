import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/data/case-studies'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return { title: cs.title, description: cs.description }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Case Studies', href: '/case-studies' }, { label: cs.title, href: '/case-studies/' + cs.slug }]} />
          <div className="sec-label">{cs.industry}</div>
          <h1 className="sec-title">{cs.title}</h1>
          <p className="sec-sub">{cs.description}</p>
        </div>

        <div className="diff-layout" style={{ marginTop: '80px' }}>
          <div>
            <div className="reveal">
              <h2 className="sec-title" style={{ fontSize: '28px' }}>The Challenge</h2>
              <p className="sec-sub">{cs.challenge}</p>
            </div>
            <div className="reveal" style={{ marginTop: '48px' }}>
              <h2 className="sec-title" style={{ fontSize: '28px' }}>The Solution</h2>
              <p className="sec-sub">{cs.solution}</p>
            </div>
          </div>
          <div>
            <div className="reveal" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--glass-border)', borderRadius: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Results</h3>
              {cs.results.map((r) => (
                <div key={r.metric} style={{ marginBottom: '20px' }}>
                  <div className="case-metric-val">{r.value}</div>
                  <div className="case-metric-lbl">{r.metric}</div>
                </div>
              ))}
            </div>
            {cs.testimonial && (
              <div className="reveal" style={{ marginTop: '20px', padding: '28px', background: 'var(--surface)', border: '1px solid var(--glass-border)', borderRadius: '14px' }}>
                <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px' }}>&quot;{cs.testimonial.quote}&quot;</p>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>— {cs.testimonial.author}, {cs.testimonial.role}</p>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center' }} className="reveal">
          <Link href="/contact" className="btn-glow" style={{ marginRight: '14px' }}>
            Start Your Project
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
          <Link href="/case-studies" className="btn-ghost">All Case Studies</Link>
        </div>
      </div>
    </section>
  )
}

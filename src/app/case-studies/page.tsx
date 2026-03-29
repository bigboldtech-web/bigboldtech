import type { Metadata } from 'next'
import Link from 'next/link'
import { caseStudies } from '@/data/case-studies'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how BigBoldTech delivers measurable results for enterprise clients across AI, web, SaaS, and marketing.',
}

export default function CaseStudiesPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Case Studies', href: '/case-studies' }]} />
          <div className="sec-label">Our Work</div>
          <h1 className="sec-title">Case Studies</h1>
          <p className="sec-sub">Real results for real businesses. See how we engineer growth.</p>
        </div>
        <div className="case-grid">
          {caseStudies.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="case-card reveal">
              <span className="industry-tag">{cs.industry}</span>
              <h3>{cs.title}</h3>
              <p>{cs.description}</p>
              <div className="case-metrics">
                {cs.results.slice(0, 3).map((r) => (
                  <div key={r.metric}>
                    <div className="case-metric-val">{r.value}</div>
                    <div className="case-metric-lbl">{r.metric}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

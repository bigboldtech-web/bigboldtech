import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/data/industries'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'BigBoldTech serves enterprise clients across finance, healthcare, e-commerce, real estate, SaaS, and manufacturing.',
}

export default function IndustriesPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Industries', href: '/industries' }]} />
          <div className="sec-label">Industries</div>
          <h1 className="sec-title">Sectors We Serve</h1>
          <p className="sec-sub">Deep domain expertise across six high-growth verticals.</p>
        </div>
        <div className="industry-grid">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="industry-card reveal">
              <h3>{ind.name}</h3>
              <p>{ind.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

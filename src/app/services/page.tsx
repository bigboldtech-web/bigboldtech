import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Full-spectrum technology and growth services. AI, SaaS, Web, Mobile, Marketing, SEO, Email, DevOps, Analytics.',
}

export default function ServicesPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <div className="sec-label">What We Build</div>
          <h1 className="sec-title">Our Services</h1>
          <p className="sec-sub">Enterprise-grade technology across nine verticals. One team, zero gaps.</p>
        </div>
        <div className="svc-grid" style={{ marginTop: '64px' }}>
          {services.map((service, i) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="svc reveal">
              <div className="svc-num">{String(i + 1).padStart(3, '0')}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="svc-arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

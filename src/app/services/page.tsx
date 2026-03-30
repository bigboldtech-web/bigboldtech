import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { MidPageCTA } from '@/components/sections/MidPageCTA'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { FounderNote } from '@/components/sections/FounderNote'
import { InlineContactForm } from '@/components/sections/InlineContactForm'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Full-spectrum technology and growth services. AI, SaaS, Web, Mobile, Marketing, SEO, Email, DevOps, Analytics.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
            <div className="sec-label">What We Build</div>
            <h1 className="sec-title">Nine Verticals.<br />One Technology OS.</h1>
            <p className="sec-sub" style={{ maxWidth: '640px' }}>Enterprise-grade technology across every layer of your stack — from AI and infrastructure to marketing and analytics. One team owns everything. Zero gaps. Zero excuses.</p>
            <div style={{ marginTop: '32px' }}>
              <Link href="/contact" className="btn-glow">
                Book Discovery Call
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
            </div>
          </div>

          <div className="svc-grid" style={{ marginTop: '64px' }}>
            {services.map((service, i) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="svc reveal">
                <div className="svc-num">{String(i + 1).padStart(3, '0')}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="svc-tech-preview">
                  {service.technologies.slice(0, 4).map(t => (
                    <span key={t} className="svc-tech-tag">{t}</span>
                  ))}
                </div>
                <div className="svc-arrow">
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      <MidPageCTA
        headline="Not Sure Which Service You Need?"
        subtext="Book a free discovery call and we will audit your current stack to identify the highest-impact opportunities."
        buttonText="Book Discovery Call"
      />

      <ComparisonTable />

      <FounderNote />

      <section className="sec">
        <div className="wrap">
          <div className="cta-split reveal">
            <div className="cta-left">
              <div className="sec-label">Get Started</div>
              <h2 className="sec-title">Ready to Engineer<br />Your Growth?</h2>
              <p className="sec-sub">Tell us about your project and we will show you exactly how our nine-vertical approach can drive measurable results.</p>
            </div>
            <div className="cta-right">
              <InlineContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

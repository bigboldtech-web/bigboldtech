import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { buildServiceSchema, buildFAQSchema } from '@/lib/schema'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: service.name, description: service.description }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <>
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFAQSchema(service.faqs)} />
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.name, href: '/services/' + service.slug }]} />
            <div className="sec-label">{service.shortName}</div>
            <h1 className="sec-title">{service.name}</h1>
            <p className="sec-sub">{service.longDescription}</p>
          </div>

          <div className="service-features">
            {service.features.map((feature) => (
              <div key={feature} className="feature-card reveal">
                <h4>{feature}</h4>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '80px' }}>
            <div className="reveal">
              <div className="sec-label">Technologies</div>
              <h2 className="sec-title" style={{ fontSize: '32px' }}>Tech Stack</h2>
            </div>
            <div className="tech-cloud" style={{ justifyContent: 'flex-start' }}>
              {service.technologies.map((tech) => (
                <div key={tech} className="tech-tag reveal">{tech}</div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '80px' }}>
            <div className="reveal">
              <div className="sec-label">FAQ</div>
              <h2 className="sec-title" style={{ fontSize: '32px' }}>Common Questions</h2>
            </div>
            <div className="faq-cols">
              {service.faqs.map((faq, i) => (
                <div key={i} className="faq-item reveal">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '80px' }} className="reveal">
            <div className="cta" style={{ padding: '64px 36px' }}>
              <h2 className="sec-title" style={{ fontSize: '32px' }}>Ready to Get Started<br />with {service.name}?</h2>
              <p className="sec-sub" style={{ margin: '0 auto 32px', textAlign: 'center', maxWidth: '480px' }}>
                Tell us about your project and we&apos;ll show you exactly how we can help.
              </p>
              <Link href="/contact" className="btn-glow">
                Book Discovery Call
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
            </div>
          </div>

          {/* Related Services */}
          <div style={{ marginTop: '80px' }}>
            <div className="reveal">
              <div className="sec-label">Explore More</div>
              <h2 className="sec-title" style={{ fontSize: '32px' }}>Related Services</h2>
            </div>
            <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((s, i) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="svc reveal">
                    <div className="svc-num">{String(i + 1).padStart(3, '0')}</div>
                    <h3>{s.name}</h3>
                    <p>{s.description}</p>
                    <div className="svc-arrow">
                      <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

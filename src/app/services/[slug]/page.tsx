import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import { caseStudies } from '@/data/case-studies'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { buildServiceSchema, buildFAQSchema } from '@/lib/schema'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { IndustryVerticals } from '@/components/sections/IndustryVerticals'
import { FounderNote } from '@/components/sections/FounderNote'
import { InlineContactForm } from '@/components/sections/InlineContactForm'

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

  const relatedCaseStudies = caseStudies.filter(cs =>
    cs.services.some(s => s.toLowerCase().includes(service.shortName.toLowerCase())) ||
    cs.services.some(s => s.toLowerCase().includes(service.name.split(' ')[0].toLowerCase()))
  ).slice(0, 3)

  const methodology = [
    { num: '01', title: 'Discover', desc: `Deep-dive audit of your current ${service.shortName.toLowerCase()} landscape, identify gaps, and map the highest-impact opportunities.` },
    { num: '02', title: 'Benchmark', desc: `Analyze competitive landscape and establish measurable baselines against which we track every improvement.` },
    { num: '03', title: 'Build', desc: `Execute the strategy with precision — agile sprints, transparent reporting, and working deliverables every two weeks.` },
    { num: '04', title: 'Optimize', desc: `Continuous monitoring, A/B testing, and data-driven iteration to compound results over time.` },
  ]

  return (
    <>
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFAQSchema(service.faqs)} />

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="reveal">
            <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.name, href: '/services/' + service.slug }]} />
            <div className="sec-label">{service.shortName}</div>
            <h1 className="sec-title">{service.name}</h1>
            <p className="sec-sub" style={{ maxWidth: '640px' }}>{service.longDescription}</p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-glow">
                Get {service.shortName} Strategy Report
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
              <a href="#capabilities" className="btn-ghost">
                See Capabilities
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars / Capabilities */}
      <section className="sec" id="capabilities">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">What We Deliver<br />in {service.name}</h2>
          </div>
          <div className="service-features">
            {service.features.map((feature, i) => (
              <div key={feature} className="feature-card reveal">
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="method-num" style={{ fontSize: '24px', minWidth: '40px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4>{feature}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="sec sec-dark">
          <div className="wrap">
            <div className="reveal">
              <div className="sec-label">Proven Results</div>
              <h2 className="sec-title">Real Outcomes<br />with {service.shortName}</h2>
            </div>
            <div className="case-grid" style={{ marginTop: '48px' }}>
              {relatedCaseStudies.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="case-card reveal">
                  <span className="industry-tag">{cs.industry}</span>
                  <h3>{cs.client}</h3>
                  <p>{cs.description}</p>
                  <div className="case-metrics">
                    {cs.results.slice(0, 3).map((r, i) => (
                      <div key={i}>
                        <div className="case-metric-val">{r.value}</div>
                        <div className="case-metric-lbl">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/case-studies" className="btn-ghost">
                See All Work
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Methodology */}
      <section className="sec">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <div className="sec-label" style={{ justifyContent: 'center' }}>Our Process</div>
            <h2 className="sec-title">How We Deliver<br />{service.name} Outcomes</h2>
          </div>
          <div className="method-grid">
            {methodology.map((step) => (
              <div key={step.num} className="method-card reveal">
                <div className="method-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">Technologies</div>
            <h2 className="sec-title">Tech Stack</h2>
          </div>
          <div className="tech-cloud" style={{ justifyContent: 'flex-start' }}>
            {service.technologies.map((tech) => (
              <div key={tech} className="tech-tag reveal">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Industry Verticals */}
      <IndustryVerticals />

      {/* Founder Quote */}
      <FounderNote />

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">FAQ</div>
            <h2 className="sec-title">Common Questions<br />About {service.name}</h2>
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
      </section>

      {/* CTA with Form */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="cta-split reveal">
            <div className="cta-left">
              <div className="sec-label">Get Started</div>
              <h2 className="sec-title">Ready to Transform<br />Your {service.shortName}?</h2>
              <p className="sec-sub">Tell us about your project and we&apos;ll show you exactly how we can help.</p>
              <div className="cta-trust-signals">
                <div className="trust-item">
                  <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 10l4 4 8-8"/><circle cx="10" cy="10" r="9"/></svg>
                  <span>Response within 24 hours</span>
                </div>
                <div className="trust-item">
                  <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 10l4 4 8-8"/><circle cx="10" cy="10" r="9"/></svg>
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
            <div className="cta-right">
              <InlineContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="sec">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-label">Explore More</div>
            <h2 className="sec-title">Related Services</h2>
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
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import { caseStudies } from '@/data/case-studies'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildServiceSchema, buildFAQSchema } from '@/lib/schema'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { ContactForm } from '@/components/v4/ContactForm'
import { MidCta } from '@/components/v4/MidCta'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: service.name, description: service.description }
}

const methodology = [
  { num: '01', title: 'Diagnose', body: 'Two-week audit. Stack, funnel, and unit economics. We name the constraint, not the symptom.' },
  { num: '02', title: 'Architect', body: 'A delivery plan with named owners, surfaces, and revenue checkpoints — written down, not pitched.' },
  { num: '03', title: 'Ship', body: 'Senior pods deploy in two-week iterations. You see working software at the end of each sprint.' },
  { num: '04', title: 'Compound', body: 'Continuous instrumentation, optimization, and ownership transfer so the system keeps paying back.' },
]

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const related = caseStudies
    .filter((cs) =>
      cs.services.some((s) =>
        s.toLowerCase().includes(service.shortName.toLowerCase())
      )
    )
    .slice(0, 3)

  return (
    <>
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFAQSchema(service.faqs)} />

      <PageHero
        eyebrow={`Practice / ${service.shortName}`}
        crumbs={[
          { label: 'Capabilities', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
        title={
          <>
            {service.name.split(' ')[0]}{' '}
            <span className="v4-italic">{service.name.split(' ').slice(1).join(' ') || 'practice'}</span>
          </>
        }
        sub={service.longDescription}
        actions={
          <>
            <Link href="/contact" className="v4-btn v4-btn-primary">
              Get a {service.shortName} read
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
            </Link>
            <a href="#capabilities" className="v4-btn v4-btn-ghost">See capabilities</a>
          </>
        }
      />

      {/* Two-col layout: capabilities left, sticky sidebar right */}
      <section className="v4-section" id="capabilities">
        <div className="v4-container">
          <div className="v4-two-col">
            <div>
              <span className="v4-eyebrow">What we deliver</span>
              <h2 className="v4-h2" style={{ marginTop: 16 }}>
                Inside the {service.shortName.toLowerCase()} <span className="v4-italic">engagement</span>.
              </h2>
              <ul className="v4-side-list" style={{ marginTop: 36 }}>
                {service.features.map((f, i) => (
                  <li key={f} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, padding: '20px 0' }}>
                    <span className="v4-mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--v4-text-dim)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontFamily: 'var(--v4-display)', fontWeight: 500, fontSize: 19, letterSpacing: '-0.015em', color: 'var(--v4-text)' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="v4-sidebar">
              <div className="v4-side-card">
                <h4>Tech stack</h4>
                <div className="v4-card-tags">
                  {service.technologies.map((t) => (
                    <span key={t} className="v4-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="v4-side-card">
                <h4>Engagement window</h4>
                <p>Diagnostics within 2 weeks of signed scope. Production deliveries in 8–16 weeks for full-build engagements.</p>
              </div>
              <div className="v4-side-card">
                <h4>Talk it through</h4>
                <p><Link href="/contact">Book a 30-minute call →</Link></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-block-head center">
            <div>
              <span className="v4-eyebrow">Method</span>
              <h2>How we deliver <span className="v4-italic">{service.shortName.toLowerCase()}</span> outcomes.</h2>
              <p>The same operating loop on every engagement. No discovery theatre.</p>
            </div>
          </div>
          <div className="v4-index-grid">
            {methodology.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="v4-card">
                  <div className="v4-card-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="v4-section">
          <div className="v4-container">
            <div className="v4-block-head">
              <div>
                <span className="v4-eyebrow">Proof</span>
                <h2>Outcomes shipped with <span className="v4-italic">{service.shortName.toLowerCase()}</span>.</h2>
              </div>
              <p>A selection of recent {service.shortName.toLowerCase()} engagements and the metrics they moved.</p>
            </div>
            <div className="v4-index-grid">
              {related.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 60}>
                  <Link href={`/case-studies/${cs.slug}`} className="v4-card v4-card-link">
                    <div className="v4-card-num">{cs.industry}</div>
                    <h3>{cs.client}</h3>
                    <p>{cs.description}</p>
                    <div className="v4-card-tags">
                      {cs.results.slice(0, 2).map((r) => (
                        <span key={r.metric} className="v4-tag">{r.value} · {r.metric}</span>
                      ))}
                    </div>
                    <span className="v4-card-arrow">
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 9 L9 3 M5 3 H9 V7" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-block-head">
            <div>
              <span className="v4-eyebrow">Frequently asked</span>
              <h2>Common questions about <span className="v4-italic">{service.name}.</span></h2>
            </div>
          </div>
          <div className="v4-prose" style={{ maxWidth: 'none' }}>
            {service.faqs.map((f) => (
              <Reveal key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + form */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-two-col">
            <div>
              <span className="v4-eyebrow">Begin a project</span>
              <h2 className="v4-h2" style={{ marginTop: 16 }}>
                Ready to ship the {service.shortName} <span className="v4-italic">version that exists?</span>
              </h2>
              <p style={{ color: 'var(--v4-text-muted)', fontSize: 17, lineHeight: 1.6, marginTop: 16, maxWidth: 520 }}>
                Tell us where you are. We&rsquo;ll come back within 48 hours with a sharp first take and a path to v1.
              </p>
            </div>
            <div className="v4-side-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA bottom */}
      <section className="v4-section" style={{ padding: '40px 0' }}>
        <MidCta
          title="Want the rest of the practice?"
          body="Eight more disciplines that braid into this one."
          buttonText="See all capabilities"
          buttonHref="/services"
        />
      </section>
    </>
  )
}

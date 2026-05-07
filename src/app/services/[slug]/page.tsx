import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/Button'
import { ContactCTA } from '@/components/home/ContactCTA'
import { services, getService } from '@/data/services'
import { generalFAQs } from '@/data/faqs'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: s.name,
    description: s.oneLiner,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  const others = services.filter((other) => other.slug !== s.slug)

  return (
    <>
      <PageHero
        eyebrow={`Services · ${s.shortName}`}
        title={<>{s.name} <span className="hero-accent">—</span> {s.tagline.toLowerCase().replace(/\.$/, '')}.</>}
        description={s.description}
        image={s.image}
      >
        <div className="page-hero-actions">
          <Button href="/contact" size="lg" arrow>Start a project</Button>
          <Button href="/work" size="lg" variant="ghost">See related work</Button>
        </div>
      </PageHero>

      <Section size="lg">
        <Container>
          <div className="service-detail-head">
            <Eyebrow>What we deliver</Eyebrow>
            <h2 className="h2-bbt">
              Four ways we ship <span className="text-muted-bbt">{s.shortName.toLowerCase()}.</span>
            </h2>
          </div>
          <div className="service-detail-grid">
            {s.offerings.map((o, i) => (
              <article key={o.title} className="service-detail-card">
                <span className="service-detail-num">0{i + 1}</span>
                <h3 className="h3-bbt">{o.title}</h3>
                <p>{o.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="md" bg="subtle">
        <Container>
          <div className="service-stack">
            <div className="service-stack-head">
              <Eyebrow>Tools we use</Eyebrow>
              <h2 className="h2-bbt">
                Stack we run <span className="text-muted-bbt">in production.</span>
              </h2>
            </div>
            <ul className="service-stack-list">
              {s.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section size="lg">
        <Container size="narrow">
          <div className="faq-head">
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="h2-bbt">
              What buyers <span className="text-muted-bbt">ask first.</span>
            </h2>
          </div>
          <div className="faq-list">
            {generalFAQs.map((f) => (
              <details key={f.question} className="faq-item">
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="md" bg="subtle">
        <Container>
          <div className="service-related-head">
            <Eyebrow>Other services</Eyebrow>
            <h2 className="h2-bbt">
              The rest of the stack <span className="text-muted-bbt">we cover.</span>
            </h2>
          </div>
          <div className="service-related-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="service-related-card">
                <h3>{o.name}</h3>
                <p>{o.oneLiner}</p>
                <span className="service-related-cta">
                  Read more
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M3 7 H11 M7 3 L11 7 L7 11" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  )
}

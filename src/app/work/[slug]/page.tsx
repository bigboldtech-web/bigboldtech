import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/Button'
import { ContactCTA } from '@/components/home/ContactCTA'
import { caseStudies, getCaseStudy } from '@/data/work'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) return {}
  return {
    title: `${c.client} — ${c.title}`,
    description: c.summary,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) notFound()

  const others = caseStudies.filter((o) => o.slug !== c.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="case-hero">
        <div className="case-hero-bg" aria-hidden>
          <Image
            src={c.image}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="case-hero-tint" />
        </div>
        <Container>
          <div className="case-hero-meta">
            <Link href="/work" className="case-back">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M11 7 H3 M7 3 L3 7 L7 11" />
              </svg>
              All case studies
            </Link>
            <div className="case-hero-tags">
              <span>{c.industry}</span>
              <span>{c.year}</span>
              <span>{c.duration}</span>
            </div>
          </div>
          <p className="case-hero-client">{c.client}</p>
          <h1 className="h1-bbt case-hero-title">{c.title}</h1>
          <p className="lede-bbt case-hero-summary">{c.summary}</p>
          <div className="case-hero-services">
            {c.services.map((s) => (
              <span key={s} className="case-service-chip">{s}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Metrics band */}
      <Section size="md" bg="panel">
        <Container>
          <ul className="case-metrics">
            {c.metrics.map((m) => (
              <li key={m.label}>
                <div className="case-metric-num">{m.value}</div>
                <div className="case-metric-label">{m.label}</div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* The challenge */}
      <Section size="lg">
        <Container size="narrow">
          <Eyebrow>The challenge</Eyebrow>
          <h2 className="h2-bbt case-section-h">Where they were when we started.</h2>
          <p className="case-prose">{c.challenge}</p>
        </Container>
      </Section>

      {/* Approach */}
      <Section size="lg" bg="subtle">
        <Container size="narrow">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="h2-bbt case-section-h">How we shipped it.</h2>
          <ol className="case-approach">
            {c.approach.map((step, i) => (
              <li key={i}>
                <span className="case-approach-num">0{i + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section size="lg">
        <Container size="narrow">
          <Eyebrow>Outcomes</Eyebrow>
          <h2 className="h2-bbt case-section-h">What changed for the business.</h2>
          <ul className="case-outcomes">
            {c.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Quote */}
      {c.quote && (
        <Section size="lg" bg="panel">
          <Container size="narrow">
            <figure className="case-quote">
              <svg className="case-quote-mark" viewBox="0 0 32 32" aria-hidden>
                <path
                  d="M9.5 9 H4 V14.5 C4 17 5 19 7.5 20 V22 C2.5 21 0 17 0 13 V9 Z M22.5 9 H17 V14.5 C17 17 18 19 20.5 20 V22 C15.5 21 13 17 13 13 V9 Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>&ldquo;{c.quote.text}&rdquo;</blockquote>
              <figcaption>
                <strong>{c.quote.author}</strong>
                <span>{c.quote.role}</span>
              </figcaption>
            </figure>
          </Container>
        </Section>
      )}

      {/* Other work */}
      <Section size="md" bg="subtle">
        <Container>
          <div className="case-related-head">
            <Eyebrow>More case studies</Eyebrow>
            <h2 className="h2-bbt">
              See what else <span className="text-muted-bbt">we&rsquo;ve shipped.</span>
            </h2>
          </div>
          <div className="featured-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/work/${o.slug}`} className="featured-card">
                <div className="featured-image">
                  <Image
                    src={o.image}
                    alt={`${o.client} — ${o.industry}`}
                    fill
                    sizes="(max-width: 720px) 100vw, 33vw"
                    quality={65}
                  />
                  <div className="featured-image-tint" />
                  <span className="featured-tag">{o.industry}</span>
                </div>
                <div className="featured-body">
                  <div className="featured-client">{o.client}</div>
                  <h3 className="featured-title">{o.title}</h3>
                  <span className="featured-cta">
                    Read case study
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M3 7 H11 M7 3 L11 7 L7 11" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  )
}

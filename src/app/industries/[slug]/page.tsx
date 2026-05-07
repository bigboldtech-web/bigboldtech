import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/Button'
import { ContactCTA } from '@/components/home/ContactCTA'
import { industries } from '@/data/industries'
import { caseStudies, getCaseStudy } from '@/data/work'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) return {}
  return { title: ind.name, description: ind.tagline }
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) notFound()

  const featuredCase = ind.featuredCaseSlug ? getCaseStudy(ind.featuredCaseSlug) : null
  const otherIndustries = industries.filter((i) => i.slug !== ind.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`Industries · ${ind.name}`}
        title={<>{ind.tagline}</>}
        description={ind.intro}
        image={ind.image}
      >
        <div className="page-hero-actions">
          <Button href="/contact" size="lg" arrow>Start a project</Button>
          {featuredCase && (
            <Button href={`/work/${featuredCase.slug}`} size="lg" variant="ghost">
              See the case study
            </Button>
          )}
        </div>
      </PageHero>

      <Section size="lg">
        <Container>
          <div className="industry-grid">
            <div>
              <Eyebrow>The challenges</Eyebrow>
              <h2 className="h2-bbt industry-section-h">
                What teams in {ind.name.toLowerCase()} <span className="text-muted-bbt">come to us with.</span>
              </h2>
              <ul className="industry-list">
                {ind.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>What we deliver</Eyebrow>
              <h2 className="h2-bbt industry-section-h">
                And what we <span className="text-muted-bbt">typically build.</span>
              </h2>
              <ul className="industry-list is-positive">
                {ind.solutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {featuredCase && (
        <Section size="lg" bg="subtle">
          <Container>
            <div className="industry-feature-head">
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="h2-bbt">
                A {ind.name.toLowerCase()} engagement <span className="text-muted-bbt">we shipped.</span>
              </h2>
            </div>

            <Link href={`/work/${featuredCase.slug}`} className="industry-feature-card">
              <div className="industry-feature-meta">
                <div className="featured-client">{featuredCase.client}</div>
                <h3 className="featured-title">{featuredCase.title}</h3>
                <p className="featured-summary">{featuredCase.summary}</p>
                <ul className="featured-metrics">
                  {featuredCase.metrics.slice(0, 3).map((m) => (
                    <li key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>
                <span className="featured-cta">
                  Read case study
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M3 7 H11 M7 3 L11 7 L7 11" />
                  </svg>
                </span>
              </div>
            </Link>
          </Container>
        </Section>
      )}

      <Section size="md">
        <Container>
          <div className="industry-others-head">
            <Eyebrow>Other industries</Eyebrow>
            <h2 className="h2-bbt">
              See where else <span className="text-muted-bbt">we work.</span>
            </h2>
          </div>
          <div className="service-related-grid">
            {otherIndustries.map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="service-related-card">
                <h3>{o.name}</h3>
                <p>{o.tagline}</p>
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

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { CountUp } from '@/components/CountUp'
import { ContactCTA } from '@/components/home/ContactCTA'
import { caseStudies } from '@/data/work'

export const metadata: Metadata = {
  title: 'Our work — case studies and results',
  description:
    'Selected work from Big Bold Tech. Real systems, real numbers — fraud detection, headless commerce, AI support, healthcare portals, growth engines.',
}

export default function WorkIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={<>Real systems. <span className="hero-accent">Real numbers.</span></>}
        description="A selection of engagements we've shipped — across banking, healthcare, e-commerce, SaaS, logistics, and insurance. Every metric below is verifiable; every name is an active or recent client."
      />

      <Section size="lg">
        <Container>
          <div className="work-grid">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 60}>
              <Link href={`/work/${c.slug}`} className="work-card">
                <div className="work-image">
                  <Image
                    src={c.image}
                    alt={`${c.client} — ${c.industry}`}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    quality={70}
                  />
                  <div className="work-image-tint" />
                  <div className="work-tags">
                    <span className="work-tag">{c.industry}</span>
                    <span className="work-tag is-mono">{c.year}</span>
                  </div>
                </div>
                <div className="work-body">
                  <div className="work-client">{c.client}</div>
                  <h3 className="work-title">{c.title}</h3>
                  <p className="work-summary">{c.summary}</p>
                  <ul className="work-metrics">
                    {c.metrics.slice(0, 3).map((m) => (
                      <li key={m.label}>
                        <strong><CountUp value={m.value} /></strong>
                        <span>{m.label}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="work-cta">
                    Read case study
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M3 7 H11 M7 3 L11 7 L7 11" />
                    </svg>
                  </span>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  )
}

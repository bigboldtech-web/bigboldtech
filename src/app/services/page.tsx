import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/Button'
import { ContactCTA } from '@/components/home/ContactCTA'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services — what we build for you',
  description:
    'Big Bold Tech services: AI applications, custom software, digital marketing, brand & design, DevOps. Five capabilities, one team.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>What we <span className="hero-accent">build for you.</span></>}
        description="Five capabilities. Pick one, pick all five. We work end-to-end so nothing drops between handoffs — strategy, design, engineering, infrastructure, and growth, under one roof."
      />

      <Section size="lg">
        <Container>
          <div className="services-list">
            {services.map((s, i) => (
              <article key={s.slug} className="services-row">
                <div className="services-row-meta">
                  <Eyebrow>{`0${i + 1} · ${s.shortName}`}</Eyebrow>
                  <h2 className="h2-bbt">{s.name}</h2>
                  <p className="services-row-tagline">{s.tagline}</p>
                </div>

                <div className="services-row-body">
                  <p className="lede-bbt">{s.description}</p>
                  <ul className="services-row-highlights">
                    {s.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <Button href={`/services/${s.slug}`} arrow>
                    Explore {s.shortName.toLowerCase()}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ContactCTA } from '@/components/home/ContactCTA'
import { industries } from '@/data/industries'

export const metadata: Metadata = {
  title: 'Industries we serve',
  description:
    'Big Bold Tech works across fintech, healthcare, e-commerce, SaaS, logistics, and edtech. See the verticals we\'ve shipped production software in.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Built across the <span className="hero-accent">verticals that matter.</span></>}
        description="We don't pretend to know every industry. The ones we do know, we've shipped production software in — and we bring those reps to every new engagement."
      />

      <Section size="lg">
        <Container>
          <div className="industries-list">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="industries-row">
                <div className="industries-row-image">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    quality={70}
                  />
                  <div className="industries-row-tint" />
                </div>
                <div className="industries-row-body">
                  <h2 className="h2-bbt industries-row-title">{ind.name}</h2>
                  <p className="industries-row-tagline">{ind.tagline}</p>
                  <p className="industries-row-intro">{ind.intro}</p>
                  <span className="industries-row-cta">
                    Read more
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

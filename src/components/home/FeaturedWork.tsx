import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { CountUp } from '@/components/CountUp'
import { featuredWork } from '@/data/work'

export function FeaturedWork() {
  return (
    <Section size="lg">
      <Container>
        <div className="featured-head">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="h2-bbt">
              Real systems. <span className="text-muted-bbt">Real numbers.</span>
            </h2>
          </div>
          <Button href="/work" variant="ghost" arrow>See all case studies</Button>
        </div>

        <div className="featured-grid">
          {featuredWork.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
            <Link href={`/work/${c.slug}`} className="featured-card">
              <div className="featured-image">
                <Image
                  src={c.image}
                  alt={`${c.client} — ${c.industry}`}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  quality={70}
                />
                <div className="featured-image-tint" />
                <span className="featured-tag">{c.industry}</span>
              </div>

              <div className="featured-body">
                <div className="featured-client">{c.client}</div>
                <h3 className="featured-title">{c.title}</h3>
                <p className="featured-summary">{c.summary}</p>

                <ul className="featured-metrics">
                  {c.metrics.map((m) => (
                    <li key={m.label}>
                      <strong><CountUp value={m.value} /></strong>
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
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

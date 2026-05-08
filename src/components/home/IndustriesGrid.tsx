import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { industries } from '@/data/industries'

export function IndustriesGrid() {
  return (
    <Section size="lg" bg="subtle">
      <Container>
        <div className="industries-head">
          <div>
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="h2-bbt">
              Built across the <span className="text-muted-bbt">verticals that matter.</span>
            </h2>
          </div>
          <Button href="/industries" variant="ghost" arrow>See all industries</Button>
        </div>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 80}>
            <Link href={`/industries/${ind.slug}`} className="industry-card">
              <div className="industry-image">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  quality={65}
                />
                <div className="industry-image-tint" />
              </div>
              <div className="industry-body">
                <h3>{ind.name}</h3>
                <p>{ind.tagline}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

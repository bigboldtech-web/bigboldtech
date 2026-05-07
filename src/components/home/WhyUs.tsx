import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { whyUsPillars } from '@/data/whyus'

export function WhyUs() {
  return (
    <Section size="lg" bg="subtle">
      <Container>
        <div className="whyus-head">
          <Eyebrow>Why Big Bold Tech</Eyebrow>
          <h2 className="h2-bbt">
            Senior teams. <span className="text-muted-bbt">Honest pricing.</span> Outcomes you can measure.
          </h2>
        </div>

        <div className="whyus-grid">
          {whyUsPillars.map((p) => (
            <article key={p.title} className="whyus-card">
              <div className="whyus-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={p.iconPath} />
                </svg>
              </div>
              <h3 className="h3-bbt">{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

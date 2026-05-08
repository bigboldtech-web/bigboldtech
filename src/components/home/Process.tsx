import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Reveal } from '@/components/Reveal'
import { processSteps } from '@/data/process'

export function Process() {
  return (
    <Section size="lg">
      <Container>
        <div className="process-head">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="h2-bbt">
            From kickoff to <span className="text-muted-bbt">live in production.</span>
          </h2>
          <p className="lede-bbt">
            Four phases. No discovery theatre, no 12-week roadmaps that end in
            a prototype. We compress the cycle without compromising the craft.
          </p>
        </div>

        <ol className="process-grid">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.num} delay={i * 100} className="process-step">
              <div className="process-num">{s.num}</div>
              <div className="process-meta">
                <span className="process-phase">{s.phase}</span>
                <span className="process-duration">{s.duration}</span>
              </div>
              <h3 className="h3-bbt">{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

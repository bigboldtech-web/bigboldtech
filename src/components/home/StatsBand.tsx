import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { CountUp } from '@/components/CountUp'
import { Reveal } from '@/components/Reveal'
import { headlineStats } from '@/data/stats'

export function StatsBand() {
  return (
    <Section size="md" bg="panel">
      <Container>
        <Reveal className="stats-band-head">
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="h2-bbt">
            What we&rsquo;ve <span className="text-muted-bbt">actually shipped.</span>
          </h2>
        </Reveal>
        <ul className="stats-band-grid">
          {headlineStats.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 80} className="stat-cell">
              <div className="stat-num">
                <CountUp value={s.value} />
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

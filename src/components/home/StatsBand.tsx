import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { headlineStats } from '@/data/stats'

export function StatsBand() {
  return (
    <Section size="md" bg="panel">
      <Container>
        <div className="stats-band-head">
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="h2-bbt">
            What we&rsquo;ve <span className="text-muted-bbt">actually shipped.</span>
          </h2>
        </div>
        <ul className="stats-band-grid">
          {headlineStats.map((s, i) => (
            <li key={i} className="stat-cell">
              <div className="stat-num">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

import type { Stat } from '@/data/stats'

type Props = {
  stats: Stat[]
  /** 'inline' = horizontal proof bar; 'grid' = 2x2 / 4-up cinematic grid */
  variant?: 'inline' | 'grid'
  eyebrow?: string
}

export function StatHero({ stats, variant = 'inline', eyebrow }: Props) {
  return (
    <section className={`v4-stathero is-${variant}`} aria-label="Headline stats">
      <div className="v4-container">
        {eyebrow && <span className="v4-eyebrow">{eyebrow}</span>}
        <div className="v4-stathero-grid">
          {stats.map((s, i) => (
            <div key={i} className="v4-stathero-cell">
              <div className="v4-stathero-num">{s.value}</div>
              <div className="v4-stathero-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

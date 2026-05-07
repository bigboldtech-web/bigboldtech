import { placeholderClients } from '@/data/clients'
import { ClientMark } from './ClientMarks'

type Props = {
  /** Optional eyebrow text above the strip */
  eyebrow?: string
  /** Optional caption below the strip */
  caption?: string
  /** Visual variant — 'muted' is the default low-key strip; 'card' frames it inside a tile */
  variant?: 'muted' | 'card'
}

export function LogoStrip({
  eyebrow = 'Trusted by founders + operators across',
  caption,
  variant = 'muted',
}: Props) {
  return (
    <section className={`v4-logostrip is-${variant}`} aria-label="Client logos">
      <div className="v4-container">
        {eyebrow && <span className="v4-logostrip-eyebrow">{eyebrow}</span>}
        <div className="v4-logostrip-grid">
          {placeholderClients.map((c) => (
            <div key={c.id} className="v4-logostrip-cell" title={c.name}>
              <ClientMark id={c.id} />
            </div>
          ))}
        </div>
        {caption && <p className="v4-logostrip-caption">{caption}</p>}
      </div>
    </section>
  )
}

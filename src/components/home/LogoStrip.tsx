import { Container } from '@/components/Container'
import { ClientMark } from '@/components/ClientMarks'
import { Reveal } from '@/components/Reveal'
import { placeholderClients } from '@/data/clients'

export function LogoStrip() {
  return (
    <section className="logostrip-bbt" aria-label="Selected clients">
      <Container>
        <p className="logostrip-eyebrow">
          Trusted by teams at —
        </p>
        <div className="logostrip-grid">
          {placeholderClients.map((c, i) => (
            <Reveal
              key={c.id}
              delay={i * 60}
              offset={8}
              className="logostrip-cell"
            >
              <span title={c.name} style={{ display: 'inline-flex', height: '100%' }}>
                <ClientMark id={c.id} />
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

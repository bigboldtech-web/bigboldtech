import { Container } from '@/components/Container'
import { ClientMark } from '@/components/ClientMarks'
import { placeholderClients } from '@/data/clients'

export function LogoStrip() {
  return (
    <section className="logostrip-bbt" aria-label="Selected clients">
      <Container>
        <p className="logostrip-eyebrow">
          Trusted by teams at —
        </p>
        <div className="logostrip-grid">
          {placeholderClients.map((c) => (
            <div key={c.id} className="logostrip-cell" title={c.name}>
              <ClientMark id={c.id} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

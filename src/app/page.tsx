import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Button } from '@/components/Button'

export default function HomePage() {
  return (
    <Section size="lg" noBorder>
      <Container size="narrow">
        <Eyebrow>Rebuild · Phase 1 of 7</Eyebrow>
        <h1 className="h1-bbt">Software, AI, and growth — end-to-end.</h1>
        <p className="lede-bbt" style={{ marginTop: 24 }}>
          Foundation in place. Header, footer, design tokens, primitives, button,
          container, section. Homepage sections begin in commit 2.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <Button href="/contact" arrow>Start a project</Button>
          <Button href="/work" variant="ghost">See our work</Button>
        </div>
      </Container>
    </Section>
  )
}

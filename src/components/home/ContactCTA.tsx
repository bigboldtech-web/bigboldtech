import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'

export function ContactCTA() {
  return (
    <Section size="lg" bg="panel" className="contact-cta-section">
      <Container>
        <div className="contact-cta-card">
          <div className="contact-cta-glow" aria-hidden />
          <div className="contact-cta-body">
            <h2 className="h2-bbt">
              Have a project in mind?<br />
              <span className="text-muted-bbt">Let&rsquo;s build it.</span>
            </h2>
            <p className="lede-bbt">
              Tell us what you&rsquo;re working on. We&rsquo;ll come back within 48 hours
              with a sharp first take, a rough scope, and a path to v1.
            </p>
            <div className="contact-cta-actions">
              <Button href="/contact" size="lg" arrow>Start a project</Button>
              <Button
                href="mailto:contact@bigboldtech.com"
                size="lg"
                variant="ghost"
              >
                Email us directly
              </Button>
            </div>
            <ul className="contact-cta-meta">
              <li><strong>48-hour</strong>&nbsp;response time</li>
              <li><strong>Free</strong>&nbsp;scoping conversation</li>
              <li><strong>NDA</strong>&nbsp;signed before details</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

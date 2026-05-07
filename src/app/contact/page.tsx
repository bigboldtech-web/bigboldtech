import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact us — start a project',
  description:
    'Tell Big Bold Tech about your project. We respond within 48 business hours with a sharp first take and a path to v1.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us about <span className="hero-accent">your project.</span></>}
        description="Send us the brief — even a rough one is fine. We'll come back within 48 business hours with a sharp first take, a rough scope, and a path to v1."
      />

      <Section size="lg">
        <Container>
          <div className="contact-grid">
            <div className="contact-aside">
              <h2 className="h3-bbt contact-aside-h">Or reach out directly.</h2>
              <ul className="contact-aside-list">
                <li>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </li>
                <li>
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}>{SITE_CONFIG.phone}</a>
                </li>
                <li>
                  <span className="contact-label">LinkedIn</span>
                  <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">
                    /company/bigboldtech
                  </a>
                </li>
              </ul>

              <div className="contact-promise">
                <h3 className="h3-bbt">What happens next.</h3>
                <ol className="contact-promise-list">
                  <li>
                    <strong>Within 48 hours</strong>
                    <span>A real person responds with a first read on the project.</span>
                  </li>
                  <li>
                    <strong>Discovery call</strong>
                    <span>30 minutes, no slides. We dig into the problem, not the buzzwords.</span>
                  </li>
                  <li>
                    <strong>Written proposal</strong>
                    <span>Scope, team, timeline, fixed bid. Yours to keep, no obligation.</span>
                  </li>
                  <li>
                    <strong>Kickoff in 7 days</strong>
                    <span>Once you sign — we&rsquo;re onboarded and shipping by week two.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

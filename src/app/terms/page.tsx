import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'The terms governing your use of the Big Bold Tech website.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms of <span className="hero-accent">service.</span></>}
        description="Last updated April 2026. PLACEHOLDER copy — replace with your reviewed legal text before launch."
      />

      <Section size="lg">
        <Container size="narrow">
          <div className="legal-prose">
            <h2>1. Scope</h2>
            <p>
              These terms govern your use of the website at {SITE_CONFIG.url}.
              Engagement-specific terms — including delivery, payment, IP, and
              warranty — are set out in the Master Services Agreement and
              Statement of Work signed for each project.
            </p>

            <h2>2. Use of the website</h2>
            <p>
              You may browse our website, contact us through the forms
              provided, and reference our published content with attribution.
              You may not scrape, mirror, frame, or redistribute the
              website&rsquo;s content without written permission.
            </p>

            <h2>3. Intellectual property</h2>
            <p>
              The Big Bold Tech name, mark, design system, and editorial
              content on this website are owned by {SITE_CONFIG.legalName}.
              Project deliverables produced under signed engagements are
              owned by the client per the terms of that engagement.
            </p>

            <h2>4. Confidentiality</h2>
            <p>
              We sign mutual NDAs before scoping conversations. Anything you
              share with us prior to that — through forms or email — is
              treated as confidential by default.
            </p>

            <h2>5. Limitation of liability</h2>
            <p>
              Information on this website is provided as-is. For services
              actually delivered under an engagement, liability is governed
              by the signed Master Services Agreement.
            </p>

            <h2>6. Governing law</h2>
            <p>
              These terms are governed by the laws of India, with disputes
              resolved in the courts of Bengaluru. Engagements with
              international clients may be governed by alternate jurisdictions
              as specified in the Master Services Agreement.
            </p>

            <h2>7. Contact</h2>
            <p>
              Questions about these terms? Email us at{' '}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

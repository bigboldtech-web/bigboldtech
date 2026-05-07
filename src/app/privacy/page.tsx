import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Big Bold Tech collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <span className="hero-accent">policy.</span></>}
        description="Last updated April 2026. PLACEHOLDER copy — replace with your reviewed legal text before launch."
      />

      <Section size="lg">
        <Container size="narrow">
          <div className="legal-prose">
            <h2>1. Who we are</h2>
            <p>
              {SITE_CONFIG.legalName} (&ldquo;Big Bold Tech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
              operates the website at {SITE_CONFIG.url} and provides software,
              AI, and marketing services to businesses worldwide.
            </p>

            <h2>2. What we collect</h2>
            <p>When you contact us or use our website, we may collect:</p>
            <ul>
              <li>Information you submit through forms (name, email, company, project details).</li>
              <li>Standard server logs (IP address, user agent, requested URLs).</li>
              <li>Anonymized analytics data via cookies and pixels.</li>
              <li>Communication history (emails, calls, meetings) once an engagement begins.</li>
            </ul>

            <h2>3. How we use it</h2>
            <p>
              We use this information to respond to your inquiries, deliver
              the services you&rsquo;ve engaged us for, improve our website, and
              comply with legal obligations. We do not sell your personal
              data to third parties.
            </p>

            <h2>4. How we protect it</h2>
            <p>
              All data is stored on infrastructure that is encrypted at rest
              and in transit, with access limited to team members who need
              it to perform their work. Engagement-specific data is
              additionally governed by the Master Services Agreement and
              Data Processing Agreement signed with each client.
            </p>

            <h2>5. Sub-processors</h2>
            <p>
              Our standard infrastructure stack includes Vercel, Amazon Web
              Services, Cloudflare, and Postgres-as-a-service providers. A
              full sub-processor list is available on request.
            </p>

            <h2>6. Your rights</h2>
            <p>
              Under GDPR, India&rsquo;s DPDP Act, and similar regimes, you may
              request access to, correction of, or deletion of personal data
              we hold about you. Requests can be sent to{' '}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
            </p>

            <h2>7. Contact</h2>
            <p>
              For any privacy-related questions, contact us at{' '}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

import type { Metadata } from 'next'
import { PageHero } from '@/components/v4/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Big Bold Tech collects, uses, and protects your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal · Last updated April 2026"
        crumbs={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
        title={<>Privacy <span className="v4-italic">Policy.</span></>}
        sub="What we collect, what we do with it, and how to ask us to delete it."
      />
      <section className="v4-section">
        <div className="v4-container">
          <article className="v4-prose" style={{ margin: '0 auto' }}>
            <h2>1. Information we collect</h2>
            <p>We collect information you provide directly &mdash; name, email, company, project details &mdash; when you fill out a contact form, request a consultation, or correspond with us via email.</p>

            <h2>2. How we use it</h2>
            <ul>
              <li>To respond to your inquiries and deliver requested work.</li>
              <li>To send you relevant communications about our services.</li>
              <li>To improve the website and our offering.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2>3. Sharing</h2>
            <p>We do not sell, trade, or rent personal information. We may share information with trusted service providers under confidentiality agreements where strictly required to operate.</p>

            <h2>4. Security</h2>
            <p>Industry-standard technical and organisational measures &mdash; encryption in transit and at rest, role-based access, audit trails &mdash; protect your data against unauthorized access, alteration, or disclosure.</p>

            <h2>5. Cookies</h2>
            <p>We use minimal cookies for essential site function and aggregate analytics. You can control cookie preferences through your browser settings without affecting site usage.</p>

            <h2>6. Your rights</h2>
            <p>You can request access, correction, or deletion of your personal data at any time. You can also opt out of marketing communications by replying to any email or contacting us directly.</p>

            <h2>7. Contact</h2>
            <p>Questions? Email <a href="mailto:hello@bigboldtech.com">hello@bigboldtech.com</a>.</p>
          </article>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import { PageHero } from '@/components/v4/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using bigboldtech.com and Big Bold Tech services.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal · Last updated April 2026"
        crumbs={[{ label: 'Terms of Service', href: '/terms-of-service' }]}
        title={<>Terms of <span className="v4-italic">Service.</span></>}
        sub="The plain-English version of using this website and our services."
      />
      <section className="v4-section">
        <div className="v4-container">
          <article className="v4-prose" style={{ margin: '0 auto' }}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using bigboldtech.com you accept these Terms of Service. If you do not agree, please do not use the website.</p>

            <h2>2. Services</h2>
            <p>Big Bold Tech provides AI-native product development, SaaS engineering, web and mobile applications, performance marketing, organic visibility, and related services. Specific terms for individual engagements are governed by separate service agreements.</p>

            <h2>3. Intellectual property</h2>
            <p>All content on this website is the property of Big Bold Tech Pvt. Ltd. and protected by intellectual property law. You may not reproduce, distribute, or create derivative works without written consent.</p>

            <h2>4. Limitation of liability</h2>
            <p>Big Bold Tech is not liable for indirect, incidental, special, or consequential damages from your use of the website or services. Total liability is capped at amounts you have paid for the specific service in question.</p>

            <h2>5. Confidentiality</h2>
            <p>All client project details, business information, and communications are treated as confidential. We do not disclose client information without explicit consent, except where required by law.</p>

            <h2>6. Governing law</h2>
            <p>These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of courts in India.</p>

            <h2>7. Changes</h2>
            <p>We may modify these terms. Changes are effective when posted to the website. Continued use constitutes acceptance.</p>

            <h2>8. Contact</h2>
            <p>For questions about these terms, email <a href="mailto:hello@bigboldtech.com">hello@bigboldtech.com</a>.</p>
          </article>
        </div>
      </section>
    </>
  )
}

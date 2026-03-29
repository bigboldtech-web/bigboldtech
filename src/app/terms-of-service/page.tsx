import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'BigBoldTech terms of service. Terms and conditions for using our website and services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <div className="content reveal">
          <div className="sec-label">Legal</div>
          <h1 className="sec-title">Terms of Service</h1>
          <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Last updated: March 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the BigBoldTech website (bigboldtech.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

          <h2>2. Services</h2>
          <p>BigBoldTech provides enterprise technology services including but not limited to AI development, SaaS development, web and mobile application development, performance marketing, SEO, and related services. Specific terms for individual engagements are governed by separate service agreements.</p>

          <h2>3. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is the property of BigBoldTech Pvt. Ltd. and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>

          <h2>4. Limitation of Liability</h2>
          <p>BigBoldTech shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific services in question.</p>

          <h2>5. Confidentiality</h2>
          <p>We treat all client project details, business information, and communications as confidential. We will not disclose client information without explicit consent, except as required by law.</p>

          <h2>6. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.</p>

          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Your continued use constitutes acceptance of the modified terms.</p>

          <h2>8. Contact</h2>
          <p>For questions about these Terms of Service, contact us at <a href="mailto:contact@bigboldtech.com" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>contact@bigboldtech.com</a>.</p>
        </div>
      </div>
    </div>
  )
}

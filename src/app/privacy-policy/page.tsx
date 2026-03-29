import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BigBoldTech privacy policy. Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <div className="content reveal">
          <div className="sec-label">Legal</div>
          <h1 className="sec-title">Privacy Policy</h1>
          <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Last updated: March 2026</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email. This may include your name, email address, company name, phone number, and project details.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send you relevant communications about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2>5. Cookies</h2>
          <p>Our website uses cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications at any time by contacting us.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@bigboldtech.com" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>contact@bigboldtech.com</a>.</p>
        </div>
      </div>
    </div>
  )
}

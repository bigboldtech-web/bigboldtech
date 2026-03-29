import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with BigBoldTech. Book a discovery call to discuss your next enterprise technology project.',
}

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
          <div className="sec-label">Get in Touch</div>
          <h1 className="sec-title">Let&apos;s Build<br />Something Bold</h1>
          <p className="sec-sub">No pitch decks, no fluff — just a real conversation about your technology needs and how we can help.</p>
        </div>
        <div className="contact-grid">
          <ContactForm />
          <div className="contact-info">
            <div className="contact-info-card reveal">
              <h4>Email Us</h4>
              <p><a href="mailto:contact@bigboldtech.com">contact@bigboldtech.com</a></p>
            </div>
            <div className="contact-info-card reveal">
              <h4>Based In</h4>
              <p>India — Serving clients globally across North America, Europe, Middle East, and Asia-Pacific.</p>
            </div>
            <div className="contact-info-card reveal">
              <h4>Response Time</h4>
              <p>We respond to all inquiries within 24 hours. For urgent projects, mention it in your message.</p>
            </div>
            <div className="contact-info-card reveal">
              <h4>Ideal Client</h4>
              <p>Established businesses generating $1M+ in revenue who need enterprise-grade technology infrastructure and growth systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

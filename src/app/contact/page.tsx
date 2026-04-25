import type { Metadata } from 'next'
import { PageHero } from '@/components/v4/PageHero'
import { ContactForm } from '@/components/v4/ContactForm'
import { Scene } from '@/components/v4/Scene'

export const metadata: Metadata = {
  title: 'Contact — Begin a project',
  description:
    'Tell us what you are building. We will come back within 48 hours with a sharp first take, and a path to v1.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin a Project"
        crumbs={[{ label: 'Contact', href: '/contact' }]}
        title={
          <>
            Got a bold idea? <span className="v4-italic">Let&rsquo;s ship it.</span>
          </>
        }
        sub="No deck, no sales theatre. Tell us what you&rsquo;re building, where you are stuck, and where you want to be in ninety days."
        visual={<Scene name="wire" />}
      />

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-two-col">
            <div className="v4-side-card" style={{ padding: 36 }}>
              <ContactForm />
            </div>
            <aside className="v4-sidebar">
              <div className="v4-side-card">
                <h4>Email</h4>
                <p><a href="mailto:hello@bigboldtech.com">hello@bigboldtech.com</a></p>
              </div>
              <div className="v4-side-card">
                <h4>Where we operate</h4>
                <p>Mumbai &middot; Bengaluru &middot; Kathmandu &middot; Remote.<br />Serving partners across India, North America, and the Middle East.</p>
              </div>
              <div className="v4-side-card">
                <h4>Response time</h4>
                <p>Within 48 hours, every weekday. We do not auto-reply &mdash; you&rsquo;ll hear from a human.</p>
              </div>
              <div className="v4-side-card">
                <h4>Best fit</h4>
                <p>Founders and operators of $1M+ businesses. Diagnostics from <strong style={{ color: 'var(--v4-text)' }}>$8K</strong>. Full builds typically <strong style={{ color: 'var(--v4-text)' }}>$60K&ndash;$500K+</strong>.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

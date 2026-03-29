import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="brand-icon">
                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="fbbt-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#00D4FF" />
                      <stop offset="100%" stopColor="#00FF94" />
                    </linearGradient>
                  </defs>
                  <path d="M22 3l16.5 9.5v19L22 41 5.5 31.5v-19L22 3z" fill="#0C1424" stroke="url(#fbbt-grad)" strokeWidth="1.2" strokeLinejoin="round" />
                  <path d="M14 14h4.5c1.8 0 3.2.9 3.2 2.8 0 1.1-.6 1.9-1.6 2.4 1.2.4 2 1.4 2 2.8 0 2.1-1.5 3.2-3.5 3.2H14V14zm2.2 4.2h2c.9 0 1.3-.5 1.3-1.3s-.5-1.2-1.3-1.2h-2v2.5zm0 4.6h2.3c.9 0 1.5-.5 1.5-1.4s-.6-1.4-1.5-1.4h-2.3v2.8z" fill="url(#fbbt-grad)" />
                  <path d="M30 14h-4.5c-1.8 0-3.2.9-3.2 2.8 0 1.1.6 1.9 1.6 2.4-1.2.4-2 1.4-2 2.8 0 2.1 1.5 3.2 3.5 3.2H30V14zm-2.2 4.2h-2c-.9 0-1.3-.5-1.3-1.3s.5-1.2 1.3-1.2h2v2.5zm0 4.6h-2.3c-.9 0-1.5-.5-1.5-1.4s.6-1.4 1.5-1.4h2.3v2.8z" fill="url(#fbbt-grad)" />
                  <line x1="15" y1="30" x2="29" y2="30" stroke="url(#fbbt-grad)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="22" y1="30" x2="22" y2="34" stroke="url(#fbbt-grad)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="brand-name">
                <span className="br-top">BigBold</span>
                <span className="br-bottom">Technologies</span>
              </div>
            </div>
            <p>Enterprise-grade AI systems, SaaS platforms, mobile apps, and performance marketing — built for businesses that refuse to settle.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <Link href="/services/ai-automation">AI &amp; Automation</Link>
            <Link href="/services/saas-development">SaaS Development</Link>
            <Link href="/services/web-apps">Web Apps</Link>
            <Link href="/services/mobile-apps">Mobile Apps</Link>
            <Link href="/services/performance-marketing">Performance Marketing</Link>
            <Link href="/services/seo">SEO &amp; Growth</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="mailto:contact@bigboldtech.com">contact@bigboldtech.com</a>
            <a href="https://linkedin.com/company/bigboldtech" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/bigboldtech" target="_blank" rel="noopener noreferrer">Twitter / X</a>
            <a href="https://github.com/bigboldtech" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 BigBoldTech Pvt. Ltd. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

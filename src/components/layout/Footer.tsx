'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid-v2">
          {/* Brand Column */}
          <div className="footer-brand">
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
            <p className="footer-tagline">Enterprise-grade AI systems, SaaS platforms, mobile apps, and performance marketing — built for businesses that refuse to settle.</p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/bigboldtech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/bigboldtech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/bigboldtech" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://instagram.com/bigboldtech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h5>Solutions</h5>
            <Link href="/services/ai-automation">AI &amp; Automation</Link>
            <Link href="/services/saas-development">SaaS Development</Link>
            <Link href="/services/web-apps">Web Applications</Link>
            <Link href="/services/mobile-apps">Mobile Apps</Link>
            <Link href="/services/performance-marketing">Performance Marketing</Link>
            <Link href="/services/seo">SEO &amp; Organic Growth</Link>
            <Link href="/services/email-marketing">Email &amp; CRM</Link>
            <Link href="/services/devops">DevOps &amp; Cloud</Link>
            <Link href="/services/analytics">Analytics</Link>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h5>Resources</h5>
            <Link href="/blog">Blog</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/industries">Industries</Link>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Newsletter */}
          <div className="footer-col footer-newsletter">
            <h5>Stay Updated</h5>
            <p>Get enterprise tech insights, case studies, and growth strategies delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@company.com" className="newsletter-input" />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9h12M11 5l4 4-4 4"/></svg>
              </button>
            </form>
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

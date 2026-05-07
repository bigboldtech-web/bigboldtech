import Link from 'next/link'
import { Logo } from './Logo'
import { footerNav } from '@/data/nav'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-bbt">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand-bbt" aria-label="Big Bold Tech home">
              <Logo size={36} />
              <span className="brand-word">
                <span className="brand-word-a">BIG</span>
                <span className="brand-word-b">BOLD</span>
              </span>
            </Link>
            <p className="footer-tag">
              Software, AI, and growth — end-to-end. We&rsquo;re your technology
              partner from first sketch to production scale.
            </p>
            <div className="footer-contact">
              <a href={`mailto:${SITE_CONFIG.email}`} className="footer-link-strong">
                {SITE_CONFIG.email}
              </a>
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="footer-link-muted">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {footerNav.map((col) => (
              <div key={col.title} className="footer-col">
                <h3 className="footer-col-title">{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {year} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <ul className="footer-social">
            <li><a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

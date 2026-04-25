'use client'

import Link from 'next/link'
import { LogoMark } from './LogoMark'

export function FooterV4() {
  return (
    <footer className="v4-footer">
      <div className="v4-footer-grid">
        <div className="v4-footer-brand">
          <Link href="/" className="v4-brand" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <span className="v4-brand-mark"><LogoMark size={52} /></span>
            <span className="v4-brand-wordmark">
              <span className="v4-brand-wordmark-a">BIG</span>
              <span className="v4-brand-wordmark-b">BOLD</span>
            </span>
          </Link>
          <p>
            An AI-native product studio building software with conviction.
            Mumbai &middot; Bengaluru &middot; Kathmandu &middot; Remote.
          </p>
        </div>

        <div className="v4-footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Cashkr</a></li>
            <li><a href="#">Big Bold Teams</a></li>
            <li><a href="#">ManagedAd</a></li>
            <li><a href="https://workwrk.com" target="_blank" rel="noopener noreferrer">Workwrk</a></li>
            <li><a href="#">Suprfly</a></li>
            <li><a href="#">SwayMaps</a></li>
          </ul>
        </div>

        <div className="v4-footer-col">
          <h4>Studio</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><a href="#values">Values</a></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Press</Link></li>
          </ul>
        </div>

        <div className="v4-footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:hello@bigboldtech.com">hello@bigboldtech.com</a></li>
            <li><a href="https://linkedin.com/company/bigboldtech" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/bigboldtech" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
            <li><a href="https://instagram.com/bigboldtech" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="v4-footer-bottom">
        <span>&copy; 2026 Big Bold Tech Pvt. Ltd.</span>
        <span>Built bold in India &middot; Designed for the world</span>
      </div>
    </footer>
  )
}

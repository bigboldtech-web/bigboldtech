'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navigation } from '@/data/navigation'

export function Header() {
  const [pinned, setPinned] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setPinned(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggle = () => setMenuOpen((prev) => !prev)

  return (
    <nav className={`nav ${pinned ? 'pinned' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="BigBoldTech Home">
          <div className="brand-icon">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bbt-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#00FF94" />
                </linearGradient>
              </defs>
              <path d="M22 3l16.5 9.5v19L22 41 5.5 31.5v-19L22 3z" fill="#0C1424" stroke="url(#bbt-grad)" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M14 14h4.5c1.8 0 3.2.9 3.2 2.8 0 1.1-.6 1.9-1.6 2.4 1.2.4 2 1.4 2 2.8 0 2.1-1.5 3.2-3.5 3.2H14V14zm2.2 4.2h2c.9 0 1.3-.5 1.3-1.3s-.5-1.2-1.3-1.2h-2v2.5zm0 4.6h2.3c.9 0 1.5-.5 1.5-1.4s-.6-1.4-1.5-1.4h-2.3v2.8z" fill="url(#bbt-grad)" />
              <path d="M30 14h-4.5c-1.8 0-3.2.9-3.2 2.8 0 1.1.6 1.9 1.6 2.4-1.2.4-2 1.4-2 2.8 0 2.1 1.5 3.2 3.5 3.2H30V14zm-2.2 4.2h-2c-.9 0-1.3-.5-1.3-1.3s.5-1.2 1.3-1.2h2v2.5zm0 4.6h-2.3c-.9 0-1.5-.5-1.5-1.4s.6-1.4 1.5-1.4h2.3v2.8z" fill="url(#bbt-grad)" />
              <line x1="15" y1="30" x2="29" y2="30" stroke="url(#bbt-grad)" strokeWidth="2" strokeLinecap="round" />
              <line x1="22" y1="30" x2="22" y2="34" stroke="url(#bbt-grad)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="brand-name">
            <span className="br-top">BigBold</span>
            <span className="br-bottom">Technologies</span>
          </div>
        </Link>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-dropdown">
            <Link href="/services">Services</Link>
            <div className="nav-dropdown-panel">
              <div className="nav-dropdown-grid">
                {navigation.services.map((svc) => (
                  <Link key={svc.href} href={svc.href} className="nav-dropdown-item">
                    {svc.label}
                  </Link>
                ))}
              </div>
              <div className="nav-dropdown-footer">
                <Link href="/services" className="nav-dropdown-all">
                  View All Services
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
                </Link>
              </div>
            </div>
          </li>
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li className="nav-socials">
            <a href="https://linkedin.com/company/bigboldtech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://twitter.com/bigboldtech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </li>
          <li><Link href="/contact" className="nav-btn">Get Started <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 7h8M8 4l3 3-3 3"/></svg></Link></li>
        </ul>
        <button className="burger" onClick={toggle} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

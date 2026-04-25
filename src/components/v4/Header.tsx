'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogoMark } from './LogoMark'

const links = [
  { href: '/services',     label: 'Capabilities' },
  { href: '/case-studies', label: 'Work' },
  { href: '/industries',   label: 'Industries' },
  { href: '/about',        label: 'Studio' },
  { href: '/blog',         label: 'Journal' },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function HeaderV4() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <div className="v4-nav-wrap">
        <nav className="v4-nav">
          <Link href="/" className="v4-brand" aria-label="Big Bold Tech home">
            <span className="v4-brand-mark"><LogoMark size={28} /></span>
            <span className="v4-brand-wordmark">
              <span className="v4-brand-wordmark-a">BIG</span>
              <span className="v4-brand-wordmark-b">BOLD</span>
            </span>
          </Link>

          <ul className="v4-nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={isActive(pathname, l.href) ? { color: 'var(--v4-text)' } : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="v4-nav-cta">
            Book a call
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" width="12" height="12">
              <path d="M3 9 L9 3 M5 3 H9 V7" />
            </svg>
          </Link>

          <button
            className="v4-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
          </button>
        </nav>
      </div>

      <div className={`v4-mobile-menu ${open ? 'is-open' : ''}`}>
        <nav>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Book a call &rarr;</Link>
        </nav>
      </div>
    </>
  )
}

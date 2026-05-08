'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { Button } from './Button'
import { ThemeToggle } from './ThemeToggle'
import { primaryNav } from '@/data/nav'
import { cn } from '@/lib/utils'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu when navigating
  useEffect(() => { setOpen(false) }, [pathname])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={cn('header-bbt', scrolled && 'is-scrolled')}>
      <div className="header-inner">
        <Link href="/" className="brand-bbt" aria-label="Big Bold Tech home">
          <Logo size={32} />
          <span className="brand-word">
            <span className="brand-word-a">BIG</span>
            <span className="brand-word-b">BOLD</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {primaryNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn('nav-link', isActive(pathname, l.href) && 'is-active')}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <div className="header-cta">
            <Button href="/contact" size="sm" arrow>
              Start a project
            </Button>
          </div>
        </div>

        <button
          type="button"
          className={cn('burger', open && 'is-open')}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={cn('mobile-menu', open && 'is-open')}>
        <nav aria-label="Mobile">
          <ul>
            {primaryNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="mobile-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" arrow className="mobile-cta">
            Start a project
          </Button>
          <div className="mobile-theme-row">
            <span>Appearance</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

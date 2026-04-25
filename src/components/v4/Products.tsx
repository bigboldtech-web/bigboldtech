'use client'

import { Reveal } from './Reveal'
import { Tilt } from './Tilt'

type Product = {
  key: 'cashkr' | 'teams' | 'ad' | 'workwrk' | 'suprfly' | 'swaymaps'
  mark: string
  name: string
  tagline: string
  category: string
  status: 'Live' | 'Beta' | 'Building'
  href?: string
  external?: boolean
  /** External favicon — used in place of the letter mark when present */
  iconUrl?: string
}

const products: Product[] = [
  {
    key: 'cashkr', mark: 'C', name: 'Cashkr',
    tagline: 'India’s fastest device buyback platform. 21 cities, 140+ orders shipped daily.',
    category: 'D2C · Logistics', status: 'Live',
    href: 'https://www.cashkr.com',
    external: true,
    iconUrl: 'https://www.google.com/s2/favicons?domain=cashkr.com&sz=128',
  },
  {
    key: 'teams', mark: 'B', name: 'Big Bold Teams',
    tagline: 'AI agents that hold job titles. Replace process work, not people.',
    category: 'AI Agents · SMB', status: 'Beta',
  },
  {
    key: 'ad', mark: 'M', name: 'ManagedAd',
    tagline: 'AI performance marketer in a box. Replaces the agency, keeps the ROAS.',
    category: 'Marketing AI', status: 'Beta',
  },
  {
    key: 'workwrk', mark: 'W', name: 'Workwrk',
    tagline: 'A Business OS that sits above HRMS. For SMBs from 10 to 500.',
    category: 'Business OS', status: 'Building',
    href: 'https://workwrk.com',
    external: true,
    iconUrl: 'https://www.google.com/s2/favicons?domain=workwrk.com&sz=128',
  },
  {
    key: 'suprfly', mark: 'S', name: 'Suprfly',
    tagline: 'AI auto-commenter for LinkedIn & X. Scale your voice without losing it.',
    category: 'Chrome Extension', status: 'Building',
  },
  {
    key: 'swaymaps', mark: 'SM', name: 'SwayMaps',
    tagline: 'Visual dependency mapping for engineering teams. See the system, not the ticket.',
    category: 'DevTools', status: 'Building',
  },
]

export function ProductsV4() {
  return (
    <section className="v4-section v4-portfolio" id="products">
      <div className="v4-container">
        <Reveal>
          <div className="v4-portfolio-header">
            <div>
              <span className="v4-eyebrow">The Portfolio</span>
              <h2 className="v4-h2">
                Products we built. <span className="v4-italic">Live, loved, shipping.</span>
              </h2>
            </div>
            <div className="right">
              <p className="v4-sub">
                Six products across six categories. Each one solves a sharp
                problem for a specific operator. Each one earns its place.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="v4-products-grid">
          {products.map((p, i) => (
            <Reveal key={p.key} delay={i * 60}>
              <Tilt max={6}>
                <a
                  href={p.href ?? '#'}
                  target={p.external ? '_blank' : undefined}
                  rel={p.external ? 'noopener noreferrer' : undefined}
                  className="v4-product"
                  data-c={p.key}
                >
                  <div className="v4-scan" aria-hidden />
                  <div className="v4-product-glow" />
                  <div className="v4-shimmer" aria-hidden />
                  <div className="v4-product-top">
                    <div className="v4-product-mark">
                      {p.iconUrl ? (
                        <img src={p.iconUrl} alt="" width={28} height={28} />
                      ) : (
                        p.mark
                      )}
                    </div>
                    <span className={`v4-product-status ${p.status === 'Live' ? 'is-live' : ''}`}>
                      <span aria-hidden style={{ fontSize: 10 }}>&bull;</span>
                      <span>{p.status}</span>
                      {p.external && (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M3 9 L9 3 M5 3 H9 V7" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <div>
                    <h3 className="v4-product-name">{p.name}</h3>
                    <p className="v4-product-tagline">{p.tagline}</p>
                  </div>
                  <div className="v4-product-meta">
                    <span>{p.category}</span>
                    <span className="v4-product-arrow">
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 9 L9 3 M5 3 H9 V7" />
                      </svg>
                    </span>
                  </div>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

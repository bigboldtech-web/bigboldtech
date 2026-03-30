import React from 'react'
import Link from 'next/link'
import { industries } from '@/data/industries'

const industryIcons: Record<string, React.ReactNode> = {
  finance: <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 14h4"/></svg>,
  healthcare: <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>,
  ecommerce: <svg viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  'real-estate': <svg viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  saas: <svg viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>,
  manufacturing: <svg viewBox="0 0 24 24" fill="none" stroke="#E0AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V8l5 4V8l5 4V4l5 4v12"/></svg>,
}

export function IndustryVerticals() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label">Industries We Serve</div>
          <h2 className="sec-title">Enterprise Solutions<br />Across Verticals</h2>
          <p className="sec-sub">Deep domain expertise in the industries that matter most. We understand your compliance, scale, and growth challenges.</p>
        </div>

        <div className="ind-grid">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="ind-card reveal">
              <div className="ind-icon">
                {industryIcons[ind.slug] || <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>}
              </div>
              <h3>{ind.name}</h3>
              <p>{ind.description}</p>
              <span className="ind-link">
                Learn More
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
          <Link href="/contact" className="btn-glow">
            Schedule a Call
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { caseStudies } from '@/data/case-studies'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FounderNote } from '@/components/sections/FounderNote'
import { InlineContactForm } from '@/components/sections/InlineContactForm'

const industries = ['All', ...Array.from(new Set(caseStudies.map(c => c.industry)))]

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? caseStudies : caseStudies.filter(c => c.industry === filter)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <Breadcrumbs items={[{ label: 'Case Studies', href: '/case-studies' }]} />
            <div className="sec-label">Our Work</div>
            <h1 className="sec-title">Real Outcomes.<br />Real Numbers.</h1>
            <p className="sec-sub" style={{ maxWidth: '640px' }}>Every engagement is measured by the impact it delivers. Here are the results that speak for themselves — fraud reduced, revenue scaled, operations transformed.</p>
          </div>

          <div className="carousel-filters" style={{ marginTop: '48px' }}>
            {industries.map(ind => (
              <button
                key={ind}
                className={`carousel-filter-btn ${filter === ind ? 'active' : ''}`}
                onClick={() => setFilter(ind)}
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="case-grid">
            {filtered.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="case-card">
                <span className="industry-tag">{cs.industry}</span>
                <h3>{cs.client}</h3>
                <p>{cs.description}</p>
                <div className="case-metrics">
                  {cs.results.slice(0, 3).map((r) => (
                    <div key={r.metric}>
                      <div className="case-metric-val">{r.value}</div>
                      <div className="case-metric-lbl">{r.metric}</div>
                    </div>
                  ))}
                </div>
                {cs.testimonial && (
                  <div className="case-testimonial-preview">
                    <p>&ldquo;{cs.testimonial.quote.substring(0, 120)}...&rdquo;</p>
                    <span>— {cs.testimonial.author}, {cs.testimonial.role}</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FounderNote />

      <section className="sec">
        <div className="wrap">
          <div className="cta-split">
            <div className="cta-left">
              <div className="sec-label">Your Turn</div>
              <h2 className="sec-title">Want Results<br />Like These?</h2>
              <p className="sec-sub">Tell us about your project and we will show you exactly how we can deliver measurable outcomes for your business.</p>
              <div className="cta-trust-signals">
                <div className="trust-item">
                  <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 10l4 4 8-8"/><circle cx="10" cy="10" r="9"/></svg>
                  <span>Response within 24 hours</span>
                </div>
                <div className="trust-item">
                  <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 10l4 4 8-8"/><circle cx="10" cy="10" r="9"/></svg>
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
            <div className="cta-right">
              <InlineContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

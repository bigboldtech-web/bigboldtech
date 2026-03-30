'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { caseStudies } from '@/data/case-studies'

const industries = ['All', ...Array.from(new Set(caseStudies.map(c => c.industry)))]

export function CaseStudyCarousel() {
  const [filter, setFilter] = useState('All')
  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered = filter === 'All' ? caseStudies : caseStudies.filter(c => c.industry === filter)

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' })
  }

  return (
    <section className="sec" id="results">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label">Proven Results</div>
          <h2 className="sec-title">Real Outcomes.<br />Real Numbers.</h2>
          <p className="sec-sub">Every engagement is measured by the impact it delivers. Here are the results that speak for themselves.</p>
        </div>

        <div className="carousel-filters">
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

        <div className="carousel-container">
          <button className="carousel-nav carousel-prev" onClick={() => scrollBy(-1)} aria-label="Previous">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 4l-8 8 8 8"/></svg>
          </button>
          <div className="carousel-scroll" ref={scrollRef}>
            {filtered.map((cs) => (
              <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className="carousel-card">
                <span className="carousel-industry">{cs.industry}</span>
                <h3>{cs.client}</h3>
                <p>{cs.description}</p>
                <div className="carousel-metrics">
                  {cs.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="carousel-metric">
                      <div className="carousel-metric-val">{r.value}</div>
                      <div className="carousel-metric-lbl">{r.metric}</div>
                    </div>
                  ))}
                </div>
                <span className="carousel-link">
                  See full case study
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </span>
              </Link>
            ))}
          </div>
          <button className="carousel-nav carousel-next" onClick={() => scrollBy(1)} aria-label="Next">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4l8 8-8 8"/></svg>
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/case-studies" className="btn-ghost">
            See All Work
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

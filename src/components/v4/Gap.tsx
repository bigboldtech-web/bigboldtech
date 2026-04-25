'use client'

import { Reveal } from './Reveal'

const items = [
  { num: '01', title: 'Generic SaaS, generic outcomes.', body: 'Off-the-shelf tools force teams into someone else’s workflow. The unfair advantage gets sanded down to a checkbox.' },
  { num: '02', title: 'AI features, not AI-native products.', body: 'Most “AI” today is a chatbot bolted onto a 2015 product. The real opportunity is rebuilding the workflow itself.' },
  { num: '03', title: 'Slow agencies, undifferentiated freelancers.', body: 'Founders need partners who ship at the speed of conviction — not vendors who ship at the speed of invoices.' },
  { num: '04', title: 'Indian SMBs, served last.', body: 'The world’s most vibrant business economy still uses tools designed for someone else. We build for here, first.' },
]

export function GapV4() {
  return (
    <section className="v4-section v4-gap" id="gap">
      <div className="v4-container">
        <Reveal>
          <span className="v4-eyebrow">The Gap</span>
          <h2 className="v4-h2">
            Most software is built to <span className="v4-italic">fit in.</span>{' '}
            We build software that takes a stand.
          </h2>
          <p className="v4-sub">
            The market is full of polite, predictable, “best-practice” tools.
            They solve the obvious problem and stop. We are interested in the
            harder version &mdash; the one that changes how a business actually
            operates.
          </p>
        </Reveal>

        <div className="v4-gap-grid">
          <div className="v4-gap-list">
            {items.map((it, i) => (
              <Reveal key={it.num} delay={i * 80} className="v4-gap-item">
                <span className="v4-gap-num">{it.num}</span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="v4-gap-quote">
            <span className="v4-quote-mark">&ldquo;</span>
            <blockquote>
              We do not build features. We build conviction into software
              &mdash; the kind that makes a small team move like a giant.
            </blockquote>
            <div className="v4-attribution">
              <div className="v4-attribution-mark" />
              <div>
                <strong>BigBoldTech Studio</strong>
                <span>Mumbai &middot; Bengaluru &middot; Kathmandu</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

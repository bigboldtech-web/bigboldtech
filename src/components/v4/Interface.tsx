'use client'

import { Reveal } from './Reveal'

const steps = [
  { num: '01 — POSITION', node: '01', title: 'Sharpen the wedge',     body: 'One week to find the fight worth picking. We co-define audience, promise, and the unfair advantage.' },
  { num: '02 — DESIGN',   node: '02', title: 'Pixel-level conviction', body: 'Two weeks of design that already feels like a product. Brand, UX, and copy in lockstep, not in silos.' },
  { num: '03 — BUILD',    node: '03', title: 'Ship to production',    body: 'Real backend, real infra, real auth. Built on the same stack that runs Cashkr at scale today.' },
  { num: '04 — SCALE',    node: '04', title: 'Grow with the team',    body: 'We hand off — or stay on as the long-term tech partner. Your choice. Either way, you own everything.' },
]

export function InterfaceV4() {
  return (
    <section className="v4-section v4-interface">
      <div className="v4-container">
        <Reveal>
          <span className="v4-eyebrow">The Interface</span>
          <h2 className="v4-h2">
            From idea to live product, in <span className="v4-italic">four moves.</span>
          </h2>
          <p className="v4-sub">
            No discovery theatre. No 12-week roadmap that ends in a prototype.
            We compress the whole cycle.
          </p>
        </Reveal>

        <div className="v4-approach">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 90} className="v4-step">
              <div className="v4-step-node" aria-hidden>{s.node}</div>
              <div className="v4-step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

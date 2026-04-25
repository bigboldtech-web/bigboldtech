'use client'

import dynamic from 'next/dynamic'
import { Reveal } from './Reveal'

const WireIcosahedron = dynamic(
  () => import('./WireIcosahedron').then((m) => m.WireIcosahedron),
  { ssr: false, loading: () => null }
)

export function ValuesV4() {
  return (
    <section className="v4-section v4-values" id="values">
      <div className="v4-container">
        <Reveal>
          <span className="v4-eyebrow">Our Values</span>
          <h2 className="v4-h2">
            How we work, what we <span className="v4-italic">refuse</span> to compromise on.
          </h2>
        </Reveal>

        <div className="v4-values-grid">
          <Reveal className="v4-tile is-feature t1">
            <div className="v4-tile-num">01 / Conviction</div>
            <h3>We pick a hill. We <span className="v4-italic">die on it.</span></h3>
            <p>
              Every product has a strong opinion. We&rsquo;d rather build a
              sharper tool that 100 people love than a vague one that 10,000
              tolerate. Conviction is the brief.
            </p>
            <div className="v4-tile-stat">
              <div className="num">6</div>
              <div className="label">products shipped<br />across 4 categories</div>
            </div>
          </Reveal>

          <Reveal delay={80} className="v4-tile t2">
            <div className="v4-tile-num">02 / Speed</div>
            <h3>Ship the version that exists.</h3>
            <p>
              Perfect ships never. We build in tight loops, deploy daily, and
              learn faster than the slide-deck competition. Velocity is the moat.
            </p>
          </Reveal>

          <Reveal delay={160} className="v4-tile t3">
            <div className="v4-tile-num">03 / Craft</div>
            <h3>Details are the brand.</h3>
            <p>
              Loading states, copy, micro-animations, error messages. The
              difference between forgettable and unforgettable lives in the
              last 5%.
            </p>
            <div className="v4-tile-3d">
              <WireIcosahedron />
            </div>
          </Reveal>

          <Reveal delay={240} className="v4-tile t4">
            <div className="v4-tile-num">04 / Range</div>
            <h3>Generalists by design.</h3>
            <p>Strategy meets infra meets pixel. One team thinking the whole stack.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

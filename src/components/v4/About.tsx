'use client'

import dynamic from 'next/dynamic'

const WaveMesh = dynamic(
  () => import('./WaveMesh').then((m) => m.WaveMesh),
  { ssr: false, loading: () => null }
)

export function AboutV4() {
  return (
    <section className="v4-about" id="about">
      <span className="v4-eyebrow">About BigBoldTech</span>
      <h2 className="v4-h2">
        Software that thinks like a <span className="v4-italic">founder.</span>
      </h2>
      <p className="v4-sub">
        We&rsquo;re a product studio in Mumbai with a team in Kathmandu.
        We&rsquo;ve been building since 2022, scaled Cashkr from zero to
        5,400+ orders/month, and now ship products across AI agents, devtools,
        marketing, and ops. We work like founders because we are.
      </p>

      <div className="v4-about-visual">
        <WaveMesh density="dense" />
      </div>

      <p className="v4-about-footnote">
        All BigBoldTech products are built on a shared technical foundation
        &mdash; a battle-tested SaaS infrastructure layer running in
        production across our portfolio. We dogfood everything we ship.
      </p>
    </section>
  )
}

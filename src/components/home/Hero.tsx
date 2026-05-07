import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <section className="hero-bbt" aria-label="Big Bold Tech — software, AI, and growth, end-to-end">
      <div className="hero-bg" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2400&q=80&bbt=v1"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="hero-tint" />
        <div className="hero-grid" />
      </div>

      <Container>
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Now booking projects · Q3 2026
          </span>

          <h1 className="hero-title h1-bbt">
            Software, AI, and growth — <span className="hero-accent">end-to-end.</span>
          </h1>

          <p className="hero-lede">
            Big Bold Tech is your full-service technology + growth partner.
            We build AI applications, custom software, and the marketing
            engines that put them in front of customers.
          </p>

          <div className="hero-ctas">
            <Button href="/contact" size="lg" arrow>Start a project</Button>
            <Button href="/work" size="lg" variant="ghost">See our work</Button>
          </div>

          <ul className="hero-meta" aria-label="Quick proof points">
            <li>
              <strong>End-to-end</strong>
              <span>strategy → design → build → ship → grow</span>
            </li>
            <li>
              <strong>14-day kickoff</strong>
              <span>median time from signed SOW to first deploy</span>
            </li>
            <li>
              <strong>Fixed bids</strong>
              <span>scope-locked engagements, no surprise invoices</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

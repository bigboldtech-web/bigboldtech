'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export function MarketingOS() {
  return (
    <section className="sec sec-dark" id="os">
      <div className="wrap">
        <div className="os-layout">
          <div className="os-content reveal">
            <div className="sec-label">The BigBoldTech Advantage</div>
            <h2 className="sec-title">Nine Verticals.<br />One Technology OS.</h2>
            <p className="sec-sub">From AI and SaaS to performance marketing and DevOps — a unified team that owns your entire technology and growth stack. No hand-offs. No gaps. No excuses.</p>
          </div>
          <div className="os-stats">
            <AnimatedCounter end={50} suffix="+" label="Projects Delivered" />
            <AnimatedCounter end={9} suffix="" label="Service Verticals" />
            <AnimatedCounter end={21} suffix="+" label="Cities Reached" />
            <AnimatedCounter end={99} suffix=".9%" label="Uptime Guaranteed" />
          </div>
        </div>
      </div>
    </section>
  )
}

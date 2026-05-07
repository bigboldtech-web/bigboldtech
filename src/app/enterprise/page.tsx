import type { Metadata } from 'next'
import { EnterpriseHero } from '@/components/v4/EnterpriseHero'
import { LogoStrip } from '@/components/v4/LogoStrip'
import { StatHero } from '@/components/v4/StatHero'
import { CapabilitiesMatrix } from '@/components/v4/CapabilitiesMatrix'
import { TrustBadges } from '@/components/v4/TrustBadges'
import { EngagementModels } from '@/components/v4/EngagementModels'
import { TestimonialRow } from '@/components/v4/TestimonialRow'
import { EnterpriseCTA } from '@/components/v4/EnterpriseCTA'
import { enterpriseStats } from '@/data/stats'
import { enterpriseTestimonials } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Enterprise — Indemnified, audited, on-call',
  description:
    'Big Bold Tech for enterprise: senior product teams on demand. SOC 2, on-call SLAs, source-code ownership, capabilities deck on request.',
  alternates: { canonical: '/enterprise' },
}

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />

      <LogoStrip
        eyebrow="Currently engaged with"
        variant="card"
      />

      <StatHero
        eyebrow="Outcomes"
        stats={enterpriseStats}
        variant="grid"
      />

      <CapabilitiesMatrix />

      <EngagementModels />

      <TrustBadges />

      <TestimonialRow
        eyebrow="What buyers tell us"
        heading={
          <>
            Three things our enterprise clients <span className="v4-italic">say back</span>.
          </>
        }
        testimonials={enterpriseTestimonials}
        limit={3}
      />

      <EnterpriseCTA />
    </>
  )
}

import { Hero } from '@/components/sections/Hero'
import { Strip } from '@/components/sections/Strip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyUs } from '@/components/sections/WhyUs'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { TechStack } from '@/components/sections/TechStack'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQAccordion } from '@/components/sections/FAQAccordion'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <ServicesGrid />
      <WhyUs />
      <ProcessTimeline />
      <TechStack />
      <CTABanner />
      <FAQAccordion />
    </>
  )
}

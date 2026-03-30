import { Hero } from '@/components/sections/Hero'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { MediaMentions } from '@/components/sections/MediaMentions'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { MarketingOS } from '@/components/sections/MarketingOS'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { MidPageCTA } from '@/components/sections/MidPageCTA'
import { ToolsShowcase } from '@/components/sections/ToolsShowcase'
import { CaseStudyCarousel } from '@/components/sections/CaseStudyCarousel'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { Methodology } from '@/components/sections/Methodology'
import { IndustryVerticals } from '@/components/sections/IndustryVerticals'
import { FounderNote } from '@/components/sections/FounderNote'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQAccordion } from '@/components/sections/FAQAccordion'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <MediaMentions />
      <ProblemStatement />
      <MarketingOS />
      <ServicesGrid />
      <MidPageCTA
        headline="Not Sure Where to Start?"
        subtext="Book a free 30-minute discovery call. We will audit your current stack and identify the highest-impact opportunities."
        buttonText="Book Discovery Call"
      />
      <ToolsShowcase />
      <CaseStudyCarousel />
      <MidPageCTA
        variant="compact"
        headline="Want Results Like These?"
        buttonText="See All Case Studies"
        buttonHref="/case-studies"
      />
      <ComparisonTable />
      <Methodology />
      <IndustryVerticals />
      <FounderNote />
      <CTABanner />
      <FAQAccordion />
    </>
  )
}

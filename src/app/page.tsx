import { Hero } from '@/components/home/Hero'
import { LogoStrip } from '@/components/home/LogoStrip'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { WhyUs } from '@/components/home/WhyUs'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { StatsBand } from '@/components/home/StatsBand'
import { Process } from '@/components/home/Process'
import { IndustriesGrid } from '@/components/home/IndustriesGrid'
import { Testimonials } from '@/components/home/Testimonials'
import { ContactCTA } from '@/components/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesPreview />
      <WhyUs />
      <FeaturedWork />
      <StatsBand />
      <Process />
      <IndustriesGrid />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

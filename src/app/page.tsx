import { Hero } from '@/components/home/Hero'
import { LogoStrip } from '@/components/home/LogoStrip'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { WhyUs } from '@/components/home/WhyUs'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { StatsBand } from '@/components/home/StatsBand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesPreview />
      <WhyUs />
      <FeaturedWork />
      <StatsBand />
    </>
  )
}

import { HeroV4 } from '@/components/v4/Hero'
import { LogoStrip } from '@/components/v4/LogoStrip'
import { GapV4 } from '@/components/v4/Gap'
import { SolutionV4 } from '@/components/v4/Solution'
import { MediaHero } from '@/components/v4/MediaHero'
import { ProductsV4 } from '@/components/v4/Products'
import { StatHero } from '@/components/v4/StatHero'
import { ValuesV4 } from '@/components/v4/Values'
import { InterfaceV4 } from '@/components/v4/Interface'
import { TestimonialRow } from '@/components/v4/TestimonialRow'
import { AboutV4 } from '@/components/v4/About'
import { CTAV4 } from '@/components/v4/CTA'
import { media } from '@/data/media'
import { founderStats } from '@/data/stats'
import { testimonials } from '@/data/testimonials'

export default function HomePage() {
  return (
    <>
      <HeroV4 />

      <LogoStrip
        eyebrow="Trusted by founders + operators across"
        caption="Selected partners and ventures we've shipped products with."
      />

      <GapV4 />

      <SolutionV4 />

      <section className="v4-section v4-section-media">
        <div className="v4-container">
          <MediaHero
            kind="image"
            media={media.studioWide}
            tint="strong"
            ratio="21/9"
            caption="Studio · Bengaluru + remote"
          />
        </div>
      </section>

      <ProductsV4 />

      <StatHero
        eyebrow="The receipts"
        stats={founderStats}
        variant="grid"
      />

      <ValuesV4 />

      <InterfaceV4 />

      <TestimonialRow
        eyebrow="Operator notes"
        heading={
          <>
            Founders who&rsquo;ve built with us, in <span className="v4-italic">their words</span>.
          </>
        }
        testimonials={testimonials}
        limit={3}
      />

      <AboutV4 />
      <CTAV4 />
    </>
  )
}

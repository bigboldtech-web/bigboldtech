import Image from 'next/image'
import { Container } from './Container'
import { Eyebrow } from './Eyebrow'
import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  image?: string
  /** Optional content rendered after the description (CTAs, meta) */
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, image, children }: Props) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero-bg" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="page-hero-tint" />
          <div className="page-hero-grid" />
        </div>
      )}
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="h1-bbt page-hero-title">{title}</h1>
        {description && <p className="lede-bbt page-hero-desc">{description}</p>}
        {children}
      </Container>
    </section>
  )
}

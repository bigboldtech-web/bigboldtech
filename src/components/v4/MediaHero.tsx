import Image from 'next/image'
import type { MediaRef } from '@/data/media'

type ImageProps = {
  kind?: 'image'
  media: MediaRef
}

type VideoProps = {
  kind: 'video'
  media: { src: string; poster: string; alt: string }
}

type Props = (ImageProps | VideoProps) & {
  /** Tint heaviness — 'soft' for editorial, 'strong' for hero */
  tint?: 'soft' | 'strong'
  /** Aspect ratio override (defaults to media.ratio or 16/9) */
  ratio?: string
  /** Optional caption rendered as a lower-left chip */
  caption?: string
  className?: string
  /** Set true when used as the LCP element */
  priority?: boolean
}

export function MediaHero(props: Props) {
  const tint = props.tint ?? 'soft'
  const ratio =
    props.ratio ??
    (props.kind === 'video' ? '16/9' : props.media.ratio ?? '16/9')

  return (
    <figure
      className={`v4-mediahero is-${tint} ${props.className ?? ''}`}
      style={{ aspectRatio: ratio }}
    >
      {props.kind === 'video' ? (
        <video
          className="v4-mediahero-bg"
          src={props.media.src}
          poster={props.media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={props.media.alt}
        />
      ) : (
        <Image
          className="v4-mediahero-bg"
          src={props.media.src}
          alt={props.media.alt}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1200px) 90vw, 1400px"
          priority={props.priority}
        />
      )}

      <div className="v4-mediahero-tint" aria-hidden />
      <div className="v4-mediahero-grid" aria-hidden />

      {props.caption && (
        <figcaption className="v4-mediahero-caption">{props.caption}</figcaption>
      )}
    </figure>
  )
}

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type Common = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  /** Trailing arrow icon (renders → for primary CTAs) */
  arrow?: boolean
}

type AnchorProps = Common & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

type ButtonElProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
}

type Props = AnchorProps | ButtonElProps

const Arrow = () => (
  <svg
    aria-hidden
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="btn-arrow"
  >
    <path d="M3 7 H11 M7 3 L11 7 L7 11" />
  </svg>
)

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', arrow, children, className } = props
  const cls = cn('btn-bbt', `is-${variant}`, `size-${size}`, className)

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, size: _s, arrow: _a, children: _c, className: _cn, href, ...rest } = props
    const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')

    if (isExternal) {
      return (
        <a href={href} className={cls} {...rest}>
          {children}
          {arrow && <Arrow />}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
        {arrow && <Arrow />}
      </Link>
    )
  }

  const { variant: _v, size: _s, arrow: _a, children: _c, className: _cn, ...rest } = props
  return (
    <button className={cls} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  )
}

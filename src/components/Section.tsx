import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLElement> & {
  /** Background variant */
  bg?: 'default' | 'subtle' | 'panel'
  /** Vertical padding scale */
  size?: 'sm' | 'md' | 'lg'
  /** Removes top border (used when section sits directly under hero) */
  noBorder?: boolean
}

export function Section({
  className,
  bg = 'default',
  size = 'md',
  noBorder,
  ...rest
}: Props) {
  return (
    <section
      className={cn(
        'section-bbt',
        `bg-${bg}`,
        `size-${size}`,
        noBorder && 'no-border',
        className,
      )}
      {...rest}
    />
  )
}

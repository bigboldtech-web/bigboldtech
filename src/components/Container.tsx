import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({ className, size = 'default', ...rest }: Props) {
  return (
    <div
      className={cn('container-bbt', size !== 'default' && `is-${size}`, className)}
      {...rest}
    />
  )
}

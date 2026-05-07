import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function Eyebrow({
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('eyebrow-bbt', className)} {...rest} />
}

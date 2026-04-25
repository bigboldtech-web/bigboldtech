'use client'

import { type ReactNode, Children, isValidElement, cloneElement } from 'react'

let charCounter = { value: 0 }

function splitText(node: ReactNode, baseDelay = 0): ReactNode {
  if (typeof node === 'string') {
    return node.split('').map((ch, i) => {
      const idx = charCounter.value++
      const delay = baseDelay + idx * 0.025
      if (ch === ' ') return ' '
      return (
        <span
          key={`c-${idx}`}
          className="v4-char"
          style={{ animationDelay: `${delay}s` }}
        >
          {ch}
        </span>
      )
    })
  }
  if (Array.isArray(node)) return node.map((c, i) => <span key={i}>{splitText(c, baseDelay)}</span>)
  if (isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: ReactNode }>
    return cloneElement(
      element,
      undefined,
      splitText(element.props.children, baseDelay)
    )
  }
  return node
}

export function CharReveal({ children, baseDelay = 0.15 }: { children: ReactNode; baseDelay?: number }) {
  charCounter.value = 0
  return <>{splitText(children, baseDelay)}</>
}

'use client'

import dynamic from 'next/dynamic'

const Field = dynamic(() => import('./AmbientFieldImpl').then((m) => m.AmbientFieldImpl), {
  ssr: false,
  loading: () => null,
})

export function AmbientField() {
  return (
    <div className="v4-ambient" aria-hidden>
      <Field />
    </div>
  )
}

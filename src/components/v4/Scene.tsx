'use client'

import dynamic from 'next/dynamic'

const OrbitConstellation = dynamic(
  () => import('./OrbitConstellation').then((m) => m.OrbitConstellation),
  { ssr: false, loading: () => null }
)
const WireIcosahedron = dynamic(
  () => import('./WireIcosahedron').then((m) => m.WireIcosahedron),
  { ssr: false, loading: () => null }
)
const CrystalCore = dynamic(
  () => import('./CrystalCore').then((m) => m.CrystalCore),
  { ssr: false, loading: () => null }
)
const DriftGeo = dynamic(
  () => import('./DriftGeo').then((m) => m.DriftGeo),
  { ssr: false, loading: () => null }
)

export type SceneName = 'orbit' | 'wire' | 'crystal' | 'drift'

export function Scene({ name, activeIndex }: { name: SceneName; activeIndex?: number }) {
  switch (name) {
    case 'orbit':   return <OrbitConstellation />
    case 'wire':    return <WireIcosahedron />
    case 'crystal': return <CrystalCore activeIndex={activeIndex ?? 0} />
    case 'drift':   return <DriftGeo />
  }
}

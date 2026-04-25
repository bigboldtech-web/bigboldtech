'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PALETTE = [
  '#4A74FF', // cobalt
  '#6E92FF', // bright cobalt
  '#9AB6FF', // lavender
  '#5B8DFF', // electric blue
  '#8B5CF6', // violet (kept as cool accent)
  '#4ED5FF', // cyan
  '#5DCFD7', // teal
] as const

type TubeProps = {
  index: number
  total: number
  color: string
  glow?: boolean
}

function FlowTube({ index, total, color, glow = false }: TubeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const t = (index - (total - 1) / 2) / total
  const yOff = t * 2.6
  const phase = index * 1.3

  const material = useMemo(() => {
    if (glow) {
      return new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    }
    return new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.95,
    })
  }, [color, glow])

  const radius = glow ? 0.06 : 0.022

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-9, yOff * 1.2, 0),
      new THREE.Vector3(-4.5, yOff + Math.sin(time * 0.6 + phase) * 0.2, Math.sin(phase + time * 0.4) * 0.3),
      new THREE.Vector3(-1.2, yOff * 0.3 + Math.cos(time * 0.5 + phase) * 0.3, Math.cos(phase + time * 0.3) * 0.6),
      new THREE.Vector3( 0,   Math.sin(phase * 2 + time * 0.4) * 0.4, Math.cos(phase * 1.7 + time * 0.5) * 0.7),
      new THREE.Vector3( 1.2, -yOff * 0.3 + Math.cos(time * 0.5 + phase + 1) * 0.3, -Math.cos(phase + time * 0.3) * 0.6),
      new THREE.Vector3( 4.5, -yOff + Math.sin(time * 0.6 + phase + 2) * 0.2, -Math.sin(phase + time * 0.4) * 0.3),
      new THREE.Vector3( 9, -yOff * 1.2, 0),
    ])
    const newGeometry = new THREE.TubeGeometry(curve, 220, radius, 8, false)
    meshRef.current.geometry.dispose()
    meshRef.current.geometry = newGeometry
  })

  return <mesh ref={meshRef} material={material} />
}

function BraidScene({ density = 'normal' }: { density?: 'normal' | 'dense' }) {
  const tubes = density === 'dense'
    ? [...PALETTE, ...PALETTE.slice().reverse(), ...PALETTE]
    : PALETTE

  return (
    <>
      {tubes.map((color, i) => (
        <group key={i}>
          <FlowTube index={i} total={tubes.length} color={color} />
          <FlowTube index={i} total={tubes.length} color={color} glow />
        </group>
      ))}
    </>
  )
}

export function HeroBraid({ density = 'normal' }: { density?: 'normal' | 'dense' }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 9], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <BraidScene density={density} />
    </Canvas>
  )
}

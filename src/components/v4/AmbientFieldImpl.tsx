'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 1400

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    const col = new Float32Array(COUNT * 3)
    const palette = [
      [0.29, 0.45, 1.0],   // blue
      [0.43, 0.57, 1.0],   // bright cobalt
      [0.6,  0.71, 1.0],   // lavender
      [0.31, 0.84, 1.0],   // cyan
      [0.55, 0.36, 0.96],  // violet
    ]
    for (let i = 0; i < COUNT; i++) {
      // distribute in a flattened ellipsoid for depth
      const r = 7 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = (Math.random() - 0.5) * Math.PI
      pos[i * 3]     = Math.cos(theta) * r
      pos[i * 3 + 1] = Math.sin(phi) * r * 0.6
      pos[i * 3 + 2] = Math.sin(theta) * r - 4
      const c = palette[(Math.random() * palette.length) | 0]
      col[i * 3]     = c[0]
      col[i * 3 + 1] = c[1]
      col[i * 3 + 2] = c[2]
    }
    return { positions: pos, colors: col }
  }, [])

  // attach mouse listener
  useMemo(() => {
    if (typeof window === 'undefined') return
    const onMove = (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.025 + mouseRef.current.x * 0.15
    ref.current.rotation.x = mouseRef.current.y * 0.1 + Math.sin(t * 0.1) * 0.05
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function AmbientFieldImpl() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ParticleField />
    </Canvas>
  )
}

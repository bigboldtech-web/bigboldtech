'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Knot() {
  const knotRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.18
      knotRef.current.rotation.y += delta * 0.28
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.22
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.14
    }
    if (coreRef.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06
      coreRef.current.scale.setScalar(s)
    }
  })

  return (
    <group>
      <mesh ref={knotRef}>
        <torusKnotGeometry args={[0.95, 0.26, 220, 28, 3, 5]} />
        <meshBasicMaterial color="#6E92FF" wireframe transparent opacity={0.78} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.7, 0.006, 8, 96]} />
        <meshBasicMaterial color="#4A74FF" transparent opacity={0.55} />
      </mesh>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshBasicMaterial color="#9AB6FF" transparent opacity={0.92} />
      </mesh>
    </group>
  )
}

export function WireTorusKnot() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Knot />
    </Canvas>
  )
}

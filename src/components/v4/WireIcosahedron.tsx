'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Wire() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25
      meshRef.current.rotation.y += delta * 0.4
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#6E92FF" wireframe transparent opacity={0.85} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.008, 8, 80]} />
        <meshBasicMaterial color="#4A74FF" transparent opacity={0.7} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshBasicMaterial color="#9AB6FF" transparent opacity={0.95} />
      </mesh>
    </group>
  )
}

export function WireIcosahedron() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Wire />
    </Canvas>
  )
}

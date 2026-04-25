'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const SHAPES = [
  { type: 'icosahedron' as const, scale: 1.4, position: [-2.4, 0.6, -1.2] as const,  color: '#4A74FF' },
  { type: 'octahedron' as const,  scale: 0.9, position: [2.6,  -0.8, -1.5] as const, color: '#8B5CF6' },
  { type: 'tetra' as const,       scale: 0.7, position: [-0.8, -1.6, 0.2] as const,  color: '#4ED5FF' },
  { type: 'box' as const,         scale: 0.5, position: [1.8,  1.2, 0.8] as const,   color: '#9AB6FF' },
  { type: 'icosahedron' as const, scale: 0.4, position: [-1.6, 1.6, 1.2] as const,   color: '#6E92FF' },
]

function DriftShape({
  type,
  scale,
  position,
  color,
  speed,
}: {
  type: 'icosahedron' | 'octahedron' | 'tetra' | 'box'
  scale: number
  position: readonly [number, number, number]
  color: string
  speed: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.x += delta * speed * 0.6
    groupRef.current.rotation.y += delta * speed
  })

  const geom = useMemo(() => {
    switch (type) {
      case 'octahedron':  return new THREE.OctahedronGeometry(1, 0)
      case 'tetra':       return new THREE.TetrahedronGeometry(1, 0)
      case 'box':         return new THREE.BoxGeometry(1, 1, 1)
      default:            return new THREE.IcosahedronGeometry(1, 0)
    }
  }, [type])

  const edgesGeom = useMemo(() => new THREE.EdgesGeometry(geom), [geom])

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.7}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh geometry={geom}>
          <meshPhysicalMaterial
            color="#0A1024"
            roughness={0.18}
            metalness={0.1}
            transmission={0.7}
            thickness={0.5}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.12}
            envMapIntensity={1.2}
            transparent
            opacity={0.55}
            side={THREE.DoubleSide}
          />
        </mesh>
        <lineSegments geometry={edgesGeom}>
          <lineBasicMaterial
            color={color}
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <group>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#9AB6FF" />
      <directionalLight position={[-5, -3, -2]} intensity={0.7} color="#8B5CF6" />
      <pointLight position={[0, 0, 4]} intensity={1.0} color="#6E92FF" />
      {SHAPES.map((s, i) => (
        <DriftShape
          key={i}
          type={s.type}
          scale={s.scale}
          position={s.position}
          color={s.color}
          speed={0.25 + i * 0.08}
        />
      ))}
    </group>
  )
}

export function DriftGeo() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}

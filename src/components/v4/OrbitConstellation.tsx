'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 80

function Constellation() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const groupRef = useRef<THREE.Group>(null)
  const cursor = useRef({ x: 0, y: 0 })

  // Generate node positions on a sphere using fibonacci sphere distribution
  const { positions, colors, edgeIndices } = useMemo(() => {
    const r = 1.6
    const nodePos = new Float32Array(NODE_COUNT * 3)
    const nodeColors = new Float32Array(NODE_COUNT * 3)
    const nodeVecs: THREE.Vector3[] = []
    const palette = [
      [0.43, 0.57, 1.0],   // bright cobalt
      [0.6,  0.71, 1.0],   // lavender
      [0.31, 0.84, 1.0],   // cyan
      [0.55, 0.36, 0.96],  // violet
    ]
    const phi = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = phi * i
      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius
      nodePos[i * 3]     = x * r
      nodePos[i * 3 + 1] = y * r
      nodePos[i * 3 + 2] = z * r
      nodeVecs.push(new THREE.Vector3(x * r, y * r, z * r))
      const c = palette[(Math.random() * palette.length) | 0]
      nodeColors[i * 3]     = c[0]
      nodeColors[i * 3 + 1] = c[1]
      nodeColors[i * 3 + 2] = c[2]
    }

    // build edges between near neighbors
    const edges: number[] = []
    const maxDist = 0.7 * r
    for (let i = 0; i < NODE_COUNT; i++) {
      let count = 0
      for (let j = i + 1; j < NODE_COUNT && count < 4; j++) {
        const d = nodeVecs[i].distanceTo(nodeVecs[j])
        if (d < maxDist) {
          edges.push(i, j)
          count++
        }
      }
    }
    return { positions: nodePos, colors: nodeColors, edgeIndices: new Uint16Array(edges) }
  }, [])

  // build line geometry positions from indices
  const linePositions = useMemo(() => {
    const arr = new Float32Array(edgeIndices.length * 3)
    for (let k = 0; k < edgeIndices.length; k++) {
      const idx = edgeIndices[k]
      arr[k * 3]     = positions[idx * 3]
      arr[k * 3 + 1] = positions[idx * 3 + 1]
      arr[k * 3 + 2] = positions[idx * 3 + 2]
    }
    return arr
  }, [positions, edgeIndices])

  useMemo(() => {
    if (typeof window === 'undefined') return
    const onMove = (e: PointerEvent) => {
      cursor.current.x = (e.clientX / window.innerWidth) * 2 - 1
      cursor.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18 + cursor.current.x * 0.001
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15 + cursor.current.y * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* edge lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4A74FF"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          sizeAttenuation
          vertexColors
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* a slightly bigger faint inner halo */}
      <mesh>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshBasicMaterial color="#1E3FD1" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  )
}

export function OrbitConstellation() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 4.6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Constellation />
    </Canvas>
  )
}

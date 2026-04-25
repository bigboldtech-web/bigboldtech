'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

type Density = 'normal' | 'dense'

const CONFIG: Record<Density, { segX: number; segZ: number; w: number; h: number }> = {
  normal: { segX: 110, segZ: 38, w: 36, h: 12 },
  dense:  { segX: 140, segZ: 48, w: 44, h: 14 },
}

function Mesh({ density }: { density: Density }) {
  const { segX, segZ, w, h } = CONFIG[density]

  const geom = useMemo(() => {
    const g = new THREE.PlaneGeometry(w, h, segX, segZ)
    g.rotateX(-Math.PI / 2)
    return g
  }, [segX, segZ, w, h])

  const basePositions = useMemo(() => {
    const arr = (geom.attributes.position.array as Float32Array).slice()
    return arr
  }, [geom])

  const colors = useMemo(() => {
    const count = geom.attributes.position.count
    return new Float32Array(count * 3)
  }, [geom])

  // attach vertex colors
  useMemo(() => {
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  }, [geom, colors])

  const wireRef = useRef<THREE.Mesh>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const cursor = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  useMemo(() => {
    if (typeof window === 'undefined') return
    const onMove = (e: PointerEvent) => {
      cursor.current.x = (e.clientX / window.innerWidth) * 2 - 1
      cursor.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const pos = geom.attributes.position.array as Float32Array
    const cx = cursor.current.x * (w / 2)
    const cz = cursor.current.y * (h / 2)

    // height palette stops (cobalt → cyan → lavender for peaks)
    const cTrough = new THREE.Color('#1E3FD1') // deep cobalt for valleys
    const cMid    = new THREE.Color('#4A74FF') // cobalt
    const cPeak   = new THREE.Color('#9AB6FF') // lavender for peaks

    let yMin = Infinity
    let yMax = -Infinity
    const ys: number[] = new Array(pos.length / 3)

    for (let i = 0; i < pos.length; i += 3) {
      const bx = basePositions[i]
      const bz = basePositions[i + 2]

      // multi-frequency wave + radial cursor ripple
      const dx = bx - cx
      const dz = bz - cz
      const r = Math.sqrt(dx * dx + dz * dz)
      const ripple = Math.sin(r * 1.3 - t * 2.4) * Math.exp(-r * 0.18) * 0.45

      const y =
        Math.sin(bx * 0.32 + t * 0.55) * 0.45 +
        Math.sin(bz * 0.42 + t * 0.7) * 0.35 +
        Math.sin((bx + bz) * 0.28 + t * 0.4) * 0.25 +
        ripple

      pos[i + 1] = y
      ys[i / 3] = y
      if (y < yMin) yMin = y
      if (y > yMax) yMax = y
    }

    // color by height
    const range = Math.max(0.0001, yMax - yMin)
    const tmpColor = new THREE.Color()
    for (let i = 0; i < ys.length; i++) {
      const norm = (ys[i] - yMin) / range
      if (norm < 0.5) {
        tmpColor.copy(cTrough).lerp(cMid, norm * 2)
      } else {
        tmpColor.copy(cMid).lerp(cPeak, (norm - 0.5) * 2)
      }
      colors[i * 3]     = tmpColor.r
      colors[i * 3 + 1] = tmpColor.g
      colors[i * 3 + 2] = tmpColor.b
    }

    geom.attributes.position.needsUpdate = true
    geom.attributes.color.needsUpdate = true
    geom.computeVertexNormals()

    // gentle group drift toward cursor
    if (wireRef.current) {
      wireRef.current.rotation.z = cursor.current.x * 0.04
      wireRef.current.position.z = -cursor.current.y * 0.4
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.z = cursor.current.x * 0.04
      pointsRef.current.position.z = -cursor.current.y * 0.4
    }
  })

  // tilt the whole rig
  return (
    <group rotation={[-0.55, 0, 0]} position={[0, -1.2, 0]}>
      <mesh ref={wireRef} geometry={geom}>
        <meshBasicMaterial
          vertexColors
          wireframe
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <points ref={pointsRef} geometry={geom}>
        <pointsMaterial
          size={0.025}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export function WaveMesh({ density = 'normal' }: { density?: Density }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 2.6, 8.4], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Mesh density={density} />
    </Canvas>
  )
}

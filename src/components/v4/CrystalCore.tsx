'use client'

import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

const FEATURE_PRESETS = [
  { core: '#4A74FF', edge: '#6E92FF', halo: '#4A74FF', coreScale: 0.42, spin: 0.20 }, // full-stack
  { core: '#4ED5FF', edge: '#5DCFD7', halo: '#4ED5FF', coreScale: 0.50, spin: 0.55 }, // ai-native
  { core: '#9AB6FF', edge: '#5E5BF5', halo: '#5E5BF5', coreScale: 0.46, spin: 0.85 }, // ship in weeks
  { core: '#8B5CF6', edge: '#6E92FF', halo: '#8B5CF6', coreScale: 0.55, spin: 0.30 }, // ops-grade
]

function makeIcoGeom() {
  return new THREE.IcosahedronGeometry(1.55, 0)
}

function CrystalShell() {
  const dragRef = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const groupRef = useRef<THREE.Group>(null)
  const { gl } = useThree()

  useEffect(() => {
    const el = gl.domElement
    const onDown = (e: PointerEvent) => {
      dragRef.current = true
      last.current.x = e.clientX
      last.current.y = e.clientY
      el.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!dragRef.current) return
      target.current.y += (e.clientX - last.current.x) * 0.012
      target.current.x += (e.clientY - last.current.y) * 0.012
      last.current.x = e.clientX
      last.current.y = e.clientY
    }
    const onUp = (e: PointerEvent) => {
      dragRef.current = false
      try { el.releasePointerCapture(e.pointerId) } catch {}
    }
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
    }
  }, [gl])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    if (!dragRef.current) target.current.y += delta * 0.18
    groupRef.current.rotation.x += (target.current.x - groupRef.current.rotation.x) * 0.08
    groupRef.current.rotation.y += (target.current.y - groupRef.current.rotation.y) * 0.08
  })

  return groupRef
}

function CoreInside({ activeIndex }: { activeIndex: number }) {
  const coreRef = useRef<THREE.Mesh>(null)
  const haloRef = useRef<THREE.Mesh>(null)
  const coreMatRef = useRef<THREE.MeshBasicMaterial>(null)
  const haloMatRef = useRef<THREE.MeshBasicMaterial>(null)

  const targetCore = useRef(new THREE.Color(FEATURE_PRESETS[0].core))
  const targetHalo = useRef(new THREE.Color(FEATURE_PRESETS[0].halo))
  const targetScale = useRef(FEATURE_PRESETS[0].coreScale)

  useEffect(() => {
    const p = FEATURE_PRESETS[activeIndex] ?? FEATURE_PRESETS[0]
    targetCore.current.set(p.core)
    targetHalo.current.set(p.halo)
    targetScale.current = p.coreScale
  }, [activeIndex])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (coreRef.current) {
      const breathe = 1 + Math.sin(t * 1.6) * 0.06
      const s = targetScale.current * breathe
      coreRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1)
    }
    if (haloRef.current) {
      const haloS = (targetScale.current * 1.45) * (1 + Math.sin(t * 1.2) * 0.1)
      haloRef.current.scale.lerp(new THREE.Vector3(haloS, haloS, haloS), 0.1)
    }
    if (coreMatRef.current) coreMatRef.current.color.lerp(targetCore.current, 0.08)
    if (haloMatRef.current) haloMatRef.current.color.lerp(targetHalo.current, 0.08)
  })

  return (
    <group>
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial ref={coreMatRef} color={FEATURE_PRESETS[0].core} transparent opacity={0.95} />
      </mesh>
      <mesh ref={haloRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          ref={haloMatRef}
          color={FEATURE_PRESETS[0].halo}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

function Crystal({ activeIndex }: { activeIndex: number }) {
  const groupRef = CrystalShell()
  const edgeMatRef = useRef<THREE.LineBasicMaterial>(null)
  const targetEdge = useRef(new THREE.Color(FEATURE_PRESETS[0].edge))

  const icoGeom = useMemo(() => makeIcoGeom(), [])
  const edgesGeom = useMemo(() => new THREE.EdgesGeometry(icoGeom), [icoGeom])

  useEffect(() => {
    const p = FEATURE_PRESETS[activeIndex] ?? FEATURE_PRESETS[0]
    targetEdge.current.set(p.edge)
  }, [activeIndex])

  useFrame((state, delta) => {
    const p = FEATURE_PRESETS[activeIndex] ?? FEATURE_PRESETS[0]
    if (groupRef.current) {
      // additional internal spin layer (separate from drag rotation)
      const tick = delta * p.spin
      groupRef.current.children.forEach((child, i) => {
        if (i === 0) return // skip core/halo
      })
    }
    if (edgeMatRef.current) edgeMatRef.current.color.lerp(targetEdge.current, 0.08)
  })

  return (
    <Float speed={0.9} rotationIntensity={0.18} floatIntensity={0.4}>
      <group ref={groupRef}>
        <CoreInside activeIndex={activeIndex} />

        {/* glass facets */}
        <mesh geometry={icoGeom}>
          <meshPhysicalMaterial
            color="#0E1840"
            roughness={0.18}
            metalness={0.05}
            transmission={0.85}
            thickness={0.6}
            ior={1.45}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.4}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* edge lines */}
        <lineSegments geometry={edgesGeom}>
          <lineBasicMaterial
            ref={edgeMatRef}
            color={FEATURE_PRESETS[0].edge}
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

function OrbitingNode({ color, speed, radius, phase, size = 0.045 }: { color: string; speed: number; radius: number; phase: number; size?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed + phase
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.y = Math.sin(t * 0.8) * radius * 0.55
    ref.current.position.z = Math.sin(t) * radius
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function OrbitRing({ activeIndex }: { activeIndex: number }) {
  const ref = useRef<THREE.LineLoop>(null)
  const matRef = useRef<THREE.LineBasicMaterial>(null)
  const targetColor = useRef(new THREE.Color(FEATURE_PRESETS[0].halo))

  const points = useMemo(() => {
    const arr: THREE.Vector3[] = []
    const segs = 96
    for (let i = 0; i < segs; i++) {
      const a = (i / segs) * Math.PI * 2
      arr.push(new THREE.Vector3(Math.cos(a) * 2.4, 0, Math.sin(a) * 2.4))
    }
    return new THREE.BufferGeometry().setFromPoints(arr)
  }, [])

  useEffect(() => {
    const p = FEATURE_PRESETS[activeIndex] ?? FEATURE_PRESETS[0]
    targetColor.current.set(p.halo)
  }, [activeIndex])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
    }
    if (matRef.current) matRef.current.color.lerp(targetColor.current, 0.06)
  })

  return (
    <lineLoop ref={ref} geometry={points}>
      <lineBasicMaterial
        ref={matRef}
        color={FEATURE_PRESETS[0].halo}
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineLoop>
  )
}

export function CrystalCore({ activeIndex = 0 }: { activeIndex?: number }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} color="#9AB6FF" />
      <directionalLight position={[-4, -3, -2]} intensity={0.9} color="#8B5CF6" />
      <pointLight position={[0, 0, 4]} intensity={1.4} color="#6E92FF" />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <Crystal activeIndex={activeIndex} />
        <OrbitRing activeIndex={activeIndex} />
        <OrbitingNode color="#6E92FF" speed={0.55} radius={2.55} phase={0} />
        <OrbitingNode color="#8B5CF6" speed={0.42} radius={2.75} phase={2.1} />
        <OrbitingNode color="#4ED5FF" speed={0.5}  radius={2.4}  phase={4.2} size={0.035} />
        <OrbitingNode color="#9AB6FF" speed={0.62} radius={2.2}  phase={1.0} size={0.03}  />
      </Suspense>
    </Canvas>
  )
}

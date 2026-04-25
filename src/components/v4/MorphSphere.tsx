'use client'

import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const FEATURE_PRESETS = [
  { distort: 0.30, speed: 1.4, accent: '#6E92FF', secondary: '#4A74FF' },
  { distort: 0.55, speed: 2.4, accent: '#4ED5FF', secondary: '#5DCFD7' },
  { distort: 0.40, speed: 3.0, accent: '#9AB6FF', secondary: '#5E5BF5' },
  { distort: 0.65, speed: 1.8, accent: '#8B5CF6', secondary: '#5B30B8' },
] as const

function CoreSphere({ activeIndex }: { activeIndex: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef = useRef<any>(null)
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const { gl } = useThree()

  const targetDistort = useRef(FEATURE_PRESETS[0].distort)
  const targetSpeed = useRef(FEATURE_PRESETS[0].speed)

  useEffect(() => {
    const preset = FEATURE_PRESETS[activeIndex] ?? FEATURE_PRESETS[0]
    targetDistort.current = preset.distort
    targetSpeed.current = preset.speed
  }, [activeIndex])

  useEffect(() => {
    const el = gl.domElement
    const onDown = (e: PointerEvent) => {
      dragging.current = true
      last.current.x = e.clientX
      last.current.y = e.clientY
      el.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return
      target.current.y += (e.clientX - last.current.x) * 0.012
      target.current.x += (e.clientY - last.current.y) * 0.012
      last.current.x = e.clientX
      last.current.y = e.clientY
    }
    const onUp = (e: PointerEvent) => {
      dragging.current = false
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
    if (!meshRef.current) return
    if (!dragging.current) {
      target.current.y += delta * 0.18
    }
    meshRef.current.rotation.x += (target.current.x - meshRef.current.rotation.x) * 0.08
    meshRef.current.rotation.y += (target.current.y - meshRef.current.rotation.y) * 0.08

    if (matRef.current) {
      matRef.current.distort += (targetDistort.current - matRef.current.distort) * 0.06
      matRef.current.speed   += (targetSpeed.current   - matRef.current.speed)   * 0.06
    }
  })

  return (
    <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 96]} />
        <MeshDistortMaterial
          ref={matRef}
          color="#0E1840"
          roughness={0.05}
          metalness={1}
          distort={FEATURE_PRESETS[0].distort}
          speed={FEATURE_PRESETS[0].speed}
          envMapIntensity={1.6}
        />
      </mesh>
    </Float>
  )
}

function EnergyRing({ activeIndex }: { activeIndex: number }) {
  const ref = useRef<THREE.LineSegments>(null)
  const matRef = useRef<THREE.LineBasicMaterial>(null)
  const targetColor = useRef(new THREE.Color(FEATURE_PRESETS[0].accent))

  useEffect(() => {
    const preset = FEATURE_PRESETS[activeIndex] ?? FEATURE_PRESETS[0]
    targetColor.current.set(preset.accent)
  }, [activeIndex])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2
      ref.current.rotation.y += delta * 0.15
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
    }
    if (matRef.current) {
      matRef.current.color.lerp(targetColor.current, 0.06)
    }
  })

  return (
    <lineSegments ref={ref}>
      <edgesGeometry args={[new THREE.IcosahedronGeometry(2.05, 1)]} />
      <lineBasicMaterial ref={matRef} color={FEATURE_PRESETS[0].accent} transparent opacity={0.55} />
    </lineSegments>
  )
}

function OrbitingLight({ color, speed, radius, phase }: { color: string; speed: number; radius: number; phase: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed + phase
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.y = Math.sin(t * 0.8) * radius * 0.5
    ref.current.position.z = Math.sin(t) * radius
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

export function MorphSphere({ activeIndex = 0 }: { activeIndex?: number }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#9AB6FF" />
      <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#6E92FF" />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <CoreSphere activeIndex={activeIndex} />
        <EnergyRing activeIndex={activeIndex} />
        <OrbitingLight color="#6E92FF" speed={0.6} radius={2.6} phase={0} />
        <OrbitingLight color="#8B5CF6" speed={0.45} radius={2.8} phase={2.1} />
        <OrbitingLight color="#4ED5FF" speed={0.55} radius={2.4} phase={4.2} />
      </Suspense>
    </Canvas>
  )
}

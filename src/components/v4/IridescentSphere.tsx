'use client'

import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const { gl } = useThree()

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
      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y
      target.current.y += dx * 0.01
      target.current.x += dy * 0.01
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
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.55, 96, 96]} />
        <meshPhysicalMaterial
          color="#0F1A3E"
          roughness={0.1}
          metalness={0.95}
          iridescence={1}
          iridescenceIOR={1.6}
          iridescenceThicknessRange={[100, 800]}
          envMapIntensity={1.6}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
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
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

export function IridescentSphere() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.4], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#9AB6FF" />
      <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#6E92FF" />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <Sphere />
        <OrbitingLight color="#6E92FF" speed={0.6} radius={2.4} phase={0} />
        <OrbitingLight color="#8B5CF6" speed={0.45} radius={2.6} phase={2.1} />
        <OrbitingLight color="#4ED5FF" speed={0.55} radius={2.2} phase={4.2} />
      </Suspense>
    </Canvas>
  )
}

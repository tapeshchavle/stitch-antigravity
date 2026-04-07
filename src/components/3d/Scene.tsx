import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Sparkles, Stars, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ChromaticAberration, Noise } from '@react-three/postprocessing'
import NeuralBrain from './NeuralBrain'
import * as THREE from 'three'

function CameraRig() {
  const cameraGroup = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (!cameraGroup.current) return
    // Dynamic parallax responding smoothly to mouse movement
    const targetX = (state.pointer.x * 2)
    const targetY = (state.pointer.y * 2)
    cameraGroup.current.position.x = THREE.MathUtils.lerp(cameraGroup.current.position.x, targetX, 0.05)
    cameraGroup.current.position.y = THREE.MathUtils.lerp(cameraGroup.current.position.y, targetY, 0.05)
    // Add subtle bobbing logic 
    cameraGroup.current.position.z = THREE.MathUtils.lerp(cameraGroup.current.position.z, Math.sin(state.clock.elapsedTime) * 0.5, 0.02)
  })

  return <group ref={cameraGroup} />
}

export default function Scene() {
  return (
    <div className="w-full h-screen absolute inset-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 100 }}
        dpr={window.devicePixelRatio >= 2 ? 1.5 : 1} 
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance", toneMapping: THREE.ReinhardToneMapping }}
      >
        <color attach="background" args={['#010103']} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00f3ff" />
        <directionalLight position={[-10, -10, -5]} intensity={2.5} color="#9d00ff" />
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} color="#ffffff" shadow-mapSize={[2048, 2048]} />
        
        <Suspense fallback={null}>
          <CameraRig />
          
          {/* Main background element (NeuralBrain removed as requested) */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          {/* High-fidelity interactive particles */}
          <Sparkles count={250} scale={18} size={4} speed={0.4} opacity={1} color="#00f3ff" />
          <Sparkles count={150} scale={20} size={3} speed={0.2} opacity={0.5} color="#9d00ff" />
          
          <Environment preset="night" />

          {/* Post Processing for Extreme Realism */}
          <EffectComposer multisampling={0}>
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={3} height={480} />
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={1.5} />
            <Noise opacity={0.025} />
            <ChromaticAberration offset={new THREE.Vector2(0.002, 0.002)} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

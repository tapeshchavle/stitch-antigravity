import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { createNoise3D } from 'simplex-noise'

export default function NeuralBrain() {
  const outerRingRef = useRef<THREE.Group>(null)
  const innerKnotRef = useRef<THREE.Mesh>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const pointsRef = useRef<THREE.Points>(null)

  // Generate an ultra-dense particle cloud representing data flow
  const particleCount = 10000;
  const [positions, initialPositions] = useMemo(() => {
    const p = new Float32Array(particleCount * 3);
    const initP = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Create a swirling galaxy-like distribution
      const r = 1.5 + Math.random() * 2.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      p[i * 3] = x; p[i * 3 + 1] = y; p[i * 3 + 2] = z;
      initP[i * 3] = x; initP[i * 3 + 1] = y; initP[i * 3 + 2] = z;
    }
    return [p, initP];
  }, []);

  const noise3D = useMemo(() => createNoise3D(), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    // Complex, majestic rotations for the monolithic rings
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = Math.sin(t * 0.1) * Math.PI;
      outerRingRef.current.rotation.y = t * 0.15;
    }
    
    // Hyper-active internal quantum knot
    if (innerKnotRef.current) {
      innerKnotRef.current.rotation.x = t * 0.5;
      innerKnotRef.current.rotation.y = t * 0.3;
      innerKnotRef.current.rotation.z = t * 0.2;
    }

    // Breathing inner core
    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 4) * 0.08;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // High-performance particle turbulence simulation
    if (pointsRef.current) {
      const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
        const x = initialPositions[ix];
        const y = initialPositions[iy];
        const z = initialPositions[iz];
        
        // Simplex noise fluid dynamics
        const nX = noise3D(x * 0.5 + t * 0.2, y * 0.5, z * 0.5);
        const nY = noise3D(x * 0.5, y * 0.5 + t * 0.2, z * 0.5);
        const nZ = noise3D(x * 0.5, y * 0.5, z * 0.5 + t * 0.2);
        
        // Rotate points slightly around origin over time
        const angle = t * 0.05 + Math.sqrt(x*x + z*z) * 0.1;
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        
        positionsArray[ix] = (x * c - z * s) + nX * 0.3;
        positionsArray[iy] = y + nY * 0.3;
        positionsArray[iz] = (x * s + z * c) + nZ * 0.3;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  })

  // Hyper-realistic glass shader configuration
  const glassConfig = {
    backside: true,
    samples: 16,
    resolution: 1024,
    transmission: 1,
    roughness: 0.1,
    thickness: 2.0,
    ior: 1.52,
    chromaticAberration: 0.8,
    anisotropy: 0.9,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    attenuationDistance: 2.0,
    attenuationColor: '#00f3ff',
    color: '#ffffff',
    reflectivity: 1,
  }

  return (
    <group scale={1.2}>
      {/* SWARM: 10,000 Neural Data Points flowing with Simplex Noise */}
      <Points ref={pointsRef} positions={positions}>
        <PointMaterial 
          transparent 
          vertexColors={false} 
          size={0.03} 
          sizeAttenuation={true} 
          depthWrite={false}
          color="#00f3ff"
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* OUTER STRUCTURE: Massive interlocking mechanical rings */}
      <group ref={outerRingRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.8, 0.05, 32, 100]} />
          <meshStandardMaterial color="#9d00ff" emissive="#9d00ff" emissiveIntensity={2} metalness={1} roughness={0.2} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[3.6, 0.02, 32, 100]} />
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1.5} metalness={0.8} roughness={0.1} />
        </mesh>
        {/* Orbital nodes on the rings */}
        <mesh position={[3.8, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, 0, 3.6]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* MIDDLE STRUCTURE: Physically accurate refractive glass quantum knot */}
      <mesh ref={innerKnotRef}>
        <torusKnotGeometry args={[1.8, 0.4, 256, 64, 3, 5]} />
        <MeshTransmissionMaterial {...glassConfig} />
      </mesh>
      
      {/* INNER STRUCTURE: Deep glowing reactor core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.9, 12]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          emissive="#00f3ff"
          emissiveIntensity={3}
          wireframe={true}
          roughness={0.0}
          metalness={1.0}
        />
      </mesh>
    </group>
  )
}

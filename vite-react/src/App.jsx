import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, Stars } from '@react-three/drei'
import { useRef } from 'react'

const RotatingCube = () => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
      meshRef.current.rotation.x += 0.001
    }
  })
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={'#468585'} emissive={'#468585'} />

      <Sparkles
        count={100}
        scale={1}
        size={6}
        speed={0.02}
        noise={0.2}
        color={'orange'}
      />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={6}
        saturation={1}
        fade
        speed={0.1}
      />
    </mesh>
  )
}

export const App = () => {
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />

      <color attach='background' args={['#000']} />

      <RotatingCube />
    </Canvas>
  )
}

export default App

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Animated Chrome Sphere Component
function ChromeSphere({ position, speed }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={2.5}>
      <MeshDistortMaterial
        color="#ff0000"
        attach="material"
        distort={0.6}
        speed={2}
        roughness={0.1}
        metalness={1}
        envMapIntensity={1.5}
      />
    </Sphere>
  );
}

// Animated Chrome Torus Component
function ChromeTorus({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = position[1] + Math.cos(time * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.5, 0.5, 32, 100]} />
      <MeshDistortMaterial
        color="#8800ff"
        distort={0.4}
        speed={1.5}
        roughness={0}
        metalness={1}
        envMapIntensity={2}
      />
    </mesh>
  );
}

// Floating Chrome Particles
function ChromeParticles() {
  const particlesRef = useRef();
  
  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Main Liquid Chrome Scene
function LiquidChromeScene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional lights for metallic effect */}
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ff0000" />
      <directionalLight position={[0, 10, 0]} intensity={0.7} color="#0088ff" />
      
      {/* Point lights for dynamic glow */}
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#ff0000" distance={10} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00ffff" distance={8} />
      
      {/* Chrome spheres at different positions */}
      <ChromeSphere position={[-3, 0, -2]} speed={0.5} />
      <ChromeSphere position={[4, 2, -3]} speed={0.7} />
      <ChromeSphere position={[0, -2, -1]} speed={0.6} />
      
      {/* Chrome torus */}
      <ChromeTorus position={[2, -1, -4]} />
      
      {/* Floating particles */}
      <ChromeParticles />
    </>
  );
}

// Main Liquid Chrome Background Component
export default function LiquidChrome() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]} // Device pixel ratio for better quality
      >
        <LiquidChromeScene />
      </Canvas>
      
      {/* Overlay gradient for better text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '../Model/Model';
import { Environment } from '@react-three/drei';

export default function ThreeCanvas() {
  const modelRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.8}
        position={[20, 10, 10]}
        angle={0.2}
        penumbra={1}
        castShadow
      />
      <Model ref={modelRef} />
      <Environment preset="city" />
    </Canvas>
  );
}

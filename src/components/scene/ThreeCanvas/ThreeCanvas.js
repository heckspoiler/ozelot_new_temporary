import React from 'react';
import { Canvas } from '@react-three/fiber';

import Model from '../Model/Model';

export default function ThreeCanvas() {
  return (
    <Canvas
      style={{ background: 'red' }}
      shadowMap
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.8}
        position={[20, 10, 10]}
        angle={0.2}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      <mesh receiveShadow>
        <planeGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="white" />
      </mesh>
      <Model />
    </Canvas>
  );
}

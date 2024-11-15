import React, { useRef } from 'react';

import { useFrame, useThree, useLoader } from '@react-three/fiber';

import { GLTFLoader } from 'three/examples/jsm/Addons.js';

import asset from '../../../asset/logo.glb';

export default function Model() {
  const { viewport } = useThree();

  const gltf = useLoader(GLTFLoader, asset);

  const ref = useRef();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    ref.current.position.set(x, y, 0);
  });

  return (
    <mesh ref={ref} castShadow>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

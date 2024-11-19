import React, { useRef, useEffect } from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Clock, MeshStandardMaterial } from 'three';
import asset from '../../../asset/logo.glb';

export default function Model() {
  const { viewport } = useThree();
  const gltf = useLoader(GLTFLoader, asset);
  const ref = useRef();

  const transparentMaterial = new MeshStandardMaterial({
    metalness: 1.0,
    roughness: 0.8,
    transparent: true,
    opacity: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.2,
    reflectivity: 1.0,
  });

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = transparentMaterial;
      }
    });
  }, []);

  const clock = new Clock();

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() / 10;
  });

  // useFrame(({ mouse }) => {
  //   // const x = (mouse.x * viewport.width) / 2;
  //   // const y = (mouse.y * viewport.height) / 2;
  //   ref.current.rotation.set(0, 0, 0);
  // });

  return (
    <mesh ref={ref} castShadow>
      <primitive object={gltf.scene} scale={5} rotation={[4.8, 0, 0]} />
    </mesh>
  );
}

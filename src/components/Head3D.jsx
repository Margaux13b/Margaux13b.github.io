import { Suspense, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
function Tete() {
  const gltf = useLoader(GLTFLoader, '/models/tete.glb');

  useMemo(() => {
    gltf.scene.traverse((objet) => {
      if (objet.isMesh) {
        objet.material = new THREE.MeshToonMaterial({ color: '#f1c9a5' });
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} position={[0, -5.2, 0]} />;
}

export default function Head3D() {
  return (
    <div style={{ height: '75vh' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Tete />
        </Suspense>
      </Canvas>
    </div>
  );
}
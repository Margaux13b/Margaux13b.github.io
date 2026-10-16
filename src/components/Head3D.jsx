import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Suspense, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import '../styles/head3d.scss';

function Tete({ rotation }) {
  const gltf = useLoader(GLTFLoader, '/models/tete.glb');
  const ref = useRef();

  useMemo(() => {
    gltf.scene.traverse((objet) => {
      if (objet.isMesh) {
        objet.material = new THREE.MeshToonMaterial({ color: '#f1c9a5' });
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      rotation,
      4,
      delta
    );
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, -5.2, 0]}
    />
  );
}

export default function Head3D() {
  const [step, setStep] = useState(0);

  return (
    <div className="head3d">
      <button
        className="head3d__arrow head3d__arrow--prev"
        type="button"
        onClick={() => setStep(step - 1)}
        aria-label="Projet précédent"
      >
        ←
      </button>

      <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Tete rotation={step * -(Math.PI / 2)} />
        </Suspense>
      </Canvas>

      <button
        className="head3d__arrow head3d__arrow--next"
        type="button"
        onClick={() => setStep(step + 1)}
        aria-label="Projet suivant"
      >
        →
      </button>
    </div>
  );
}
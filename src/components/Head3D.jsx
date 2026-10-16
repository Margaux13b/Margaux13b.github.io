import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Suspense, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import '../styles/head3d.scss';
import ProjectPanel from './ProjectPanel.jsx';
import { projects } from '../data/projects.js';

function Tete({ rotation, isProject }) {
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
    const cibleX = isProject ? -4 : 0;

    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, cibleX, 4, delta);

    // la rotation, comme avant
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, rotation, 4, delta);
  });

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} position={[0, -5.2, 0]} />
    </group>
  );
}

export default function Head3D() {
  const [step, setStep] = useState(0);

  const faces = projects.length + 1;
  const index = ((step % faces) + faces) % faces;
  const project = index === 0 ? null : projects[index - 1];

  return (
    <div className={project ? 'head3d head3d--project' : 'head3d'}>
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
          <Tete rotation={step * -(Math.PI / 2)} isProject={project !== null} />
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

      {project && (
        <div className="head3d__panel">
          <ProjectPanel key={index} project={project} position={index} total={projects.length} />
        </div>
      )}
    </div>
  );
}
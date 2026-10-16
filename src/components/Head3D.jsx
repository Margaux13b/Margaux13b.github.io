import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import '../styles/head3d.scss';
import ProjectPanel from './ProjectPanel.jsx';
import IntroPanel from './IntroPanel.jsx';
import { projects } from '../data/projects.js';

function Tete({ rotation, taille, x }) {
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
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, x, 4, delta);
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, rotation, 4, delta);

    const t = THREE.MathUtils.damp(ref.current.scale.x, taille, 4, delta);
    ref.current.scale.set(t, t, t);
  });

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} position={[0, -5.2, 0]} />
    </group>
  );
}

export default function Head3D() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const debutX = useRef(null);

  function debutSwipe(event) {
    debutX.current = event.touches[0].clientX;
  }

  function finSwipe(event) {
    if (debutX.current === null) return;

    const distance = event.changedTouches[0].clientX - debutX.current;
    if (distance < -50) setStep((s) => s + 1);
    if (distance > 50) setStep((s) => s - 1);

    debutX.current = null;
  }
  const faces = projects.length + 1;
  const index = ((step % faces) + faces) % faces;
  const project = index === 0 ? null : projects[index - 1];

  const positionsX = isMobile ? [0, 0, 0, 0] : [0, -4.5, -4.5, -5.3];
  const taille = project && !isMobile ? 0.8 : 1;

  useEffect(() => {
    function quandOnAppuie(event) {
      if (event.key === 'ArrowRight') setStep((s) => s + 1);
      if (event.key === 'ArrowLeft') setStep((s) => s - 1);
    }

    window.addEventListener('keydown', quandOnAppuie);
    return () => window.removeEventListener('keydown', quandOnAppuie);
  }, []);

  useEffect(() => {
    const ecran = window.matchMedia('(max-width: 900px)');
    const mettreAJour = () => setIsMobile(ecran.matches);

    mettreAJour();
    ecran.addEventListener('change', mettreAJour);
    return () => ecran.removeEventListener('change', mettreAJour);
  }, []);

  return (
    <div className={project ? 'head3d head3d--project' : 'head3d'}>
        <div className="head3d__scene" onTouchStart={debutSwipe} onTouchEnd={finSwipe}>
        <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Suspense fallback={null}>
            <Tete
              rotation={step * -(Math.PI / 2)}
              taille={taille}
              x={positionsX[index]}
            />
          </Suspense>
        </Canvas>

        <button
          className="head3d__arrow head3d__arrow--prev"
          type="button"
          onClick={() => setStep((s) => s - 1)}
          aria-label="Projet précédent"
        >
          ←
        </button>
        <button
          className="head3d__arrow head3d__arrow--next"
          type="button"
          onClick={() => setStep((s) => s + 1)}
          aria-label="Projet suivant"
        >
          →
        </button>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {project ? `Projet ${index} sur ${projects.length} : ${project.title}` : 'Accueil'}
      </p>

      {project ? (
        <div className="head3d__panel">
          <ProjectPanel key={index} project={project} position={index} total={projects.length} />
        </div>
      ) : (
        <div className="head3d__intro">
          <IntroPanel />
        </div>
      )}
    </div>
  );
}
import React, { useRef } from 'react';

import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function Model(props) {
  const { scene } = useGLTF("/b1.glb");
  const ref = useRef();

  // Animation loop for rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust the speed and axis of rotation as needed
    }
  });

  // Ensure the scene does not cast or receive shadows
  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = false;
      object.receiveShadow = false;
    }
  });

  return <primitive object={scene} ref={ref}  {...props} />;
}

function B1() {
  return (
    <>
      <Canvas className="custom-canvas" dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 10] }} style={{ width: '420px', height: '450px' }}>
        <ambientLight intensity={1.5} /> 
        <PresentationControls speed={1.5} global zoom={1.2}>
          <Stage environment={null} shadows={false}>
            <Model />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default B1;

// components/b.js
import React from 'react';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model(props) {
  const { scene } = useGLTF("/b1.glb");

 
  return <primitive object={scene} {...props} />;
}

function B1() {
  return (
    <>
      <Canvas className="custom-canvas pt-5" dpr={[1, 2]} camera={{ fov: 45 }} >
        <ambientLight intensity={1.5} /> 
        <PresentationControls speed={1.5} global zoom={1.2}>
          <Stage environment={null}>
            <Model castShadow={false} /> 
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default B1;

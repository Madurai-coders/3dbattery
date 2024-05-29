import React, { useRef } from 'react';
import { useGLTF, Stage, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { useInView } from 'react-intersection-observer';

function Model(props) {
  const { scene } = useGLTF("/bt3.glb");
  const ref = useRef();

  // Ensure the scene does not cast or receive shadows
  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = false;
      object.receiveShadow = false;
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
}

function B4() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { rotation } = useSpring({
    rotation: inView ? [0, -Math.PI / 5, 0] : [0, 0, 0],
  });

  return (
    <>
      <div ref={ref}>
        <Canvas className="custom" dpr={[1, 2]} camera={{ fov: 45 }} style={{ width: '400px', height: '450px' }}>
          <ambientLight intensity={1.5} />
          <Stage environment={null} shadows={false}>
            <animated.group rotation={rotation}>
              <Model />
            </animated.group>
          </Stage>
          <OrbitControls enableRotate={false} enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
}

export default B4;

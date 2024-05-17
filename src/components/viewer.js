import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";
import { ViewerApp, GBufferPlugin, ProgressivePlugin, TonemapPlugin, SSRPlugin, SSAOPlugin, GammaCorrectionPlugin, AssetManagerPlugin } from "webgi";
import { gsap } from "gsap";
import "../assets/css/viewer.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../components/scroll";

gsap.registerPlugin(ScrollTrigger);

const Viewer = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);
  const [showViewer, setShowViewer] = useState(true);
  const canvasContainerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      canvasContainerRef.current.style.pointerEvents = "all";
      props.contentRef.current.style.opacity = "0";
      gsap.to(positionRef, {
        x: 5.28,
        y: 3.18,
        z: 11.05,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      });
      gsap.to(targetRef, { x: 0.0, y: 0.0, z: 0.0, duration: 2 });
      viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    },
  }));

  const memoizedScrollAnimation = useCallback((position, target, onUpdate) => {
    scrollAnimation(position, target, onUpdate);
  }, []);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    setViewerRef(viewer);

    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;

    const position = camera.position;
    const target = camera.target;
    setCameraRef(camera);
    setPositionRef(position);
    setTargetRef(target);

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);

    viewer.renderer.refreshPipeline();
    await manager.addFromPath("bt.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    window.scrollTo(0, 0);
    let needsUpdate = true;
    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memoizedScrollAnimation(position, target, onUpdate);

  
    
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <>
      {showViewer && (
        <div ref={canvasContainerRef} id="webgi-canvas-container">
          <canvas id="webgi-canvas" ref={canvasRef}></canvas>
        </div>
      )}
    </>
  );
});

export default Viewer;

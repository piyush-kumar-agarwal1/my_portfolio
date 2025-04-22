import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Keep desktop version untouched, only optimize for mobile
const Computers = ({ isMobile }) => {
  const computer = useGLTF("/models/desktop_pc/scene.gltf");

  // Only apply optimizations for mobile
  useEffect(() => {
    if (isMobile) {
      // Optimize only for mobile devices
      computer.scene.traverse((child) => {
        if (child.isMesh) {
          // Mobile-only optimizations
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });
    }
  }, [computer, isMobile]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={false}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.00 : 1.00} // Slightly larger on mobile
        position={isMobile ? [0, -1.5, -1.1] : [0, -3.0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="relative w-full h-full" id="computer-canvas-container">
      <Canvas
        frameloop={isMobile ? 'demand' : 'always'} // Performance boost for mobile only
        shadows={false}
        dpr={isMobile ? [0.7, 1.5] : [1, 2]} // Lower resolution only for mobile
        camera={{
          position: [20, 3, 5],
          fov: isMobile ? 40 : 25, // Adjusted FOV for mobile
          near: 0.1,
          far: 200
        }}
        gl={{
          preserveDrawingBuffer: true,
          // Mobile-only optimizations
          ...(isMobile && {
            powerPreference: "high-performance",
            antialias: false,
            precision: "lowp"
          })
        }}
        style={{
          height: '100%' // Same height for both
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all={!isMobile} /> {/* Only preload everything on desktop */}
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
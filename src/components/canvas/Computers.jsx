import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.75} // Much smaller scale for mobile - reduced from 0.5 to 0.35
        position={isMobile ? [0, -1.8, -1.1] : [0, -3.25, -1.5]} // Higher position and closer to camera on mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 750px)");
    const smallScreenQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the state variables
    setIsMobile(mobileQuery.matches);
    setIsVerySmall(smallScreenQuery.matches);

    // Define callback functions to handle changes
    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleSmallScreenChange = (event) => {
      setIsVerySmall(event.matches);
    };

    // Add listeners for changes to the media queries
    mobileQuery.addEventListener("change", handleMobileChange);
    smallScreenQuery.addEventListener("change", handleSmallScreenChange);

    // Remove listeners when component is unmounted
    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      smallScreenQuery.removeEventListener("change", handleSmallScreenChange);
    };
  }, []);

  // Adjust canvas height for very small screens
  const canvasStyle = isVerySmall ? { height: '50vh !important' } : {};

  return (
    <Canvas
      style={canvasStyle}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        position: [20, 3, 5],
        fov: isMobile ? 40 : 25, // Increased FOV for better mobile perspective
        near: 0.1,
        far: 200
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
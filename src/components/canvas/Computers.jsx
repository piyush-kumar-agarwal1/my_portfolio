import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/models/desktop_pc/scene.gltf", true);
  // Enable draco compression to reduce model size
  computer.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.envMapIntensity = 1.5;
      // Disable unnecessary shadows for better performance
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={false} // Disable shadow casting for better performance
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.75}
        position={isMobile ? [0, -1.8, -1.1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// A static fallback for very low-end devices
const StaticComputerFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full flex items-center justify-center p-8"
  >
    <img
      src="/desktop_pc_fallback.jpg"
      alt="Computer workstation"
      className="max-w-lg mx-auto rounded-lg shadow-lg"
    />
  </motion.div>
);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check if device is low performance
    const checkPerformance = () => {
      // Basic performance detection - mobile + low memory or slow processor
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // Use navigator.deviceMemory if available (not supported in all browsers)
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;

      // Use hardwareConcurrency as proxy for CPU power
      const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

      // Set low performance if mobile + (low memory OR low CPU)
      setIsLowPerformance(isMobileDevice && (lowMemory || lowCPU));
    };

    // Media queries for responsive design
    const mobileQuery = window.matchMedia("(max-width: 750px)");
    const smallScreenQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mobileQuery.matches);
    setIsVerySmall(smallScreenQuery.matches);
    checkPerformance();

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleSmallScreenChange = (event) => {
      setIsVerySmall(event.matches);
    };

    mobileQuery.addEventListener("change", handleMobileChange);
    smallScreenQuery.addEventListener("change", handleSmallScreenChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      smallScreenQuery.removeEventListener("change", handleSmallScreenChange);
    };
  }, []);

  // Show static image for very low-end devices
  if (isLowPerformance || (isVerySmall && window.innerHeight < 600)) {
    return <StaticComputerFallback />;
  }

  // Adjust canvas height for small screens
  const canvasStyle = isVerySmall
    ? { height: '45vh', maxHeight: '400px' }
    : { height: '100%' };

  return (
    <Canvas
      style={canvasStyle}
      frameloop={isMobile ? 'demand' : 'always'} // Only render when needed on mobile
      shadows={false} // Disable shadows for performance
      dpr={[1, 1.5]} // Reduce resolution for better performance
      camera={{
        position: [20, 3, 5],
        fov: isMobile ? 40 : 25,
        near: 0.1,
        far: 200
      }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: !isMobile, // Disable antialiasing on mobile
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

      <Preload all={false} /> {/* Don't preload all assets */}
    </Canvas>
  );
};

export default ComputersCanvas;
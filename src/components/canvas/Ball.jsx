import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0.75} floatIntensity={1.5}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={false} receiveShadow={false} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Static fallback for mobile devices
const StaticBall = ({ icon, name }) => (
  <div className="bg-tertiary rounded-full w-full h-full flex items-center justify-center p-3 hover:shadow-card transition-all">
    <img src={icon} alt={name} className="w-3/5 h-3/5 object-contain" />
  </div>
);

const BallCanvas = ({ icon, name }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile or low-end device
    const checkDevice = () => {
      const isMobileDevice = window.matchMedia("(max-width: 750px)").matches;
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // Use static version on mobile
  if (isMobile) {
    return <StaticBall icon={icon} name={name} />;
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all={false} />
    </Canvas>
  );
};

export default BallCanvas;
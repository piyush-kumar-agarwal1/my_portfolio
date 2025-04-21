import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero } from "./components";

// Lazy load component imports
const About = lazy(() => import("./components/About"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars").then(module => ({ default: module.default })));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

// Simple loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="canvas-loader"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Works />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobileQuery = window.matchMedia("(max-width: 750px)");
      setIsMobile(mobileQuery.matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`absolute inset-0 ${isMobile ? 'top-[100px]' : 'top-[120px]'} max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Piyush Agarwal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full-stack web applications, <br className="sm:block hidden" />
            interactive UI/UX, and database solutions
          </p>
        </div>
      </div>

      {/* Computer model container - KEEPING DESKTOP VIEW UNTOUCHED */}
      <div className={`
        ${isMobile ? 'absolute bottom-32 left-0 right-0 h-[45vh] max-h-[250px]' : 'absolute w-full bottom-0 h-[70vh]'}
        flex items-center justify-center
      `}>
        <ComputersCanvas />
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Add a heading section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I work with</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-12`}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 group relative' key={technology.name}>
            {/* The 3D ball */}
            <BallCanvas icon={technology.icon} name={technology.name} />

            {/* Tooltip that appears on hover */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                           bg-tertiary px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300 text-white text-sm font-medium
                           pointer-events-none z-20 min-w-max">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
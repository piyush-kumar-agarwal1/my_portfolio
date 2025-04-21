import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profile } from "../assets"; // Import profile image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-start mt-8">
        {/* Profile Image - Increased size and added animation */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="md:w-[220px] w-[180px] mx-auto md:mx-0"
        >
          <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#915EFF] shadow-xl relative hover:scale-105 transition-transform duration-300">
            <img
              src={profile}
              alt="Piyush Agarwal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#915EFF] opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* About Text - Enhanced styling */}
        <motion.div
          variants={fadeIn("left", "spring", 0.1, 0.75)}
          className='flex-1'
        >
          <motion.div
            className='text-secondary text-[17px] max-w-3xl leading-[30px] prose prose-invert'
          >
            <p className="mb-4 font-light tracking-wide">
              As a <span className="text-[#915EFF] font-semibold">Computer Science student</span> pursuing my Bachelor's at Lovely Professional University, I've built my expertise in creating robust and user-centered web applications that solve real-world problems.
            </p>

            <p className="mb-4 font-light tracking-wide">
              My technical arsenal includes <span className="text-[#a78bfa]">C++, JavaScript, React.js, Node.js, Express, MongoDB, and MySQL</span>, allowing me to develop comprehensive full-stack solutions. Beyond coding, my internships at <span className="text-[#a78bfa]">Accenture and SpaceNos</span> have strengthened my understanding of software development methodologies, debugging techniques, and data automation.
            </p>

            <p className="font-light tracking-wide">
              I'm passionate about creating seamless user experiences through intuitive interfaces and efficient system architecture. Whether it's building Chrome extensions, AI-powered recommendation platforms, or e-learning systems, I'm committed to delivering solutions that exceed expectations. I'm always eager to collaborate on innovative projects that push the boundaries of what's possible in web development.
            </p>
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            variants={fadeIn("", "", 0.3, 1)}
            className="mt-8"
          >
            <a
              href="/PiyushAgarwalCV.pdf"
              download="PiyushAgarwalCV.pdf"
              className="py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary bg-[#915EFF] text-white flex items-center gap-2 hover:bg-[#7d4edb] transition-colors hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
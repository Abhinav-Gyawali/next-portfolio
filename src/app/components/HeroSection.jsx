"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }} 
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Abhinav",
                1000,
                "Web Developer",
                1000,
                "Android Developer",
                1000,
                "Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m Abhinav Gyawali, a 16-year-old developer with a passion for coding and technology. I specialize in React and Django, and I love building innovative web solutions. I&apos;m always eager to learn, improve my skills, and take on new challenges in the tech world.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 to-teal-700 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-100 to-teal-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
              <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      {/* Splash Overlay */}
      <div
        style={{
          backgroundImage: 'url("/images/splash.png")',
          mixBlendMode: 'multiply', // Adjust blend mode for desired effect
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1, // Ensures overlay stays on top
        }}
      />

      {/* Badge Image */}
      <div
        style={{
          backgroundImage: 'url("/images/badge.jpg")',
          backgroundSize: 'cover', // Ensures image covers the entire area
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0, // Keeps badge behind splash
        }}
      />
    </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

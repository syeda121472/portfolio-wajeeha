import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center p-10"
      initial={{ opacity: 0, y: 100 }}      // Slide from bottom
      animate={{ opacity: 1, y: 0 }}        // To natural position
      exit={{ opacity: 0, y: 100 }}         // Animate out when unmounted
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-32 items-center max-w-6xl w-full">
        {/* Left: Text */}
        <div className="space-y-6 ml-10">
          <h1 className="text-5xl font-bold text-green-500">About Me</h1>
          <div>
            <h2 className="text-lg font-semibold">EMAIL</h2>
            <p className="text-green-300">wajeeha@yourwebsite.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">ROLE</h2>
            <p className="text-green-300">Full Stack Developer</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">PHONE</h2>
            <p className="text-green-300">(+92) 456 7890</p>
          </div>
          
        </div>

        {/* Right: Image */}
        <div className="relative w-80 h-80 mr-10 flex justify-center items-center">
          <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 p-[3px] shadow-lg">
            <div className="w-full h-full rounded-full bg-[#0d1117] p-[3px]">
              <img
                src="/hero-image.jpg"
                alt="Wajeeha Profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#0d1117]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

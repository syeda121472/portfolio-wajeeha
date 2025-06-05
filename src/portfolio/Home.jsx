import React from 'react';
import { FaCode, FaTwitter, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#0d1117] flex flex-col md:flex-row items-center justify-center px-6 py-10 md:px-20 text-center md:text-left">
      {/* Text Section */}
      <motion.div
        className="max-w-xl text-white space-y-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-green-400">I'm Wajeeha</h1>
        <h2 className="text-2xl text-gray-300">
          Passionate about <span className="text-green-500 font-semibold">clean code</span> & performance.
        </h2>
        <p className="text-gray-400">
          A tech enthusiast with a love for building lightweight, scalable solutions using React and modern web tools. I aim to turn complex problems into intuitive user experiences.
        </p>

        {/* Buttons using React Router */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            to="/project"
            className="bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-5 rounded"
          >
            View Work
          </Link>
          <Link
            to="/resume"
            className="border border-green-500 text-green-500 hover:bg-green-600 hover:text-black font-medium py-2 px-5 rounded"
          >
            Learn More
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-5 pt-4 text-xl">
          <a href="#" className="hover:text-green-400"><FaCode /></a>
          <a href="#" className="hover:text-green-400"><FaTwitter /></a>
          <a href="#" className="hover:text-green-400"><FaDiscord /></a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative w-64 h-64 mt-10 md:mt-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Background Glow */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 blur-2xl opacity-40 animate-pulse"></div>

        {/* Image with Border */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 p-[3px] shadow-lg">
          <div className="w-full h-full rounded-full bg-[#0d1117] p-[3px]">
            <img
              src="/hero-image.jpg"
              alt="Wajeeha Profile"
              className="w-full h-full object-cover rounded-full border-4 border-[#0d1117]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

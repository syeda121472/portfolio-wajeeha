import React from 'react';
import { motion } from 'framer-motion';

export default function Contactme() {
  return (
    <section className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-10">
      <motion.div
        className="w-full max-w-xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-green-400 mt-16 text-center">Contact Me</h2>
        <p className="text-center text-gray-400">
          Feel free to reach out by filling the form below.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded bg-[#161b22] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-[#161b22] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 rounded bg-[#161b22] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded w-full"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

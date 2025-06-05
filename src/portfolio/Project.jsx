import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import shoes from '../assets/Design.jpeg'
export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
  {
    title: 'Tic Tac Toe',
    description: 'Created a React-based Tic Tac Toe game with intelligent win logic.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*3Rv4KFuTU5IJxCvhY_-tsA.png',
    link: '#',
  },
  {
    title: 'Rock Paper Scissors',
    description: 'A fun web-based version of the Rock Paper Scissors game.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQEs0NjicRPr2A/feedshare-shrink_800/feedshare-shrink_800/0/1726078195637?e=2147483647&v=beta&t=qyJ6SLvM_oZE9hHK7O_Opq0QS--G03dVauHwLg_jLiU',
    link: '#',
  },
  {
    title: 'Shoe Website',
    description: 'Designed a modern and responsive shoe store website with Tailwind CSS.',
    imageUrl: shoes,
    link: '#',
  },
];


  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 mt-10 text-green-500">Projects</h2>
        <p className="text-gray-300 max-w-xl mx-auto">A few featured projects I’ve developed recently.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative overflow-hidden bg-[#1e293b] p-4 rounded-xl border border-gray-700 shadow-lg transform hover:scale-105 transition-all duration-500 max-w-xs mx-auto"
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg transition-all duration-300 transform hover:scale-110"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-cyan-400 opacity-10" />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
              <p className="text-lg mt-2 text-gray-300">{project.description}</p>
             
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

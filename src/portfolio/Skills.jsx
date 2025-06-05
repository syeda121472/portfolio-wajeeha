import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "https://img.icons8.com/color/96/html-5--v1.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/96/css3.png" },
  { name: "Java", icon: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" },
  { name: "React", icon: "https://img.icons8.com/color/96/react-native.png" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/color/96/tailwindcss.png" },
  {
    name: "Express",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", // working Express logo
  },
  { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png" },
  { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png" },
];


const SkillCard = ({ icon, name, delay }) => (
  <motion.div
    className="flex flex-col items-center text-gray-300 p-4"
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
  >
    <img src={icon} alt={name} className="w-20 h-20 mb-2" />
    <h3 className="text-lg font-medium">{name}</h3>
  </motion.div>
);

export default function SkillPage() {
  return (
    <div className="min-h-screen mt-16 bg-[#0d1117]">
      {/* Header with animation */}
      <motion.div
        className="py-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-bold text-green-500">MY SKILLS ⚡</h1>
        <p className="text-white font-serif mt-10 max-w-xl mx-auto">
          Skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Express,
          Node.js, and MongoDB to build modern, responsive web applications.
        </p>
      </motion.div>

      {/* Skill Cards with staggered animations */}
      <div className="py-16 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

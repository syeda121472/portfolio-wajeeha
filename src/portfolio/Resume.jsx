import React from "react";
import { motion } from "framer-motion";

const resumeData = [
  {
    year: "2019 – 2021",
    title: "Intermediate in Computer Science",
    subtitle: "ILM group of colleges",
    desc: "Focused on Mathematics,Physics and Computer Science.",
  },
  {
    year: "2021 – 2025",
    title: "Bachelor,s in Computer Science",
    subtitle: "Zamindar College(UOS)",
    desc: "Built a strong Background in Tech field",
  },
  {
    year: "2025",
    title: "Full Stack Developer",
    subtitle: "Adan IT Center",
    desc: "Specialized in Web Development",
  },
  {
    year: "2025",
    title: "WordPress Developer",
    subtitle: "Adan IT Center",
    desc: "Developed custom themes and optimized performance.",
  },
  {
    year: "2025",
    title: "Cyber Security course",
    subtitle: "Coursera",
    desc: "Training Regarding the cyber security",
  },
  {
    year: "2025",
    title: "Prompting Essential",
    subtitle: "Coursera",
    desc: "Learning how to use GEN AI",
  },
];

const Resume = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white mt-10 px-6 md:px-16 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-green-500 font-bold">My Resume</h2>
        <p className="text-gray-400 mt-2">
          A journey through my education and work experience.
        </p>
      </div>

      <div className="relative border-l-4 border-green-500 pl-6 space-y-10 max-w-4xl mx-auto">
        {resumeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-green-500/40"
          >
            <p className="text-cyan-400 text-sm font-semibold">{item.year}</p>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <h4 className="uppercase text-gray-400 text-sm">{item.subtitle}</h4>
            <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Resume;

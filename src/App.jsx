import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './portfolio/Home';
import About from './portfolio/About';
import Navbar from './portfolio/Navbar'; 
import Skills from './portfolio/Skills'
import Resume from './portfolio/Resume';
import Contactme from './portfolio/Contactme';
import Project from './portfolio/Project';
export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar /> 
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/resume" element={<Resume/>} />
<Route path="/project" element={<Project/>} />
<Route path="/contactme" element={<Contactme/>} />

        </Routes>
      </AnimatePresence>
    </>
  );
}

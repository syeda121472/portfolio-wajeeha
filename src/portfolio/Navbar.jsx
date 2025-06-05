import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "resume", path: "/resume" },
    { label: "skills", path: "/skills" },
    { label: "projects", path: "/project" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0d1117] via-[#1e293b] to-[#0d1117] text-white shadow-lg backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-green-400">Wajeeha</span>Ali
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {menuItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className="capitalize hover:text-green-400 hover:underline underline-offset-4 transition duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <Link
          to="/contactme"
          className="hidden md:inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-300"
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

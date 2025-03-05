import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking (for mobile)
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer hover:text-blue-400 transition duration-300"
          >
            Rehan's Portfolio
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {["about", "skills", "projects", "experience", "education", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="hover:text-blue-400 transition duration-300 capitalize"
                  >
                    {section}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-800 text-white py-4"
        >
          <ul className="flex flex-col items-center space-y-4">
            {["hero", "about", "skills", "projects", "experience", "education", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="hover:text-blue-400 transition duration-300 capitalize"
                  >
                    {section}
                  </button>
                </li>
              )
            )}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;

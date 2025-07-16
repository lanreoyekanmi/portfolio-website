import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-transparent fixed top-0 left-0 z-50">
      <div className="flex items-center gap-3">
        <img src="/assets/logo.jpg" alt="Portfolio Logo" className="h-12 w-12 object-contain rounded-full shadow-md" />
        <span className="font-bold text-xl"></span>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#about" className="hover:text-portfolio-purple transition">About</a></li>
        <li><a href="#skills" className="hover:text-portfolio-purple transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-portfolio-purple transition">Projects</a></li>
        <li><a href="#services" className="hover:text-portfolio-purple transition">Services</a></li>
        <li><a href="#testimonials" className="hover:text-portfolio-purple transition">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-portfolio-purple transition">Contact</a></li>
      </ul>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-portfolio-purple mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-portfolio-purple mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-portfolio-purple transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-portfolio-dark shadow-lg border-t border-portfolio-purple z-40 animate-fade-in">
          <ul className="flex flex-col gap-4 py-6 px-8 font-medium">
            <li><a href="#about" className="hover:text-portfolio-purple transition" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="hover:text-portfolio-purple transition" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="hover:text-portfolio-purple transition" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#services" className="hover:text-portfolio-purple transition" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#testimonials" className="hover:text-portfolio-purple transition" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="hover:text-portfolio-purple transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="mailto:lanrewajuoyekanmi@gmail.com"
                className="bg-portfolio-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-portfolio-purple-dark transition block text-center"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* Desktop Hire Me */}
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <a
          href="mailto:lanrewajuoyekanmi@gmail.com"
          className="bg-portfolio-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-portfolio-purple-dark transition"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 
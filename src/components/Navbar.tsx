import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent fixed top-0 left-0 z-50">
    <div className="flex items-center gap-3">
      <img src="/assets/logo.jpg" alt="Portfolio Logo" className="h-12 w-12 object-contain rounded-full shadow-md" />
      <span className="font-bold text-xl"></span>
    </div>
    <ul className="hidden md:flex gap-8 font-medium">
      <li><a href="#about" className="hover:text-portfolio-purple transition">About</a></li>
      <li><a href="#skills" className="hover:text-portfolio-purple transition">Skills</a></li>
      <li><a href="#projects" className="hover:text-portfolio-purple transition">Projects</a></li>
      <li><a href="#services" className="hover:text-portfolio-purple transition">Services</a></li>
      <li><a href="#testimonials" className="hover:text-portfolio-purple transition">Testimonials</a></li>
      <li><a href="#contact" className="hover:text-portfolio-purple transition">Contact</a></li>
    </ul>
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <button className="bg-portfolio-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-portfolio-purple-dark transition">Hire Me</button>
    </div>
  </nav>
);

export default Navbar; 
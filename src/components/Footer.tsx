import React from 'react';

const Footer = () => (
  <footer className="w-full py-8 px-4 text-center text-gray-400 bg-transparent mt-16">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
      <div className="text-sm">&copy; {new Date().getFullYear()} Olanrewaju Oyekanmi Portfolio. All rights reserved.</div>
      <ul className="flex gap-6 text-sm">
        <li><a href="#about" className="hover:text-portfolio-purple transition">About</a></li>
        <li><a href="#skills" className="hover:text-portfolio-purple transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-portfolio-purple transition">Projects</a></li>
        <li><a href="#services" className="hover:text-portfolio-purple transition">Services</a></li>
        <li><a href="#testimonials" className="hover:text-portfolio-purple transition">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-portfolio-purple transition">Contact</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer; 
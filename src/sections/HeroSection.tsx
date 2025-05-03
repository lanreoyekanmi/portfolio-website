import React from 'react';

const HeroSection = () => (
  <section id="hero" className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 text-center relative overflow-hidden">
    <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">Web Developer & Educational Technologist</span>
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
      Crafting digital <span className="text-portfolio-purple">experiences</span><br />
      that educate & inspire
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
      Creating engaging digital experiences that help people learn and grow. Specializing in web development and educational technology solutions.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#projects" className="bg-portfolio-purple hover:bg-portfolio-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition">View My Work &rarr;</a>
      <a href="#contact" className="border border-white hover:bg-white hover:text-portfolio-dark px-6 py-3 rounded-lg font-semibold transition">Contact Me</a>
    </div>
    {/* Decorative particles or background can be added here */}
  </section>
);

export default HeroSection; 
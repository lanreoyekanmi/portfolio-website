import React from 'react';

const HeroSection = () => (
  <section id="hero" className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 text-center relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-portfolio-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-portfolio-purple/10 rounded-full blur-2xl -z-10" />
      
      {/* Role badge with sophisticated styling */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 group hover:bg-white/10 transition-all duration-300">
        <span className="w-2 h-2 rounded-full bg-portfolio-purple animate-pulse" />
        <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">
          Web Developer & Educational Technologist
        </span>
      </div>

      {/* Name with elegant typography */}
      <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight text-white/90">
        <span className="font-serif italic">Olanrewaju</span>{" "}
        <span className="font-medium">Oyekanmi</span>
      </h2>

      {/* Main headline with sophisticated gradient */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Crafting digital{" "}
          <span className="relative">
            <span className="relative z-10 text-portfolio-purple">experiences</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-portfolio-purple/20 -z-0" />
          </span>
        </span>
        <br />
        <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent">
          that educate & inspire
        </span>
      </h1>

      {/* Description with refined typography */}
      <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
        Creating engaging digital experiences that help people learn and grow. 
        Specializing in web development and educational technology solutions.
      </p>

      {/* Sophisticated button group */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a 
          href="#projects" 
          className="group relative px-8 py-4 bg-portfolio-purple/10 hover:bg-portfolio-purple/20 text-white rounded-lg font-medium transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            View My Work
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/0 via-portfolio-purple/20 to-portfolio-purple/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
        
        <a 
          href="#contact" 
          className="group px-8 py-4 text-white rounded-lg font-medium transition-all duration-300 relative"
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:border-white/40 transition-colors duration-300" />
          <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-sm">
        <span className="animate-bounce">↓</span>
        <span className="tracking-wider">Scroll to explore</span>
      </div>
    </div>
  </section>
);

export default HeroSection; 
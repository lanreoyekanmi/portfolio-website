import React from 'react';

const HeroSection = () => (
  <section id="hero" className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 text-center relative overflow-hidden bg-portfolio-light dark:bg-portfolio-dark">
    <div className="max-w-5xl mx-auto px-6">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-portfolio-purple-100/50 dark:bg-portfolio-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-portfolio-purple-200/50 dark:bg-portfolio-purple/10 rounded-full blur-2xl -z-10" />
      
      {/* Role badge with sophisticated styling */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-portfolio-gray-100 dark:bg-white/5 backdrop-blur-md border border-portfolio-gray-200 dark:border-white/10 mb-8 group hover:bg-portfolio-gray-200 dark:hover:bg-white/10 transition-all duration-300">
        <span className="w-2 h-2 rounded-full bg-portfolio-purple-500 animate-pulse" />
        <span className="text-sm font-medium tracking-wide text-portfolio-gray-700 dark:text-gray-300 uppercase">
          Web Developer & Educational Technologist
        </span>
      </div>

      {/* Name with elegant typography */}
      <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-portfolio-gray-900 dark:text-white/90">
        <span className="font-serif italic">Olanrewaju</span>{" "}
        <span className="font-medium">Oyekanmi</span>
      </h2>

      {/* Main headline with sophisticated gradient */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2]">
        <span className="bg-gradient-to-r from-portfolio-gray-900 via-portfolio-gray-800 to-portfolio-gray-700 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          Building Digital Solutions{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-portfolio-purple-600 dark:text-portfolio-purple-400">for Education</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-portfolio-purple-200 dark:bg-portfolio-purple-500/20 -z-0" />
          </span>
        </span>
      </h1>

      {/* Description with refined typography */}
      <p className="text-lg md:text-xl text-portfolio-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
        Crafting engaging web experiences and educational technology solutions 
        that help people learn and grow in the digital age.
      </p>

      {/* Sophisticated button group */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a 
          href="#projects" 
          className="group relative px-8 py-4 bg-portfolio-purple-600 hover:bg-portfolio-purple-700 text-white rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-lg shadow-portfolio-purple-500/20 hover:shadow-xl hover:shadow-portfolio-purple-500/30"
        >
          <span className="relative z-10 flex items-center gap-2">
            View My Work
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple-600/0 via-white/10 to-portfolio-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
        
        <a 
          href="#contact" 
          className="group px-8 py-4 text-portfolio-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 relative"
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 border border-portfolio-gray-200 dark:border-white/20 rounded-lg group-hover:border-portfolio-gray-300 dark:group-hover:border-white/40 transition-colors duration-300" />
          <div className="absolute inset-0 bg-portfolio-gray-100/50 dark:bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-portfolio-gray-400 dark:text-gray-500 text-sm">
        <span className="animate-bounce">↓</span>
        <span className="tracking-wider">Scroll to explore</span>
      </div>
    </div>
  </section>
);

export default HeroSection; 

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Simple animation for the heading
    const heading = headingRef.current;
    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-portfolio-purple/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-portfolio-purple/5 blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="text-center max-w-3xl z-10">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-gradient-to-r from-portfolio-purple/20 to-portfolio-purple-light/20 backdrop-blur-sm border border-white/10 animate-fade-in">
          <p className="text-sm font-medium text-portfolio-purple">Web Developer & Educational Technologist</p>
        </div>
        
        <h1 
          ref={headingRef} 
          className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80"
        >
          Crafting digital <span className="text-portfolio-purple">experiences</span> that educate & inspire
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto backdrop-blur-sm">
          Creating engaging digital experiences that help people learn and grow. 
          Specializing in web development and educational technology solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-portfolio-purple to-portfolio-purple-dark hover:opacity-90 transition-all text-white px-8 py-7 rounded-xl shadow-lg shadow-portfolio-purple/20"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-7 rounded-xl backdrop-blur-sm"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-xl bg-portfolio-dark/80 shadow-lg shadow-black/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-portfolio-purple to-portfolio-purple-dark flex items-center justify-center text-white font-bold shadow-lg shadow-portfolio-purple/20">
            {"<>"}
          </div>
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['about', 'skills', 'projects', 'services', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium capitalize hover:text-portfolio-purple transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-portfolio-purple hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            <Sun className="h-5 w-5 text-portfolio-purple" />
          </Button>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex bg-gradient-to-r from-portfolio-purple to-portfolio-purple-dark hover:opacity-90 text-white rounded-xl shadow-md shadow-portfolio-purple/20"
          >
            Hire Me
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-portfolio-dark/95 backdrop-blur-xl border-t border-white/10 p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 py-2">
            {['about', 'skills', 'projects', 'services', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium py-2 capitalize hover:text-portfolio-purple transition-colors"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-purple-dark hover:opacity-90 text-white w-full rounded-xl mt-2"
            >
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

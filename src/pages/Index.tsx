
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  useEffect(() => {
    document.title = 'Portfolio | Web Developer & Educational Technologist';
    
    // Add smooth scrolling offset for header
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100, // Offset for fixed header
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle hash on initial load
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.title = 'Portfolio';
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

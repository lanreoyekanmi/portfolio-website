import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App = () => (
  <div className="bg-portfolio-dark min-h-screen text-white relative overflow-hidden">
    <ParticleBackground />
    <div className="relative z-10">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection portrait="/assets/portrait.jpg" />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </div>
);

export default App; 
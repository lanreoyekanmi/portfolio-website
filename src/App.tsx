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
import { ThemeProvider } from './context/ThemeContext';

const App = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-gray-900 dark:text-white transition-colors duration-200">
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
  </ThemeProvider>
);

export default App; 
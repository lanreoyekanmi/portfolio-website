
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, GraduationCap, MessageSquare, Check } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-portfolio-dark/70">
      <div className="container mx-auto">
        <div className="mb-2 flex justify-center">
          <div className="inline-block px-3 py-1 rounded-full bg-portfolio-purple/20 backdrop-blur-sm">
            <p className="text-sm text-portfolio-purple">Services</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Services</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Here's how I can help you with your web development and educational technology needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="service-icon">
              <Code className="text-portfolio-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-300 text-sm mb-6">
              Custom websites and web applications built with modern technologies.
            </p>
            <div className="space-y-2 mb-8">
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Responsive website design</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">E-commerce solutions</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Web application development</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Frontend development</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-portfolio-purple hover:bg-portfolio-purple-dark"
            >
              Get Started
            </Button>
          </div>
          
          {/* Educational Technology */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="service-icon">
              <GraduationCap className="text-portfolio-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Educational Technology</h3>
            <p className="text-gray-300 text-sm mb-6">
              Digital learning solutions that engage and educate.
            </p>
            <div className="space-y-2 mb-8">
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Learning management systems</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Interactive learning tools</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Educational games</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">E-learning content development</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-portfolio-purple hover:bg-portfolio-purple-dark"
            >
              Get Started
            </Button>
          </div>
          
          {/* Consultation */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="service-icon">
              <MessageSquare className="text-portfolio-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Consultation</h3>
            <p className="text-gray-300 text-sm mb-6">
              Expert advice on web development and educational technology.
            </p>
            <div className="space-y-2 mb-8">
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Technology stack recommendations</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Digital learning strategy</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">UX/UI design feedback</span>
              </div>
              <div className="check-item">
                <Check className="h-5 w-5 text-portfolio-purple" />
                <span className="text-sm">Project planning and scoping</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-portfolio-purple hover:bg-portfolio-purple-dark"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

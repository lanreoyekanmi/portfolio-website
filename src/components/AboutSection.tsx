
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-portfolio-purple/20 backdrop-blur-sm">
              <p className="text-sm text-portfolio-purple">About Me</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting digital experiences with purpose
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate junior web developer and educational technologist with a focus on 
                creating engaging digital experiences that help people learn and grow.
              </p>
              <p>
                With a background in both education and technology, I bring a unique perspective
                to my work, combining technical skills with an understanding of how people learn
                and interact with digital content.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-portfolio-purple hover:bg-portfolio-purple-dark text-white"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="border-white/20 hover:border-white/40"
              >
                View My Work
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-portfolio-purple/30 to-portfolio-purple-dark/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-portfolio-purple/20 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-portfolio-purple-dark/30 blur-3xl"></div>
              <div className="relative z-10 text-9xl opacity-30">🚀</div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-portfolio-purple flex items-center justify-center animate-float shadow-lg">
              <span className="text-4xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

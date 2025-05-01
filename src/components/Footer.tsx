
import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-md bg-portfolio-purple flex items-center justify-center text-white font-bold mr-3">
              {"<>"}
            </div>
            <div>
              <h3 className="font-bold">Portfolio</h3>
              <p className="text-sm text-gray-400">Web Developer & Educational Technologist</p>
            </div>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-portfolio-purple">About</a>
            <a href="#" className="text-gray-400 hover:text-portfolio-purple">Projects</a>
            <a href="#" className="text-gray-400 hover:text-portfolio-purple">Services</a>
            <a href="#" className="text-gray-400 hover:text-portfolio-purple">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin className="h-4 w-4 text-gray-400" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Github className="h-4 w-4 text-gray-400" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Twitter className="h-4 w-4 text-gray-400" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

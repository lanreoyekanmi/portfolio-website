
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Learning Management System',
      description: 'A custom LMS built with React and Node.js for a local coding bootcamp.',
      category: 'Web Development',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with payment integration.',
      category: 'Web Development',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Interactive Learning Tool',
      description: 'An interactive tool for teaching programming concepts to beginners.',
      category: 'Educational Tech',
      image: '/placeholder.svg'
    },
  ];

  const filters = ['All', 'Web Development', 'Educational Tech'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-2 flex justify-center">
          <div className="inline-block px-3 py-1 rounded-full bg-portfolio-purple/20 backdrop-blur-sm">
            <p className="text-sm text-portfolio-purple">Portfolio</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Check out some of my recent work across web development and educational technology.
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black/30 backdrop-blur-sm rounded-full p-1">
            {filters.map(filter => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter 
                    ? 'bg-portfolio-purple text-white' 
                    : 'hover:text-portfolio-purple'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-transform hover:transform hover:-translate-y-2">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="group flex items-center text-portfolio-purple hover:text-portfolio-purple-light p-0"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

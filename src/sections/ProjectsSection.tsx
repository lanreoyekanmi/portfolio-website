import React, { useState } from 'react';

const projects = [
  {
    title: 'Learning Management System',
    description: 'A custom LMS built with React and Node.js for a local coding bootcamp.',
    category: 'Educational Tech',
    iframeUrl: ' https://lanreoyekanmi.github.io/academicjournal/', 
  },
  {
    title: 'First Portfolio Website',
    description: 'A fully responsive e-commerce platform with payment integration.',
    category: 'Web Development',
    iframeUrl: 'https://lanrewajuoyekanmi.netlify.app/', 
  },
  {
    title: 'Techrity Sign Page',
    description: 'A sign in and Sign up page for Techrity Innovation.',
    category: 'Educational Tech',
    iframeUrl: 'https://techrity-auth.netlify.app/', 
  },
  {
    title: 'Decorative Birthday card',
    description: 'A fully responsive e-commerce platform with payment integration.',
    category: 'Web Development',
    iframeUrl: 'https://lanreoyekanmi.github.io/birthday-card/', 
  },
];

const categories = ['All', 'Web Development', 'Educational Tech'];

const ProjectsSection = () => {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto text-center">
      <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">Portfolio</span>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">My Projects</h2>
      <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
        Check out some of my recent work across web development and educational technology.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold transition ${selected === cat ? 'bg-portfolio-purple text-white' : 'bg-white/10 text-portfolio-purple'}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((project, idx) => (
          <div key={project.title} className="bg-white/5 rounded-2xl p-6 flex flex-col items-start shadow-lg">
            <div className="w-full h-96 bg-gray-100/10 rounded-xl overflow-hidden mb-4">
              {project.iframeUrl ? (
                <iframe
                  src={project.iframeUrl}
                  className="w-full h-full border-0"
                  title={project.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400 text-4xl">
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-12 h-12 mx-auto' fill='none' viewBox='0 0 24 24' stroke='currentColor'><rect x='4' y='4' width='16' height='16' rx='2' strokeWidth='2' stroke='currentColor' fill='none'/><path d='M4 16l4-4a3 3 0 0 1 4.24 0l4.24 4' strokeWidth='2' stroke='currentColor' fill='none'/><circle cx='9' cy='9' r='2' fill='currentColor'/></svg>
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold mb-2 text-left">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-left">{project.description}</p>
            <a 
              href={project.iframeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-auto bg-portfolio-purple hover:bg-portfolio-purple-dark text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 
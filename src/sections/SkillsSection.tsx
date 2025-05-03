import React from 'react';

const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  backend: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL', 'SQL', 'Serverless'],
  tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Netlify', 'Jest', 'CI/CD', 'Agile'],
};

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-portfolio-purple-dark/30 text-portfolio-purple px-3 py-1 rounded-lg text-sm font-medium mr-2 mb-2">
    {children}
  </span>
);

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4 max-w-6xl mx-auto text-center">
    <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">Skills</span>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">My Skills</h2>
    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      I've developed a diverse set of skills across web development and educational technology.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white/5 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Frontend</h3>
        <p className="text-gray-400 mb-4 text-sm">Technologies and frameworks I use for frontend development</p>
        <div className="flex flex-wrap">
          {skills.frontend.map(skill => <SkillBadge key={skill}>{skill}</SkillBadge>)}
        </div>
      </div>
      <div className="bg-white/5 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Backend</h3>
        <p className="text-gray-400 mb-4 text-sm">Technologies and frameworks I use for backend development</p>
        <div className="flex flex-wrap">
          {skills.backend.map(skill => <SkillBadge key={skill}>{skill}</SkillBadge>)}
        </div>
      </div>
      <div className="bg-white/5 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Tools & Workflow</h3>
        <p className="text-gray-400 mb-4 text-sm">Tools and practices I use in my development workflow</p>
        <div className="flex flex-wrap">
          {skills.tools.map(skill => <SkillBadge key={skill}>{skill}</SkillBadge>)}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection; 
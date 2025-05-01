
import React, { useState } from 'react';

interface Skill {
  name: string;
  category: string;
}

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Web Development');
  
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'Responsive Design', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Backend' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'GraphQL', category: 'Backend' },
    { name: 'SQL', category: 'Backend' },
    { name: 'Serverless', category: 'Backend' },
    
    // Tools & Workflow
    { name: 'Git', category: 'Tools & Workflow' },
    { name: 'GitHub', category: 'Tools & Workflow' },
    { name: 'VS Code', category: 'Tools & Workflow' },
    { name: 'Figma', category: 'Tools & Workflow' },
    { name: 'Vercel', category: 'Tools & Workflow' },
    { name: 'Jest', category: 'Tools & Workflow' },
    { name: 'CI/CD', category: 'Tools & Workflow' },
    { name: 'Agile', category: 'Tools & Workflow' },
  ];

  const tabs = ['Web Development', 'Educational Tech', 'Soft Skills'];
  
  const filteredSkills = skills.filter(skill => {
    if (activeTab === 'Web Development') {
      return skill.category === 'Frontend' || skill.category === 'Backend';
    }
    if (activeTab === 'Tools & Workflow') {
      return skill.category === 'Tools & Workflow';
    }
    return skill.category === activeTab;
  });

  return (
    <section id="skills" className="py-20 px-4 bg-portfolio-dark/70">
      <div className="container mx-auto">
        <div className="mb-2 flex justify-center">
          <div className="inline-block px-3 py-1 rounded-full bg-portfolio-purple/20 backdrop-blur-sm">
            <p className="text-sm text-portfolio-purple">Skills</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          I've developed a diverse set of skills across web development and educational technology.
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black/30 backdrop-blur-sm rounded-full p-1">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeTab === tab 
                    ? 'bg-portfolio-purple text-white' 
                    : 'hover:text-portfolio-purple'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <p className="text-sm text-gray-400 mb-6">
              Technologies and frameworks I use for frontend development
            </p>
            <div className="flex flex-wrap">
              {skills
                .filter(skill => skill.category === 'Frontend')
                .map(skill => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <p className="text-sm text-gray-400 mb-6">
              Technologies and frameworks I use for backend development
            </p>
            <div className="flex flex-wrap">
              {skills
                .filter(skill => skill.category === 'Backend')
                .map(skill => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
          
          {/* Tools & Workflow */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Tools & Workflow</h3>
            <p className="text-sm text-gray-400 mb-6">
              Tools and practices I use in my development workflow
            </p>
            <div className="flex flex-wrap">
              {skills
                .filter(skill => skill.category === 'Tools & Workflow')
                .map(skill => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

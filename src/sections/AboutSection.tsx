import { motion } from 'framer-motion';
import React from 'react';

interface AboutSectionProps {
  portrait?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ portrait }) => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-24 px-4 md:px-0 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12"
  >
    <div className="flex-1 text-center md:text-left">
      <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">About Me</span>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Crafting digital experiences<br className="hidden md:block" /> with purpose</h2>
      <p className="text-lg text-gray-300 mb-4">
        I'm a passionate junior web developer and educational technologist with a focus on creating engaging digital experiences that help people learn and grow.
      </p>
      <p className="text-md text-gray-400 mb-8">
        With a background in both education and technology, I bring a unique perspective to my work, combining technical skills with an understanding of how people learn and interact with digital content.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a href="#contact" className="bg-portfolio-purple hover:bg-portfolio-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition">Contact Me &rarr;</a>
        <a href="#projects" className="border border-white hover:bg-white hover:text-portfolio-dark px-6 py-3 rounded-lg font-semibold transition">View My Work</a>
      </div>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="w-80 h-80 bg-gray-100/10 rounded-2xl flex items-center justify-center border-2 border-portfolio-purple-dark overflow-hidden">
        {portrait ? (
          <img src={portrait} alt="Portrait" className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400 text-5xl"> <svg xmlns='http://www.w3.org/2000/svg' className='w-16 h-16 mx-auto' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg> </span>
        )}
      </div>
    </div>
  </motion.section>
);

export default AboutSection; 
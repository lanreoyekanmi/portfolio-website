import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    quote: 'Working with this developer was a game-changer for our platform at Techrity Innovation. They understood both the technical requirements and the goals of the company.',
    name: 'Damilare Fadodun',
    role: 'Engineering Team Lead',
  },
  {
    quote: 'The e-commerce website they built for us exceeded our expectations. Clean code, responsive design, and excellent communication throughout the project.',
    name: 'Michael Chen',
    role: 'FreeLance Client',
  },
  {
    quote: 'Their ability to translate complex educational concepts into engaging digital experiences is remarkable. Our students love the interactive learning tools.',
    name: 'Prof. Olumorin B.C',
    role: 'University Professor',
  },
];

const TestimonialsSection = () => (
  <motion.section
    id="testimonials"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-24 px-4 max-w-6xl mx-auto text-center bg-portfolio-gray-50 dark:bg-portfolio-dark"
  >
    <span className="inline-block bg-portfolio-purple-100 dark:bg-portfolio-purple-dark/40 text-portfolio-purple-600 dark:text-portfolio-purple px-4 py-1.5 rounded-full mb-4 font-medium text-sm backdrop-blur-sm border border-portfolio-purple-200 dark:border-portfolio-purple/20">
      Testimonials
    </span>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-portfolio-gray-900 dark:text-white">
      Testimonials
    </h2>
    <p className="text-lg text-portfolio-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
      Here's what clients and collaborators have to say about working with me.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div 
          key={t.name} 
          className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start border border-portfolio-gray-200 dark:border-white/10"
        >
          <span className="text-portfolio-purple-500 dark:text-portfolio-purple text-3xl mb-4">&#10077;</span>
          <p className="text-portfolio-gray-700 dark:text-gray-200 mb-6 text-left leading-relaxed">
            {t.quote}
          </p>
          <div className="flex items-center gap-3 mt-auto">
            <span className="w-10 h-10 rounded-full bg-portfolio-purple-100 dark:bg-gray-200/10 flex items-center justify-center text-lg font-bold text-portfolio-purple-600 dark:text-white">
              {t.name[0]}
            </span>
            <div className="text-left">
              <div className="font-semibold text-portfolio-gray-900 dark:text-white text-sm">
                {t.name}
              </div>
              <div className="text-xs text-portfolio-gray-500 dark:text-gray-400">
                {t.role}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default TestimonialsSection; 
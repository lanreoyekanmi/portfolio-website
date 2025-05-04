import React from 'react';

const testimonials = [
  {
    quote: 'Working with this developer was a game-changer for our educational platform. They understood both the technical requirements and the educational goals.',
    name: 'Sarah Johnson',
    role: 'Education Director',
  },
  {
    quote: 'The e-commerce website they built for us exceeded our expectations. Clean code, responsive design, and excellent communication throughout the project.',
    name: 'Michael Chen',
    role: 'Small Business Owner',
  },
  {
    quote: 'Their ability to translate complex educational concepts into engaging digital experiences is remarkable. Our students love the interactive learning tools.',
    name: 'Prof. Olumorin B.C',
    role: 'University Professor',
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 px-4 max-w-6xl mx-auto text-center">
    <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">Testimonials</span>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Testimonials</h2>
    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      Here's what clients and collaborators have to say about working with me.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div key={t.name} className="bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col items-start">
          <span className="text-portfolio-purple text-3xl mb-4">&#10077;</span>
          <p className="text-gray-200 mb-6 text-left">{t.quote}</p>
          <div className="flex items-center gap-3 mt-auto">
            <span className="w-10 h-10 rounded-full bg-gray-200/10 flex items-center justify-center text-lg font-bold text-white">{t.name[0]}</span>
            <div className="text-left">
              <div className="font-semibold text-white text-sm">{t.name}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection; 
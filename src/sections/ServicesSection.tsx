import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    features: [
      'Responsive website design',
      'E-commerce solutions',
      'Web application development',
      'Frontend development',
    ],
  },
  {
    title: 'Educational Technology',
    description: 'Digital learning solutions that engage and educate.',
    features: [
      'Learning management systems',
      'Interactive learning tools',
      'Educational games',
      'E-learning content development',
    ],
  },
  {
    title: 'Consultation',
    description: 'Expert advice on web development and educational technology.',
    features: [
      'Technology stack recommendations',
      'Digital learning strategy',
      'UX/UI design feedback',
      'Project planning and scoping',
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-4 max-w-6xl mx-auto text-center">
    <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">Services</span>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">My Services</h2>
    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      Here's how I can help you with your web development and educational technology needs.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map(service => (
        <div key={service.title} className="bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col items-start">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-purple/20 mb-4">
            <span className="text-portfolio-purple text-2xl">{service.title === 'Web Development' ? '<>' : service.title === 'Educational Technology' ? '🎓' : '💬'}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-left">{service.title}</h3>
          <p className="text-gray-400 mb-4 text-left">{service.description}</p>
          <ul className="mb-6 text-left">
            {service.features.map(f => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                <span className="text-portfolio-purple">✓</span> {f}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-auto bg-portfolio-purple hover:bg-portfolio-purple-dark text-white px-4 py-2 rounded-lg font-semibold transition">Get Started</a>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection; 
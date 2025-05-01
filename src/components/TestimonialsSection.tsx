
import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with this developer was a game-changer for our educational platform. They understood both the technical requirements and the educational goals.",
      name: "Sarah Johnson",
      title: "Education Director"
    },
    {
      id: 2,
      quote: "The e-commerce website they built for us exceeded our expectations. Clean code, responsive design, and excellent communication throughout the project.",
      name: "Michael Chen",
      title: "Small Business Owner"
    },
    {
      id: 3,
      quote: "Their ability to translate complex educational concepts into engaging digital experiences is remarkable. Our students love the interactive learning tools.",
      name: "Dr. Emily Rodriguez",
      title: "University Professor"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-2 flex justify-center">
          <div className="inline-block px-3 py-1 rounded-full bg-portfolio-purple/20 backdrop-blur-sm">
            <p className="text-sm text-portfolio-purple">Testimonials</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Testimonials</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Here's what clients and collaborators have to say about working with me.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative"
            >
              <div className="text-portfolio-purple text-4xl mb-4">❝</div>
              <p className="text-gray-300 mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

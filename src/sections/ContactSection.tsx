import React from 'react';
import SocialIcons from '../components/SocialIcons';

const ContactSection = () => (
  <section id="contact" className="py-24 px-4 max-w-6xl mx-auto text-center bg-portfolio-gray-50 dark:bg-portfolio-dark">
    <span className="inline-block bg-portfolio-purple-100 dark:bg-portfolio-purple-dark/40 text-portfolio-purple-600 dark:text-portfolio-purple px-4 py-1.5 rounded-full mb-4 font-medium text-sm backdrop-blur-sm border border-portfolio-purple-200 dark:border-portfolio-purple/20">
      Contact
    </span>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-portfolio-gray-900 dark:text-white">
      Get in Touch
    </h2>
    <p className="text-lg text-portfolio-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
      Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col items-start text-left border border-portfolio-gray-200 dark:border-white/10">
        <h3 className="text-xl font-bold mb-6 text-portfolio-gray-900 dark:text-white">Contact Information</h3>
        <p className="text-portfolio-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out through the form or directly via the contact details below.
        </p>
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-purple-500 dark:text-portfolio-purple text-lg">&#9993;</span>
              <span className="font-medium text-portfolio-gray-900 dark:text-white">Email</span>
            </div>
            <div className="text-portfolio-gray-600 dark:text-gray-400 text-sm pl-7">lanrewajuoyekanmi@gmail.com</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-purple-500 dark:text-portfolio-purple text-lg">&#9742;</span>
              <span className="font-medium text-portfolio-gray-900 dark:text-white">Phone</span>
            </div>
            <div className="text-portfolio-gray-600 dark:text-gray-400 text-sm pl-7">(+234) 8147-531-301</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-purple-500 dark:text-portfolio-purple text-lg">&#128100;</span>
              <span className="font-medium text-portfolio-gray-900 dark:text-white">Social Media</span>
            </div>
            <div className="pl-7">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <form className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col gap-6 text-left border border-portfolio-gray-200 dark:border-white/10">
        <div>
          <label className="block mb-2 font-semibold text-portfolio-gray-900 dark:text-white">Name</label>
          <input 
            className="w-full px-4 py-2 rounded-lg bg-portfolio-gray-50 dark:bg-gray-900 text-portfolio-gray-900 dark:text-white border border-portfolio-gray-200 dark:border-gray-700 focus:border-portfolio-purple-500 dark:focus:border-portfolio-purple outline-none transition-colors duration-200" 
            type="text" 
            placeholder="Your name" 
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-portfolio-gray-900 dark:text-white">Email</label>
          <input 
            className="w-full px-4 py-2 rounded-lg bg-portfolio-gray-50 dark:bg-gray-900 text-portfolio-gray-900 dark:text-white border border-portfolio-gray-200 dark:border-gray-700 focus:border-portfolio-purple-500 dark:focus:border-portfolio-purple outline-none transition-colors duration-200" 
            type="email" 
            placeholder="Your email" 
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-portfolio-gray-900 dark:text-white">Subject</label>
          <input 
            className="w-full px-4 py-2 rounded-lg bg-portfolio-gray-50 dark:bg-gray-900 text-portfolio-gray-900 dark:text-white border border-portfolio-gray-200 dark:border-gray-700 focus:border-portfolio-purple-500 dark:focus:border-portfolio-purple outline-none transition-colors duration-200" 
            type="text" 
            placeholder="Subject of your message" 
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-portfolio-gray-900 dark:text-white">Message</label>
          <textarea 
            className="w-full px-4 py-2 rounded-lg bg-portfolio-gray-50 dark:bg-gray-900 text-portfolio-gray-900 dark:text-white border border-portfolio-gray-200 dark:border-gray-700 focus:border-portfolio-purple-500 dark:focus:border-portfolio-purple outline-none transition-colors duration-200" 
            rows={4} 
            placeholder="Your message" 
          />
        </div>
        <button 
          type="submit" 
          className="bg-portfolio-purple-600 hover:bg-portfolio-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-portfolio-purple-500/20 hover:shadow-xl hover:shadow-portfolio-purple-500/30 mt-2"
        >
          Send Message &rarr;
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection; 
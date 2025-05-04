import React from 'react';
import SocialIcons from '../components/SocialIcons';

const ContactSection = () => (
  <section id="contact" className="py-24 px-4 max-w-6xl mx-auto text-center">
    <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">Contact</span>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h2>
    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col items-start text-left">
        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
        <p className="text-gray-300 mb-8">Feel free to reach out through the form or directly via the contact details below.</p>
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-purple text-lg">&#9993;</span>
              <span className="font-medium">Email</span>
            </div>
            <div className="text-gray-400 text-sm pl-7">lanrewajuoyekanmi@gmail.com</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-purple text-lg">&#9742;</span>
              <span className="font-medium">Phone</span>
            </div>
            <div className="text-gray-400 text-sm pl-7">(+234) 8147-531-301</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-purple text-lg">&#128100;</span>
              <span className="font-medium">Social Media</span>
            </div>
            <div className="pl-7">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <form className="bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col gap-6 text-left">
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" type="text" placeholder="Your name" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" type="email" placeholder="Your email" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Subject</label>
          <input className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" type="text" placeholder="Subject of your message" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Message</label>
          <textarea className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" rows={4} placeholder="Your message" />
        </div>
        <button type="submit" className="bg-portfolio-purple hover:bg-portfolio-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition mt-2">Send Message &rarr;</button>
      </form>
    </div>
  </section>
);

export default ContactSection; 
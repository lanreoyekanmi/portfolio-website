import React from 'react';

const ContactSection = () => (
  <section id="contact" className="py-24 px-4 max-w-6xl mx-auto text-center">
    <span className="inline-block bg-portfolio-purple-dark/40 text-portfolio-purple px-4 py-1 rounded-full mb-4 font-medium text-sm backdrop-blur">Contact</span>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h2>
    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col items-start text-left">
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <p className="text-gray-300 mb-4">Feel free to reach out through the form or directly via the contact details below.</p>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2"><span className="text-portfolio-purple">&#9993;</span> <span>Email</span></div>
          <div className="text-gray-400 text-sm mb-2">lanrewajuoyekanmi@gmail.com</div>
          <div className="flex items-center gap-2 mb-2"><span className="text-portfolio-purple">&#9742;</span> <span>Phone</span></div>
          <div className="text-gray-400 text-sm mb-2">(123) 456-7890</div>
          <div className="flex items-center gap-2 mb-2"><span className="text-portfolio-purple">&#128100;</span> <span>Social Media</span></div>
          <div className="flex gap-3 text-xl text-portfolio-purple">
            <a href="#" aria-label="LinkedIn">&#xe800;</a>
            <a href="#" aria-label="GitHub">&#xf09b;</a>
            <a href="#" aria-label="Twitter">&#xf099;</a>
          </div>
        </div>
      </div>
      <form className="bg-white/5 rounded-2xl p-8 shadow-lg flex flex-col gap-4 text-left">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" type="text" placeholder="Your name" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" type="email" placeholder="Your email" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Subject</label>
          <input className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" type="text" placeholder="Subject of your message" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-portfolio-purple outline-none" rows={4} placeholder="Your message" />
        </div>
        <button type="submit" className="bg-portfolio-purple hover:bg-portfolio-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition mt-2">Send Message &rarr;</button>
      </form>
    </div>
  </section>
);

export default ContactSection; 
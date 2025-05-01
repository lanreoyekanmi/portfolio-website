
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, ArrowRight, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-portfolio-purple/20 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
            
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out through the form or directly via the contact details below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-portfolio-purple" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div>hello@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-portfolio-purple" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div>(123) 456-7890</div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-2">Social Media</div>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center hover:bg-portfolio-purple/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-portfolio-purple" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center hover:bg-portfolio-purple/30 transition-colors">
                    <Github className="h-5 w-5 text-portfolio-purple" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center hover:bg-portfolio-purple/30 transition-colors">
                    <Twitter className="h-5 w-5 text-portfolio-purple" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  placeholder="Your name" 
                  className="bg-white/5 border-white/10 focus:border-portfolio-purple focus:ring-portfolio-purple"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/5 border-white/10 focus:border-portfolio-purple focus:ring-portfolio-purple"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Subject of your message" 
                  className="bg-white/5 border-white/10 focus:border-portfolio-purple focus:ring-portfolio-purple"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Your message" 
                  rows={5}
                  className="bg-white/5 border-white/10 focus:border-portfolio-purple focus:ring-portfolio-purple"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-portfolio-purple hover:bg-portfolio-purple-dark"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const downloadResume = () => {
    // Implement resume download or link to resume
    alert('Resume download functionality to be implemented!');
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative py-20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-primary mb-2 font-medium">Hi there, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-gradient">
              Abhin <span className="text-primary">C</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-foreground/80 font-light mb-6">
              I build <span className="text-primary">exceptional</span> digital experiences.
            </h2>
          </div>

          <div className={`max-w-xl my-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-foreground/70 text-lg leading-relaxed">
              I'm a passionate developer focused on creating beautiful and functional web 
              experiences with a strong emphasis on user interaction. Let's turn your ideas into reality.
            </p>
          </div>

          <div className={`flex flex-wrap gap-4 mt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-white">
              Get in touch
            </Button>
            <Button variant="outline" onClick={downloadResume} className="border-primary text-primary hover:bg-primary/10">
              Download Resume
            </Button>
          </div>

          <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 items-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-foreground/20 text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-foreground/20 text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-foreground/20 text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/50 hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

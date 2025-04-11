
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl text-gradient">Abhin.C</span>
          </div>
          
          <div className="text-center md:text-left text-foreground/60 text-sm">
            <p>
              &copy; {currentYear} All Rights Reserved. Made with 
              <Heart className="inline-block mx-1 h-3 w-3 text-red-500 animate-pulse" /> 
              by Abhin.C
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex items-center space-x-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

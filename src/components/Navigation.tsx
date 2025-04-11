
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class when page is scrolled
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'home';

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentActive = section.id;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    const offsetPosition = element?.offsetTop || 0;
    
    window.scrollTo({
      top: offsetPosition - 80,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-2xl text-gradient">Abhin.C</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-foreground/70'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
          <Button 
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-black/95 backdrop-blur-xl glass-morphism transition-transform duration-300 ease-in-out py-24 px-6 md:hidden z-50`}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center space-x-2 text-lg font-medium hover:text-primary transition-colors"
            >
              <ChevronRight className={`h-4 w-4 ${activeSection === item.id ? 'text-primary' : 'text-foreground/70'}`} />
              <span className={activeSection === item.id ? 'text-primary' : 'text-foreground/70'}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

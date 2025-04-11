
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import BackgroundElements from '@/components/BackgroundElements';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after small delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Background elements */}
      <BackgroundElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />

      {/* Notification about placeholder images */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md p-4 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-lg z-50 text-sm">
        <p>Note: Placeholder images are used. Please replace them with your actual photos in the public/images directory.</p>
      </div>
    </div>
  );
};

export default Index;


import React, { useEffect, useState } from 'react';

const BackgroundElements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate parallax effect for gradient position based on mouse movement
  const gradientX = 50 + (mousePosition.x / window.innerWidth - 0.5) * 15;
  const gradientY = 50 + (mousePosition.y / window.innerHeight - 0.5) * 15;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(139, 92, 246, 0.3) 0%, rgba(30, 20, 50, 0) 50%)`
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 animate-pulse-light" />
      <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-primary/5 animate-float" style={{animationDelay: '-3s'}} />
      
      {/* Rotating accent */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96">
        <div className="relative w-full h-full animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-1 h-1/3 bg-accent/10 rounded-full" style={{transform: 'translateX(-50%)'}} />
          <div className="absolute bottom-0 left-1/2 w-1 h-1/3 bg-accent/10 rounded-full" style={{transform: 'translateX(-50%)'}} />
          <div className="absolute left-0 top-1/2 w-1/3 h-1 bg-accent/10 rounded-full" style={{transform: 'translateY(-50%)'}} />
          <div className="absolute right-0 top-1/2 w-1/3 h-1 bg-accent/10 rounded-full" style={{transform: 'translateY(-50%)'}} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundElements;

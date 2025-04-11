
import React, { useEffect, useState } from 'react';

type Position = {
  x: number;
  y: number;
};

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerDetection = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isPointer = hoveredElement 
        ? getComputedStyle(hoveredElement).cursor === 'pointer' 
        : false;
        
      setIsPointer(isPointer);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handlePointerDetection);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handlePointerDetection);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ease-out ${
          isClicking ? 'scale-75' : 'scale-100'
        } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : '12px',
          height: isPointer ? '40px' : '12px',
          backgroundColor: '#ffffff',
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.7)' : 'scale(1)'}`,
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full border-2 border-white mix-blend-difference transition-all duration-300 ease-out ${
          isClicking ? 'scale-75' : 'scale-100'
        } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          backgroundColor: 'transparent',
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.2)' : 'scale(1)'}`,
        }}
      />
    </>
  );
};

export default CustomCursor;

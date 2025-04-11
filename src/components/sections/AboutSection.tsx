
import React, { useEffect, useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Photo Column */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
            <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl blur-lg"></div>
              <div className="border border-primary/30 p-3 rounded-xl bg-background/50 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/images/about-photo.jpg" 
                    alt="Abhin C" 
                    className="w-full h-auto object-cover rounded-lg shadow-xl" 
                  />
                  
                  {/* Floating avatar */}
                  <div className="absolute -bottom-6 -right-6">
                    <div className="p-1.5 bg-background rounded-full">
                      <Avatar className="h-16 w-16 border-2 border-primary">
                        <AvatarImage src="/images/profile-close.jpg" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-primary">Me</span></h2>
              <p className="text-foreground/70 mb-6 text-lg">
                I'm a passionate full-stack developer with a strong eye for design and user experience. With several years of experience
                in the industry, I've worked on a variety of projects ranging from small business websites to enterprise-level applications.
              </p>
              <p className="text-foreground/70 mb-8">
                My approach combines technical expertise with creative problem-solving to deliver solutions that not only function
                flawlessly but also provide an exceptional user experience. I'm constantly exploring new technologies and methodologies
                to stay at the forefront of web development.
              </p>
            </div>
            
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${skill.level}%`, 
                        transition: 'width 1s ease-in-out',
                        transitionDelay: `${200 + index * 100}ms` 
                      }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

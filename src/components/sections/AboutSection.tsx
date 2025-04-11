
import React from 'react';
import { Card } from '../ui/card';
import { Sparkles, Code, Palette, Monitor } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX', level: 75 },
    { name: 'NextJS', level: 70 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">About Me</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            I'm a passionate developer with a keen eye for detail and a love for creating seamless user experiences. My journey in tech has equipped me with a diverse skill set and a problem-solving mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-scroll data-scroll-speed="0.1" className="space-y-6">
            <h3 className="text-xl font-semibold">What I Do</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 glass-morphism hover:-translate-y-1 transition-transform">
                <Code className="h-8 w-8 text-primary mb-3" />
                <h4 className="text-lg font-medium mb-2">Web Development</h4>
                <p className="text-sm text-foreground/60">Building responsive and interactive web applications with modern technologies.</p>
              </Card>
              
              <Card className="p-6 glass-morphism hover:-translate-y-1 transition-transform">
                <Palette className="h-8 w-8 text-primary mb-3" />
                <h4 className="text-lg font-medium mb-2">UI/UX Design</h4>
                <p className="text-sm text-foreground/60">Creating intuitive interfaces with a focus on user experience and aesthetics.</p>
              </Card>
              
              <Card className="p-6 glass-morphism hover:-translate-y-1 transition-transform">
                <Monitor className="h-8 w-8 text-primary mb-3" />
                <h4 className="text-lg font-medium mb-2">Responsive Design</h4>
                <p className="text-sm text-foreground/60">Ensuring applications look and function flawlessly across all devices.</p>
              </Card>
              
              <Card className="p-6 glass-morphism hover:-translate-y-1 transition-transform">
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <h4 className="text-lg font-medium mb-2">Animations</h4>
                <p className="text-sm text-foreground/60">Adding life to interfaces with subtle and engaging animations.</p>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

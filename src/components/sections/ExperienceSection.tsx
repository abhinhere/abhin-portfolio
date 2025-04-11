
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection: React.FC = () => {
  const [experiences] = useState<Experience[]>([
    {
      id: 1,
      company: "Tech Innovators",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      description: [
        "Led the development of the company's flagship web application",
        "Improved site performance by 40% through code optimization",
        "Mentored junior developers and established coding standards"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      company: "Digital Solutions Inc.",
      position: "Web Developer",
      period: "2019 - 2021",
      description: [
        "Developed responsive web applications for various clients",
        "Collaborated with the design team to implement UI/UX improvements",
        "Integrated third-party APIs and services"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      company: "Creative Web Agency",
      position: "Junior Developer",
      period: "2017 - 2019",
      description: [
        "Assisted in building client websites and web applications",
        "Implemented responsive designs across multiple platforms",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"]
    }
  ]);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">Work Experience</h2>
          <p className="text-foreground/70 mb-8">
            My professional journey includes working with diverse teams and technologies, always focusing on delivering high-quality solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 transform md:translate-x-[-0.5px]"></div>
          
          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <Card className="p-6 glass-morphism relative group hover:bg-secondary/10 transition-colors duration-300">
                  <div className={`absolute hidden md:block top-6 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0 ? 'right-[-22px]' : 'left-[-22px]'
                  }`}></div>
                  
                  <div className="flex items-center mb-3 text-primary">
                    <Briefcase size={18} className="mr-2" />
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                  </div>
                  
                  <h4 className="text-lg mb-2">{exp.company}</h4>
                  
                  <div className="flex items-center text-sm text-foreground/60 mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-foreground/70">{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

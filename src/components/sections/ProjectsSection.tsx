
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink, Github, Maximize2, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A fully responsive admin dashboard for e-commerce platforms with sales analytics, inventory management, and customer insights.",
      image: "https://placehold.co/600x400/1a1f2c/e2e8f0?text=Dashboard+Project",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A modern social platform with real-time messaging, post creation, and user authentication capabilities.",
      image: "https://placehold.co/600x400/1a1f2c/e2e8f0?text=Social+Media+App",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative project management tool allowing teams to organize tasks, track progress, and manage deadlines.",
      image: "https://placehold.co/600x400/1a1f2c/e2e8f0?text=Task+Management",
      technologies: ["Vue.js", "MongoDB", "Express", "Socket.io"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ]);
  
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">Featured Projects</h2>
          <p className="text-foreground/70 mb-8">
            Here are some of the projects I've worked on. These showcase my skills and approach to problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden glass-morphism group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="text-white border-white"
                    onClick={() => setActiveProject(project)}
                  >
                    <Maximize2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary/30 text-foreground/70 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" /> Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <Github className="h-3 w-3 mr-1" /> Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="ghost" className="group text-primary hover:text-primary/90">
            View All Projects 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      
      {/* Modal for project details - to be implemented */}
    </section>
  );
};

export default ProjectsSection;

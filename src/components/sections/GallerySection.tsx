
import React, { useEffect, useRef, useState } from 'react';
import PhotoGalleryGrid from '../PhotoGalleryGrid';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

const GallerySection: React.FC = () => {
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

  const carouselPhotos = [
    { src: "/images/carousel-1.jpg", alt: "Conference presentation" },
    { src: "/images/carousel-2.jpg", alt: "Working with team" },
    { src: "/images/carousel-3.jpg", alt: "Coding session" },
    { src: "/images/carousel-4.jpg", alt: "Design meeting" },
    { src: "/images/carousel-5.jpg", alt: "Project planning" },
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo <span className="text-primary">Gallery</span></h2>
          <p className="text-foreground/70 max-w-2xl">
            Glimpses from my professional journey, events, and memorable moments.
          </p>
        </div>

        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative py-6 px-4">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {carouselPhotos.map((photo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={photo.src} 
                          alt={photo.alt} 
                          className="aspect-video object-cover w-full hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <p className="mt-2 text-sm text-foreground/70">{photo.alt}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 md:-left-12 bg-background/80 hover:bg-background border border-primary/20" />
              <CarouselNext className="absolute -right-4 md:-right-12 bg-background/80 hover:bg-background border border-primary/20" />
            </Carousel>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-semibold mb-6">Work Snapshots</h3>
          <PhotoGalleryGrid />
        </div>

        {/* Personal section with my photo */}
        <div className={`mt-20 flex flex-col md:flex-row items-center gap-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md animate-pulse-light"></div>
            <Avatar className="h-40 w-40 rounded-full border-4 border-primary/30">
              <AvatarImage src="/images/profile-casual.jpg" alt="Abhin C" className="object-cover" />
              <AvatarFallback className="text-3xl bg-primary/20">AC</AvatarFallback>
            </Avatar>
          </div>
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold mb-3">Behind the Scenes</h3>
            <p className="text-foreground/70 mb-4">
              When I'm not coding or designing, I enjoy exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the community. Photography and documenting my journey has become an important part 
              of my professional growth.
            </p>
            <p className="text-foreground/70">
              These snapshots represent not just work, but the collaborative spirit and creative process behind every successful project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

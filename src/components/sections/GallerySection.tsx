
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Maximize2, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const GallerySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Abstract Digital Art",
      category: "design",
      image: "https://placehold.co/600x600/1a1f2c/e2e8f0?text=Design+1",
    },
    {
      id: 2,
      title: "Website Mockup",
      category: "web",
      image: "https://placehold.co/600x800/1a1f2c/e2e8f0?text=Web+1",
    },
    {
      id: 3,
      title: "App Interface",
      category: "mobile",
      image: "https://placehold.co/800x600/1a1f2c/e2e8f0?text=Mobile+1",
    },
    {
      id: 4,
      title: "Dashboard Design",
      category: "web",
      image: "https://placehold.co/600x600/1a1f2c/e2e8f0?text=Web+2",
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "design",
      image: "https://placehold.co/800x600/1a1f2c/e2e8f0?text=Design+2",
    },
    {
      id: 6,
      title: "Mobile App Screens",
      category: "mobile",
      image: "https://placehold.co/600x800/1a1f2c/e2e8f0?text=Mobile+2",
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' }
  ];
  
  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">Gallery</h2>
          <p className="text-foreground/70 mb-8">
            A showcase of my creative work, designs, and visual projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-secondary/30 text-foreground/70 hover:bg-secondary/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer aspect-square overflow-hidden glass-morphism rounded-lg"
              onClick={() => openModal(item)}
            >
              <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col p-4">
                  <Maximize2 className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-xl font-semibold text-white text-center">{item.title}</h3>
                  <p className="text-sm text-white/70 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="max-h-[85vh] max-w-full object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">{selectedImage.title}</h3>
              <p className="text-white/60 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

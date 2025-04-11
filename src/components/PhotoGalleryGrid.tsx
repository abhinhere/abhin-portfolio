
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Photo {
  id: number;
  src: string;
  alt: string;
  gridClass: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/portfolio-1.jpg',
    alt: 'Working at desk',
    gridClass: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: '/images/portfolio-2.jpg',
    alt: 'Coding session',
    gridClass: 'col-span-1',
  },
  {
    id: 3,
    src: '/images/portfolio-3.jpg',
    alt: 'Team meeting',
    gridClass: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: '/images/portfolio-4.jpg',
    alt: 'Project showcase',
    gridClass: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    src: '/images/portfolio-5.jpg',
    alt: 'Design workshop',
    gridClass: 'col-span-1',
  },
];

const PhotoGalleryGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {photos.map((photo) => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <div 
                className={cn(
                  "relative overflow-hidden rounded-xl cursor-pointer group", 
                  photo.gridClass
                )}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View</span>
                </div>
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl bg-background/95 backdrop-blur-sm border-primary/20">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">{photo.alt}</DialogTitle>
                <DialogDescription>
                  Portfolio showcase
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full rounded-md object-contain max-h-[70vh]" 
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalleryGrid;

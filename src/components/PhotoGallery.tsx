import { useState } from "react";
import { Heart, ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const photos = [
  {
    src: "/lovable-uploads/73af543e-c362-4ef7-bad1-61b167bf65e5.png",
    title: "Sweet Moments",
    description: "Together in our cozy space"
  },
  {
    src: "/lovable-uploads/62b4c616-0761-42ad-bce7-1ce537bb85b6.png",
    title: "Black & White Love",
    description: "Timeless moments captured"
  },
  {
    src: "/lovable-uploads/aff21612-9702-46a9-b7b1-f757dba48da3.png",
    title: "Traditional Elegance",
    description: "Dressed in our beautiful attire"
  },
  {
    src: "/lovable-uploads/46f72818-ec55-4bbb-a05f-6d4ca7cee5a8.png",
    title: "Classic Portrait",
    description: "Our sophisticated side"
  },
  {
    src: "/lovable-uploads/5d775fee-be97-4a93-a1e2-894fd7d0cd73.png",
    title: "Casual Comfort",
    description: "Relaxed and happy together"
  },
  {
    src: "/lovable-uploads/fa304e68-9ae7-47ed-b1df-04c1470a050d.png",
    title: "Perfect Harmony",
    description: "In sync with each other"
  },
  {
    src: "/lovable-uploads/5ef49cf1-25da-47f2-b7e7-3f409fd88bb8.png",
    title: "Joyful Selfie",
    description: "Capturing our happiness"
  },
  {
    src: "/lovable-uploads/94d3bc7a-f44a-4753-b69b-eaa4c78ff4b7.png",
    title: "Formal Beauty",
    description: "Dressed up for special occasions"
  },
  {
    src: "/lovable-uploads/7c7fa2ed-7131-4290-9bc2-ef02c01e6180.png",
    title: "Monochrome Magic",
    description: "Love in black and white"
  }
];

interface PhotoGalleryProps {
  isVisible: boolean;
  onClose: () => void;
}

export const PhotoGallery = ({ isVisible, onClose }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  if (!isVisible) return null;

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft p-4 animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold text-foreground mb-2 animate-romantic-glow">
          Our Beautiful Journey
        </h1>
        <p className="text-muted-foreground text-lg">
          Two years of love, laughter, and endless memories
        </p>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <Heart className="w-5 h-5 text-primary animate-heart-beat" fill="currentColor" />
          <span className="text-primary font-semibold">August 22, 2022 - Forever</span>
          <Heart className="w-5 h-5 text-primary animate-heart-beat" fill="currentColor" />
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-romantic transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedPhoto(index)}
          >
            {/* Decorative frame */}
            <div className="absolute inset-0 bg-gradient-romantic opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="p-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Heart overlay */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-white animate-heart-beat" fill="currentColor" />
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {photo.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size photo */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-heart"
            />
            
            {/* Close button */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Navigation */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={prevPhoto}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={nextPhoto}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Photo info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg">
                  {photos[selectedPhoto].title}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {photos[selectedPhoto].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer message */}
      <div className="text-center mt-12 pb-8">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-soft">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-heart-beat" fill="currentColor" />
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Happy Anniversary, My Love!
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every photo tells our story, every moment we've shared has been a blessing. 
            Here's to many more years of creating beautiful memories together. 
            I love you more than words can express! ❤️
          </p>
          <div className="mt-4 text-sm text-primary font-semibold">
            From your devoted husband 💕
          </div>
        </div>
      </div>
    </div>
  );
};
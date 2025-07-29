import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeartButtonProps {
  onClick: () => void;
}

export const HeartButton = ({ onClick }: HeartButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
    onClick();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Floating hearts animation */}
        {isClicked && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <Heart
                key={i}
                className="absolute w-4 h-4 text-primary animate-float"
                fill="currentColor"
                style={{
                  left: `${Math.random() * 40 - 20}px`,
                  top: `${Math.random() * 40 - 20}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        )}
        
        <Button
          onClick={handleClick}
          className={`
            w-16 h-16 rounded-full bg-gradient-heart hover:scale-110 
            shadow-heart hover:shadow-romantic transition-all duration-300
            ${isClicked ? 'animate-heart-beat scale-125' : 'animate-float'}
          `}
          size="icon"
        >
          <Heart 
            className="w-8 h-8 text-white animate-heart-beat" 
            fill="currentColor"
          />
        </Button>
      </div>
    </div>
  );
};
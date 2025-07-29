import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Loading our beautiful memories...",
    "Preparing something special...", 
    "Almost ready, my love...",
    "Welcome to our anniversary gallery!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-romantic relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-white/40" />
          </div>
        ))}
      </div>

      <div className="text-center z-10">
        {/* Main heart loader */}
        <div className="mb-8 relative">
          <Heart 
            className="w-20 h-20 text-white animate-heart-beat mx-auto"
            fill="currentColor"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out shadow-heart"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-white/80 text-sm mt-2 font-medium">
            {progress}%
          </div>
        </div>

        {/* Loading messages */}
        <div className="h-16 flex items-center justify-center">
          <p className="text-white text-lg font-medium animate-fade-in-up">
            {messages[currentMessage]}
          </p>
        </div>

        {/* Anniversary date */}
        <div className="mt-8 text-white/70 text-sm">
          <p>Since August 22, 2022</p>
          <div className="flex items-center justify-center mt-2 space-x-1">
            <Heart className="w-3 h-3 animate-heart-beat" fill="currentColor" />
            <span>Forever & Always</span>
            <Heart className="w-3 h-3 animate-heart-beat" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};
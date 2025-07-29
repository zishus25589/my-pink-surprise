import { useState, useEffect } from "react";
import { Heart, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuspenseRevealProps {
  onReveal: () => void;
}

export const SuspenseReveal = ({ onReveal }: SuspenseRevealProps) => {
  const [stage, setStage] = useState(0);
  const [heartCount, setHeartCount] = useState(0);

  const stages = [
    {
      title: "My Dearest Wife...",
      message: "I have something very special prepared for you...",
      subtitle: "Click the heart to continue"
    },
    {
      title: "Two Years Ago...",
      message: "You walked into my life and changed everything forever.",
      subtitle: "My heart beats for you"
    },
    {
      title: "Every Single Day...",
      message: "I fall in love with you all over again.",
      subtitle: "You are my everything"
    },
    {
      title: "Today I Want To Show You...",
      message: "All the beautiful memories we've created together.",
      subtitle: "Are you ready for your surprise?"
    }
  ];

  const handleHeartClick = () => {
    setHeartCount(prev => prev + 1);
    
    if (stage < stages.length - 1) {
      setTimeout(() => {
        setStage(prev => prev + 1);
      }, 800);
    } else {
      setTimeout(() => {
        onReveal();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-romantic flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/20 animate-float"
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 16 + 8}px`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-white/15 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 12 + 6}px`,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto p-8 relative z-10">
        {/* Gift box animation */}
        <div className="mb-8">
          <Gift className="w-20 h-20 text-white mx-auto mb-4 animate-float" />
        </div>

        {/* Main content with typewriter effect */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-heart border border-white/20 animate-fade-in-up">
          <h1 className="text-4xl font-vibes text-white mb-6 animate-romantic-glow">
            {stages[stage].title}
          </h1>
          
          <p className="text-xl font-playfair text-white/90 leading-relaxed mb-6">
            {stages[stage].message}
          </p>

          <p className="text-lg text-white/70 mb-8 font-dancing">
            {stages[stage].subtitle}
          </p>

          {/* Interactive heart button */}
          <Button
            onClick={handleHeartClick}
            className="bg-white/20 hover:bg-white/30 border-2 border-white/40 rounded-full w-20 h-20 transition-all duration-300 hover:scale-110 group"
            size="icon"
          >
            <Heart 
              className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-300 animate-heart-beat" 
              fill="currentColor"
            />
          </Button>

          {/* Progress indicator */}
          <div className="mt-6 flex justify-center space-x-2">
            {stages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index <= stage ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Heart click counter */}
          {heartCount > 0 && (
            <div className="mt-4 text-white/60 text-sm animate-fade-in-up">
              Hearts clicked: {heartCount} 💕
            </div>
          )}
        </div>

        {/* Final stage call to action */}
        {stage === stages.length - 1 && (
          <div className="mt-6 animate-fade-in-up">
            <p className="text-white/80 text-lg font-dancing">
              Click the heart one more time to see your surprise! ❤️
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
import { useState, useEffect } from "react";
import { Heart, Quote } from "lucide-react";

const romanticQuotes = [
  {
    text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou"
  },
  {
    text: "Every love story is beautiful, but ours is my favorite.",
    author: "Unknown"
  },
  {
    text: "You are my today and all of my tomorrows.",
    author: "Leo Christopher"
  },
  {
    text: "I have found the one whom my soul loves.",
    author: "Song of Solomon 3:4"
  },
  {
    text: "Whatever our souls are made of, yours and mine are the same.",
    author: "Emily Brontë"
  },
  {
    text: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Elizabeth Barrett Browning"
  },
  {
    text: "You are my sun, my moon, and all of my stars.",
    author: "E.E. Cummings"
  },
  {
    text: "Two years ago, my heart found its home in you. Today, I'm still amazed by our love.",
    author: "Your Husband"
  }
];

export const RomanticQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % romanticQuotes.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/30 min-h-[200px] flex items-center justify-center">
      <div className="absolute top-4 left-4">
        <Quote className="w-8 h-8 text-primary/40" />
      </div>
      <div className="absolute bottom-4 right-4">
        <Quote className="w-8 h-8 text-primary/40 rotate-180" />
      </div>
      
      <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
        <p className="text-lg font-playfair italic text-foreground leading-relaxed mb-4 max-w-2xl">
          "{romanticQuotes[currentQuote].text}"
        </p>
        <div className="flex items-center justify-center space-x-2">
          <Heart className="w-4 h-4 text-primary animate-heart-beat" fill="currentColor" />
          <span className="text-sm font-medium text-muted-foreground">
            — {romanticQuotes[currentQuote].author}
          </span>
          <Heart className="w-4 h-4 text-primary animate-heart-beat" fill="currentColor" />
        </div>
      </div>

      {/* Quote indicator dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {romanticQuotes.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentQuote ? 'bg-primary scale-125' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
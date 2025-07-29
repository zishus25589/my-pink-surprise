import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmojiKissScreenProps {
  onKissComplete: () => void;
}

export const EmojiKissScreen = ({ onKissComplete }: EmojiKissScreenProps) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [showMessage, setShowMessage] = useState(false);
  const [kissSent, setKissSent] = useState(false);
  const [progress, setProgress] = useState(0);

  const kissEmojis = ["😘", "💋", "😗", "😙", "🥰", "😍", "💕", "💖"];
  const heartEmojis = ["💖", "💕", "💗", "💓", "💘", "💝"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  const sendKiss = () => {
    if (!selectedEmoji) return;
    
    setKissSent(true);
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onKissComplete();
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-romantic flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
        {heartEmojis.map((emoji, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-2xl animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="text-center max-w-lg mx-auto p-8 relative z-10">
        {!kissSent ? (
          <div className="animate-fade-in-up">
            {/* Main title */}
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-heart-beat">💖</div>
              <h1 className="text-4xl font-vibes text-white mb-4">
                My Beautiful Wife
              </h1>
              {showMessage && (
                <p className="text-xl font-dancing text-white/90 animate-fade-in-up">
                  Send me a kiss to unlock your special surprise! 💋
                </p>
              )}
            </div>

            {showMessage && (
              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                {/* Emoji selector */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-heart border border-white/20 mb-6">
                  <h3 className="text-xl font-dancing text-white mb-6">
                    Choose your kiss emoji:
                  </h3>
                  
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {kissEmojis.map((emoji, index) => (
                      <button
                        key={index}
                        onClick={() => handleEmojiClick(emoji)}
                        className={`
                          text-4xl p-4 rounded-2xl transition-all duration-300 hover:scale-125 hover:rotate-12
                          ${selectedEmoji === emoji 
                            ? 'bg-white/30 shadow-heart scale-110 animate-heart-beat' 
                            : 'bg-white/10 hover:bg-white/20'
                          }
                        `}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>

                  {selectedEmoji && (
                    <div className="animate-fade-in-up">
                      <p className="text-white/80 mb-4 font-playfair">
                        Perfect choice! {selectedEmoji}
                      </p>
                      
                      <Button
                        onClick={sendKiss}
                        className="bg-white/20 hover:bg-white/30 border-2 border-white/40 text-white font-dancing text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 animate-heart-beat"
                      >
                        Send Kiss {selectedEmoji}
                      </Button>
                    </div>
                  )}
                </div>

                <p className="text-white/60 text-sm font-playfair italic">
                  "A kiss is a lovely trick designed by nature to stop speech when words become superfluous."
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="animate-fade-in-up text-center">
            {/* Kiss sent animation */}
            <div className="mb-8">
              <div className="text-8xl mb-4 animate-heart-beat">
                {selectedEmoji}
              </div>
              <h2 className="text-3xl font-vibes text-white mb-4">
                Kiss Received! 💕
              </h2>
              <p className="text-lg font-dancing text-white/90">
                Opening your special anniversary surprise...
              </p>
            </div>

            {/* Progress bar */}
            <div className="bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm mb-4">
              <div 
                className="bg-white h-full rounded-full transition-all duration-300 ease-out shadow-heart"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="text-white/80 text-sm font-medium">
              {progress}% - Preparing your romantic surprise...
            </div>

            {/* Floating kiss emojis */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`floating-kiss-${i}`}
                  className="absolute text-4xl animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: '3s',
                  }}
                >
                  {selectedEmoji}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
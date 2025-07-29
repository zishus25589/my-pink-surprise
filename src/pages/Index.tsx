import { useState } from "react";
import { PasswordScreen } from "@/components/PasswordScreen";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PhotoGallery } from "@/components/PhotoGallery";
import { HeartButton } from "@/components/HeartButton";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  const [stage, setStage] = useState<'password' | 'loading' | 'welcome' | 'gallery'>('password');

  const handlePasswordSuccess = () => {
    setStage('loading');
  };

  const handleLoadingComplete = () => {
    setStage('welcome');
  };

  const handleShowGallery = () => {
    setStage('gallery');
  };

  const handleCloseGallery = () => {
    setStage('welcome');
  };

  if (stage === 'password') {
    return <PasswordScreen onCorrectPassword={handlePasswordSuccess} />;
  }

  if (stage === 'loading') {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (stage === 'gallery') {
    return <PhotoGallery isVisible={true} onClose={handleCloseGallery} />;
  }

  // Welcome stage
  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float"
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 15 + 8}px`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-primary/15 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 12 + 6}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Main heading */}
          <div className="mb-8">
            <Heart className="w-20 h-20 text-primary mx-auto mb-6 animate-romantic-glow" fill="currentColor" />
            <h1 className="text-6xl font-bold text-foreground mb-4 bg-gradient-romantic bg-clip-text text-transparent">
              Happy Anniversary
            </h1>
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              My Beautiful Wife ❤️
            </h2>
          </div>

          {/* Anniversary details */}
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-romantic border border-border/50 mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-primary mb-2">2 Years</div>
              <div className="text-xl text-muted-foreground">of pure happiness together</div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-foreground">730</div>
                <div className="text-muted-foreground">Days of Love</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-foreground">∞</div>
                <div className="text-muted-foreground">Moments of Joy</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-foreground">1</div>
                <div className="text-muted-foreground">Perfect Match</div>
              </div>
            </div>
          </div>

          {/* Love message */}
          <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/30 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              "Every day with you feels like a beautiful dream come true. 
              From August 22, 2022, you've filled my life with endless love, 
              laughter, and the most precious memories. Here's to celebrating 
              our journey and all the wonderful adventures still to come!"
            </p>
            <div className="mt-4 text-primary font-semibold">
              With all my love, your devoted husband 💕
            </div>
          </div>

          {/* Instruction */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Click the floating heart to see our beautiful memories together! 
            </p>
            <div className="flex justify-center items-center space-x-2 text-primary">
              <Heart className="w-5 h-5 animate-heart-beat" fill="currentColor" />
              <span className="font-medium">Tap the heart button below</span>
              <Heart className="w-5 h-5 animate-heart-beat" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Heart button */}
      <HeartButton onClick={handleShowGallery} />
    </div>
  );
};

export default Index;

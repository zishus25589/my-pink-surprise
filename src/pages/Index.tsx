import { useState } from "react";
import { PasswordScreen } from "@/components/PasswordScreen";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PhotoGallery } from "@/components/PhotoGallery";
import { HeartButton } from "@/components/HeartButton";
import { SuspenseReveal } from "@/components/SuspenseReveal";
import { RomanticQuotes } from "@/components/RomanticQuotes";
import { LoveTimeline } from "@/components/LoveTimeline";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Heart, Sparkles, Crown, Gift } from "lucide-react";

const Index = () => {
  const [stage, setStage] = useState<'password' | 'loading' | 'suspense' | 'welcome' | 'gallery'>('password');

  const handlePasswordSuccess = () => {
    setStage('loading');
  };

  const handleLoadingComplete = () => {
    setStage('suspense');
  };

  const handleSuspenseReveal = () => {
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

  if (stage === 'suspense') {
    return <SuspenseReveal onReveal={handleSuspenseReveal} />;
  }

  if (stage === 'gallery') {
    return <PhotoGallery isVisible={true} onClose={handleCloseGallery} />;
  }

  // Enhanced Welcome stage with all new features
  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <FloatingParticles />
      
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/8 animate-float"
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${Math.random() * 18 + 10}px`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-primary/12 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 14 + 8}px`,
            }}
          />
        ))}
      </div>

      {/* Main content wrapper */}
      <div className="relative z-20 p-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-6xl mx-auto pt-8">
          <div className="mb-8 relative">
            <Crown className="w-16 h-16 text-primary mx-auto mb-4 animate-romantic-glow" />
            <h1 className="text-7xl font-vibes text-foreground mb-4 animate-fade-in-up">
              My Beloved Queen
            </h1>
            <h2 className="text-4xl font-dancing font-bold bg-gradient-romantic bg-clip-text text-transparent mb-6">
              Happy 3rd Anniversary! 
            </h2>
            <div className="flex items-center justify-center space-x-3 text-2xl font-playfair text-muted-foreground">
              <Heart className="w-6 h-6 text-primary animate-heart-beat" fill="currentColor" />
              <span>August 22, 2022 - Forever & Always</span>
              <Heart className="w-6 h-6 text-primary animate-heart-beat" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto">
          <CountdownTimer />
        </div>

        {/* Romantic Quotes Carousel */}
        <div className="max-w-4xl mx-auto">
          <RomanticQuotes />
        </div>

        {/* Anniversary Stats Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/30 text-center hover:shadow-romantic transition-all duration-500 animate-fade-in-up">
            <Gift className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <div className="text-4xl font-bold text-foreground mb-2">∞</div>
            <div className="text-lg font-playfair text-muted-foreground">Beautiful Memories</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/30 text-center hover:shadow-romantic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-heart-beat" fill="currentColor" />
            <div className="text-4xl font-bold text-foreground mb-2">2</div>
            <div className="text-lg font-playfair text-muted-foreground">Years of Pure Bliss</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/30 text-center hover:shadow-romantic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-sparkle" />
            <div className="text-4xl font-bold text-foreground mb-2">1</div>
            <div className="text-lg font-playfair text-muted-foreground">Perfect Soulmate</div>
          </div>
        </div>

        {/* Love Timeline */}
        <div className="max-w-4xl mx-auto">
          <LoveTimeline />
        </div>

        {/* Final Love Message */}
        <div className="max-w-4xl mx-auto bg-gradient-romantic rounded-3xl p-8 shadow-heart text-center">
          <h3 className="text-3xl font-vibes text-white mb-6">
            A Message From Your Heart
          </h3>
          <p className="text-xl font-playfair text-white/90 leading-relaxed mb-6">
            "Two years ago, you said yes to forever with me. Today, I want to show you 
            that every single moment has been worth celebrating. You are my love, 
            my light, my everything. This website is my gift to you - a collection 
            of our most beautiful memories together."
          </p>
          <div className="text-lg font-dancing text-white/80">
            Your loving husband who adores you endlessly 💕
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/30">
            <h3 className="text-2xl font-dancing font-bold text-foreground mb-4">
              Ready to See Our Beautiful Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-playfair">
              Click the magical floating heart to open our photo gallery 
              and relive all our precious moments together! ❤️
            </p>
            <div className="flex justify-center items-center space-x-2 text-primary animate-heart-beat">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span className="font-semibold text-lg">Look for the heart button!</span>
              <Heart className="w-6 h-6" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Heart Button */}
      <HeartButton onClick={handleShowGallery} />
    </div>
  );
};

export default Index;

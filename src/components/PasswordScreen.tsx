import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart, Lock } from "lucide-react";

interface PasswordScreenProps {
  onCorrectPassword: () => void;
}

export const PasswordScreen = ({ onCorrectPassword }: PasswordScreenProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "22082022") {
      onCorrectPassword();
    } else {
      setError("Incorrect password. Try our special date!");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      <Card className={`p-8 w-full max-w-md bg-card/80 backdrop-blur-sm shadow-romantic border-border/50 ${isShaking ? 'animate-pulse' : 'animate-fade-in-up'}`}>
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <Lock className="w-12 h-12 text-primary animate-romantic-glow" />
              <Heart className="w-6 h-6 text-primary-glow absolute -top-1 -right-1 animate-heart-beat" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Our Special Day
          </h1>
          <p className="text-muted-foreground">
            Enter our anniversary date to unlock
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            (DDMMYYYY format)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="text-center text-lg tracking-wider bg-input/50 border-border/60 focus:border-primary focus:ring-primary/30"
              maxLength={8}
            />
            {error && (
              <p className="text-destructive text-sm mt-2 text-center animate-fade-in-up">
                {error}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-romantic hover:scale-105 transition-all duration-300 shadow-heart text-primary-foreground font-semibold py-3"
          >
            <Heart className="w-4 h-4 mr-2 animate-heart-beat" />
            Unlock Our Memories
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Made with ❤️ for my beloved wife
          </p>
        </div>
      </Card>
    </div>
  );
};
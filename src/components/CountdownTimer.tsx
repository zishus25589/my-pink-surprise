import { useState, useEffect } from "react";
import { Clock, Heart } from "lucide-react";

export const CountdownTimer = () => {
  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const anniversaryDate = new Date('2022-08-22');
    
    const updateCountdown = () => {
      const now = new Date();
      const diffTime = now.getTime() - anniversaryDate.getTime();
      
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setTimeUnits({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBoxes = [
    { label: 'Days', value: timeUnits.days, color: 'text-pink-500' },
    { label: 'Hours', value: timeUnits.hours, color: 'text-rose-500' },
    { label: 'Minutes', value: timeUnits.minutes, color: 'text-red-500' },
    { label: 'Seconds', value: timeUnits.seconds, color: 'text-primary' }
  ];

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/30">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Clock className="w-6 h-6 text-primary animate-heart-beat" />
          <h3 className="text-2xl font-dancing font-bold text-foreground">
            Time Since Our First Day
          </h3>
          <Heart className="w-6 h-6 text-primary animate-heart-beat" fill="currentColor" />
        </div>
        <p className="text-muted-foreground">Every second with you is a blessing</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeBoxes.map((timeBox, index) => (
          <div 
            key={timeBox.label}
            className="bg-gradient-romantic p-6 rounded-2xl text-center shadow-heart animate-fade-in-up hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`text-3xl font-bold text-white mb-2 ${timeBox.color.replace('text-', 'filter-white ')}`}>
              {timeBox.value.toLocaleString()}
            </div>
            <div className="text-white/80 text-sm font-medium uppercase tracking-wide">
              {timeBox.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground font-playfair italic">
          "Time flies when you're in love, but the memories last forever"
        </p>
      </div>
    </div>
  );
};
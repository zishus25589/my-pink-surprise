import { Heart, Calendar, Star, Gift, Camera } from "lucide-react";

const timelineEvents = [
  {
    date: "August 22, 2022",
    title: "Our Beautiful Beginning",
    description: "The day our love story officially began. The start of forever.",
    icon: Heart,
    color: "text-pink-500"
  },
  {
    date: "First Month",
    title: "Getting to Know Each Other",
    description: "Learning about your favorite things, your dreams, your beautiful soul.",
    icon: Star,
    color: "text-purple-500"
  },
  {
    date: "Six Months",
    title: "Falling Deeper",
    description: "Realizing that what we have is truly special and meant to last.",
    icon: Gift,
    color: "text-rose-500"
  },
  {
    date: "One Year",
    title: "First Anniversary",
    description: "Celebrating 365 days of love, laughter, and beautiful memories.",
    icon: Calendar,
    color: "text-red-500"
  },
  {
    date: "Today",
    title: "Two Years Strong",
    description: "Still falling in love with you every single day. Here's to forever!",
    icon: Camera,
    color: "text-primary"
  }
];

export const LoveTimeline = () => {
  return (
    <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/30">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-dancing font-bold text-foreground mb-2">
          Our Love Timeline
        </h2>
        <p className="text-muted-foreground">
          Every step of our beautiful journey together
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary"></div>

        {timelineEvents.map((event, index) => {
          const IconComponent = event.icon;
          return (
            <div 
              key={index} 
              className="relative flex items-start mb-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-romantic rounded-full shadow-heart border-4 border-background">
                <IconComponent className={`w-6 h-6 ${event.color}`} />
              </div>

              {/* Content */}
              <div className="ml-6 flex-1">
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-romantic transition-all duration-300">
                  <div className="text-sm font-medium text-primary mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
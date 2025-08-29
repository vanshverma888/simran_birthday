import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Music2, Sparkles, Gift } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "6:00 PM",
    title: "Welcome Ceremony",
    description: "Welcome & Traditional Aarti ceremony with family elders blessing Simran",
    icon: <Users className="w-6 h-6" />,
    side: 'left'
  },
  {
    time: "7:30 PM",
    title: "Dinner & Festivities",
    description: "Traditional Indian feast with Simran's favorite dishes and birthday cake cutting",
    icon: <Gift className="w-6 h-6" />,
    side: 'right'
  },
  {
    time: "9:00 PM",
    title: "Dance & Entertainment",
    description: "Dance performances, games, and celebration with DJ playing Bollywood hits",
    icon: <Music2 className="w-6 h-6" />,
    side: 'left'
  },
  {
    time: "11:00 PM",
    title: "Closing Ceremony",
    description: "Traditional fireworks display and take-home gifts for all guests",
    icon: <Sparkles className="w-6 h-6" />,
    side: 'right'
  }
];

export default function TimelineSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Celebration Timeline
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-4" data-testid="text-event-date">
            September 5th, 2024
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-center justify-between mb-12">
              {event.side === 'left' ? (
                <>
                  <div className="flex-1 text-right pr-8">
                    <Card className="party-card inline-block">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2 flex items-center justify-end gap-2" data-testid={`text-time-${index}`}>
                          <Clock className="w-5 h-5" />
                          {event.time}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`text-description-${index}`}>
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-dot w-6 h-6 rounded-full z-10 flex items-center justify-center">
                    {event.icon}
                  </div>
                  <div className="flex-1 pl-8">
                    <h4 className="text-2xl font-bold text-secondary" data-testid={`text-title-${index}`}>
                      {event.title}
                    </h4>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 text-right pr-8">
                    <h4 className="text-2xl font-bold text-secondary" data-testid={`text-title-${index}`}>
                      {event.title}
                    </h4>
                  </div>
                  <div className="timeline-dot w-6 h-6 rounded-full z-10 flex items-center justify-center">
                    {event.icon}
                  </div>
                  <div className="flex-1 pl-8">
                    <Card className="party-card inline-block">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2" data-testid={`text-time-${index}`}>
                          <Clock className="w-5 h-5" />
                          {event.time}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`text-description-${index}`}>
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

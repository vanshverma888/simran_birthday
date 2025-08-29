import { Button } from "@/components/ui/button";
import { Gift, MapPin, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp-section');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative overflow-hidden py-16 lg:py-24 indian-pattern">
      <div className="absolute inset-0 marigold-doodle"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="doodle-border mandala-corner inline-block mb-8">
          <div 
            className="rounded-full w-32 h-32 mx-auto shadow-2xl border-4 border-accent bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
            data-testid="img-hero-celebration"
          >
            <div className="text-center">
              <div className="text-4xl mb-1">🎉</div>
              <div className="text-sm font-semibold text-white">Simran's</div>
              <div className="text-sm font-semibold text-white">Birthday</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-4">
          <span className="text-primary">Simran</span>{" "}
          <span className="text-secondary">Mehra</span>
        </h1>
        
        <div className="text-xl lg:text-2xl text-muted-foreground mb-8 space-y-2">
          <p className="flex items-center justify-center gap-2" data-testid="text-date-time">
            <Gift className="w-6 h-6 text-accent" />
            Join us on September 5th, 2024 at 6:00 PM
          </p>
          <p className="flex items-center justify-center gap-2" data-testid="text-venue">
            <MapPin className="w-6 h-6 text-primary" />
            at Celebration Gardens, Delhi
          </p>
        </div>
        
        <Button 
          onClick={scrollToRSVP}
          className="party-card bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          data-testid="button-rsvp-hero"
        >
          <Gift className="w-5 h-5 mr-2" />
          RSVP Now
        </Button>
      </div>
    </header>
  );
}

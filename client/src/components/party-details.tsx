import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, Gift, Music } from "lucide-react";

export default function PartyDetails() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Celebration Details
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="party-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shirt className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4" data-testid="text-dress-code-title">
                Dress Code
              </h3>
              <p className="text-muted-foreground mb-4" data-testid="text-dress-code-description">
                Traditional Indian attire preferred! Come dressed in your most colorful kurtas, 
                sarees, or lehengas. Let's make this celebration as vibrant as Simran's personality.
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-4 h-4 bg-secondary rounded-full"></div>
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="party-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary mb-4" data-testid="text-gift-title">
                Gift Suggestions
              </h3>
              <p className="text-muted-foreground mb-4" data-testid="text-gift-description">
                Your presence is the greatest gift! But if you'd like to bring something, 
                Simran loves books, plants, handmade crafts, or donations to her favorite 
                charity supporting education for underprivileged children.
              </p>
              <Button variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" data-testid="button-view-registry">
                View Registry
              </Button>
            </CardContent>
          </Card>
          
          <Card className="party-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-accent-foreground mb-4" data-testid="text-song-title">
                Song Requests
              </h3>
              <p className="text-muted-foreground mb-4" data-testid="text-song-description">
                Help us create the perfect playlist! We'll have a mix of Bollywood classics, 
                bhajans, and contemporary hits. Send us your favorite songs to make the 
                celebration even more special.
              </p>
              <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-add-songs">
                Add Songs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

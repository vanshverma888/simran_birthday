import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Gift } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-16 lg:py-24 henna-doodle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            The Story of Simran
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="party-card mandala-corner">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  <Star className="w-6 h-6 text-accent mr-3" />
                  Who is Simran?
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-about-simran">
                  Simran is a vibrant soul who brings joy wherever she goes. Born and raised in Delhi, 
                  she has always been the heart of every celebration. Her infectious laughter, 
                  warm hugs, and incredible cooking skills make her everyone's favorite person.
                  This year marks a special milestone in her journey, and we can't wait to celebrate 
                  with all the people who love her dearly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="party-card mandala-corner">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-primary mr-3" />
                  What Makes Her Special?
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-special-qualities">
                  From organizing community festivals to her passion for classical dance, 
                  Simran embodies the spirit of Indian culture. She's a teacher by profession 
                  and a friend to everyone by nature. Her birthday isn't just a celebration 
                  of her life, but a tribute to all the lives she's touched with her kindness 
                  and generosity.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div 
              className="rounded-2xl shadow-2xl w-full h-96 bg-gradient-to-br from-accent via-primary to-secondary flex items-center justify-center"
              data-testid="img-celebration-scene"
            >
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🪔</div>
                <div className="text-2xl font-bold mb-2">Indian Celebration</div>
                <div className="text-lg">Rangoli • Diyas • Marigolds</div>
                <div className="text-4xl mt-4">🌸 ✨ 🎊</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

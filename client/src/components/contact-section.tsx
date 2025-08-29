import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Share2, Heart } from "lucide-react";

export default function ContactSection() {
  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp-section');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            More Questions? Let's Talk!
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="party-card">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <a 
                href="tel:+9717939295" 
                className="text-primary hover:text-secondary transition-colors"
                data-testid="link-phone"
              >
                +91 9717939295
              </a>
            </CardContent>
          </Card>
          
          <Card className="party-card">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <a 
                href="mailto:vanshvermadtu@gmail.com" 
                className="text-primary hover:text-secondary transition-colors"
                data-testid="link-email"
              >
                vanshvermadtu@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="party-card">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Social</h3>
              <div className="flex justify-center space-x-3">
                <a 
                  href="#" 
                  className="text-primary hover:text-secondary transition-colors"
                  data-testid="link-instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-primary hover:text-secondary transition-colors"
                  data-testid="link-whatsapp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.189z"/>
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-6" data-testid="text-closing-message">
            Can't wait to celebrate with you all! 🎉
          </p>
          <Button 
            onClick={scrollToRSVP}
            className="party-card bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            data-testid="button-rsvp-footer"
          >
            <Heart className="w-5 h-5 mr-2" />
            RSVP for the Celebration
          </Button>
        </div>
      </div>
    </section>
  );
}

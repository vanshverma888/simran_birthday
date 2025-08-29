import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How should I RSVP?",
    answer: "You can RSVP through this website at any time by simply clicking the RSVP button and filling out the form. Please RSVP by September 1st to help us with planning."
  },
  {
    question: "Can I bring additional guests?",
    answer: "We'd love to celebrate with everyone! Please mention the number of guests in your RSVP. We're happy to accommodate as much as possible, and we'll confirm your guest count."
  },
  {
    question: "Is the venue accessible for elderly guests?",
    answer: "Yes! Celebration Gardens is fully accessible with ramps, elevators, and comfortable seating areas. We've also arranged for shuttle service from the parking area."
  },
  {
    question: "What if I have food allergies?",
    answer: "Please mention any allergies or dietary restrictions in your RSVP. We'll have a variety of options including vegetarian, vegan, and Jain food, and we can accommodate most special dietary needs."
  }
];

export default function FaqSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            We Have All the Answers
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <Card key={index} className="party-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3 flex items-center" data-testid={`text-question-${index}`}>
                  <HelpCircle className="w-6 h-6 text-accent mr-3" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-answer-${index}`}>
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

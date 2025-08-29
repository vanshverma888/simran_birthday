import HeroSection from "@/components/hero-section";
import StorySection from "@/components/story-section";
import PartyDetails from "@/components/party-details";
import TimelineSection from "@/components/timeline-section";
import RsvpSection from "@/components/rsvp-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="celebration-bg">
      <HeroSection />
      <StorySection />
      <PartyDetails />
      <TimelineSection />
      <RsvpSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}

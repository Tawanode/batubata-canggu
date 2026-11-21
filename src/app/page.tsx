import { HeroSection } from "@/components/home/HeroSection";
import { PropertyIntroSection } from "@/components/home/PropertyIntroSection";
import { RhythmOfBaliSection } from "@/components/home/RhythmOfBaliSection";
import { AccommodationPreviewSection } from "@/components/home/AccommodationPreviewSection";
import { BalineseCraftsmanshipSection } from "@/components/home/BalineseCraftsmanshipSection";
import { CourtyardLivingSection } from "@/components/home/CourtyardLivingSection";
import { NeighbourhoodGuideSection } from "@/components/home/NeighbourhoodGuideSection";
import { GuestReviewsSection } from "@/components/home/GuestReviewsSection";
import { PreFooterCallout } from "@/components/home/PreFooterCallout";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero with Integrated Luxury Bottom Bar */}
      <HeroSection />

      {/* 2. Property Introduction (Welcome to Magic Rum Hussain) */}
      <PropertyIntroSection />

      {/* 3. Rhythm of Wadi Rum Section */}
      <RhythmOfBaliSection />

      {/* 4. Accommodation (Our 50 m² Rooms & Martian Bubble Domes) */}
      <AccommodationPreviewSection />

      {/* 5. 5-Star Bedouin Camp Solitude & Hospitality */}
      <BalineseCraftsmanshipSection />

      {/* 6. Desert Amenities, Outdoor Campfire & Zarb Dinners */}
      <CourtyardLivingSection />

      {/* 7. Wadi Rum Protected Area & Location Guide */}
      <NeighbourhoodGuideSection />

      {/* 8. Verified Guest Sentiment (Rated 9.3/10 Superb) */}
      <GuestReviewsSection />

      {/* 9. Final Invitation & Pre-Footer Callout */}
      <PreFooterCallout />
    </>
  );
}

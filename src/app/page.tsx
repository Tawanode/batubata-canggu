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

      {/* 2. Property Introduction (Welcome to Lavra Luxury Camp) */}
      <PropertyIntroSection />

      {/* 3. Rhythm of Wadi Rum Section */}
      <RhythmOfBaliSection />

      {/* 4. Accommodation (Our rooms) Section */}
      <AccommodationPreviewSection />

      {/* 5. 5-Star Aparthotel Architecture & Heritage */}
      <BalineseCraftsmanshipSection />

      {/* 6. Desert Amenities & Outdoor Fireplace */}
      <CourtyardLivingSection />

      {/* 7. Wadi Rum Protected Area Guide */}
      <NeighbourhoodGuideSection />

      {/* 8. Verified Guest Sentiment */}
      <GuestReviewsSection />

      {/* 9. Final Invitation & Pre-Footer Callout */}
      <PreFooterCallout />
    </>
  );
}

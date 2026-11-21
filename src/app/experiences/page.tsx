import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ExperiencesHeroSection } from "@/components/experiences/ExperiencesHeroSection";
import { SlowCangguLivingSection } from "@/components/experiences/SlowCangguLivingSection";
import { WalkabilityDirectorySection } from "@/components/experiences/WalkabilityDirectorySection";
import { NeighbourhoodRhythmsSection } from "@/components/experiences/NeighbourhoodRhythmsSection";
import { GuestbookQuoteSection } from "@/components/experiences/GuestbookQuoteSection";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Desert Excursions & Jeep Safaris | Magic Rum Hussain Wadi Rum",
  description:
    "Discover guided 4x4 Jeep safaris, sunrise and sunset camel treks, sandboarding, evening campfire stargazing, and punctual village pickups with Hussen at Magic Rum Hussain Wadi Rum.",
};

export default function ExperiencesPage() {
  return (
    <div className="pb-20 bg-[#F7F5F0]">
      
      {/* 1. Destination Luxury Hero Section */}
      <ExperiencesHeroSection />

      {/* 2. The Art of Desert Exploration */}
      <SlowCangguLivingSection />

      {/* 3. The Excursions & Vicinity Directory */}
      <WalkabilityDirectorySection />

      {/* 4. Desert Rhythms & Visual Stories */}
      <NeighbourhoodRhythmsSection />

      {/* 5. Notes from Our Guestbook Quote Section */}
      <GuestbookQuoteSection />

      {/* Final Booking CTA */}
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5E0D8] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#22201E] font-light">
            Stay in the Heart of Wadi Rum
          </h2>
          <p className="text-sm text-[#444748] font-sans-clean max-w-xl mx-auto">
            Book your 50 m² room or Martian bubble dome directly on WhatsApp with Hussen for verified dates, 4x4 Jeep tour bundles, and authentic Zarb dinners.
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C86D44] hover:bg-[#B85D3B] text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
            >
              <span>Check Excursion Dates on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

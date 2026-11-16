import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Waves,
  Utensils,
  Footprints,
  Compass,
  ArrowRight,
  Sparkles,
  Heart,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExperiencesHeroSection } from "@/components/experiences/ExperiencesHeroSection";
import { SlowCangguLivingSection } from "@/components/experiences/SlowCangguLivingSection";
import { WalkabilityDirectorySection } from "@/components/experiences/WalkabilityDirectorySection";
import { NeighbourhoodRhythmsSection } from "@/components/experiences/NeighbourhoodRhythmsSection";
import { GuestbookQuoteSection } from "@/components/experiences/GuestbookQuoteSection";
import { attractionsData } from "@/data/neighbourhood";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Desert Excursions & Protected Area | Lavra Luxury Camp Wadi Rum",
  description:
    "Discover guided 4x4 desert jeep safaris, hiking through Canyon Kakharas, camel treks across red sand dunes, and evening stargazing steps from the Wadi Rum Visitor Center at Lavra Luxury Camp.",
};

export default function ExperiencesPage() {
  const immediate = attractionsData.filter((a) => a.category === "immediate");
  const walking = attractionsData.filter((a) => a.category === "walk");
  const beaches = attractionsData.filter((a) => a.category === "beach");
  const rides = attractionsData.filter((a) => a.category === "ride");

  return (
    <div className="pb-20 bg-[#F7F5F0]">
      
      {/* 1. Destination Luxury Hero Section */}
      <ExperiencesHeroSection />

      {/* 2. The Art of Desert Exploration */}
      <SlowCangguLivingSection />

      {/* 3. The Excursions & Landmarks Directory */}
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
            Book your suite directly on WhatsApp for verified dates, guided jeep tours, and the guaranteed lowest direct rate.
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


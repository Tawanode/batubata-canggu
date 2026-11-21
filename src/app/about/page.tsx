import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutOriginsSection } from "@/components/about/AboutOriginsSection";
import { TriHitaKaranaSection } from "@/components/about/TriHitaKaranaSection";
import { FamilyGatesQuoteSection } from "@/components/about/FamilyGatesQuoteSection";
import { ConsciousLivingSection } from "@/components/about/ConsciousLivingSection";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Our Camp & Family Host | Magic Rum Hussain Wadi Rum",
  description:
    "Discover Magic Rum Hussain (Magic Rum Luxury Hussen): a peaceful 5-star Bedouin camp and bubble dome glamping near Ad Disah in Wadi Rum, Jordan. Hosted by Hussen Al-Zawaideh and his family.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 bg-[#F7F5F0]">

      {/* 1. Destination Luxury Hero Section */}
      <AboutHeroSection />

      {/* 2. Chapter I: Welcome to Magic Rum Hussain */}
      <AboutOriginsSection />

      {/* 3. Bedouin Hospitality & Modern Luxury */}
      <TriHitaKaranaSection />

      {/* 4. Desert Sanctuary Quote Banner */}
      <FamilyGatesQuoteSection />

      {/* 5. Camp Amenities & Bedouin Tradition */}
      <ConsciousLivingSection />

      {/* Setting & Sanctuary: Desert Rest & Climate Control */}
      <section className="py-20 bg-[#FAF9F6] border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Desert Rest & Tranquility"
                scriptAccent="peaceful sleep"
                title="50 m² Glamping Comfort in Wadi Rum"
                subtitle="How our thoughtful Martian bubble domes and rooms provide restful sleep under clear starry skies."
              />

              <div className="space-y-4 text-sm text-[#444748] font-sans-clean leading-relaxed">
                <p>
                  Positioned in a quiet pocket of the Wadi Rum Protected Area along Wadi Rum Road near Ad Disah, Magic Rum Hussain offers serene, restorative rest far from crowded tourist tracks.
                </p>
                <p>
                  All our 50 m² units feature cozy indoor fireplaces, whisper-quiet air conditioning, reliable heating, and soundproofing. After an exhilarating day exploring red sand dunes and ancient rock bridges on a 4x4 Jeep safari, retreat to your private mountain-view terrace, enjoy a hot walk-in shower, and join the family around the evening campfire for Bedouin tea and slow-cooked Zarb.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-sans-clean text-[#444748]">
                <strong className="text-[#22201E] uppercase tracking-wider block mb-1">
                  Commitment to 5-Star Cleanliness &amp; Comfort:
                </strong>
                Every unit includes a wood-burning fireplace, climate AC and heating, soundproofing, private en-suite bathroom with walk-in shower and hot water, coffee machine, electric kettle, and free high-speed Wi-Fi (rated 8.8/10).
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[460px] border border-[#E5E0D8] shadow-xl image-zoom-container">
                <Image
                  src="/images/about/peaceful-sanctuary.jpg"
                  alt="Tranquil mountain views and peaceful desert atmosphere at Magic Rum Hussain in Wadi Rum Jordan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#F7F5F0] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#22201E] font-light">
            Experience Magic Rum Hussain
          </h2>
          <p className="text-sm text-[#444748] font-sans-clean">
            Connect directly with Hussen on WhatsApp to confirm bubble dome availability, village pickup timing, and custom tour packages.
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C86D44] hover:bg-[#B85D3B] text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
            >
              <span>Connect with Hussen on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

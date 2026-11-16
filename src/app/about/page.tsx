import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, BrickWall, ShieldCheck, ArrowRight, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutOriginsSection } from "@/components/about/AboutOriginsSection";
import { TriHitaKaranaSection } from "@/components/about/TriHitaKaranaSection";
import { FamilyGatesQuoteSection } from "@/components/about/FamilyGatesQuoteSection";
import { ConsciousLivingSection } from "@/components/about/ConsciousLivingSection";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Lavra Luxury Camp | 5-Star Desert Camp & Aparthotel",
  description:
    "Discover Lavra Luxury Camp: a 5-star desert camp & aparthotel located in the heart of the Wadi Rum Protected Area in Jordan. 30 luxury suites, central fireplace, international dining, and guided jeep tours.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 bg-[#F7F5F0]">

      {/* 1. Destination Luxury Hero Section */}
      <AboutHeroSection />

      {/* 2. Chapter I: The Soul of Lavra */}
      <AboutOriginsSection />

      {/* 3. Bedouin Hospitality & Modern Luxury */}
      <TriHitaKaranaSection />

      {/* 4. Desert Sanctuary Quote Banner */}
      <FamilyGatesQuoteSection />

      {/* 5. Conscious Expedition Living */}
      <ConsciousLivingSection />

      {/* Setting & Sanctuary: Desert Rest & Climate Control */}
      <section className="py-20 bg-[#FAF9F6] border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Desert Rest & Tranquility"
                scriptAccent="peaceful sleep"
                title="Sound-Insulated Comfort in Wadi Rum"
                subtitle="How our thoughtful architecture provides restful sleep under clear starry skies."
              />

              <div className="space-y-4 text-sm text-[#444748] font-sans-clean leading-relaxed">
                <p>
                  Positioned directly within the dramatic mountains of the Wadi Rum Protected Area on Ram Street, Lavra Luxury Camp offers serene, restorative rest far from urban clamor.
                </p>
                <p>
                  All 30 guestrooms and ground-floor apartments feature sound-insulated walls and whisper-quiet climate-controlled air conditioning and heating. After an exhilarating day traversing red dunes and ancient canyons, retreat into a private sanctuary with deep bathtubs, plush bathrobes, and unobstructed mountain vistas.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-sans-clean text-[#444748]">
                <strong className="text-[#22201E] uppercase tracking-wider block mb-1">
                  Commitment to 5-Star Cleanliness &amp; Comfort:
                </strong>
                Rooms feature climate-controlled AC and heating, sound-insulated walls, premium bedding with nightly turndown service, in-room safes, and ensuite bathrooms with walk-in showers or deep bathtubs.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[460px] border border-[#E5E0D8] shadow-xl image-zoom-container">
                <Image
                  src="/images/about/peaceful-sanctuary.jpg"
                  alt="Tranquil mountain views and peaceful desert atmosphere at Lavra Luxury Camp"
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
            Experience Lavra Luxury Camp
          </h2>
          <p className="text-sm text-[#444748] font-sans-clean">
            Reserve your dates directly on WhatsApp or online for immediate confirmation and excursion planning.
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C86D44] hover:bg-[#B85D3B] text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
            >
              <span>Connect with Host on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}


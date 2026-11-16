import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { RoomShowcaseSection } from "@/components/accommodation/RoomShowcaseSection";
import { RoomTwinSection } from "@/components/accommodation/RoomTwinSection";
import { TropicalRestQuoteSection } from "@/components/accommodation/TropicalRestQuoteSection";

export const metadata: Metadata = {
  title: "Suites & Accommodation | Lavra Luxury Camp Wadi Rum",
  description:
    "Explore our 30 distinct climate-controlled suites and ground-floor apartments with sound-insulated walls, private mountain-view balconies, and luxury ensuite bathrooms at Lavra Luxury Camp Wadi Rum.",
};

export default function AccommodationPage() {
  return (
    <div className="pt-16 sm:pt-20 pb-20 bg-[#FAF9F6]">

      {/* 1. Editorial Luxury Header & Hero Spread */}
      <section className="pt-2 sm:pt-4 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          {/* Editorial Title & Descriptive Intro Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-2 sm:pt-4 pb-10 sm:pb-12 items-start">
            {/* Left Headline */}
            <div className="lg:col-span-8 space-y-2">
              <span className="text-[10px] sm:text-[11px] font-sans-clean font-semibold tracking-[0.25em] uppercase text-[#C86D44] block">
                5-STAR APARTHOTEL · WADI RUM PROTECTED AREA
              </span>
              <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[62px] text-[#22201E] font-normal leading-[1.1] tracking-tight">
                Suites &amp; Apartments in Wadi Rum
              </h1>
            </div>

            {/* Right Descriptive Paragraph & Organic Notes */}
            <div className="lg:col-span-4 space-y-4 pt-2">

            </div>
          </div>

          {/* Full-Width Panoramic Courtyard Villa Visual */}
          <div className="relative aspect-[16/9] w-full shadow-lg image-zoom-container group">
            <Image
              src="/images/hero/accommodation-compound-hero.jpg"
              alt="Lavra Luxury Camp 5-star desert aparthotel suites framed by dramatic sandstone mountains in Wadi Rum Jordan"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors" />

            {/* Lower-Left Atmospheric Badge */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/35 backdrop-blur-md border border-white/20 p-4 sm:p-5 text-white max-w-sm">
              <p className="font-serif-editorial italic text-base sm:text-xl text-white/95 leading-snug">
                Desert sanctuary beneath the sandstone cliffs of Wadi Rum.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Room 1: Superior Deluxe Double or Twin Room */}
      <RoomShowcaseSection
        eyebrow="40 M² PREMIER RESIDENCE · BALCONY"
        title="Superior Deluxe Double or Twin Room"
        sizeViewText="40 m² · Private Mountain Balcony · Sound-Insulated AC Luxury"
        priceText="JOD 95"
        priceNote="/ night net"
        images={{
          main: {
            src: "/images/rooms/king-bed-main.jpg",
            alt: "Superior Deluxe room suite at Lavra Luxury Camp Wadi Rum",
            label: "BEDROOM & MOUNTAIN WORKSPACE",
          },
          veranda: {
            src: "/images/rooms/veranda-patio.jpg",
            alt: "Private balcony outlook overlooking Wadi Rum sandstone cliffs",
            label: "PRIVATE MOUNTAIN BALCONY",
          },
          bathroom: {
            src: "/images/rooms/ensuite-bathroom.jpg",
            alt: "Ensuite luxury bathroom with walk-in rain shower, deep tub, bidet and bathrobes",
            label: "ENSUITE BATHROOM & SPA TUB",
          },
        }}
        descriptionParagraphs={[
          "Our premier 40 m² residence combines contemporary city comforts with the silent majesty of Wadi Rum. Equipped with climate-controlled whisper air conditioning and winter heating, premium bedding with a nightly turndown service, and sound-insulated walls.",
          "Step onto your private furnished balcony or patio to take in unobstructed sandstone mountain vistas, and rejuvenate in an upscale ensuite bathroom featuring a walk-in rain shower, deep soaking tub, bidet, plush bathrobes, and complimentary toiletries.",
        ]}
        specifications={[
          {
            label: "BEDDING",
            detail: "2 Single Beds or 1 Queen-size Bed with orthopedic mattress & luxury linens",
          },
          {
            label: "OCCUPANCY",
            detail: "Maximum 2 Adults (Spacious 40 m² layout for extended stays & luxury relaxation)",
          },
          {
            label: "OUTDOOR SPACE",
            detail: "Private furnished balcony/terrace directly facing dramatic sandstone cliffs",
          },
          {
            label: "BATHROOM",
            detail: "Private ensuite, walk-in rain shower, deep bathtub, bidet, bathrobes & slippers",
          },
          {
            label: "INCLUSIONS",
            detail: "Complimentary international breakfast buffet, high-speed Wi-Fi & daily housekeeping",
          },
        ]}
      />

      {/* 3. Room 2: Superior Double or Twin Room, Balcony, Mountain View */}
      <RoomTwinSection
        eyebrow="PANORAMIC BALCONY RESIDENCE · MOUNTAIN VIEW"
        title="Superior Double or Twin Room, Balcony, Mountain View"
        sizeViewText="32 m² · Direct Mountain Balcony · Steps to Central Camp Fireplace"
        priceText="JOD 80"
        priceNote="/ night net"
        imageSrc="/images/rooms/twin-canopy-bed.jpg"
        imageAlt="Superior Double or Twin Room with private mountain balcony at Lavra Luxury Camp Wadi Rum"
        imageBadgeText="PANORAMIC MOUNTAIN BALCONY"
      />

      {/* 4. The Art of Desert Tranquility Quote Banner */}
      <TropicalRestQuoteSection />

      {/* 5. Practical Information & Clear 5-Star Camp Notice */}
      <section className="py-16 border-t border-[#E5E0D8]/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#E5E0D8] space-y-3">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#C86D44] shrink-0 mt-0.5" />
              <div className="text-xs text-[#444748] font-sans-clean leading-relaxed">
                <strong className="text-[#22201E] uppercase tracking-wider block mb-1">
                  5-Star Aparthotel Notice &amp; Arrival:
                </strong>
                Lavra Luxury Camp is a 5-star desert aparthotel dedicated to luxury comfort, tranquil nights, and authentic Bedouin expeditions. All 30 rooms feature sound insulation, climate-controlled AC/heating, and in-room safes. Located steps from the Wadi Rum Visitor Center with complimentary valet parking and international multi-cuisine dining. Check-in is from 8:00 AM to 10:30 PM; check-out is from 7:00 AM to 11:30 AM.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

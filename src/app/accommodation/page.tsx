import type { Metadata } from "next";
import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { RoomShowcaseSection } from "@/components/accommodation/RoomShowcaseSection";
import { RoomTwinSection } from "@/components/accommodation/RoomTwinSection";
import { TropicalRestQuoteSection } from "@/components/accommodation/TropicalRestQuoteSection";
import { roomsData } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Rooms & Panoramic Bubble Domes | Magic Rum Hussain Wadi Rum",
  description:
    "Explore our 50 m² air-conditioned rooms and panoramic Martian bubble domes with fireplaces, reliable heating, mountain-view terraces, and walk-in showers at Magic Rum Hussain in Wadi Rum, Jordan.",
};

export default function AccommodationPage() {
  const kingRoom = roomsData[0]; // Superior King Room
  const familyRoom = roomsData[4]; // Superior Family Room

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
                5-STAR BEDOUIN GLAMPING · 50 M² UNITS &amp; BUBBLE DOMES
              </span>
              <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[62px] text-[#22201E] font-normal leading-[1.1] tracking-tight">
                Rooms &amp; Bubble Domes in Wadi Rum
              </h1>
            </div>

            {/* Right Descriptive Paragraph */}
            <div className="lg:col-span-4 space-y-4 pt-2">

            </div>
          </div>

          {/* Full-Width Panoramic Visual */}
          <div className="relative aspect-[16/9] w-full shadow-lg image-zoom-container group">
            <Image
              src="/images/hero/accommodation-compound-hero.jpg"
              alt="Magic Rum Hussain 5-star Bedouin desert camp and panoramic Martian bubble domes framed by sandstone mountains in Wadi Rum Jordan"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors" />

            {/* Lower-Left Atmospheric Badge */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/45 backdrop-blur-md border border-white/20 p-4 sm:p-5 text-white max-w-sm">
              <p className="font-serif-editorial italic text-base sm:text-xl text-white/95 leading-snug">
                Sleep beneath the stars in panoramic Martian bubble domes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Room 1: Superior King Room (Featured Showcase) */}
      <RoomShowcaseSection
        eyebrow="50 M² MARTIAN BUBBLE DOME · PANORAMIC TERRACE"
        title="Superior King Room"
        sizeViewText="50 m² · Mountain & Garden Terrace · Fireplace & Climate AC"
        priceText="JOD 95"
        priceNote="/ night net"
        images={{
          main: {
            src: "/images/rooms/king-bed-main.jpg",
            alt: "Superior King Room panoramic bubble dome at Magic Rum Hussain Wadi Rum",
            label: "PANORAMIC BUBBLE DOME & FIREPLACE",
          },
          veranda: {
            src: "/images/rooms/veranda-patio.jpg",
            alt: "Private terrace overlooking sandstone desert cliffs",
            label: "PRIVATE MOUNTAIN TERRACE",
          },
          bathroom: {
            src: "/images/rooms/ensuite-bathroom.jpg",
            alt: "Modern private bathroom with walk-in shower and luxury toiletries",
            label: "EN-SUITE WALK-IN SHOWER",
          },
        }}
        descriptionParagraphs={[
          "Our 50 m² Superior King residence features panoramic geodesic Martian bubble dome views, a cozy indoor fireplace, whisper-quiet air conditioning, and winter heating. Enjoy your choice of 1 large double bed or 2 single beds dressed in premium linens.",
          "Step onto your private terrace with serene garden and mountain views, and refresh in your private en-suite bathroom featuring a modern walk-in shower, plush bathrobes, and complimentary toiletries.",
        ]}
        specifications={[
          {
            label: "SURFACE AREA",
            detail: "50 m² (approx. 538 sq. ft.) detached ground-floor unit (wheelchair accessible)",
          },
          {
            label: "BEDDING CHOICE",
            detail: "1 Large Double Bed or 2 Single Beds with orthopedic mattress & luxury linens",
          },
          {
            label: "COMFORT & CLIMATE",
            detail: "Wood-burning fireplace, whisper AC, reliable winter heating & soundproof walls",
          },
          {
            label: "OUTDOOR LIVING",
            detail: "Private terrace/balcony with outdoor seating facing sandstone mountains & landmarks",
          },
          {
            label: "BATHROOM & SPA",
            detail: "Private en-suite bathroom, walk-in rain shower, hot water, bathrobes & slippers",
          },
          {
            label: "CAMP INCLUSIONS",
            detail: "Exceptional buffet breakfast, superb free Wi-Fi (8.8/10), EV charging & 24h desk",
          },
        ]}
      />

      {/* 3. Room 2: Superior Family Room (Up to 5 Guests) */}
      <RoomTwinSection
        eyebrow="50 M² FAMILY RESIDENCE · SLEEPS UP TO 5"
        title="Superior Family Room"
        sizeViewText="50 m² · Private Mountain-View Terrace · Fireplace & AC"
        priceText="JOD 150"
        priceNote="/ night net"
        imageSrc="/images/rooms/room-deluxe-angle.jpg"
        imageAlt="Superior Family Room 50 m² with private mountain terrace at Magic Rum Hussain Wadi Rum"
        imageBadgeText="50 M² FAMILY GLAMPING SUITE"
      />

      {/* 4. The Art of Desert Tranquility Quote Banner */}
      <TropicalRestQuoteSection />

      {/* 5. All Categories Summary Grid */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
          <div>
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-semibold tracking-[0.25em] uppercase text-[#C86D44] block mb-2">
              ALL 50 M² ACCOMMODATION CATEGORIES
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#22201E] font-normal tracking-tight">
              Choose Your Desert Residence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomsData.map((room) => (
              <div key={room.id} className="p-6 bg-[#FAF9F6] border border-[#E5E0D8] space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#7B8B76] font-sans-clean block">
                    50 M² • {room.capacity.split("(")[0].trim()}
                  </span>
                  <h3 className="font-serif-editorial text-2xl text-[#22201E] font-normal">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#444748] font-sans-clean leading-relaxed font-light">
                    {room.tagline}
                  </p>
                  <div className="pt-2 text-xs text-[#22201E] font-sans-clean font-medium">
                    Bedding: {room.bedType}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E0D8]/60 flex items-center justify-between">
                  <span className="text-xs font-sans-clean font-semibold text-[#C86D44]">
                    From JOD {room.startingPriceIdr} / night
                  </span>
                  <a
                    href={`https://wa.me/962776838471?text=${encodeURIComponent(`Hello Hussen! I would like to inquire about booking the ${room.name} at Magic Rum Hussain.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-wider font-semibold text-[#22201E] hover:text-[#C86D44] border-b border-[#22201E] pb-0.5"
                  >
                    Reserve →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Practical Information & Clear Guest Notice */}
      <section className="py-16 border-t border-[#E5E0D8]/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#E5E0D8] space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#C86D44] shrink-0 mt-0.5" />
              <div className="text-xs text-[#444748] font-sans-clean leading-relaxed space-y-2">
                <strong className="text-[#22201E] uppercase tracking-wider block">
                  Helpful Guest Notes &amp; Policies:
                </strong>
                <p>
                  • <strong>Check-In &amp; Check-Out:</strong> 24-hour check-in and check-out are available; no age restrictions; pets are welcome at no extra charge.
                </p>
                <p>
                  • <strong>Advance WhatsApp Confirmation:</strong> Please message Hussen on WhatsApp (+962 7 7683 8471) in advance to confirm your exact tent type (standard tent vs. Martian bubble dome), your arrival timing at Wadi Rum Village for the punctual 4x4 pickup, and your excursion/meal bundles.
                </p>
                <p>
                  • <strong>Wadi Rum Protected Area Entry:</strong> Entry to the protected area requires a separate Jordan visitor fee (payable at the Visitor Center) or a valid Jordan Pass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

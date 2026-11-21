import Image from "next/image";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

interface RoomTwinSectionProps {
  eyebrow?: string;
  title?: string;
  sizeViewText?: string;
  priceText?: string;
  priceNote?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageBadgeText?: string;
}

export function RoomTwinSection({
  eyebrow = "50 M² FAMILY RESIDENCE · SLEEPS UP TO 5",
  title = "Superior Family Room",
  priceText = "JOD 150",
  priceNote = "/ night net",
  imageSrc = "/images/rooms/room-deluxe-angle.jpg",
  imageAlt = "Superior Family Room 50 m² with private mountain terrace at Magic Rum Hussain Wadi Rum",
  imageBadgeText = "50 M² FAMILY GLAMPING SUITE",
}: RoomTwinSectionProps) {
  return (
    <section className="py-16 sm:py-20 border-t border-[#E5E0D8]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10 sm:space-y-12">

        {/* Header Row: Room Title & Pricing / Meta */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5E0D8]/60 pb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.22em] uppercase text-[#C86D44] block mb-2">
              {eyebrow}
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#22201E] font-normal tracking-tight">
              {title}
            </h2>
          </div>

          <div className="text-left md:text-right space-y-0.5">
            <span className="font-serif-editorial text-2xl sm:text-3xl text-[#22201E]">
              {priceText}
            </span>
            <span className="text-xs text-[#747878] font-sans-clean ml-1">
              {priceNote}
            </span>
          </div>
        </div>

        {/* Two Column Content Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Descriptive Story, Specs List, CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.8] font-normal">
              <p>
                Our 50 m² Superior Family Room provides ample space for up to 5 guests with a choice of 5 single beds or 3 singles and 1 large double bed. Completely detached and ground-floor accessible, it includes an indoor wood-burning fireplace, whisper AC, reliable winter heating, and soundproofing.
              </p>
              <p className="hidden md:block">
                Step out onto your private mountain-view terrace to contemplate the peaceful desert amphitheater, sip hot sage tea as the evening stars emerge, or recharge after an exciting 4x4 Jeep tour across Wadi Rum.
              </p>
            </div>

            {/* Compact Specifications Grid */}
            <div className="bg-[#F7F5F0]/80 p-5 border border-[#E5E0D8]/60 space-y-2.5 text-xs font-sans-clean">
              <div className="flex items-baseline justify-between border-b border-[#E5E0D8]/40 pb-2">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#747878] font-medium">
                  CONFIGURATION
                </span>
                <span className="text-[#22201E] font-normal">Up to 5 Guests (Flexible Bedding)</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[#E5E0D8]/40 pb-2">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#747878] font-medium">
                  SURFACE AREA
                </span>
                <span className="text-[#22201E] font-normal">50 m² + Mountain Terrace</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[#E5E0D8]/40 pb-2">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#747878] font-medium">
                  FIREPLACE &amp; CLIMATE
                </span>
                <span className="text-[#22201E] font-normal">Indoor Fireplace, AC &amp; Heating</span>
              </div>
              <div className="flex items-baseline justify-between pt-0.5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#747878] font-medium">
                  ACCESSIBILITY
                </span>
                <span className="text-[#22201E] font-normal">Ground-Floor &amp; Wheelchair Accessible</span>
              </div>
            </div>

            {/* Inquire CTA Button */}
            <div className="pt-2">
              <a
                href={generateWhatsAppUrl({
                  name: "Guest",
                  roomType: title,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#22201E] hover:bg-[#22201E] hover:text-white text-[#22201E] px-7 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                <span>INQUIRE AVAILABILITY →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Wide Photo */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] w-full shadow-sm image-zoom-container group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

              {/* Lower-Left Label Badge */}
              <div className="absolute bottom-4 left-4 bg-black/85 text-white px-3.5 py-1.5 text-[10px] font-sans-clean font-medium tracking-[0.18em] uppercase">
                {imageBadgeText}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

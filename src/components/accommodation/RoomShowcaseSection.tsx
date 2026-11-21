import Image from "next/image";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

interface RoomShowcaseSectionProps {
  eyebrow?: string;
  title: string;
  sizeViewText?: string;
  priceText?: string;
  priceNote?: string;
  images: {
    main: { src: string; alt: string; label: string };
    veranda: { src: string; alt: string; label: string };
    bathroom: { src: string; alt: string; label: string };
  };
  descriptionParagraphs: string[];
  specifications: { label: string; detail: string }[];
}

export function RoomShowcaseSection({
  eyebrow = "50 M² MARTIAN BUBBLE DOME · PANORAMIC TERRACE",
  title = "Superior King Room",
  priceText = "JOD 95",
  priceNote = "/ night net",
  images,
  descriptionParagraphs,
  specifications,
}: RoomShowcaseSectionProps) {
  return (
    <section className="py-12 sm:py-16 border-t border-[#E5E0D8]/80">
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

        {/* 3-Photo Editorial Grid Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">

          {/* Main Large Photo (7 cols) */}
          <div className="md:col-span-7 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[500px] shadow-sm image-zoom-container group">
            <Image
              src={images.main.src}
              alt={images.main.alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

            <div className="absolute bottom-4 left-4 bg-black/85 text-white px-3.5 py-1.5 text-[10px] font-sans-clean font-medium tracking-[0.18em] uppercase">
              {images.main.label}
            </div>
          </div>

          {/* Right Column: Stacked Veranda & Bathroom Photos (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 lg:gap-6 justify-between">

            {/* Top Right: Private Veranda Outlook */}
            <div className="relative h-[220px] sm:h-[240px] shadow-sm image-zoom-container group">
              <Image
                src={images.veranda.src}
                alt={images.veranda.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

              <div className="absolute bottom-4 left-4 bg-black/85 text-white px-3.5 py-1.5 text-[10px] font-sans-clean font-medium tracking-[0.18em] uppercase">
                {images.veranda.label}
              </div>
            </div>

            {/* Bottom Right: Ensuite Walk-in Shower */}
            <div className="relative h-[220px] sm:h-[240px] shadow-sm image-zoom-container group">
              <Image
                src={images.bathroom.src}
                alt={images.bathroom.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

              <div className="absolute bottom-4 left-4 bg-black/85 text-white px-3.5 py-1.5 text-[10px] font-sans-clean font-medium tracking-[0.18em] uppercase">
                {images.bathroom.label}
              </div>
            </div>

          </div>

        </div>

        {/* Lower Spread: Two Column Editorial Story + Specifications Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-4 items-start">

          {/* Left Column: Storytelling & Direct Booking (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.8] font-normal">
              {descriptionParagraphs.map((para, i) => (
                <p key={i} className={i === 1 ? "hidden md:block" : ""}>
                  {para}
                </p>
              ))}
            </div>

            {/* Reserve CTA + Footnote */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={generateWhatsAppUrl({
                  name: "Guest",
                  roomType: title,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#22201E] hover:bg-[#22201E] hover:text-white text-[#22201E] px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                <span>RESERVE THIS ROOM →</span>
              </a>

              <span className="text-[11px] text-[#747878] font-sans-clean">
                Includes complimentary buffet breakfast &amp; Wi-Fi.
              </span>
            </div>
          </div>

          {/* Right Column: Room Specifications & Amenities Table (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7F5F0]/80 p-6 sm:p-8 border border-[#E5E0D8]/60 space-y-5">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.22em] uppercase text-[#747878] block border-b border-[#E5E0D8] pb-3">
              ROOM SPECIFICATIONS &amp; GLAMPING AMENITIES
            </span>

            <div className="space-y-4 text-xs sm:text-[13px] font-sans-clean">
              {specifications.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-2 border-b border-[#E5E0D8]/40 last:border-b-0"
                >
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#747878] font-medium">
                    {item.label}
                  </span>
                  <span className="sm:col-span-8 text-[#22201E] font-normal leading-relaxed">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

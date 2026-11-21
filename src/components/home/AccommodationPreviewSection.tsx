import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AccommodationPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Editorial Room Details & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block mb-3">
                50 M² SUITES &amp; MARTIAN BUBBLE DOMES
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#22201E] tracking-tight leading-[1.12]">
                Our accommodation
              </h2>
            </div>

            <p className="text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-relaxed font-normal max-w-md">
              Every unit at Magic Rum Hussain spans 50 m² (approx. 538 sq. ft.) of detached, ground-floor comfort. Designed with wheelchair accessibility, cozy fireplaces, reliable heating, whisper AC, soundproofing, and private mountain-view terraces.
            </p>

            {/* Clean bullet features list */}
            <ul className="space-y-3 pt-2 text-xs sm:text-[13px] text-[#444748] font-sans-clean">
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>Spacious 50 m² Detached Units &amp; Panoramic Geodesic Bubble Domes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>Private Terrace or Patio Framing Sandstone Mountain &amp; Landmark Views</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>In-Room Wood Fireplace, Climate AC, Reliable Heating &amp; Soundproofing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>Private En-Suite Bathroom with Walk-In Shower, Hot Water &amp; Toiletries</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>Superb Free Wi-Fi (8.8/10), Coffee Machine &amp; Exceptional Breakfast Buffet</span>
              </li>
            </ul>

            {/* View Accommodation Link */}
            <div className="pt-4">
              <Link
                href="/accommodation"
                className="inline-flex items-center gap-2 text-[11px] font-sans-clean font-medium tracking-[0.2em] uppercase text-[#22201E] hover:text-[#C86D44] transition-colors border-b border-[#22201E] pb-0.5"
              >
                <span>EXPLORE ALL 50 M² ROOMS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Room Image with Floating Tag */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] w-full shadow-lg image-zoom-container group">
              <Image
                src="/images/rooms/king-bed-main.jpg"
                alt="Superior King Room panoramic bubble dome with mountain view terrace at Magic Rum Hussain Wadi Rum"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

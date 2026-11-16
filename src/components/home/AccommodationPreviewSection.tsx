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
                ACCOMMODATION &amp; APARTHOTEL
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#22201E] tracking-tight leading-[1.12]">
                Our suites
              </h2>
            </div>

            <p className="text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-relaxed font-normal max-w-md">
              All 30 guestrooms and ground-floor apartments balance rugged wilderness exploration with 5-star city luxury. Featuring climate-controlled air conditioning, sound-insulated walls, and private patios framing direct mountain views.
            </p>

            {/* Clean bullet features list */}
            <ul className="space-y-3 pt-2 text-xs sm:text-[13px] text-[#444748] font-sans-clean">
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>30 Climate-Controlled Suites &amp; Ground-Floor Apartments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>Private Balconies or Terraces with Direct Mountain Views</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>Ensuite Bathrooms with Walk-In Showers, Deep Tubs, Bidets &amp; Bathrobes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>Sound-Insulated Walls, Digital In-Room Safe &amp; Nightly Turndown</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#22201E] text-base leading-none select-none">•</span>
                <span>High-Speed Free Wi-Fi &amp; Complimentary Daily Breakfast Buffet</span>
              </li>
            </ul>

            {/* View Accommodation Link */}
            <div className="pt-4">
              <Link
                href="/accommodation"
                className="inline-flex items-center gap-2 text-[11px] font-sans-clean font-medium tracking-[0.2em] uppercase text-[#22201E] hover:text-[#C86D44] transition-colors border-b border-[#22201E] pb-0.5"
              >
                <span>VIEW ALL SUITES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Room Image with Floating Tag */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] w-full shadow-lg image-zoom-container group">
              <Image
                src="/images/rooms/king-bed-main.jpg"
                alt="Superior Deluxe room suite at Lavra Luxury Camp Wadi Rum opening onto mountain view balcony"
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

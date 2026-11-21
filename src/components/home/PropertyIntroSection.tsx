import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PropertyIntroSection() {
  return (
    <section id="explore" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Asymmetrical 2-Column Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Portrait architectural photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full shadow-lg image-zoom-container group">
              <Image
                src="/images/architecture/discover-batu-bata-ai.jpg"
                alt="Exterior view of Magic Rum Hussain Bedouin desert camp and Martian bubble domes set against sandstone mountains in Wadi Rum Jordan"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
            </div>
          </div>

          {/* Right Column: Grounded Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div>
              <span className="text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block mb-3">
                5-STAR BEDOUIN DESERT RETREAT
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#22201E] leading-[1.12] tracking-tight">
                Welcome to
                <br />
                Magic Rum Hussain
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-[13px] text-[#444748] leading-[1.8] font-sans-clean font-normal max-w-xl">
              <p>
                Managed by local host Hussen Al-Zawaideh and his family, Magic Rum Hussain (Magic Rum Luxury Hussen) is a peaceful, mid-sized desert camp nestled a few kilometres inside the Wadi Rum desert near Ad Disah. Designed for solo travelers, couples, and families alike, our camp blends authentic Bedouin warmth with modern comforts—offering spacious 50 m² air-conditioned rooms and panoramic Martian bubble domes with reliable heating, hot water, and private mountain-view terraces.
              </p>
              <p className="hidden md:block">
                From punctual 4x4 pickups in Wadi Rum Village to slow-cooked traditional Zarb dinners around the campfire, our team ensures every detail of your desert stay feels like home.
              </p>
            </div>

            {/* Bottom inline anchors + CTA */}
            <div className="pt-6 border-t border-[#E5E0D8]/60 flex flex-wrap items-center justify-between gap-4 text-[11px] font-sans-clean tracking-[0.18em] uppercase text-[#747878]">
              <div className="flex items-center gap-6 sm:gap-8">
                <span className="hover:text-[#22201E] cursor-pointer transition-colors">GLAMPING</span>
                <Link href="/accommodation" className="hover:text-[#22201E] transition-colors">
                  OUR ROOMS
                </Link>
                <Link href="/experiences" className="hover:text-[#22201E] transition-colors">
                  JEEP TOURS
                </Link>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-[#22201E] hover:text-[#C86D44] transition-colors border-b border-[#22201E] pb-0.5 tracking-[0.16em]"
              >
                <span>EXPLORE OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

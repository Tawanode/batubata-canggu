import Image from "next/image";
import Link from "next/link";

interface ExperiencesHeroSectionProps {
  onExploreClick?: () => void;
}

export function ExperiencesHeroSection({ onExploreClick }: ExperiencesHeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#1B1917] text-white">
      {/* Background Desert Sunset Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/experiences-wadi-rum-hero.jpg"
          alt="Sunset over Wadi Rum Protected Area with red sand dunes, sandstone cliffs, and 4x4 desert safari expeditions at Magic Rum Hussain"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        {/* Subtle top-down linear gradient for navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

        {/* Bottom-up gradient for text readability while keeping the desert panorama vibrant */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Top Spacer for transparent fixed navbar */}
      <div className="h-32 sm:h-40" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pb-28 sm:pb-24">
        <div className="max-w-2xl space-y-5">
          {/* Eyebrow */}
          <span className="text-[10.5px] font-sans-clean font-semibold tracking-[0.28em] uppercase text-[#EBDDD8] block">
            DESERT EXPEDITIONS · WADI RUM PROTECTED AREA
          </span>

          {/* Headline */}
          <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-[68px] text-white font-normal leading-[1.08] tracking-tight max-w-xl">
            In the Heart of Wadi Rum
          </h1>



          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <Link
              href="#walkability-directory"
              className="px-6 sm:px-7 py-3 bg-white text-[#22201E] text-[11px] font-sans-clean font-medium tracking-[0.2em] uppercase hover:bg-[#F7F5F0] transition-colors"
            >
              EXPLORE EXCURSIONS DIRECTORY
            </Link>
            <Link
              href="#activities"
              className="px-6 sm:px-7 py-3 bg-transparent text-white border border-white/60 text-[11px] font-sans-clean font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-colors"
            >
              DESERT ACTIVITIES
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Sticky-style Feature Bar */}
      <div className="hidden md:block relative z-10 w-full border-t border-white/10 bg-[#0C0B0A]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 text-[9.5px] sm:text-[10.5px] xl:text-[11px] font-sans-clean font-medium uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white/85 mx-auto">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D44] shrink-0" />
              <span className="whitespace-nowrap">4X4 JEEP SAFARIS &amp; CAMEL TREKS</span>
            </div>

            <span className="text-white/25 select-none font-light shrink-0">|</span>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D44] shrink-0" />
              <span className="whitespace-nowrap">600 M TO HASHIM CAFETERIA</span>
            </div>

            <span className="text-white/25 select-none font-light shrink-0">|</span>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D44] shrink-0" />
              <span className="whitespace-nowrap">4.9 KM TO AL-DISAH TRAIN STATION</span>
            </div>

            <span className="text-white/25 select-none font-light shrink-0">|</span>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D44] shrink-0" />
              <span className="whitespace-nowrap">FREE PARKING &amp; EV CHARGING STATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

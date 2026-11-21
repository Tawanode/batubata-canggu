import Image from "next/image";
import Link from "next/link";

export function BalineseCraftsmanshipSection() {
  return (
    <section className="bg-[#4E4542] text-[#F7F5F0] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] items-stretch">
        
        {/* Left Column: Campfire & Night Desert Photo */}
        <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[560px] lg:min-h-full">
          <Image
            src="/images/architecture/temple-offering.jpg"
            alt="Magic Rum Hussain outdoor campfire and Bedouin seating under the starry night sky of Wadi Rum Jordan"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Column: Editorial Desert Heritage Content */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-7 bg-[#4E4542]">
          
          <div>
            <span className="text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#D1C4BF] block mb-3">
              FAMILY-RUN 5-STAR BEDOUIN SANCTUARY
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#F7F5F0] leading-[1.12] tracking-tight">
              Quiet Solitude in
              <br />
              Wadi Rum
            </h2>
          </div>

          <p className="text-xs sm:text-[13px] text-[#E5E0D8]/90 font-sans-clean leading-[1.8] font-normal max-w-xl">
            Tucked a few kilometres into the protected desert near Ad Disah, Magic Rum Hussain offers genuine Bedouin warmth paired with modern 5-star comforts. Enjoy peaceful starry nights around the campfire, authentic home-cooked Zarb dinners, and private mountain-view terraces.
          </p>

          {/* Dual Stat / Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
            
            {/* 9.3 / 10 Rating Card */}
            <div className="bg-[#433B39] p-5 border border-white/5 space-y-1">
              <div className="font-sans-clean font-light tracking-tight text-2xl sm:text-3xl text-white flex items-center gap-1.5">
                <span>9.3 / 10</span>
                <span className="text-[#EBDDD8] text-lg">★</span>
              </div>
              <span className="text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase text-[#D1C4BF] block pt-1">
                SUPERB GUEST RATING
              </span>
            </div>

            {/* 9.6 Staff Score Card */}
            <div className="bg-[#433B39] p-5 border border-white/5 space-y-1">
              <div className="font-sans-clean font-light tracking-tight text-2xl sm:text-3xl text-white">
                9.6 / 10
              </div>
              <span className="text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase text-[#D1C4BF] block pt-1">
                STAFF &amp; HOSPITALITY
              </span>
            </div>

          </div>

          {/* Bottom Feature Anchors */}
          <div className="pt-6 border-t border-white/10 space-y-3 text-[11px] font-sans-clean tracking-[0.2em] uppercase text-[#D1C4BF]">
            <Link href="/about" className="block hover:text-white transition-colors">
              AUTHENTIC UNDERGROUND ZARB DINNERS
            </Link>
            <Link href="/contact" className="block hover:text-white transition-colors">
              PUNCTUAL 4X4 VILLAGE PICKUP &amp; 24-HOUR DESK
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

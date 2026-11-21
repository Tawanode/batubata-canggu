interface SlowCangguLivingSectionProps {
  className?: string;
}

export function SlowCangguLivingSection({ className = "" }: SlowCangguLivingSectionProps) {
  return (
    <section id="activities" className={`py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]/70 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Eyebrow, Heading, Accent Rule */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block">
              ADVENTURE &amp; SOLITUDE IN WADI RUM
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[46px] text-[#22201E] font-normal leading-[1.15] tracking-tight">
              Desert Excursions &amp; Authentic Activities
            </h2>
            <div className="pt-2">
              <span className="block w-10 h-px bg-[#22201E]/40" />
            </div>
          </div>

          {/* Right Column: Narrative paragraphs & Pillars */}
          <div className="lg:col-span-7 space-y-6 lg:pt-1">
            <p className="text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              Experience Wadi Rum through the eyes of local Bedouin host Hussen Al-Zawaideh and his family. Whether racing across sweeping red sand dunes in a rugged 4x4 Jeep, riding camels into a golden sunset, or gathering by the crackling campfire with traditional Bedouin tea, every excursion is crafted for authenticity and personal care.
            </p>

            {/* 4 Pillars List based on Section 7 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] space-y-1.5">
                <strong className="text-xs uppercase tracking-wider text-[#22201E] font-sans-clean block">
                  4x4 Desert Jeep Tours
                </strong>
                <p className="text-xs text-[#747878] font-sans-clean leading-relaxed">
                  Half-day, full-day, and sunset safaris arranged directly through our tour desk to explore sand dunes, canyons, and natural rock bridges.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] space-y-1.5">
                <strong className="text-xs uppercase tracking-wider text-[#22201E] font-sans-clean block">
                  Camel Rides &amp; Desert Sports
                </strong>
                <p className="text-xs text-[#747878] font-sans-clean leading-relaxed">
                  Sunrise and sunset camel treks, sandboarding down towering red dunes, cycling, and guided desert hiking trails.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] space-y-1.5">
                <strong className="text-xs uppercase tracking-wider text-[#22201E] font-sans-clean block">
                  Night Experiences &amp; Stargazing
                </strong>
                <p className="text-xs text-[#747878] font-sans-clean leading-relaxed">
                  Stargazing sessions under pristine dark skies, night tours, and evening campfire gatherings with traditional Bedouin tea and music.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] space-y-1.5">
                <strong className="text-xs uppercase tracking-wider text-[#22201E] font-sans-clean block">
                  Transfers &amp; Rentals
                </strong>
                <p className="text-xs text-[#747878] font-sans-clean leading-relaxed">
                  Punctual 4x4 pickups from Wadi Rum Village parking, car hire assistance, and airport shuttle services (additional charge).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

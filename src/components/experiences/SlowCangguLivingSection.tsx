interface SlowCangguLivingSectionProps {
  className?: string;
}

export function SlowCangguLivingSection({ className = "" }: SlowCangguLivingSectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]/70 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Eyebrow, Heading, Accent Rule */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block">
              SPATIAL SOLITUDE IN WADI RUM
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[46px] text-[#22201E] font-normal leading-[1.15] tracking-tight">
              The Art of Desert Exploration &amp; Luxury
            </h2>
            <div className="pt-2">
              <span className="block w-10 h-px bg-[#22201E]/40" />
            </div>
          </div>

          {/* Right Column: Narrative paragraphs & Badges */}
          <div className="lg:col-span-7 space-y-6 lg:pt-1">
            <p className="text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              While Wadi Rum is renowned worldwide for its immense sandstone massifs, red desert dunes, and raw geological drama, Lavra Luxury Camp exists as an oasis of refined 5-star comfort. Located steps from the main Visitor Center and just 5 minutes from the heart of Wadi Rum village, our aparthotel seamlessly blends rugged wilderness expedition with upscale modern living.
            </p>

            <p className="hidden md:block text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              Step out from your private climate-controlled suite directly into the desert amphitheater: embark on guided 4x4 jeep safaris across ancient Nabataean canyons, ride camels across amber dunes at sunrise, or cycle desert trails with on-site bicycle hires, before returning to gourmet international dining and fireside stargazing under pristine Jordanian skies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


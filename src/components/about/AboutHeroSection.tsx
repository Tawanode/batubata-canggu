import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1B1917] text-white">
      {/* Background Aerial Panoramic Courtyard Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/about-heritage-hero.jpg"
          alt="Lavra Luxury Camp 5-star desert aparthotel set against the towering red sandstone mountains of Wadi Rum, Jordan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        {/* Scrim Gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top Spacer for transparent fixed navbar */}
      <div className="h-32 sm:h-40" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pb-14 sm:pb-20">
        <div className="max-w-2xl space-y-4">


          {/* Headline */}
          <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-[68px] text-white font-normal leading-[1.08] tracking-tight">
            The Story of Lavra
          </h1>

          {/* Subheading / Description */}
          <p className="text-xs sm:text-sm text-white/90 font-sans-clean font-light leading-relaxed max-w-xl">
            A 5-star desert camp &amp; aparthotel in the protected wilderness of Wadi Rum,
            balancing rugged exploration with upscale sanctuary comforts.
          </p>
        </div>
      </div>

      {/* Bottom Sticky Feature Bar */}
      <div className="hidden md:block relative z-10 w-full border-t border-white/10 bg-[#0C0B0A]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-3.5 sm:py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max gap-x-6 sm:gap-x-10 text-[9.5px] sm:text-[10.5px] xl:text-[11px] font-sans-clean font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/85">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">30 LUXURY SUITES &amp; APARTMENTS</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">WADI RUM PROTECTED AREA</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">CENTRAL FIRESIDE GATHERINGS</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">STEPS FROM VISITOR CENTER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1B1917] text-white">
      {/* Background Aerial Panoramic Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/about-magic-rum-hero.jpg"
          alt="Magic Rum Hussain 5-star Bedouin desert camp set against the towering red sandstone mountains of Wadi Rum, Jordan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        {/* Subtle top-down linear gradient for navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

        {/* Bottom-up gradient for text readability while keeping the desert camp ambiance vibrant */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Top Spacer for transparent fixed navbar */}
      <div className="h-32 sm:h-40" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pb-14 sm:pb-20">
        <div className="max-w-2xl space-y-4">

          {/* Headline */}
          <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-[68px] text-white font-normal leading-[1.08] tracking-tight">
            The Story of Magic Rum Hussain
          </h1>


        </div>
      </div>

      {/* Bottom Sticky Feature Bar */}
      <div className="hidden md:block relative z-10 w-full border-t border-white/10 bg-[#0C0B0A]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-3.5 sm:py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max gap-x-6 sm:gap-x-10 text-[9.5px] sm:text-[10.5px] xl:text-[11px] font-sans-clean font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/85">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">50 M² UNITS &amp; MARTIAN BUBBLES</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">MANAGED BY HUSSEN &amp; FAMILY</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">AUTHENTIC UNDERGROUND ZARB</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="whitespace-nowrap">RATED 9.3/10 &ldquo;SUPERB&rdquo;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

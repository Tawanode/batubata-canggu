import Image from "next/image";

export function AboutOriginsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E0D8]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Image with Caption Bar */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-sm bg-[#EFECE6]">
              <Image
                src="/images/architecture/brick-facade.jpg"
                alt="Lavra Luxury Camp 5-star desert aparthotel suites nestled against the Wadi Rum mountains"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Image Caption Footer */}
            <div className="flex items-center justify-between text-[#747878] pt-1">
              <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                FIGURE 01 · DESERT MOUNTAIN SANCTUARY
              </span>

            </div>
          </div>

          {/* Right Column: Editorial Chapter Content */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            {/* Chapter Eyebrow */}
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block">
              CHAPTER I · THE SANCTUARY
            </span>

            {/* Headline */}
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[46px] text-[#22201E] font-normal leading-[1.12] tracking-tight">
              Welcome to
              <br />
              Lavra Luxury Camp
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              <p>
                Positioned directly within the spectacular mountains of the <strong className="font-medium text-[#22201E]">Wadi Rum Protected Area</strong>, Lavra Luxury Camp is a 5-star aparthotel that balances rugged desert exploration with modern, upscale comfort. Located just a 5-minute walk from the heart of Wadi Rum and steps from the Visitor Center, our 30 distinct guestrooms and ground-floor apartments offer direct, unobstructed views of the Martian landscape.
              </p>

              <p className="hidden md:block">
                Whether you are relaxing by our central outdoor fireplace under the stars, enjoying our multi-cuisine restaurant, or embarking on a guided jeep tour, our multilingual staff is dedicated to providing an unforgettable Jordanian adventure.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


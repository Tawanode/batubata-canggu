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
                src="/images/architecture/discover-batu-bata-ai.jpg"
                alt="Magic Rum Hussain desert camp and Martian bubble domes nestled against the Wadi Rum mountains"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Image Caption Footer */}
            <div className="flex items-center justify-between text-[#747878] pt-1">
              <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                FIGURE 01 · QUIET DESERT SANCTUARY
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
              Magic Rum Hussain
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              <p>
                Managed by local host Hussen Al-Zawaideh and his family, Magic Rum Hussain (Magic Rum Luxury Hussen) is a peaceful, mid-sized desert camp nestled a few kilometres inside the Wadi Rum desert near Ad Disah. Designed for solo travelers, couples, and families alike, our camp blends authentic Bedouin warmth with modern comforts—offering spacious 50 m² air-conditioned rooms and panoramic Martian bubble domes with reliable heating, hot water, and private mountain-view terraces.
              </p>

              <p className="hidden md:block">
                From punctual 4x4 pickups in Wadi Rum Village to slow-cooked traditional Zarb dinners around the campfire, our team ensures every detail of your desert stay feels like home.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

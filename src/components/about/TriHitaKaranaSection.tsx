import Image from "next/image";

export function TriHitaKaranaSection() {
  return (
    <section className="bg-[#4E4542] text-white overflow-hidden philosophical-grounding-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">

        {/* Left Column: Full-Height Image with Badge */}
        <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full">
          <Image
            src="/images/architecture/temple-offering.jpg"
            alt="Central outdoor campfire and mountain sunset view at Magic Rum Hussain in Wadi Rum"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Column: Narrative, Stat Cards, and Action Links */}
        <div className="lg:col-span-6 px-8 sm:px-12 lg:px-16 py-14 sm:py-20 flex flex-col justify-center space-y-7">

          {/* Eyebrow */}
          <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#EBDDD8]/75 block">
            HOSPITALITY PHILOSOPHY
          </span>

          {/* Headline */}
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-[1.15] tracking-tight">
            Bedouin Hospitality &amp;
            <br />
            5-Star Glamping
          </h2>

          {/* Descriptive narrative */}
          <p className="text-xs sm:text-[13px] text-[#EBDDD8]/85 font-sans-clean leading-[1.85] font-light max-w-xl">
            At Magic Rum Hussain, Hussen and his family take personal pride in greeting every traveler as personal guests. We provide spacious 50 m² air-conditioned rooms, panoramic Martian bubble domes with reliable winter heating, private mountain terraces, and heartfelt Jordanian hospitality.
          </p>

          {/* Dual Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl pt-1">
            <div className="p-5 bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <span className="text-[10px] sm:text-[11px] font-sans-clean font-semibold tracking-[0.2em] uppercase text-white block">
                50 M² DETACHED UNITS
              </span>
              <p className="text-xs text-[#EBDDD8]/75 font-sans-clean leading-relaxed font-light">
                Indoor fireplace, climate AC, heating &amp; private mountain terrace.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <span className="text-[10px] sm:text-[11px] font-sans-clean font-semibold tracking-[0.2em] uppercase text-white block">
                UNDERGROUND ZARB DINNERS
              </span>
              <p className="text-xs text-[#EBDDD8]/75 font-sans-clean leading-relaxed font-light">
                Slow-roasted sand-baked meats, fresh mezze, and nightly campfire tea.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export function TriHitaKaranaSection() {
  return (
    <section className="bg-[#4E4542] text-white overflow-hidden philosophical-grounding-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">

        {/* Left Column: Full-Height Image with Badge */}
        <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full">
          <Image
            src="/images/architecture/temple-offering.jpg"
            alt="Central outdoor fireplace and mountain sunset view at Lavra Luxury Camp in Wadi Rum"
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
            Modern Luxury
          </h2>

          {/* Descriptive narrative */}
          <p className="text-xs sm:text-[13px] text-[#EBDDD8]/85 font-sans-clean leading-[1.85] font-light max-w-xl">
            Lavra Luxury Camp is dedicated to offering an unforgettable Jordanian expedition without compromising on 5-star comforts. We bridge authentic Bedouin culture with modern aparthotel living—giving you sound-insulated rooms, premium bedding, multi-cuisine dining, and nightly fireside stargazing.
          </p>

          {/* Dual Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl pt-1">
            <div className="p-5 bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <span className="text-[10px] sm:text-[11px] font-sans-clean font-semibold tracking-[0.2em] uppercase text-white block">
                30 5-STAR APARTHOTEL ROOMS
              </span>
              <p className="text-xs text-[#EBDDD8]/75 font-sans-clean leading-relaxed font-light">
                Climate-controlled AC, sound insulation &amp; unobstructed mountain views.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
              <span className="text-[10px] sm:text-[11px] font-sans-clean font-semibold tracking-[0.2em] uppercase text-white block">
                CENTRAL FIRESIDE GATHERINGS
              </span>
              <p className="text-xs text-[#EBDDD8]/75 font-sans-clean leading-relaxed font-light">
                Traditional Bedouin music, herbal tea &amp; dark-sky celestial stargazing.
              </p>
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}


import Image from "next/image";

export function CourtyardLivingSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Dual Stepped Image Composition (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Primary Tall Photo: Desert camp pathways */}
            <div className="relative aspect-[3/4] w-full shadow-md image-zoom-container">
              <Image
                src="/images/courtyard/garden-pathway.jpg"
                alt="Desert pathways, sun terrace, and scenic surroundings at Magic Rum Hussain Wadi Rum"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>

            {/* Secondary Photo: Private terrace opening onto mountain views */}
            <div className="relative aspect-[3/4] w-full shadow-md image-zoom-container">
              <Image
                src="/images/courtyard/sitting-terrace.jpg"
                alt="Private outdoor terrace overlooking red sandstone mountains at Magic Rum Hussain"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Facilities & Amenities (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div>
              <span className="text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block mb-3">
                CAMP FACILITIES &amp; AMENITIES
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#22201E] tracking-tight leading-[1.12]">
                Desert Sanctuary
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.8] font-normal max-w-xl">
              <p>
                Our 5-star camp provides complete comfort in the heart of Wadi Rum: a sun terrace, outdoor fireplace, picnic area, comfortable outdoor furniture, barbecue facilities, and cozy in-room fireplaces in every unit.
              </p>
              <p>
                Dine at our on-site family-friendly restaurant serving local Jordanian and traditional Bedouin cuisine (halal options available) for breakfast, brunch, lunch, dinner, high tea, and cocktails. Enjoy exceptional buffet breakfasts, room service, and traditional underground-cooked Zarb dinners slow-roasted under the sand.
              </p>
              <p>
                Enjoy superb free Wi-Fi across all areas (rated 8.8/10), free private parking with an electric vehicle (EV) charging station, 24-hour front desk, express check-in/out, daily housekeeping, luggage lockers, and pet-friendly policies at no extra charge.
              </p>
            </div>

            {/* Minimalist Pill Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="bg-[#F7F5F0] border border-[#E5E0D8]/80 text-[#22201E] px-4 py-2 text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                OUTDOOR CAMPFIRE &amp; ZARB
              </span>
              <span className="bg-[#F7F5F0] border border-[#E5E0D8]/80 text-[#22201E] px-4 py-2 text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                FREE PARKING &amp; EV CHARGER
              </span>
              <span className="bg-[#F7F5F0] border border-[#E5E0D8]/80 text-[#22201E] px-4 py-2 text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                FREE WI-FI (RATED 8.8)
              </span>
              <span className="bg-[#F7F5F0] border border-[#E5E0D8]/80 text-[#22201E] px-4 py-2 text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                PETS WELCOME (FREE)
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

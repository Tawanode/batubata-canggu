import Image from "next/image";

export function NeighbourhoodRhythmsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-24 sm:space-y-32">
        
        {/* Story 1: Sunrise Awakening (Image Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
              <Image
                src="/images/neighbourhood/morning-coffee-sourdough.jpg"
                alt="Exceptional buffet breakfast with fresh coffee and traditional Bedouin spreads at Magic Rum Hussain"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-5 lg:pl-4">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#C86D44] block">
              07:30 AM · DESERT AWAKENING
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[42px] text-[#22201E] font-normal leading-[1.18] tracking-tight">
              Sunrise Awakening: Fresh Coffee &amp; Breakfast Buffet
            </h3>

            <p className="hidden md:block text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              Greet the early morning desert breeze as golden light paints the red sandstone mountains of Wadi Rum. Our exceptional buffet breakfast features freshly brewed coffee, warm bread, cheeses, olives, fruits, and hot local specialties. Sunrise camel treks are also ready for dawn desert explorers.
            </p>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-sans-clean text-[#747878]">
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Exceptional Breakfast Buffet
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Sunrise Camel Treks
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Fresh Bedouin Tea &amp; Coffee
              </span>
            </div>
          </div>
        </div>

        {/* Story 2: Desert Expedition (Content Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Narrative (Desktop Left, Mobile Order 2) */}
          <div className="lg:col-span-6 space-y-5 lg:pr-4 order-2 lg:order-1">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#C86D44] block">
              02:00 PM · RED DUNES &amp; CANYONS
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[42px] text-[#22201E] font-normal leading-[1.18] tracking-tight">
              Desert Safaris: 4x4 Jeep Tours &amp; Rock Bridges
            </h3>

            <p className="hidden md:block text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              Embark with Hussen and expert local Bedouin guides across the Martian wilderness. Traverse soaring sandstone arches, navigate sheltered canyon corridors, glide down deep red sand dunes on sandboards, and stop for hot sweet tea brewed over desert embers.
            </p>

            {/* Bullet Points */}
            <ul className="pt-2 space-y-2 text-xs text-[#444748] font-sans-clean">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22201E] shrink-0" />
                <span>Half-day, full-day, and sunset 4x4 Jeep safaris arranged directly at our tour desk</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22201E] shrink-0" />
                <span>Sandboarding, guided desert hiking, and camel trekking excursions</span>
              </li>
            </ul>
          </div>

          {/* Image (Desktop Right, Mobile Order 1) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
              <Image
                src="/images/neighbourhood/desert-jeep-expedition.jpg"
                alt="4x4 desert safari Jeep driving through red sand dunes and sandstone mountains in Wadi Rum Protected Area with Magic Rum Hussain"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Story 3: Fireside Stargazing (Image Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
              <Image
                src="/images/neighbourhood/fireside-stargazing-night.jpg"
                alt="Fireside gathering with guests relaxing around the glowing outdoor fire pit under a clear desert night sky filled with stars at Magic Rum Hussain"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-5 lg:pl-4">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#C86D44] block">
              07:30 PM · CELESTIAL NIGHTS &amp; ZARB
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[42px] text-[#22201E] font-normal leading-[1.18] tracking-tight">
              Campfire Nights: Underground Zarb &amp; Stargazing
            </h3>

            <p className="hidden md:block text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              When darkness drapes the valley, watch the unearthing of the traditional Bedouin Zarb—slow-cooked for hours under the sand in an underground oven. Afterwards, gather around the glowing outdoor campfire for sage-infused tea, authentic Bedouin hospitality, and breathtaking stargazing under one of the world&apos;s clearest night skies.
            </p>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-sans-clean text-[#747878]">
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Traditional Underground Zarb
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Campfire Bedouin Tea
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Dark Sky Celestial Stargazing
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

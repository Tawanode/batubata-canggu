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
                alt="Complimentary breakfast buffet with fresh coffee, warm bread, and international spreads at Lavra Luxury Camp"
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
              Greet the early morning desert breeze as golden light washes over the towering
              red granite peaks. Our complimentary buffet breakfast is served daily
              (7:30 AM&ndash;8:30 AM) with artisan coffee, warm pastries, fresh fruits, and
              hot delicacies. Early expedition takeaway boxes are readily prepared for dawn desert hikers.
            </p>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-sans-clean text-[#747878]">
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Buffet Breakfast (7:30&ndash;8:30 AM)
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                On-Site Artisan Coffee Shop
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Takeaway Excursion Boxes
              </span>
            </div>
          </div>
        </div>

        {/* Story 2: Desert Expedition (Content Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Narrative (Desktop Left, Mobile Order 2) */}
          <div className="lg:col-span-6 space-y-5 lg:pr-4 order-2 lg:order-1">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#C86D44] block">
              03:00 PM · RED DUNES &amp; CANYONS
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[42px] text-[#22201E] font-normal leading-[1.18] tracking-tight">
              Desert Expedition: 4x4 Jeep Safaris &amp; Canyon Kakharas
            </h3>

            <p className="hidden md:block text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              Embark with expert Bedouin guides across the Martian wilderness. Traverse
              towering sandstone arches, discover millennial petroglyphs at ancient Nabataean sites,
              and explore the sheltered corridors of Canyon Kakharas, just 3.2 km from the camp.
            </p>

            {/* Bullet Points */}
            <ul className="pt-2 space-y-2 text-xs text-[#444748] font-sans-clean">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22201E] shrink-0" />
                <span>On-site tour assistance desk for private 4x4 jeep safaris and guided treks</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22201E] shrink-0" />
                <span>Camel rides and complimentary bicycle hires available for trail exploration</span>
              </li>
            </ul>
          </div>

          {/* Image (Desktop Right, Mobile Order 1) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
              <Image
                src="/images/neighbourhood/desert-jeep-expedition.jpg"
                alt="4x4 desert safari jeep driving through red sand dunes and sandstone mountains in Wadi Rum Protected Area, Jordan"
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
                alt="Fireside gathering with guests relaxing around the glowing outdoor fire pit under a clear desert night sky filled with stars"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-5 lg:pl-4">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#C86D44] block">
              07:30 PM · CELESTIAL NIGHTS
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[42px] text-[#22201E] font-normal leading-[1.18] tracking-tight">
              Fireside Nights: Bedouin Music &amp; Celestial Stargazing
            </h3>

            <p className="hidden md:block text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.85] font-normal">
              When darkness drapes the valley, gather around our central outdoor fireplace.
              Enjoy nightly traditional Bedouin cultural melodies, freshly brewed sage tea,
              and world-class multi-cuisine dinner before stargazing under one of the clearest dark-sky reserves on Earth.
            </p>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-sans-clean text-[#747878]">
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Central Outdoor Fire Pit
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Multi-Cuisine Dining
              </span>
              <span className="px-3 py-1.5 bg-[#EFECE6]/80 border border-[#E5E0D8]/60">
                Dark Sky Stargazing
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


import Image from "next/image";

export function CourtyardLivingSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Dual Stepped Image Composition (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Primary Tall Photo: Desert pathways & sun terrace */}
            <div className="relative aspect-[3/4] w-full shadow-md image-zoom-container">
              <Image
                src="/images/courtyard/garden-pathway.jpg"
                alt="Manicured pathways, sun terrace, and desert landscaping at Lavra Luxury Camp Wadi Rum"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>

            {/* Secondary Photo: Private patio opening onto mountain views */}
            <div className="relative aspect-[3/4] w-full shadow-md image-zoom-container">
              <Image
                src="/images/courtyard/sitting-terrace.jpg"
                alt="Private outdoor terrace overlooking sandstone mountain peaks at Lavra Luxury Camp"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Editorial Content & 5-Star Aparthotel Philosophy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div>
              <span className="text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block mb-3">
                RESORT FACILITIES &amp; AMENITIES
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#22201E] tracking-tight leading-[1.12]">
                Desert Sanctuary
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.8] font-normal max-w-xl">
              <p>
                Our 5-star aparthotel provides the perfect oasis after exploring the dunes: manicured pathways, an expansive sun terrace with loungers, dedicated picnic areas, and a central outdoor fireplace for nightly fireside gatherings under world-class dark skies.
              </p>
              <p>
                Indulge in our primary camp restaurant featuring a diverse international menu (African, Catalan, Dutch, Greek, Indian) alongside daily vegan and vegetarian options. A complimentary buffet breakfast is served daily (7:30 AM–8:30 AM), with takeaway boxes prepared for early excursions. An on-site coffee shop serves refreshments all day.
              </p>

            </div>

            {/* Minimalist Pill Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="bg-[#F7F5F0] border border-[#E5E0D8]/80 text-[#22201E] px-4 py-2 text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                OUTDOOR FIREPLACE
              </span>
              <span className="bg-[#F7F5F0] border border-[#E5E0D8]/80 text-[#22201E] px-4 py-2 text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                FREE VALET PARKING
              </span>
              <span className="bg-[#F7F5F0] border border-[#E5E0D8]/80 text-[#22201E] px-4 py-2 text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase">
                HIGH-SPEED WI-FI
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

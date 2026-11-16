interface DirectoryItem {
  name: string;
  distance: string;
  description: string;
}

interface DirectoryCategory {
  categoryNumber: string;
  title: string;

  items: DirectoryItem[];
}

const directoryData: DirectoryCategory[] = [
  {
    categoryNumber: "CATEGORY 01",
    title: "Immediate Camp Vicinity",
    items: [
      {
        name: "Wadi Rum Visitor Center",
        distance: "150 M",
        description: "Official park headquarters with entry permits, protected area maps, and desert heritage exhibits.",
      },
      {
        name: "Central Outdoor Fireplace",
        distance: "ON-SITE",
        description: "Traditional Bedouin gathering hearth for evening storytelling, live lute music, and celestial stargazing.",
      },
      {
        name: "Multi-Cuisine Restaurant & Cafe",
        distance: "ON-SITE",
        description: "International gastronomy (African, Catalan, Dutch, Greek, Indian) & daily breakfast buffet with mountain views.",
      },
    ],
  },
  {
    categoryNumber: "CATEGORY 02",
    title: "Desert Landmarks & Geology",
    items: [
      {
        name: "Canyon Kakharas",
        distance: "3.2 KM",
        description: "Dramatic natural sandstone canyon with towering red cliffs and sheltered expedition walking trails.",
      },
      {
        name: "Wadi Rum Sunset Point",
        distance: "10 MIN",
        description: "Celebrated vantage point to watch the evening sun illuminate the Martian desert in copper and violet.",
      },
      {
        name: "Nabataean Temple & Inscriptions",
        distance: "8.2 KM",
        description: "Ancient 1st-century BC ruins and petroglyphs carved into the sandstone mountains by Petra's builders.",
      },
    ],
  },
  {
    categoryNumber: "CATEGORY 03",
    title: "Excursions & Regional Hubs",
    items: [
      {
        name: "Guided 4x4 Desert Jeep Safaris",
        distance: "ON-SITE DESK",
        description: "Expert Bedouin-guided expeditions across towering dunes, natural rock arches, and historic desert trails.",
      },
      {
        name: "Deeseh Knowledge Station",
        distance: "14.7 KM",
        description: "Regional cultural center showcasing desert agricultural history, Bedouin lifestyle, and conservation.",
      },
      {
        name: "King Hussein Int'l Airport (AQJ)",
        distance: "1H 7MIN",
        description: "Convenient international gateway with private airport shuttles and complimentary valet parking.",
      },
    ],
  },
];

export function WalkabilityDirectorySection() {
  return (
    <section id="walkability-directory" className="py-20 sm:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 sm:pb-16 border-b border-[#E5E0D8]/60">
          <div>
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block mb-2">
              CURATED EXPEDITION GUIDE
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[44px] text-[#22201E] font-normal leading-tight">
              The Excursions &amp; Vicinity Directory
            </h2>
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14 pt-12 items-start">
          {directoryData.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              {/* Category Header */}
              <div className="pb-4 border-b border-[#22201E]/80">
                <span className="text-[9.5px] sm:text-[10px] font-sans-clean font-semibold tracking-[0.22em] uppercase text-[#C86D44] block mb-1">
                  {cat.categoryNumber}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-[26px] text-[#22201E] font-normal leading-snug">
                  {cat.title}
                </h3>

              </div>

              {/* Items List */}
              <div className="space-y-7">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1.5 group">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-serif-editorial text-[17px] sm:text-[18px] text-[#22201E] font-normal group-hover:text-[#C86D44] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] sm:text-[11px] font-sans-clean uppercase tracking-[0.16em] text-[#747878] shrink-0 font-medium">
                        {item.distance}
                      </span>
                    </div>
                    <p className="text-xs text-[#747878] font-sans-clean leading-[1.7] font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


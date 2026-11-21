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
    title: "Immediate Vicinity & Camp Comforts",
    items: [
      {
        name: "Hashim Cafeteria",
        distance: "600 M",
        description: "Nearby local cafeteria serving traditional mint tea, cardamom coffee, and quick authentic refreshments along Wadi Rum Road.",
      },
      {
        name: "Central Outdoor Campfire & Fireplace",
        distance: "ON-SITE",
        description: "Nightly campfire gatherings with Hussen and family for Bedouin music, herbal tea, and celestial stargazing.",
      },
      {
        name: "Underground Zarb Restaurant",
        distance: "ON-SITE",
        description: "Traditional slow-cooked underground Zarb dinners and exceptional daily breakfast buffet featuring local specialties.",
      },
    ],
  },
  {
    categoryNumber: "CATEGORY 02",
    title: "Desert Landmarks & Transit Hubs",
    items: [
      {
        name: "Al-Disah Train Station (محطة الديسة)",
        distance: "4.9 KM",
        description: "Historic Hejaz Railway station in Ad Disah, framed by striking sandstone massifs and desert date palms.",
      },
      {
        name: "Seven Mountains Restaurant",
        distance: "11 KM",
        description: "Renowned regional dining destination serving traditional Jordanian cuisine and grilled specialties.",
      },
      {
        name: "Wadi Rum Station",
        distance: "13 KM",
        description: "Historic railway outpost with evocative desert mountain views and early 20th-century cultural heritage.",
      },
    ],
  },
  {
    categoryNumber: "CATEGORY 03",
    title: "Excursions & Regional Connectivity",
    items: [
      {
        name: "4x4 Jeep Safaris & Sandboarding",
        distance: "ON-SITE DESK",
        description: "Half-day, full-day, and sunset Jeep tours to sand dunes, canyons, and rock bridges arranged directly by Hussen.",
      },
      {
        name: "King Hussein Int'l Airport (Aqaba)",
        distance: "69–70 KM",
        description: "Primary international gateway to southern Jordan with private airport shuttle transfers available.",
      },
      {
        name: "Eilat-Ramon Airport",
        distance: "92 KM",
        description: "Regional international gateway accessible via the Aqaba/Eilat southern border crossing.",
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
              The Excursions &amp; Landmarks Directory
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

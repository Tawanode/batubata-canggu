import { BrickWall, Footprints, ShieldCheck, Compass, Wifi, Car, SunDim, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const highlights = [
  {
    icon: BrickWall,
    title: "Mountain Views",
    tagline: "5-Star Desert Aparthotel",
    description:
      "All 30 rooms feature climate-controlled air conditioning, sound-insulated walls, premium bedding, nightly turndown service, and private patios or balconies with direct mountain views.",
  },
  {
    icon: Footprints,
    title: "Prime Location",
    tagline: "Steps from Visitor Center",
    description:
      "Located just a 5-minute walk from the heart of Wadi Rum and steps from the main Visitor Center, offering effortless logistics for desert exploration.",
  },
  {
    icon: Compass,
    title: "Desert Safaris",
    tagline: "Guided Jeep & Camel Treks",
    description:
      "Our internal tour desk coordinates desert jeep tours, guided hiking excursions, and camel rides. Canyon Kakharas is only 3.2 km away.",
  },
  {
    icon: Car,
    title: "Guest Convenience",
    tagline: "Free Parking & High-Speed Wi-Fi",
    description:
      "Free private and valet parking on-site, 24-hour reception desk, and high-speed free Wi-Fi across the entire camp property.",
  },
];

export function HighlightsGridSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF9F6] border-y border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          alignment="center"
          eyebrow="Essential Highlights"
          scriptAccent="desert luxury"
          title="5-star comforts at Lavra Luxury Camp"
          subtitle="Honest, grounded hospitality designed for discerning travelers who appreciate authentic Jordanian desert expeditions."
          className="mb-16"
        />

        {/* 4-Column Clean Fact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FFFFFF] p-8 border border-[#E5E0D8] shadow-xs flex flex-col justify-between hover:border-[#C86D44] transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-[#F7F5F0] border border-[#E5E0D8] flex items-center justify-center text-[#C86D44] mb-6 group-hover:bg-[#C86D44] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#7B8B76] block mb-1 font-sans-clean">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif-editorial text-2xl text-[#22201E] font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#444748] leading-relaxed font-sans-clean">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E5E0D8]/60 flex items-center justify-between text-[11px] font-semibold text-[#22201E]">
                  <span className="tracking-widest uppercase font-sans-clean">Feature 0{idx + 1}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C86D44] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


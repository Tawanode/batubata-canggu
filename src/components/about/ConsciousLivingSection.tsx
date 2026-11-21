export function ConsciousLivingSection() {
  const pillars = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#22201E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2h4" />
          <path d="M10 4h4" />
          <rect x="7" y="6" width="10" height="16" rx="2" />
          <line x1="10" y1="11" x2="14" y2="11" />
        </svg>
      ),
      title: "Quiet Desert Solitude",
      description: "Nestled a few kilometres inside the desert near Ad Disah, enjoying peaceful dark-sky stargazing and mountain tranquility.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#22201E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <path d="m9 20 3-6 2 3 3-5" />
          <path d="m6 10 3 3 3-2 3 2" />
        </svg>
      ),
      title: "Family Care & Pickups",
      description: "Managed by local host Hussen Al-Zawaideh and family, with punctual 4x4 pickups from Wadi Rum Village parking.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#22201E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="5" />
          <line x1="10" y1="2" x2="10" y2="5" />
          <line x1="14" y1="2" x2="14" y2="5" />
        </svg>
      ),
      title: "Zarb Dining & Breakfast",
      description: "Exceptional buffet breakfasts and traditional underground slow-cooked Zarb dinners with halal Jordanian specialties.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#22201E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M12 13v5" />
          <path d="M9 16c1.5-1 4.5-1 6 0" />
        </svg>
      ),
      title: "Free Parking & EV Charging",
      description: "Free private parking with an electric vehicle (EV) charging station on-site, plus pet-friendly policies at no extra charge.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E0D8]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[44px] text-[#22201E] font-normal leading-tight">
            Camp Comforts &amp; Authentic Hospitality
          </h2>
          <p className="text-xs sm:text-[13px] text-[#747878] font-sans-clean leading-relaxed font-normal pt-1">
            We balance rugged desert exploration with thoughtful 5-star comforts inside Jordan&apos;s UNESCO World Heritage landscape.
          </p>
        </div>

        {/* 4 Clean Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 bg-[#F7F5F0]/70 border border-[#E5E0D8]/60 flex flex-col justify-between space-y-8"
            >
              {/* Icon Top */}
              <div className="text-[#22201E]">
                {pillar.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#22201E] font-normal leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#747878] font-sans-clean leading-[1.75] font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

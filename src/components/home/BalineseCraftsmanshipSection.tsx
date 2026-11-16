import Image from "next/image";
import Link from "next/link";

export function BalineseCraftsmanshipSection() {
  return (
    <section className="bg-[#4E4542] text-[#F7F5F0] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] items-stretch">
        
        {/* Left Column: Full-Bleed Temple Offering & Brick Niche Photo */}
        <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[560px] lg:min-h-full">
          <Image
            src="/images/architecture/temple-offering.jpg"
            alt="Lavra Luxury Camp central outdoor fireplace and Bedouin seating under the starry night sky of Wadi Rum Jordan"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Column: Editorial Architecture & Heritage Content */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-7 bg-[#4E4542]">
          
          <div>
            <span className="text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#D1C4BF] block mb-3">
              EXPEDITION &amp; APARTHOTEL LUXURY
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#F7F5F0] leading-[1.12] tracking-tight">
              Wadi Rum
              <br />
              Sanctuary
            </h2>
          </div>

          <p className="text-xs sm:text-[13px] text-[#E5E0D8]/90 font-sans-clean leading-[1.8] font-normal max-w-xl">
            Positioned directly within the dramatic sandstone mountains of the Wadi Rum Protected Area, Lavra Luxury Camp is a 5-star aparthotel that balances rugged wilderness expedition with modern, upscale comfort. Built with sound-insulated architecture, full climate control, and private terraces that frame the Martian desert horizon.
          </p>

          {/* Dual Stat / Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
            
            {/* 4.0 / 5 Rating Card */}
            <div className="bg-[#433B39] p-5 border border-white/5 space-y-1">
              <div className="font-sans-clean font-light tracking-tight text-2xl sm:text-3xl text-white flex items-center gap-1.5">
                <span>4.0 / 5</span>
                <span className="text-[#EBDDD8] text-lg">★</span>
              </div>
              <span className="text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase text-[#D1C4BF] block pt-1">
                VERIFIED GUEST SCORE
              </span>
            </div>

            {/* Steps Away Card */}
            <div className="bg-[#433B39] p-5 border border-white/5 space-y-1">
              <div className="font-sans-clean font-light tracking-tight text-2xl sm:text-3xl text-white">
                Steps Away
              </div>
              <span className="text-[10px] font-sans-clean font-medium tracking-[0.2em] uppercase text-[#D1C4BF] block pt-1">
                WADI RUM VISITOR CENTER
              </span>
            </div>

          </div>

          {/* Bottom Feature Anchors */}
          <div className="pt-6 border-t border-white/10 space-y-3 text-[11px] font-sans-clean tracking-[0.2em] uppercase text-[#D1C4BF]">
            <Link href="/about" className="block hover:text-white transition-colors">
              CENTRAL OUTDOOR FIREPLACE
            </Link>
            <Link href="/contact" className="block hover:text-white transition-colors">
              24-HOUR GUEST SERVICES &amp; DESK
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}


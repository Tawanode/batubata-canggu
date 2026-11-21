import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NeighbourhoodGuideSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] font-sans-clean font-medium tracking-[0.25em] uppercase text-[#747878] block mb-3">
                LOCATION &amp; EXCURSIONS
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[50px] font-normal text-[#22201E] tracking-tight leading-[1.14]">
                In the Heart of
                <br />
                Wadi Rum
              </h2>
            </div>

            <p className="text-xs sm:text-[13px] text-[#444748] font-sans-clean leading-[1.8] font-normal max-w-sm">
              Set in a quiet stretch of the Wadi Rum desert near Ad Disah, our camp is rated 9.4/10 for location (and 9.9/10 by couples). Guests meet Hussen at the Wadi Rum Village parking area for a seamless 4x4 transfer directly to camp.
            </p>

            <div className="pt-4">
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-[11px] font-sans-clean font-medium tracking-[0.2em] uppercase text-[#22201E] hover:text-[#C86D44] transition-colors border-b border-[#22201E] pb-0.5"
              >
                <span>VIEW EXCURSIONS &amp; DIRECTORY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Area: Dual Curated Image Cards (8 cols: 4 + 4) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

            {/* Card 1: Traditional Zarb Dining & Bedouin Tea */}
            <div className="space-y-4 group">
              <div className="relative aspect-[4/5] w-full shadow-md image-zoom-container">
                <Image
                  src="/images/neighbourhood/camp-dining-coffee.jpg"
                  alt="Traditional Bedouin Zarb dinner spread cooked under the sand at Magic Rum Hussain"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-1.5 pt-1">
                <h3 className="font-serif-editorial text-2xl text-[#22201E] font-normal">
                  Traditional Zarb Dining
                </h3>
                <p className="text-xs text-[#444748] font-sans-clean leading-relaxed font-light">
                  Authentic underground-cooked Zarb dinners slow-roasted beneath the sand, followed by campfire Bedouin tea and stargazing.
                </p>
              </div>
            </div>

            {/* Card 2: Guided 4x4 Jeep Tours & Camel Treks */}
            <div className="space-y-4 group">
              <div className="relative aspect-[4/5] w-full shadow-md image-zoom-container">
                <Image
                  src="/images/neighbourhood/guided-desert-jeep.jpg"
                  alt="4x4 desert Jeep safari traversing the red sand dunes of Wadi Rum Protected Area with Magic Rum Hussain"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
                {/* Subtle top white badge over image */}
                <div className="absolute top-0 inset-x-0 bg-white/95 py-1.5 text-center">
                  <span className="text-[10px] font-sans-clean tracking-wider text-[#444748]">
                    Wadi Rum Protected Area
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <h3 className="font-serif-editorial text-2xl text-[#22201E] font-normal">
                  4x4 Jeep Safaris &amp; Camels
                </h3>
                <p className="text-xs text-[#444748] font-sans-clean leading-relaxed font-light">
                  Half-day, full-day, and sunset safaris exploring sand dunes, canyons, rock bridges, and sunrise camel treks arranged directly by Hussen.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ManifestoBanner() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#2A4B3C] text-[#F7F5F0] overflow-hidden">
      
      {/* Subtle background overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/images/hero/hero-morning-mist.jpg"
          alt="Golden dawn over Wadi Rum mountains"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFDBCF]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#EBDDD8] font-sans-clean">
            THE LAVRA LUXURY CAMP MANIFESTO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFDBCF]" />
        </div>

        {/* Centerpiece Quote */}
        <blockquote className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-[#F7F5F0] max-w-4xl mx-auto">
          &ldquo;Experience the ultimate fusion of remote wilderness and contemporary city luxury at Lavra Luxury Camp. Enjoy unparalleled mountain views, world-class dining, and premium desert accommodations.&rdquo;
        </blockquote>

        <div className="pt-2 flex flex-col items-center justify-center space-y-2">
          <span className="font-script-accent text-3xl sm:text-4xl text-[#FFDBCF]">
            Ahlan Wa Sahlan from Wadi Rum
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#E5E0D8]/70 font-sans-clean">
            Ram Street • Wadi Rum Protected Area, Jordan
          </span>
        </div>

        <div className="pt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-[#EBDDD8]/40 hover:border-white text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
          >
            <span>Read Our Heritage Story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}


import Image from "next/image";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { propertyData } from "@/data/property";

export function PreFooterCallout() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#22201E] text-white overflow-hidden">

      {/* Background Image with warm evening lantern tones */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/courtyard/courtyard-evening.jpg"
          alt="Warm evening ambiance and starry night sky at Magic Rum Hussain Wadi Rum"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#22201E] via-[#22201E]/60 to-[#22201E]/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">

        <h2 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-[#F7F5F0] leading-tight">
          An Unforgettable Experience in <span className="italic">Wadi Rum</span>
        </h2>

        <p className="text-sm sm:text-base text-[#E5E0D8]/90 font-sans-clean max-w-2xl mx-auto leading-relaxed font-light">
          Sleep beneath the stars in panoramic Martian bubble domes, savor slow-cooked traditional Zarb dinners, and explore red sand dunes on private 4x4 safaris with Hussen Al-Zawaideh and his family.
        </p>

        {/* Dual CTA */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C86D44] hover:bg-[#B85D3B] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Reserve via WhatsApp</span>
          </a>
          <a
            href={propertyData.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
          >
            <span>Book on Booking.com</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-4 text-xs text-[#EBDDD8]/70 flex items-center justify-center gap-2 font-sans-clean">
          <ShieldCheck className="w-4 h-4 text-[#FFDBCF]" />
          <span>Direct reservation assistance &amp; tour coordination (+962 7 7683 8471)</span>
        </div>

      </div>
    </section>
  );
}

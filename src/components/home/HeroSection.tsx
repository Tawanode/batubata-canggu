"use client";

import Image from "next/image";
import { useBookingModal } from "@/context/BookingModalContext";

export function HeroSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between overflow-hidden">

      {/* 1. BACKGROUND & VISUAL BREATHING ROOM */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/canggu-life-hero.jpg"
          alt="Lavra Luxury Camp 5-star desert aparthotel surrounded by red sandstone mountains in Wadi Rum Jordan"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-100"
        />

        {/* Subtle top-down linear gradient (rgba(0,0,0,0.45) to transparent over top 20%) for navbar */}
        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />

        {/* Clear center breathing room (0% overlay) so architecture and mountain vistas are unobstructed */}

        {/* Bottom-up linear gradient (rgba(0,0,0,0.75) to transparent over bottom 45%) */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Spacer to push content down */}
      <div className="flex-1" />

      {/* 3. HERO CENTER CONTENT (DECLUTTERED & REPOSITIONED LOWER DOWN) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white pb-10 sm:pb-14 space-y-4">
        {/* Eyebrow Text: Centered, 11px uppercase sans-serif, tracking-[0.25em], text-white/85 */}
        <span className="text-[11px] font-sans-clean font-semibold tracking-[0.28em] uppercase text-[#EBDDD8] block">
          5-STAR DESERT APARTHOTEL · WADI RUM PROTECTED AREA
        </span>

        {/* Main Headline: Single-line centered serif heading, font-normal */}
        <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-white font-normal tracking-tight leading-[1.1]">
          A 5-Star Oasis in Wadi Rum
        </h1>




      </div>

      {/* 4. BOTTOM BAR (CLEAN, FULL-WIDTH, NO OVERLAPS) */}
      <div className="relative z-10 w-full px-6 sm:px-12 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 bg-black/40 backdrop-blur-xs">

        {/* Left Side: Solid white rectangular button */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => openBookingModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-neutral-900 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase hover:bg-neutral-200 transition rounded-none shadow-xs cursor-pointer"
          >
            <span>BOOK YOUR SUITE</span>
            <span className="text-base leading-none">→</span>
          </button>
          <a
            href="#explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 px-6 py-3.5 text-xs font-medium tracking-[0.16em] uppercase transition rounded-none"
          >
            <span>EXPLORE THE CAMP</span>
          </a>
        </div>

        {/* Right Side: Three inline feature highlights in 11px uppercase white sans-serif */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase font-sans-clean tracking-[0.18em] text-white/90">
          <span>• STEPS FROM VISITOR CENTER</span>
          <span>• DIRECT MOUNTAIN VIEWS</span>
          <span>• 30 CLIMATE-CONTROLLED ROOMS</span>
        </div>

      </div>

    </section>
  );
}

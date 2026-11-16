"use client";

import { useState, useEffect } from "react";
import { useBookingModal } from "@/context/BookingModalContext";
import { Calendar } from "lucide-react";

export function MobileFloatingBookingBar() {
  const [visible, setVisible] = useState(false);
  const { isOpen, openBookingModal } = useBookingModal();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;

      // Show after 10% scroll depth or >180px
      const past10Percent = scrollPercent >= 10 || currentScrollY >= 180;

      if (!past10Percent) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = Math.max(0, currentScrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Do not render or display the floating bar when the booking modal form is currently open
  const shouldShow = visible && !isOpen;

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 z-40 md:hidden transition-all duration-300 pointer-events-none ${
        shouldShow
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="max-w-md mx-auto pointer-events-auto">
        <button
          onClick={() => openBookingModal()}
          className="w-full rounded-full bg-[#1A1A1A]/85 backdrop-blur-xl border border-white/10 text-white py-3 px-5 sm:px-6 shadow-[0_16px_32px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.1)] flex items-center justify-between transition-all duration-200 active:scale-[0.98] cursor-pointer"
          style={{ WebkitBackdropFilter: "blur(16px)" }}
          aria-label="Book your stay at Lavra Luxury Camp"
        >
          {/* Left: Icon & Non-wrapping Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Calendar className="w-4 h-4 text-[#C86D44] shrink-0" />
            <span className="text-[12px] sm:text-[13px] font-sans-clean font-semibold tracking-[0.16em] uppercase whitespace-nowrap text-white">
              BOOK YOUR STAY
            </span>
          </div>

          {/* Right: Cohesive pill indicator without contrasting background box */}
          <div className="flex items-center gap-1.5 pl-2 shrink-0">
            <span className="text-[10px] sm:text-[11px] font-sans-clean font-medium tracking-[0.14em] uppercase text-[#EBDDD8] whitespace-nowrap">
              BEST DIRECT RATE
            </span>
            <span className="text-[#C86D44] text-xs font-semibold">→</span>
          </div>
        </button>
      </div>
    </div>
  );
}


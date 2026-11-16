"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { propertyData } from "@/data/property";

interface BookingBarProps {
  variant?: "floating" | "inline";
}

export function BookingBar({ variant = "floating" }: BookingBarProps) {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<string>("2 Guests");
  const [roomType, setRoomType] = useState<string>("Superior Deluxe Double or Twin Room");

  function handleDirectBooking() {
    const url = generateWhatsAppUrl({
      name: "Guest",
      checkIn: checkIn || "Flexible",
      checkOut: checkOut || "Flexible",
      guests,
      roomType,
      message: "Inquiring about best available direct booking rates.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const isFloating = variant === "floating";

  return (
    <div
      className={
        isFloating
          ? "w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -mt-10 sm:-mt-14"
          : "w-full bg-[#FFFFFF] border border-[#E5E0D8] p-6 shadow-sm"
      }
    >
      <div className="bg-[#FFFFFF] border border-[#E5E0D8] shadow-xl p-4 sm:p-6 rounded-none">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Check-In Date */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-[#E5E0D8] pb-3 lg:pb-0 lg:pr-4">
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C86D44] mb-1 font-sans-clean">
              Check-In Date
            </label>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#7B8B76]" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-xs sm:text-sm font-sans-clean text-[#22201E] bg-transparent border-none p-0 focus:ring-0 outline-none cursor-pointer"
                placeholder="Select date"
              />
            </div>
          </div>

          {/* Check-Out Date */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-[#E5E0D8] pb-3 lg:pb-0 lg:pr-4">
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C86D44] mb-1 font-sans-clean">
              Check-Out Date
            </label>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#7B8B76]" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-xs sm:text-sm font-sans-clean text-[#22201E] bg-transparent border-none p-0 focus:ring-0 outline-none cursor-pointer"
                placeholder="Select date"
              />
            </div>
          </div>

          {/* Guests Count */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-[#E5E0D8] pb-3 lg:pb-0 lg:pr-4">
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C86D44] mb-1 font-sans-clean">
              Guests
            </label>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#7B8B76]" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-xs sm:text-sm font-sans-clean text-[#22201E] bg-transparent border-none p-0 focus:ring-0 outline-none cursor-pointer"
              >
                <option value="1 Adult">1 Adult (Solo Traveler)</option>
                <option value="2 Adults">2 Adults (Couple / Friends)</option>
              </select>
            </div>
          </div>

          {/* Room Selection */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-[#E5E0D8] pb-3 lg:pb-0 lg:pr-4">
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C86D44] mb-1 font-sans-clean">
              Suite Category
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full text-xs sm:text-sm font-sans-clean text-[#22201E] bg-transparent border-none p-0 focus:ring-0 outline-none cursor-pointer"
            >
              <option value="Superior Deluxe Double or Twin Room">Superior Deluxe Double or Twin Room (40 m²)</option>
              <option value="Superior Double or Twin Room, Balcony">Superior Double or Twin Room (Mountain View)</option>
              <option value="Triple Room, Balcony, Mountain View">Triple Room, Balcony, Mountain View</option>
              <option value="Luxury Triple Room, Balcony">Luxury Triple Room, Balcony, Mountain View</option>
              <option value="Comfort Quadruple Room, Balcony">Comfort Quadruple Room, Balcony</option>
              <option value="Quadruple Room Mountain View">Quadruple Room Mountain View (40 m²)</option>
            </select>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-2 lg:pl-2">
            <button
              onClick={handleDirectBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C86D44] hover:bg-[#B85D3B] text-white px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp</span>
            </button>
            <a
              href={propertyData.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-[#22201E] hover:bg-[#22201E] hover:text-white text-[#22201E] px-4 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200"
            >
              <span>Booking.com</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footnote reassurance */}
        <div className="mt-4 pt-3 border-t border-[#E5E0D8]/60 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#444748] font-sans-clean">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2A4B3C]" />
            <span>Guaranteed Direct Rates: <strong>JOD 75 – JOD 180</strong> / night (Best Rate Guarantee)</span>
          </div>
          <div className="flex items-center gap-4 text-[#7B8B76]">
            <span>• No Booking Fees</span>
            <span>• Free Valet &amp; Private Parking</span>
            <span>• Steps from Visitor Center</span>
          </div>
        </div>
      </div>
    </div>
  );
}


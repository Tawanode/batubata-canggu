"use client";

import { useState, useEffect } from "react";
import { X, Minus, Plus } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import { propertyData } from "@/data/property";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function BookingModal() {
  const { isOpen, closeBookingModal } = useBookingModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const guestsString = `${adults} Adult${adults > 1 ? "s" : ""}${childrenCount > 0 ? `, ${childrenCount} Child${childrenCount > 1 ? "ren" : ""}` : ""
      }`;

    const url = generateWhatsAppUrl({
      name: name.trim() || "Guest",
      email: email.trim(),
      phone: phone.trim(),
      checkIn: checkIn || "Flexible / To be confirmed",
      checkOut: checkOut || "Flexible / To be confirmed",
      guests: guestsString,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto pb-10 sm:pb-6">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        onClick={closeBookingModal}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-[540px] bg-[#FFFFFF] rounded-2xl shadow-2xl p-5 sm:p-10 z-10 my-auto text-[#22201E] border border-[#E5E0D8]/80 animate-in fade-in zoom-in-95 duration-200">

        {/* Header with Title and Top-Right Close Button in same row */}
        <div className="flex items-start justify-between gap-3 pb-1 border-b border-[#E5E0D8]/50 sm:border-none">
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs font-sans-clean font-bold tracking-[0.22em] uppercase text-[#2A4B3C] block">
              LAVRA LUXURY CAMP
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-4xl lg:text-[38px] font-medium text-[#22201E] leading-[1.12]">
              Check Availability
            </h3>
          </div>

          {/* Close Button strictly in top-right */}
          <button
            type="button"
            onClick={closeBookingModal}
            className="modal-close-btn shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF9F6] border border-[#E5E0D8] flex items-center justify-center text-[#444748] hover:text-[#22201E] hover:bg-[#F0ECE1] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="mt-5 sm:mt-8 space-y-4 sm:space-y-6">

          {/* Your Name */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-sans-clean font-semibold text-[#22201E] block">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#FFFFFF] border border-[#D5CEC5] rounded-lg text-sm sm:text-[15px] font-sans-clean font-medium text-[#22201E] placeholder:text-[#999] focus:outline-none focus:border-[#2A4B3C] focus:ring-1.5 focus:ring-[#2A4B3C] transition-all"
            />
          </div>

          {/* Email Address & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-xs sm:text-sm font-sans-clean font-semibold text-[#22201E] block">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#FFFFFF] border border-[#D5CEC5] rounded-lg text-sm sm:text-[15px] font-sans-clean font-medium text-[#22201E] placeholder:text-[#999] focus:outline-none focus:border-[#2A4B3C] focus:ring-1.5 focus:ring-[#2A4B3C] transition-all"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-xs sm:text-sm font-sans-clean font-semibold text-[#22201E] block">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+962 7 XXXX XXXX"
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#FFFFFF] border border-[#D5CEC5] rounded-lg text-sm sm:text-[15px] font-sans-clean font-medium text-[#22201E] placeholder:text-[#999] focus:outline-none focus:border-[#2A4B3C] focus:ring-1.5 focus:ring-[#2A4B3C] transition-all"
              />
            </div>
          </div>

          {/* Check In & Check Out */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2 min-w-0">
              <label className="text-xs sm:text-sm font-sans-clean font-semibold text-[#22201E] block">
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full min-w-0 px-2.5 sm:px-4 py-2.5 sm:py-3 bg-[#FFFFFF] border border-[#D5CEC5] rounded-lg text-xs sm:text-[15px] font-sans-clean font-medium text-[#22201E] focus:outline-none focus:border-[#2A4B3C] focus:ring-1.5 focus:ring-[#2A4B3C] transition-all"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2 min-w-0">
              <label className="text-xs sm:text-sm font-sans-clean font-semibold text-[#22201E] block">
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full min-w-0 px-2.5 sm:px-4 py-2.5 sm:py-3 bg-[#FFFFFF] border border-[#D5CEC5] rounded-lg text-xs sm:text-[15px] font-sans-clean font-medium text-[#22201E] focus:outline-none focus:border-[#2A4B3C] focus:ring-1.5 focus:ring-[#2A4B3C] transition-all"
              />
            </div>
          </div>

          {/* Adults & Children Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-1">
            {/* Adults */}
            <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#FAF9F6] border border-[#E5E0D8] rounded-lg">
              <span className="text-xs sm:text-sm font-sans-clean font-semibold text-[#22201E]">
                Adults
              </span>
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                  className="counter-btn modal-close-btn w-8 h-8 rounded-full border border-[#D5CEC5] bg-white flex items-center justify-center text-[#22201E] hover:bg-[#F0ECE1] active:scale-95 transition-all cursor-pointer"
                  style={{ minHeight: "32px", minWidth: "32px" }}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs sm:text-sm font-sans-clean font-bold text-[#22201E]">
                  {adults}
                </span>
                <button
                  type="button"
                  onClick={() => setAdults((prev) => Math.min(6, prev + 1))}
                  className="counter-btn modal-close-btn w-8 h-8 rounded-full border border-[#D5CEC5] bg-white flex items-center justify-center text-[#22201E] hover:bg-[#F0ECE1] active:scale-95 transition-all cursor-pointer"
                  style={{ minHeight: "32px", minWidth: "32px" }}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#FAF9F6] border border-[#E5E0D8] rounded-lg">
              <span className="text-xs sm:text-sm font-sans-clean font-semibold text-[#22201E]">
                Children
              </span>
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setChildrenCount((prev) => Math.max(0, prev - 1))}
                  className="counter-btn modal-close-btn w-8 h-8 rounded-full border border-[#D5CEC5] bg-white flex items-center justify-center text-[#22201E] hover:bg-[#F0ECE1] active:scale-95 transition-all cursor-pointer"
                  style={{ minHeight: "32px", minWidth: "32px" }}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs sm:text-sm font-sans-clean font-bold text-[#22201E]">
                  {childrenCount}
                </span>
                <button
                  type="button"
                  onClick={() => setChildrenCount((prev) => Math.min(4, prev + 1))}
                  className="counter-btn modal-close-btn w-8 h-8 rounded-full border border-[#D5CEC5] bg-white flex items-center justify-center text-[#22201E] hover:bg-[#F0ECE1] active:scale-95 transition-all cursor-pointer"
                  style={{ minHeight: "32px", minWidth: "32px" }}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Request Availability via WhatsApp Button */}
          <div className="pt-2 sm:pt-4">
            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 px-4 bg-[#2A4B3C] hover:bg-[#1E372C] active:bg-[#15271F] text-white text-xs sm:text-sm font-sans-clean font-bold tracking-wider rounded-lg shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Request Availability via WhatsApp
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

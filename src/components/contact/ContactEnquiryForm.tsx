"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, Mail, Calendar, Users, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { generateWhatsAppUrl, generateMailtoUrl } from "@/lib/whatsapp";

const enquirySchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name (at least 2 characters)"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(6, "Please enter your WhatsApp phone number with country code"),
    checkIn: z.string().min(1, "Please select your check-in date"),
    checkOut: z.string().min(1, "Please select your check-out date"),
    guests: z.enum([
      "1 Adult (Solo)",
      "2 Adults (Couple)",
      "2 Adults (Twin Bed)",
      "3 Adults / Family",
      "4 Adults / Family",
    ]),
    roomPreference: z.enum([
      "Superior Deluxe Double or Twin Room",
      "Superior Double or Twin Room, Balcony, Mountain View",
      "Triple Room, Balcony, Mountain View",
      "Luxury Triple Room, Balcony, Mountain View",
      "Comfort Quadruple Room, Balcony, Mountain View",
      "Quadruple Room Mountain View",
      "Any Available Suite",
    ]),
    message: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.checkIn || !data.checkOut) return true;
      return new Date(data.checkOut) > new Date(data.checkIn);
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOut"],
    }
  );

type EnquiryFormData = z.infer<typeof enquirySchema>;

export function ContactEnquiryForm() {
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      guests: "2 Adults (Couple)",
      roomPreference: "Superior Deluxe Double or Twin Room",
    },
  });

  const formData = watch();

  function onSubmitWhatsApp(data: EnquiryFormData) {
    const url = generateWhatsAppUrl({
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      roomType: data.roomPreference,
      message: data.message,
    });
    setSubmittedSuccess(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleSendEmail() {
    const valid = enquirySchema.safeParse(formData);
    if (!valid.success) {
      alert("Please fill in your name, valid email, and dates first.");
      return;
    }
    const mailto = generateMailtoUrl({
      name: valid.data.fullName,
      email: valid.data.email,
      phone: valid.data.phone,
      checkIn: valid.data.checkIn,
      checkOut: valid.data.checkOut,
      guests: valid.data.guests,
      roomType: valid.data.roomPreference,
      message: valid.data.message,
    });
    window.location.href = mailto;
  }

  return (
    <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-6 sm:p-10 shadow-lg">

      <div className="border-b border-[#E5E0D8] pb-6 mb-8">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C86D44] block font-sans-clean mb-1">
          DIRECT HOST INQUIRY • ZERO COMMISSIONS
        </span>
        <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#22201E] font-light">
          Send a Direct Reservation Request
        </h3>

      </div>

      <form onSubmit={handleSubmit(onSubmitWhatsApp)} className="space-y-6">

        {/* Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Clara Schmidt"
              {...register("fullName")}
              className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean"
            />
            {errors.fullName && (
              <p className="text-xs text-[#BA1A1A] font-sans-clean">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="e.g. clara@domain.com"
              {...register("email")}
              className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean"
            />
            {errors.email && (
              <p className="text-xs text-[#BA1A1A] font-sans-clean">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* WhatsApp Phone & Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
              WhatsApp Number (with Country Code) *
            </label>
            <input
              type="tel"
              placeholder="e.g. +49 170 1234567"
              {...register("phone")}
              className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean"
            />
            {errors.phone && (
              <p className="text-xs text-[#BA1A1A] font-sans-clean">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
              Number of Guests *
            </label>
            <select
              {...register("guests")}
              className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean cursor-pointer"
            >
              <option value="1 Adult (Solo)">1 Adult (Solo Traveler)</option>
              <option value="2 Adults (Couple)">2 Adults (Couple)</option>
              <option value="2 Adults (Twin Bed)">2 Adults (Twin Beds)</option>
              <option value="3 Adults / Family">3 Guests (Triple Suite)</option>
              <option value="4 Adults / Family">4 Guests (Quadruple Suite)</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
              Check-In Date *
            </label>
            <input
              type="date"
              {...register("checkIn")}
              className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean cursor-pointer"
            />
            {errors.checkIn && (
              <p className="text-xs text-[#BA1A1A] font-sans-clean">{errors.checkIn.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
              Check-Out Date *
            </label>
            <input
              type="date"
              {...register("checkOut")}
              className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean cursor-pointer"
            />
            {errors.checkOut && (
              <p className="text-xs text-[#BA1A1A] font-sans-clean">{errors.checkOut.message}</p>
            )}
          </div>
        </div>

        {/* Room Preference */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
            Room Category Preference
          </label>
          <select
            {...register("roomPreference")}
            className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean cursor-pointer"
          >
            <option value="Superior Deluxe Double or Twin Room">Superior Deluxe Double or Twin Room (40 m²)</option>
            <option value="Superior Double or Twin Room, Balcony, Mountain View">Superior Double or Twin Room, Balcony, Mountain View</option>
            <option value="Triple Room, Balcony, Mountain View">Triple Room, Balcony, Mountain View</option>
            <option value="Luxury Triple Room, Balcony, Mountain View">Luxury Triple Room, Balcony, Mountain View</option>
            <option value="Comfort Quadruple Room, Balcony, Mountain View">Comfort Quadruple Room, Balcony, Mountain View</option>
            <option value="Quadruple Room Mountain View">Quadruple Room Mountain View (40 m²)</option>
            <option value="Any Available Suite">Any Available Suite</option>
          </select>
        </div>

        {/* Message / Special Requests */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#22201E] font-sans-clean">
            Special Requests / Arrival Time (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Arriving from King Hussein Airport; requesting airport shuttle, guided 4x4 jeep safari, or dietary needs."
            {...register("message")}
            className="w-full bg-[#FAF9F6] border border-[#E5E0D8] px-4 py-3 text-sm text-[#22201E] focus:outline-none focus:border-[#C86D44] font-sans-clean"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C86D44] hover:bg-[#B85D3B] text-white py-4 px-6 text-xs font-semibold tracking-widest uppercase transition-all shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleSendEmail}
            className="inline-flex items-center justify-center gap-2 border border-[#22201E] hover:bg-[#22201E] hover:text-white text-[#22201E] py-4 px-6 text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Send via Email</span>
          </button>
        </div>



        {submittedSuccess && (
          <div className="p-4 bg-[#EBDDD8] text-[#22201E] text-xs font-sans-clean flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C86D44]" />
            <span>Thank you! WhatsApp has opened in a new tab. Our Lavra Luxury Camp concierge will reply shortly.</span>
          </div>
        )}

      </form>
    </div>
  );
}


import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Footprints,
  Clock,
  Compass,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import { propertyData } from "@/data/property";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Reservations | Lavra Luxury Camp Wadi Rum",
  description:
    "Connect directly with Lavra Luxury Camp in Wadi Rum Protected Area, Jordan. Direct WhatsApp reservations, 24-hour reception desk, and desert safari assistance.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7F5F0]">

      {/* Hero */}
      <section className="py-14 sm:py-20 border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            alignment="center"


            title="Connect with Lavra Luxury Camp"
            subtitle="Reach out directly to our 24-hour front desk for real-time room availability, airport transfer coordination, and desert tour reservations."
          />
        </div>
      </section>

      {/* Main Grid: Contact Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Verified Contact Details & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">

            {/* Direct Host Contact Box */}
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-8 shadow-xs space-y-6">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C86D44] font-sans-clean block">
                VERIFIED PROPERTY DETAILS
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#22201E] font-light">
                Lavra Luxury Camp Hotel
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#444748] font-sans-clean">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C86D44] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201E] block font-semibold">Address &amp; Location</strong>
                    <span>
                      Ram Street, Wadi Rum Protected Area, Wadi Rum Village, Al &apos;Aqabah, Jordan (Plus Code: HCFC+QC5)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C86D44] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201E] block font-semibold">Phone &amp; WhatsApp</strong>
                    <div className="space-y-1 mt-0.5">
                      <a
                        href={`https://wa.me/${propertyData.contact.whatsappPrimary}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C86D44] hover:underline font-semibold block"
                      >
                        {propertyData.contact.whatsappFormatted} (Primary WhatsApp &amp; Front Desk)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C86D44] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201E] block font-semibold">Email Enquiries</strong>
                    <a
                      href={`mailto:${propertyData.contact.email}`}
                      className="text-[#22201E] hover:text-[#C86D44] transition-colors"
                    >
                      {propertyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <InstagramIcon className="w-5 h-5 text-[#C86D44] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201E] block font-semibold">Instagram</strong>
                    <a
                      href="https://instagram.com/lavraluxurycamp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#22201E] hover:text-[#C86D44] transition-colors"
                    >
                      @lavraluxurycamp
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Booking Channels */}
              <div className="pt-6 border-t border-[#E5E0D8] space-y-3">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7B8B76] font-sans-clean block">
                  OFFICIAL ONLINE BOOKING CHANNELS
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={propertyData.contact.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-[#E5E0D8] hover:border-[#22201E] px-4 py-3 text-xs font-sans-clean text-[#22201E] transition-colors"
                  >
                    <span>Reserve via Booking.com</span>
                    <ArrowUpRight className="w-4 h-4 text-[#7B8B76]" />
                  </a>
                  <a
                    href={propertyData.contact.agodaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-[#E5E0D8] hover:border-[#22201E] px-4 py-3 text-xs font-sans-clean text-[#22201E] transition-colors"
                  >
                    <span>Reserve via Agoda</span>
                    <ArrowUpRight className="w-4 h-4 text-[#7B8B76]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Check-In / Check-Out House Rules */}
            <div className="bg-[#FAF9F6] border border-[#E5E0D8] p-6 text-xs text-[#444748] font-sans-clean space-y-2">
              <span className="font-semibold uppercase tracking-wider text-[#22201E] block">
                Stay Details &amp; Policies:
              </span>
              <p>&bull; <strong>Check-in:</strong> 8:00 AM &ndash; 10:30 PM (24-hour reception desk)</p>
              <p>&bull; <strong>Check-out:</strong> 7:00 AM &ndash; 11:30 AM (express check-out available)</p>
              <p>&bull; <strong>Breakfast Buffet:</strong> Complimentary daily (7:30 AM &ndash; 8:30 AM)</p>
              <p>&bull; <strong>Pet Policy:</strong> Pet-friendly (allowed at no extra charge upon advance request)</p>
              <p>&bull; <strong>Transport &amp; Parking:</strong> Free private and valet parking on-site; airport shuttles available</p>
            </div>

          </div>

          {/* Right Column: Interactive Frontend Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactEnquiryForm />
          </div>

        </div>
      </section>

      {/* Interactive Location & Neighbourhood Map Section */}
      <section className="py-16 bg-[#FAF9F6] border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>

              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#22201E] font-light">
                In the Heart of Wadi Rum
              </h2>
            </div>

          </div>

          {/* Walking Distance Markers Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans-clean">
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">Wadi Rum Visitor Center</strong>
              <span className="text-[#7B8B76]">Steps away (150 m)</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">Sunset Point</strong>
              <span className="text-[#7B8B76]">10-minute drive</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">Canyon Kakharas</strong>
              <span className="text-[#7B8B76]">3.2 km (5-min drive)</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">King Hussein Airport</strong>
              <span className="text-[#7B8B76]">1h 7m (Shuttle available)</span>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-[450px] border border-[#E5E0D8] shadow-md overflow-hidden relative">
            <iframe
              src={propertyData.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="LAVRA LUXURY CAMP Google Map Pin"
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

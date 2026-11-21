import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Footprints,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import { propertyData } from "@/data/property";

export const metadata: Metadata = {
  title: "Contact & Reservations | Magic Rum Hussain Wadi Rum",
  description:
    "Connect directly with Hussen Al-Zawaideh at Magic Rum Hussain (Magic Rum Luxury Hussen) in Wadi Rum, Jordan. Direct WhatsApp reservations +962 7 7683 8471, village pickup coordination, and 4x4 desert tours.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7F5F0]">

      {/* Hero */}
      <section className="py-14 sm:py-20 border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            alignment="center"
            title="Connect with Magic Rum Hussain"
            subtitle="Reach out directly to local host Hussen Al-Zawaideh and family for real-time room and bubble dome availability, village 4x4 pickup, and desert safari planning."
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
                Magic Rum Hussain
              </h3>


              <div className="space-y-4 text-xs sm:text-sm text-[#444748] font-sans-clean">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C86D44] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201E] block font-semibold">Address &amp; Location</strong>
                    <span>
                      Wadi Rum Road (طريق وادي رم), Ad Disah, Wadi Rum Protected Area, Aqaba Governorate, Jordan
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
                        {propertyData.contact.whatsappFormatted} (Call &amp; Direct WhatsApp)
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
                      href="https://instagram.com/magicrumhussain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#22201E] hover:text-[#C86D44] transition-colors"
                    >
                      @magicrumhussain
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact Actions: Call Now, WhatsApp, Get Directions */}
              <div className="pt-4 border-t border-[#E5E0D8] space-y-2.5">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#747878] font-sans-clean block">
                  DIRECT ACTIONS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-sans-clean">
                  <a
                    href="tel:+962776838471"
                    className="bg-[#22201E] hover:bg-black text-white py-2.5 px-3 uppercase tracking-wider font-medium text-[10px] transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/962776838471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C86D44] hover:bg-[#B85D3B] text-white py-2.5 px-3 uppercase tracking-wider font-medium text-[10px] transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://maps.google.com/?q=Wadi+Rum+Road,+Ad+Disah,+Jordan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#22201E] hover:bg-[#22201E] hover:text-white text-[#22201E] py-2.5 px-3 uppercase tracking-wider font-medium text-[10px] transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Official Booking Channels */}
              <div className="pt-4 border-t border-[#E5E0D8] space-y-3">
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

            {/* Helpful Guest Notes */}
            <div className="bg-[#FAF9F6] border border-[#E5E0D8] p-6 text-xs text-[#444748] font-sans-clean space-y-2">
              <span className="font-semibold uppercase tracking-wider text-[#22201E] block mb-1">
                Helpful Guest Notes &amp; Policies:
              </span>
              <p>&bull; <strong>Check-in &amp; Check-out:</strong> 24-hour check-in and check-out available; no age restrictions.</p>
              <p>&bull; <strong>Pet Policy:</strong> Pets are welcome at no extra charge.</p>
              <p>&bull; <strong>Protected Area Entry:</strong> Entry to the Wadi Rum Protected Area requires a separate visitor fee or valid Jordan Pass.</p>
            </div>

          </div>

          {/* Right Column: Interactive Frontend Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactEnquiryForm />
          </div>

        </div>
      </section>

      {/* Interactive Location & Landmarks Section */}
      <section className="py-16 bg-[#FAF9F6] border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#22201E] font-light">
                In the Heart of Wadi Rum
              </h2>

            </div>
          </div>

          {/* Landmarks Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans-clean">
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">Hashim Cafeteria</strong>
              <span className="text-[#7B8B76]">600 m away</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">Al-Disah Train Station</strong>
              <span className="text-[#7B8B76]">4.9 km (محطة الديسة)</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">Seven Mountains Rest.</strong>
              <span className="text-[#7B8B76]">11 km</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-4 text-center">
              <Footprints className="w-4 h-4 text-[#C86D44] mx-auto mb-1" />
              <strong className="block text-[#22201E]">King Hussein Airport</strong>
              <span className="text-[#7B8B76]">69–70 km (Shuttle available)</span>
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
              title="Magic Rum Hussain Google Map Location"
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

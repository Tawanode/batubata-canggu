import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { propertyData } from "@/data/property";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#22201E] text-[#F7F5F0] pt-16 lg:pt-20 pb-10 border-t border-[#380D00]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">

          {/* Col 1: Wordmark & Host Story (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-editorial text-3xl sm:text-4xl font-light tracking-[0.24em] uppercase text-white">
                MAGIC RUM HUSSAIN
              </span>
              <span className="text-[10px] tracking-[0.3em] font-semibold text-[#FFDBCF] uppercase font-sans-clean">
                WADI RUM • JORDAN
              </span>
            </div>

            <p className="text-sm text-[#E5E0D8]/80 leading-relaxed max-w-md pt-2 font-sans-clean">
              Family-run 5-star Bedouin desert camp and bubble dome glamping in the heart of Wadi Rum, Jordan.
              Spacious 50 m² air-conditioned rooms, panoramic Martian bubble domes, and slow-cooked Zarb dinners with Hussen and his family.
            </p>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#EBDDD8] font-sans-clean">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#E5E0D8]/80 font-sans-clean">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="hover:text-white transition-colors">
                  Rooms &amp; Bubble Domes
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-white transition-colors">
                  Desert Excursions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Camp
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Location &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#EBDDD8] font-sans-clean">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#E5E0D8]/80 font-sans-clean">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C86D44] shrink-0 mt-0.5" />
                <span>
                  Wadi Rum Road (طريق وادي رم), Ad Disah, Wadi Rum, Jordan
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C86D44] shrink-0" />
                <a
                  href={`tel:${propertyData.contact.whatsappPrimary}`}
                  className="hover:text-white transition-colors"
                >
                  {propertyData.contact.whatsappFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C86D44] shrink-0" />
                <a
                  href={`mailto:${propertyData.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {propertyData.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#C86D44] shrink-0" />
                <a
                  href="https://instagram.com/magicrumhussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @magicrumhussain
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Verified Booking Channels (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#EBDDD8] font-sans-clean">
              Reservations
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans-clean">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between bg-[#C86D44] hover:bg-[#B85D3B] text-white px-3.5 py-2.5 text-[11px] font-semibold tracking-wider uppercase transition-colors"
              >
                <span>WhatsApp Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={propertyData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between border border-white/20 hover:border-white text-white/90 hover:text-white px-3.5 py-2 text-[11px] tracking-wider uppercase transition-colors"
              >
                <span>Booking.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={propertyData.contact.agodaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between border border-white/20 hover:border-white text-white/90 hover:text-white px-3.5 py-2 text-[11px] tracking-wider uppercase transition-colors"
              >
                <span>Agoda</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#7B8B76] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C86D44]" />
              <span>9.3 / 10 Superb Rating (71 Reviews)</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans-clean">
          <p>© 2026 Magic Rum Hussain. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
            <span>5-Star Bedouin Camp &amp; Glamping</span>
            <span>•</span>
            <span>Wadi Rum Protected Area</span>
            <span>•</span>
            <span>Panoramic Bubble Domes</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

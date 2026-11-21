"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageSquare, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { propertyData } from "@/data/property";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "Experiences & Desert Tours", href: "/experiences" },
  { name: "About Our Camp", href: "/about" },
  { name: "Contact & Booking", href: "/contact" },
];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-50 bg-[#F7F5F0] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top header row */}
          <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-6">
            <Link href="/" onClick={onClose} className="flex flex-col">
              <span className="font-serif-editorial text-2xl font-light tracking-[0.24em] text-[#22201E] uppercase">
                MAGIC RUM HUSSAIN
              </span>
              <span className="text-[9px] font-sans-clean tracking-[0.28em] text-[#C86D44] uppercase font-semibold">
                WADI RUM • JORDAN
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2.5 text-[#22201E] hover:text-[#C86D44] transition-colors rounded-full border border-[#E5E0D8]"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Serif Links */}
          <nav className="my-auto py-10 flex flex-col space-y-6">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block font-serif-editorial text-3xl sm:text-4xl font-light transition-colors ${isActive
                          ? "text-[#C86D44] italic pl-2 border-l-2 border-[#C86D44]"
                          : "text-[#22201E] hover:text-[#C86D44]"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </nav>

          {/* Quick Actions & Contact Details */}
          <div className="border-t border-[#E5E0D8] pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C86D44] text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.2em] shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Hussen (+962 7)</span>
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 border border-[#22201E] text-[#22201E] py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Check Availability
              </Link>
            </div>

            {/* Address, Phone and Social Media */}
            <div className="hidden sm:block text-xs text-[#444748] space-y-1 font-sans-clean pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C86D44] shrink-0" />
                <span>{propertyData.location.address}, Jordan</span>
              </p>
              <div className="flex items-center gap-6 pt-2 text-[11px] font-semibold text-[#7B8B76]">
                <a
                  href={`tel:${propertyData.contact.whatsappPrimary}`}
                  className="flex items-center gap-1 hover:text-[#22201E]"
                >
                  <Phone className="w-3 h-3" />
                  <span>{propertyData.contact.whatsappFormatted}</span>
                </a>
                <a
                  href="https://instagram.com/magicrumhussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#22201E]"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@magicrumhussain</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { useBookingModal } from "@/context/BookingModalContext";

const links = [
  { name: "HOME", href: "/" },
  { name: "ACCOMMODATION", href: "/accommodation" },
  { name: "EXPERIENCES", href: "/experiences" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hideMobileNav, setHideMobileNav] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  const isHome = pathname === "/";
  const isExperiences = pathname === "/experiences";
  const isAbout = pathname === "/about";
  const hasDarkHero = isHome || isExperiences || isAbout;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Header style: scrolled (solid/backdrop) vs transparent
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Mobile smart header behavior:
      // Always show when close to top
      if (currentScrollY <= 60) {
        setHideMobileNav(false);
      } else {
        // Scrolling up -> reveal navbar
        if (currentScrollY < lastScrollY - 4) {
          setHideMobileNav(false);
        }
        // Scrolling down -> hide navbar
        else if (currentScrollY > lastScrollY + 4) {
          setHideMobileNav(true);
        }
      }

      lastScrollY = Math.max(0, currentScrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = hasDarkHero && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 w-full ${hideMobileNav ? "-translate-y-full md:translate-y-0" : "translate-y-0"
          } ${isTransparent
            ? "bg-transparent text-white py-6 px-6 sm:px-12"
            : "bg-[#F7F5F0]/95 backdrop-blur-md text-[#22201E] border-b border-[#E5E0D8] py-4 px-6 sm:px-12 shadow-xs"
          }`}
      >
        <div className="w-full flex items-center justify-between">

          {/* Brand Logo (Left): Lowercase serif "magic rum" + " · hussain" */}
          <Link href="/" className="inline-flex items-baseline md:items-baseline gap-1.5 sm:gap-2 group">
            <span
              className={`font-serif-editorial text-[26px] sm:text-[32px] font-normal lowercase tracking-normal leading-none whitespace-nowrap transition-colors ${isTransparent ? "text-white" : "text-[#22201E] group-hover:text-[#C86D44]"
                }`}
            >
              magic rum
            </span>
            <span
              className={`font-sans-clean text-[13px] sm:text-[15px] tracking-[0.16em] sm:tracking-[0.2em] font-light whitespace-nowrap transition-colors ${isTransparent ? "text-white/80" : "text-[#7B8B76]"
                }`}
            >
              · hussain
            </span>
          </Link>

          {/* Center: Desktop Navigation Links (11px uppercase sans-serif, tracking-[0.2em], text-white/90) */}
          <nav className="hidden md:flex items-center space-x-9">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-medium tracking-[0.2em] uppercase font-sans-clean transition-all duration-200 py-1 ${isActive
                    ? isTransparent
                      ? "text-white border-b border-white"
                      : "text-[#C86D44] border-b border-[#C86D44]"
                    : isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-[#444748] hover:text-[#22201E]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language + Solid White Rectangular CTA ("BOOK NOW") */}
          <div className="hidden lg:flex items-center space-x-7">
            <span
              className={`text-[11px] font-medium tracking-[0.18em] uppercase ${isTransparent ? "text-white" : "text-[#7B8B76]"
                }`}
            >
              EN <span className="opacity-40">/</span> AR
            </span>

            <button
              onClick={() => openBookingModal()}
              className={`${isTransparent
                  ? "bg-white text-neutral-900 hover:bg-neutral-200"
                  : "bg-black text-white hover:bg-neutral-800"
                } px-6 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase rounded-none transition shadow-xs cursor-pointer`}
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="bg-white text-neutral-900 px-4 py-2 text-[10px] font-medium tracking-widest uppercase cursor-pointer"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 transition-colors ${isTransparent ? "text-white hover:text-[#FFDBCF]" : "text-[#22201E] hover:text-[#C86D44]"
                }`}
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { GlobalMotionProvider } from "@/components/shared/GlobalMotionProvider";
import { BookingModalProvider } from "@/context/BookingModalContext";
import { BookingModal } from "@/components/shared/BookingModal";
import { MobileFloatingBookingBar } from "@/components/shared/MobileFloatingBookingBar";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://magicrumhussain.com"),
  title: {
    default: "Magic Rum Hussain | 5-Star Bubble Domes & Desert Camp in Wadi Rum",
    template: "%s | Magic Rum Hussain Wadi Rum",
  },
  description:
    "Stay at Magic Rum Hussain (Magic Rum Luxury Hussen) in Wadi Rum, Jordan. Enjoy 50 m² air-conditioned rooms, Martian bubble domes, traditional Zarb dinners, and 4x4 Jeep tours. WhatsApp +962 7 7683 8471.",
  keywords: [
    "Magic Rum Hussain",
    "Magic Rum Luxury Hussen",
    "Wadi Rum bubble domes",
    "Bedouin desert camp Jordan",
    "Wadi Rum Jeep tours",
    "pet-friendly glamping Wadi Rum",
    "Hussen Al-Zawaideh",
    "Ad Disah Wadi Rum",
    "Wadi Rum Protected Area camp",
  ],
  authors: [{ name: "Hussen Al-Zawaideh and Family" }],
  creator: "Magic Rum Hussain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://magicrumhussain.com",
    siteName: "Magic Rum Hussain",
    title: "Magic Rum Hussain | 5-Star Bubble Domes & Desert Camp in Wadi Rum",
    description:
      "Stay at Magic Rum Hussain (Magic Rum Luxury Hussen) in Wadi Rum, Jordan. Enjoy 50 m² air-conditioned rooms, Martian bubble domes, traditional Zarb dinners, and 4x4 Jeep tours. WhatsApp +962 7 7683 8471.",
    images: [
      {
        url: "/images/hero/hero-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Magic Rum Hussain 5-star Bedouin desert camp and panoramic Martian bubble domes in Wadi Rum, Jordan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Rum Hussain | 5-Star Bubble Domes & Desert Camp in Wadi Rum",
    description:
      "Sleep beneath the stars in panoramic bubble domes, savor traditional underground Zarb dinners, and experience genuine Bedouin hospitality with Hussen and his family in Wadi Rum.",
    images: ["/images/hero/hero-aerial.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for LodgingBusiness / Camp
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Resort", "Campground"],
    name: "Magic Rum Hussain",
    alternateName: "Magic Rum Luxury Hussen",
    description:
      "A 5-star family-run Bedouin desert camp and glamping accommodation in the Wadi Rum Protected Area near Ad Disah, Jordan. Managed by local host Hussen Al-Zawaideh and his family, featuring 50 m² air-conditioned rooms, panoramic Martian bubble domes with fireplaces and reliable heating, traditional underground Zarb dinners, and 4x4 Jeep safaris.",
    image: "https://magicrumhussain.com/images/hero/hero-aerial.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wadi Rum Road (طريق وادي رم)",
      addressLocality: "Ad Disah, Wadi Rum Protected Area",
      addressRegion: "Aqaba Governorate",
      postalCode: "77110",
      addressCountry: "JO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.6581,
      longitude: 35.5186,
    },
    telephone: "+962 7 7683 8471",
    priceRange: "JOD 65 - JOD 160",
    checkinTime: "00:00",
    checkoutTime: "23:59",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.3",
      reviewCount: "71",
      bestRating: "10.0",
      worstRating: "1.0",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Superb Free Wi-Fi across all areas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Panoramic Martian Bubble Domes", value: true },
      { "@type": "LocationFeatureSpecification", name: "In-Room Fireplace & Climate AC / Heating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private Mountain & Landmark View Terraces", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Private Parking & EV Charging Station", value: true },
      { "@type": "LocationFeatureSpecification", name: "Traditional Underground Zarb Dinners", value: true },
      { "@type": "LocationFeatureSpecification", name: "Family-Friendly Halal Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Guided 4x4 Jeep Tours & Camel Rides", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk & Express Check-In/Out", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet-Friendly (No Extra Charge)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible Ground-Floor Units", value: true },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${alexBrush.variable} antialiased selection:bg-[#C86D44] selection:text-white`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#22201E] font-sans-clean"
        suppressHydrationWarning
      >
        <BookingModalProvider>
          <SmoothScrollProvider>
            <GlobalMotionProvider />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BookingModal />
            <MobileFloatingBookingBar />
          </SmoothScrollProvider>
        </BookingModalProvider>
      </body>
    </html>
  );
}

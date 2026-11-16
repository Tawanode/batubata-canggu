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
  metadataBase: new URL("https://lavraluxurycamp.com"),
  title: {
    default: "Lavra Luxury Camp | 5-Star Desert Aparthotel in Wadi Rum",
    template: "%s | Lavra Luxury Camp Wadi Rum",
  },
  description:
    "Experience contemporary city luxury in the remote wilderness at Lavra Luxury Camp. A 5-star aparthotel in Wadi Rum, Jordan featuring AC rooms, mountain views, and guided desert tours.",
  keywords: [
    "Lavra Luxury Camp",
    "5-star camp Wadi Rum",
    "luxury aparthotel Jordan",
    "Wadi Rum desert resort",
    "luxury desert glamping",
    "Wadi Rum accommodation",
    "Ram Street Wadi Rum",
    "Jordan desert camp",
    "Wadi Rum Protected Area hotel",
  ],
  authors: [{ name: "Lavra Luxury Camp Hospitality" }],
  creator: "Lavra Luxury Camp",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lavraluxurycamp.com",
    siteName: "Lavra Luxury Camp",
    title: "Lavra Luxury Camp | 5-Star Desert Aparthotel in Wadi Rum",
    description:
      "Experience contemporary city luxury in the remote wilderness at Lavra Luxury Camp. A 5-star aparthotel in Wadi Rum, Jordan featuring AC rooms, mountain views, and guided desert tours.",
    images: [
      {
        url: "/images/hero/hero-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Lavra Luxury Camp 5-star desert aparthotel nestled beneath Wadi Rum mountains in Jordan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavra Luxury Camp | 5-Star Desert Aparthotel in Wadi Rum",
    description:
      "A unique fusion of remote wilderness expedition and contemporary 5-star city luxury. Direct mountain views, climate-controlled rooms, and guided jeep safaris.",
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
  // Structured Data (JSON-LD) for LodgingBusiness / Hotel
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness", "Resort"],
    name: "Lavra Luxury Camp",
    alternateName: "Lavra Luxury Camp Hotel",
    description:
      "A 5-star desert aparthotel in the heart of Wadi Rum Protected Area, Jordan. Features 30 distinct climate-controlled guestrooms and ground-floor apartments with direct mountain views, on-site multi-cuisine restaurant, central outdoor fireplace, and guided desert tours.",
    image: "https://lavraluxurycamp.com/images/hero/hero-aerial.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ram Street",
      addressLocality: "Wadi Rum Protected Area, Wadi Rum Village",
      addressRegion: "Al 'Aqabah",
      postalCode: "77110",
      addressCountry: "JO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.5735,
      longitude: 35.4198,
    },
    telephone: "+962 7 7239 0552",
    priceRange: "JOD 75 - JOD 180",
    checkinTime: "08:00",
    checkoutTime: "11:30",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.0",
      reviewCount: "320",
      bestRating: "5.0",
      worstRating: "1.0",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free High-Speed Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Climate-Controlled Air Conditioning & Heating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private Balcony with Mountain Views", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Private & Valet Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Central Outdoor Fireplace & Stargazing", value: true },
      { "@type": "LocationFeatureSpecification", name: "Multi-Cuisine Restaurant & Coffee Shop", value: true },
      { "@type": "LocationFeatureSpecification", name: "Guided Desert Jeep Tours & Camel Rides", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Reception Desk", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet-Friendly (Upon Request)", value: true },
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

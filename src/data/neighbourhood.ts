import { Attraction } from "@/types";

export const attractionsData: Attraction[] = [
  // Immediate Vicinity (Steps Away & Under 5 Minutes)
  {
    id: "visitor-center",
    name: "Wadi Rum Visitor Center",
    distance: "150 m",
    walkTime: "Steps away (2-minute stroll)",
    category: "immediate",
    description:
      "The official gateway to the Wadi Rum Protected Area. Arrange permits, gather park maps, view historical exhibits, and meet verified local Bedouin desert guides just moments from our camp.",
    highlight: "Effortless access right at the camp's doorstep",
    image: "/images/neighbourhood/canggu-street.jpg",
  },
  {
    id: "central-fireplace",
    name: "Central Outdoor Fireplace & Stargazing Pit",
    distance: "On-site",
    walkTime: "Steps away",
    category: "immediate",
    description:
      "Gather around our glowing central fire pit beneath pristine international dark skies. Enjoy nightly traditional Bedouin cultural shows, authentic live lute music, and astronomical stargazing.",
    highlight: "Nightly Bedouin music, warm tea, and celestial stargazing",
    image: "/images/architecture/temple-offering.jpg",
  },
  {
    id: "camp-restaurant",
    name: "Lavra Multi-Cuisine Restaurant & Coffee Shop",
    distance: "On-site",
    walkTime: "Within the camp",
    category: "immediate",
    description:
      "Offering a diverse international culinary spread (African, Catalan, Dutch, Greek, Indian) alongside daily vegan and vegetarian options. Complimentary buffet breakfast served 7:30 AM–8:30 AM with takeaway boxes for dawn expeditions.",
    highlight: "Diverse international gastronomy with mountain views",
    image: "/images/neighbourhood/canggu-cafe.jpg",
  },
  {
    id: "tour-desk-rentals",
    name: "Expedition Tour Desk & Bicycle Hires",
    distance: "On-site",
    walkTime: "At reception",
    category: "immediate",
    description:
      "Our internal tour assistance desk arranges custom 4x4 desert jeep safaris, guided mountain hikes, camel caravans across red sand dunes, and mountain bicycle hires for independent trail rides.",
    highlight: "Personalized desert jeep safaris and guided excursions",
  },

  // Short Excursions (5 to 15 Minutes)
  {
    id: "sunset-point",
    name: "Wadi Rum Sunset Point",
    distance: "4.5 km",
    walkTime: "10-minute drive",
    category: "walk",
    description:
      "The iconic viewing vantage where the golden hour transforms the Martian valley into vibrant shades of amber, copper, and violet against soaring sandstone cliffs.",
    highlight: "World-famous panoramic desert sunsets and photography",
    image: "/images/neighbourhood/batu-bolong-surf.jpg",
  },
  {
    id: "canyon-kakharas",
    name: "Canyon Kakharas",
    distance: "3.2 km",
    walkTime: "8-minute drive / guided trek",
    category: "walk",
    description:
      "A dramatic natural gorge flanked by soaring sheer sandstone walls. Famous for ancient wind-carved rock formations and cool shaded canyon walking paths.",
    highlight: "Stunning geological gorge with ancient wind-sculpted rock walls",
  },
  {
    id: "nabataean-temple",
    name: "Nabataean Temple & Ancient Inscriptions",
    distance: "8.2 km",
    walkTime: "15-minute drive / jeep tour",
    category: "beach", // using existing category key
    description:
      "Ruins of a 1st-century BC temple dedicated to the goddess Allat, constructed by the same ancient civilization that built Petra. Surrounded by Thamudic rock inscriptions.",
    highlight: "Millennia of historic Nabataean ruins and desert petroglyphs",
  },
  {
    id: "deeseh-station",
    name: "Deeseh Knowledge Station",
    distance: "14.7 km",
    walkTime: "20-minute scenic drive",
    category: "ride",
    description:
      "A prominent regional cultural and educational landmark highlighting local desert conservation, community heritage, and desert agricultural history.",
    highlight: "Regional cultural center showcasing desert heritage",
  },
  {
    id: "king-hussein-airport",
    name: "King Hussein International Airport (AQJ)",
    distance: "68 km",
    walkTime: "1-hour & 7-minute drive",
    category: "ride",
    description:
      "The primary international airport serving Aqaba and the southern Jordanian desert. Lavra Luxury Camp provides seamless private airport shuttles and valet parking.",
    highlight: "Direct airport shuttles and convenient highway connectivity",
  },
];

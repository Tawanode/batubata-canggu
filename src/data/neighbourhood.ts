import { Attraction } from "@/types";

export const attractionsData: Attraction[] = [
  // Immediate Vicinity & Camp Features
  {
    id: "hashim-cafeteria",
    name: "Hashim Cafeteria",
    distance: "600 m",
    walkTime: "Short stroll / 2-minute drive",
    category: "immediate",
    description:
      "Local nearby cafeteria offering authentic Jordanian refreshments, freshly brewed mint tea, and quick bites along Wadi Rum Road.",
    highlight: "Convenient local tea, snacks, and authentic village hospitality",
    image: "/images/neighbourhood/morning-coffee-sourdough.jpg",
  },
  {
    id: "camp-campfire",
    name: "Central Fireplace & Bedouin Campfire",
    distance: "On-site",
    walkTime: "Steps from your tent",
    category: "immediate",
    description:
      "Gather nightly around our outdoor fireplace beneath world-famous dark skies. Savor traditional Bedouin tea, listen to local desert melodies, and gaze at millions of stars.",
    highlight: "Nightly campfire gathering, herbal Bedouin tea & stargazing",
    image: "/images/architecture/temple-offering.jpg",
  },
  {
    id: "camp-dining",
    name: "Traditional Bedouin Restaurant & Zarb Oven",
    distance: "On-site",
    walkTime: "Within the camp",
    category: "immediate",
    description:
      "Family-friendly on-site dining serving exceptional buffet breakfasts and traditional underground-cooked Zarb dinners slow-cooked beneath the sand for hours.",
    highlight: "Authentic slow-cooked underground Zarb & exceptional breakfast",
    image: "/images/neighbourhood/camp-dining-coffee.jpg",
  },
  {
    id: "tour-desk",
    name: "Excursion Tour Desk & 4x4 Jeep Safaris",
    distance: "On-site",
    walkTime: "Coordinated with Hussen",
    category: "immediate",
    description:
      "Coordinated directly by Hussen and his family: half-day, full-day, and sunset 4x4 safaris across sand dunes, canyons, natural rock arches, sandboarding, and camel treks.",
    highlight: "Personalized Bedouin-guided 4x4 Jeep tours & camel rides",
  },

  // Regional Landmarks & Cultural Sites
  {
    id: "al-disah-station",
    name: "Al-Disah Train Station (محطة الديسة)",
    distance: "4.9 km",
    walkTime: "6-minute drive",
    category: "walk",
    description:
      "Historic regional landmark in Ad Disah along the legendary Hejaz Railway line, framed by spectacular desert massifs and date palm groves.",
    highlight: "Historic desert railway heritage and photographic desert backdrop",
    image: "/images/neighbourhood/canggu-street.jpg",
  },
  {
    id: "seven-mountains",
    name: "Seven Mountains Restaurant",
    distance: "11 km",
    walkTime: "12-minute scenic drive",
    category: "walk",
    description:
      "Popular regional culinary stop offering traditional Jordanian dishes, grilled meats, and panoramic views of the Seven Pillars rock formations.",
    highlight: "Renowned local dining overlooking dramatic desert peaks",
  },
  {
    id: "wadi-rum-station",
    name: "Wadi Rum Station",
    distance: "13 km",
    walkTime: "15-minute drive",
    category: "beach", // using category key
    description:
      "Historic Ottoman-era railway stop in the Wadi Rum region, offering travelers an evocative glimpse into early 20th-century desert transit history.",
    highlight: "Ottoman railway outpost set against towering sandstone mountains",
  },
  {
    id: "king-hussein-airport",
    name: "King Hussein International Airport (AQJ)",
    distance: "69–70 km",
    walkTime: "1-hour drive (Airport shuttle available)",
    category: "ride",
    description:
      "The primary airport serving Aqaba and the southern Jordanian desert. Magic Rum Hussain provides punctual private airport shuttle services upon advance request.",
    highlight: "Direct airport transfers & seamless highway connectivity",
  },
  {
    id: "eilat-ramon-airport",
    name: "Eilat-Ramon Airport (ETM)",
    distance: "92 km",
    walkTime: "1h 30m drive via border transit",
    category: "ride",
    description:
      "International airport across the southern border, accessible for international travelers visiting Wadi Rum via the Aqaba/Eilat crossing.",
    highlight: "Regional international gateway with transfer options",
  },
];

import { Room } from "@/types";

export const roomsData: Room[] = [
  {
    id: "superior-king-room",
    name: "Superior King Room",
    tagline: "50 m² panoramic Martian dome & residence framing sandstone mountain views",
    description:
      "Our 50 m² Superior King residence features panoramic geodesic Martian bubble dome views, a cozy indoor fireplace, whisper-quiet air conditioning, and winter heating. Enjoy your choice of 1 large double bed or 2 single beds dressed in premium linens. Step onto your private terrace with serene garden and mountain views, and refresh in your private en-suite bathroom featuring a modern walk-in shower, plush bathrobes, and complimentary toiletries.",
    startingPriceInr: 14500,
    startingPriceIdr: 95,
    startingPriceUsd: 135,
    bedType: "1 Large Double Bed or 2 Single Beds",
    capacity: "2 Guests (Ideal for couples & romantic desert escapes)",
    sizeM2: 50,
    view: "Panoramic Wadi Rum Mountain, Landmark & Garden Views",
    features: [
      "Spacious 50 m² detached ground-floor unit (wheelchair accessible)",
      "Cozy in-room fireplace & climate-controlled AC with reliable heating",
      "Private mountain & garden-view terrace with outdoor seating",
      "Private en-suite bathroom with walk-in shower & premium toiletries",
      "Panoramic geodesic bubble ('Martian') dome window vistas",
      "Coffee machine & electric kettle with complimentary Bedouin tea",
      "Superb free high-speed Wi-Fi (rated 8.8/10) & soundproofing",
      "Private entrance, barbecue access & daily housekeeping",
    ],
    amenities: [
      {
        category: "Sleeping & Comfort",
        items: [
          "Choice of 1 large double bed or 2 single beds with orthopedic mattress",
          "Crisp high-thread-count white cotton linens & warm duvets",
          "Cozy in-room wood-burning fireplace",
          "Reliable whisper-quiet air conditioning & heating",
          "Soundproof architecture & private separate entrance",
        ],
      },
      {
        category: "Private En-Suite Bathroom",
        items: [
          "Spacious private bathroom with walk-in rain shower",
          "Continuous hot water & vanity mirror",
          "Plush towels, bathrobes & complimentary toiletries",
          "Modern fixtures with ground-floor step-free access",
        ],
      },
      {
        category: "Private Terrace & Views",
        items: [
          "Private terrace with mountain, landmark, and desert garden views",
          "Comfortable outdoor seating for sunset and night stargazing",
          "Barbecue facilities access & ambient warm lantern lighting",
        ],
      },
      {
        category: "Inclusions & Services",
        items: [
          "Exceptional daily buffet breakfast at on-site restaurant",
          "Traditional underground-cooked Zarb dinners available nightly",
          "Punctual 4x4 pickup coordination from Wadi Rum Village",
          "Free private parking with EV charging station (no reservation needed)",
          "Pet-friendly accommodation with no extra fees",
        ],
      },
    ],
    images: [
      {
        src: "/images/rooms/king-bed-main.jpg",
        alt: "Superior King Room at Magic Rum Hussain with panoramic mountain views and private terrace",
        caption: "Superior King Room (50 m²) with panoramic mountain vistas and fireplace",
      },
      {
        src: "/images/rooms/veranda-patio.jpg",
        alt: "Private mountain-view terrace overlooking Wadi Rum desert cliffs",
        caption: "Private terrace opening directly toward the dramatic sandstone mountains",
      },
      {
        src: "/images/rooms/ensuite-bathroom.jpg",
        alt: "Modern private bathroom with walk-in shower and hot water",
        caption: "Private en-suite bathroom with walk-in shower and luxury amenities",
      },
      {
        src: "/images/rooms/room-deluxe-angle.jpg",
        alt: "Spacious 50 m² panoramic dome interior with fireplace and climate control",
        caption: "Martian bubble dome comfort nestled within quiet desert scenery",
      },
    ],
  },
  {
    id: "superior-single-room",
    name: "Superior Single Room",
    tagline: "50 m² peaceful desert haven tailored for solo explorers and photographers",
    description:
      "A generous 50 m² detached ground-floor retreat designed for solo travelers. Featuring 1 comfortable single bed, an indoor fireplace, climate-controlled air conditioning, and heating. Step onto your private mountain-view terrace to contemplate the peaceful desert silence, and enjoy a private bathroom with a walk-in shower, coffee machine, electric kettle, and free high-speed Wi-Fi.",
    startingPriceInr: 10500,
    startingPriceIdr: 70,
    startingPriceUsd: 99,
    bedType: "1 Single Bed",
    capacity: "1 Guest (Peaceful solo retreat)",
    sizeM2: 50,
    view: "Unobstructed Wadi Rum Mountain & Desert Views",
    features: [
      "Expansive 50 m² detached layout with private entrance",
      "1 comfortable single bed with premium bedding",
      "Cozy in-room fireplace & climate AC/heating",
      "Private mountain-view terrace with outdoor furniture",
      "Private en-suite bathroom with walk-in shower",
      "Coffee machine, electric kettle & free Wi-Fi",
      "Wheelchair-accessible ground-floor design",
      "Barbecue access & free on-site parking with EV charger",
    ],
    amenities: [
      {
        category: "Room Comfort",
        items: [
          "1 comfortable single bed with premium hypoallergenic bedding",
          "In-room fireplace, heating & air conditioning",
          "Soundproof private entrance & quiet desert atmosphere",
          "Coffee machine, tea maker & complimentary bottled water",
        ],
      },
      {
        category: "Bathroom & Care",
        items: [
          "Private bathroom with walk-in shower & hot water",
          "Plush towels, hairdryer, and complimentary bath products",
        ],
      },
      {
        category: "Outdoors & Inclusions",
        items: [
          "Private mountain-view terrace with seating",
          "Complimentary buffet breakfast & Bedouin tea",
          "Free Wi-Fi across all camp areas & EV charging station",
        ],
      },
    ],
    images: [
      {
        src: "/images/rooms/twin-canopy-bed.jpg",
        alt: "Superior Single Room at Magic Rum Hussain with mountain view terrace",
        caption: "Superior Single Room (50 m²) with private terrace and mountain views",
      },
      {
        src: "/images/rooms/veranda-patio.jpg",
        alt: "Private terrace overlooking the Wadi Rum desert amphitheater",
        caption: "Private terrace overlooking the tranquil desert valley",
      },
      {
        src: "/images/rooms/ensuite-bathroom.jpg",
        alt: "En-suite walk-in shower bathroom",
        caption: "Clean modern bathroom with walk-in shower",
      },
    ],
  },
  {
    id: "superior-triple-room",
    name: "Superior Triple Room",
    tagline: "50 m² spacious sanctuary featuring flexible bedding and mountain terrace",
    description:
      "Ideal for friends or small families traveling together, this 50 m² detached residence offers flexible bedding with a choice of 3 single beds or 1 single bed and 1 large double bed. Includes an ambient fireplace, whisper AC and winter heating, soundproofing, coffee machine, electric kettle, free Wi-Fi, and a private en-suite bathroom with a walk-in shower.",
    startingPriceInr: 16500,
    startingPriceIdr: 110,
    startingPriceUsd: 155,
    bedType: "3 Single Beds or 1 Single Bed + 1 Large Double Bed",
    capacity: "3 Guests (Perfect for small families & travel companions)",
    sizeM2: 50,
    view: "Direct Sandstone Mountain & Desert Landmark Views",
    features: [
      "50 m² spacious detached layout with private entrance",
      "Choice of 3 single beds or 1 single + 1 large double bed",
      "Cozy fireplace & climate AC with reliable heating",
      "Private terrace with panoramic mountain perspectives",
      "Private bathroom with walk-in shower & toiletries",
      "Coffee machine, electric kettle & free high-speed Wi-Fi",
      "Wheelchair accessible & pet-friendly with no surcharge",
    ],
    amenities: [
      {
        category: "Bedding Setup",
        items: [
          "3 single beds or 1 single + 1 double bed with orthopedic support",
          "In-room fireplace, heating & silent air conditioning",
          "Soundproof construction with private entrance",
        ],
      },
      {
        category: "Bathroom & Amenities",
        items: [
          "Private en-suite bathroom with walk-in rain shower",
          "Fresh towels, bathrobes, and complimentary toiletries",
          "Coffee machine and tea making station",
        ],
      },
      {
        category: "Camp Services",
        items: [
          "Daily buffet breakfast & traditional campfire Zarb options",
          "Seamless 4x4 pickup from Wadi Rum Village",
          "Free private parking with EV charging station",
        ],
      },
    ],
    images: [
      {
        src: "/images/rooms/king-bed-main.jpg",
        alt: "Superior Triple Room at Magic Rum Hussain with mountain-view terrace",
        caption: "Superior Triple Room (50 m²) with flexible bedding and mountain terrace",
      },
      {
        src: "/images/rooms/veranda-patio.jpg",
        alt: "Private mountain-view terrace at Magic Rum Hussain",
        caption: "Private terrace facing the towering red sandstone cliffs",
      },
      {
        src: "/images/rooms/ensuite-bathroom.jpg",
        alt: "Walk-in shower bathroom with modern fixtures",
        caption: "Private en-suite bathroom with walk-in shower",
      },
    ],
  },
  {
    id: "superior-quadruple-room",
    name: "Superior Quadruple Room",
    tagline: "50 m² desert comfort for groups with 4 single beds or 1 double and 2 singles",
    description:
      "A grand 50 m² ground-floor suite designed for families or trekking groups of four. Features your choice of 4 single beds or 2 single beds and 1 large double bed, an indoor fireplace, climate-controlled heating and AC, soundproofing, and a private entrance. Enjoy morning coffee on your mountain-view terrace before setting out on a desert Jeep tour.",
    startingPriceInr: 19500,
    startingPriceIdr: 130,
    startingPriceUsd: 185,
    bedType: "4 Single Beds or 2 Single Beds + 1 Large Double Bed",
    capacity: "4 Guests (Comfortable group & family living)",
    sizeM2: 50,
    view: "Sandstone Massifs & Stargazing Mountain Panoramas",
    features: [
      "50 m² expansive detached layout (wheelchair accessible)",
      "Choice of 4 single beds or 2 singles + 1 large double bed",
      "Cozy in-room fireplace & complete climate AC/heating",
      "Private mountain-view terrace with outdoor furniture",
      "Private en-suite bathroom with walk-in shower",
      "Coffee machine, electric kettle & free Wi-Fi",
      "Barbecue access & free on-site parking with EV charger",
    ],
    amenities: [
      {
        category: "Room Configuration",
        items: [
          "4 single beds or 2 single beds + 1 large double bed",
          "Cozy wood fireplace and full heating/AC",
          "Soundproofing, private entrance & wardrobe storage",
        ],
      },
      {
        category: "Bathroom Comfort",
        items: [
          "Private en-suite bathroom with walk-in rain shower",
          "Plush bath towels and complimentary guest toiletries",
        ],
      },
      {
        category: "Excursion Amenities",
        items: [
          "Private mountain terrace for evening tea and stargazing",
          "Complimentary buffet breakfast & daily housekeeping",
          "4x4 desert safari and camel ride coordination on-site",
        ],
      },
    ],
    images: [
      {
        src: "/images/rooms/room-deluxe-angle.jpg",
        alt: "Superior Quadruple Room interior at Magic Rum Hussain",
        caption: "Superior Quadruple Room (50 m²) with mountain views and fireplace",
      },
      {
        src: "/images/rooms/veranda-patio.jpg",
        alt: "Terrace outlook on the desert valley",
        caption: "Furnished terrace overlooking the peaceful desert expanse",
      },
      {
        src: "/images/rooms/ensuite-bathroom.jpg",
        alt: "Private bathroom with walk-in shower",
        caption: "Modern en-suite bathroom with walk-in shower",
      },
    ],
  },
  {
    id: "superior-family-room",
    name: "Superior Family Room",
    tagline: "50 m² family residence accommodating up to 5 guests with mountain terrace",
    description:
      "Our most accommodating 50 m² residence sleeps up to 5 guests with a choice of 5 single beds or 3 single beds and 1 large double bed. Completely detached and ground-floor accessible, this suite includes an indoor fireplace, climate-controlled air conditioning, reliable heating, a private entrance, soundproofing, and a private mountain-view terrace. Complete with coffee machine, electric kettle, free high-speed Wi-Fi, and a private bathroom with walk-in shower.",
    startingPriceInr: 22500,
    startingPriceIdr: 150,
    startingPriceUsd: 215,
    bedType: "5 Single Beds or 3 Single Beds + 1 Large Double Bed",
    capacity: "Up to 5 Guests (Spacious family glamping sanctuary)",
    sizeM2: 50,
    view: "Panoramic Wadi Rum Mountain & Desert Amphitheater View",
    features: [
      "Spacious 50 m² detached ground-floor unit (wheelchair accessible)",
      "Accommodates up to 5 guests (5 singles or 3 singles + 1 double)",
      "Cozy in-room fireplace, heating & whisper-quiet AC",
      "Private mountain-view terrace with outdoor seating",
      "Private en-suite bathroom with walk-in shower",
      "Coffee machine, electric kettle & free Wi-Fi",
      "Pet-friendly (no extra fee) & free parking with EV charger",
    ],
    amenities: [
      {
        category: "Family Bedding",
        items: [
          "5 single beds or 3 singles + 1 large double bed with luxury mattresses",
          "In-room fireplace with wood supply & climate control",
          "Soundproof walls and detached private entrance",
        ],
      },
      {
        category: "En-Suite Bathroom",
        items: [
          "Private bathroom with walk-in rain shower & hot water",
          "Plush towels, hairdryer, and luxury bath toiletries",
        ],
      },
      {
        category: "Family Inclusions",
        items: [
          "Private terrace with mountain and landmark views",
          "Buffet breakfast included with child-friendly menu",
          "Evening campfire gatherings with Bedouin tea & music",
        ],
      },
    ],
    images: [
      {
        src: "/images/rooms/king-bed-main.jpg",
        alt: "Superior Family Room at Magic Rum Hussain with mountain terrace",
        caption: "Superior Family Room (50 m²) sleeping up to 5 guests",
      },
      {
        src: "/images/rooms/veranda-patio.jpg",
        alt: "Private mountain terrace at Magic Rum Hussain",
        caption: "Terrace with panoramic mountain and desert views",
      },
      {
        src: "/images/rooms/ensuite-bathroom.jpg",
        alt: "En-suite walk-in shower bathroom",
        caption: "En-suite bathroom with walk-in shower and luxury toiletries",
      },
    ],
  },
];

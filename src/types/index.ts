export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  startingPriceInr: number;
  startingPriceIdr: number;
  startingPriceUsd: number;
  bedType: string;
  capacity: string;
  sizeM2: number;
  view: string;
  features: string[];
  amenities: {
    category: string;
    items: string[];
  }[];
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
  category: "room" | "courtyard" | "location" | "service";
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  walkTime: string;
  category: "immediate" | "walk" | "beach" | "ride";
  description: string;
  highlight: string;
  image?: string;
}

export interface Review {
  id: string;
  guestName: string;
  country: string;
  rating: number;
  date: string;
  travelerType: string;
  title: string;
  comment: string;
  highlight: string;
  verifiedPlatform: "Booking.com" | "Agoda" | "Google Reviews";
}

export interface PropertyData {
  name: string;
  legalName: string;
  location: {
    address: string;
    lane: string;
    area: string;
    district: string;
    regency: string;
    province: string;
    postalCode: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsEmbedUrl: string;
  };
  contact: {
    whatsappPrimary: string;
    whatsappFormatted: string;
    whatsappSecondary: string;
    phonePrimary: string;
    email: string;
    instagram: string;
    bookingUrl: string;
    agodaUrl: string;
  };
  pricing: {
    minInr: number;
    maxInr: number;
    minIdr: number;
    maxIdr: number;
    currency: string;
  };
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    summary: string;
  };
  hosts: {
    name: string;
    role: string;
    story: string;
  };
}


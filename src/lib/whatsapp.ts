import { propertyData } from "@/data/property";

export interface BookingEnquiryParams {
  name: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
  message?: string;
}

export function generateWhatsAppUrl(params?: BookingEnquiryParams): string {
  const baseNumber = propertyData.contact.whatsappPrimary;

  if (!params || !params.name) {
    const defaultText =
      "Hello Hussen! I would like to inquire about staying at Magic Rum Hussain (Magic Rum Luxury Hussen) and booking desert excursions in Wadi Rum.";
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines = [
    `*Hello Hussen & Magic Rum Hussain Team!*`,
    ``,
    `I would like to enquire about a stay at Magic Rum Hussain with the following details:`,
    `• *Guest Name:* ${params.name}`,
    params.email ? `• *Email:* ${params.email}` : null,
    params.phone ? `• *Phone/WhatsApp:* ${params.phone}` : null,
    params.checkIn ? `• *Check-in Date:* ${params.checkIn}` : null,
    params.checkOut ? `• *Check-out Date:* ${params.checkOut}` : null,
    params.guests ? `• *Guests:* ${params.guests}` : null,
    params.roomType ? `• *Accommodation Preference:* ${params.roomType}` : null,
    params.message ? `• *Special Requests / Excursions:* ${params.message}` : null,
    ``,
    `Could you please confirm availability, tent/bubble options, village pickup timing, and excursion bundles (4x4 Jeep tour, Zarb dinner)? Thank you!`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(lines)}`;
}

export function generateMailtoUrl(params: BookingEnquiryParams): string {
  const email = propertyData.contact.email;
  const subject = `Reservation Enquiry — ${params.name || "Magic Rum Hussain"}`;
  const body = [
    `Dear Hussen Al-Zawaideh & Magic Rum Hussain Team,`,
    ``,
    `I would like to check accommodation availability with the following details:`,
    `Guest Name: ${params.name}`,
    `Email: ${params.email || "N/A"}`,
    `Phone: ${params.phone || "N/A"}`,
    `Check-in: ${params.checkIn || "N/A"}`,
    `Check-out: ${params.checkOut || "N/A"}`,
    `Number of Guests: ${params.guests || "2 Guests"}`,
    `Room Category: ${params.roomType || "Superior King Room (50 m²)"}`,
    `Special Requests / Tours / Pickup: ${params.message || "None"}`,
    ``,
    `Looking forward to hearing from you.`,
    `Warm regards,`,
    `${params.name}`,
  ].join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

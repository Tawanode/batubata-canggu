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
      "Hello Lavra Luxury Camp Wadi Rum, I would like to inquire about room availability and desert tours for an upcoming stay in Jordan.";
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines = [
    `*Hello Lavra Luxury Camp Wadi Rum!*`,
    ``,
    `I would like to enquire about a suite reservation with the following details:`,
    `• *Guest Name:* ${params.name}`,
    params.email ? `• *Email:* ${params.email}` : null,
    params.phone ? `• *Phone/WhatsApp:* ${params.phone}` : null,
    params.checkIn ? `• *Check-in Date:* ${params.checkIn}` : null,
    params.checkOut ? `• *Check-out Date:* ${params.checkOut}` : null,
    params.guests ? `• *Guests:* ${params.guests}` : null,
    params.roomType ? `• *Room Preference:* ${params.roomType}` : null,
    params.message ? `• *Special Requests:* ${params.message}` : null,
    ``,
    `Could you please let me know current availability, desert excursion options, and direct booking rates? Thank you!`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(lines)}`;
}

export function generateMailtoUrl(params: BookingEnquiryParams): string {
  const email = propertyData.contact.email;
  const subject = `Reservation Enquiry — ${params.name || "Lavra Luxury Camp"}`;
  const body = [
    `Dear Lavra Luxury Camp Reservations Team,`,
    ``,
    `I would like to check suite availability with the following details:`,
    `Guest Name: ${params.name}`,
    `Email: ${params.email || "N/A"}`,
    `Phone: ${params.phone || "N/A"}`,
    `Check-in: ${params.checkIn || "N/A"}`,
    `Check-out: ${params.checkOut || "N/A"}`,
    `Number of Guests: ${params.guests || "2 Guests"}`,
    `Room Category: ${params.roomType || "Superior Deluxe Double or Twin Room"}`,
    `Special Requests / Arrival Details: ${params.message || "None"}`,
    ``,
    `Looking forward to hearing from you.`,
    `Warm regards,`,
    `${params.name}`,
  ].join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

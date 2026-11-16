"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: (initialRoom?: string) => void;
  closeBookingModal: () => void;
  selectedRoom: string;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Superior Deluxe Double or Twin Room");

  const openBookingModal = (initialRoom?: string) => {
    if (initialRoom) setSelectedRoom(initialRoom);
    setIsOpen(true);
  };

  const closeBookingModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider
      value={{ isOpen, openBookingModal, closeBookingModal, selectedRoom }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}


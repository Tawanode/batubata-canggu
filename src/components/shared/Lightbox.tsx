"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  function prevImage() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextImage() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-[#22201E]/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top bar with count & close button */}
        <div
          className="w-full max-w-6xl flex items-center justify-between text-white/80 py-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="font-sans-clean text-xs tracking-[0.2em] uppercase">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center image display */}
        <div
          className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom caption */}
        <div
          className="w-full max-w-2xl text-center py-3 text-white/90"
          onClick={(e) => e.stopPropagation()}
        >
          {current.caption && (
            <p className="font-serif-editorial text-lg sm:text-xl font-light italic">
              {current.caption}
            </p>
          )}
          <p className="font-sans-clean text-xs text-white/60 tracking-wider uppercase mt-1">
            Lavra Luxury Camp • Wadi Rum, Jordan
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


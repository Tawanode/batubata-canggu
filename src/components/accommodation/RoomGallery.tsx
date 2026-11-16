"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Lightbox } from "@/components/shared/Lightbox";

interface RoomGalleryProps {
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export function RoomGallery({ images }: RoomGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <>
      <div className="space-y-4">
        {/* Mobile View: Embla Carousel with swipe */}
        <div className="block lg:hidden relative">
          <div className="overflow-hidden border border-[#E5E0D8]" ref={emblaRef}>
            <div className="flex">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] min-w-0 relative h-[320px] sm:h-[400px] cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 text-white text-[10px] uppercase tracking-wider font-sans-clean">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-[#22201E]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-[#22201E]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop View: Grid layout with click-to-open lightbox */}
        <div className="hidden lg:grid grid-cols-3 gap-3">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative image-zoom-container border border-[#E5E0D8] cursor-pointer group shadow-xs ${
                idx === 0 ? "col-span-2 row-span-2 h-[480px]" : "h-[234px]"
              }`}
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
              <div className="absolute top-3 right-3 bg-white/95 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-[#22201E]" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/75 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-serif-editorial text-xs italic">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}


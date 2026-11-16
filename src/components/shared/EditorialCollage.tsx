"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./Lightbox";
import { Maximize2 } from "lucide-react";

interface EditorialCollageProps {
  mainImage: { src: string; alt: string; caption?: string };
  secondaryImage: { src: string; alt: string; caption?: string };
  detailImage: { src: string; alt: string; caption?: string };
  orientation?: "left-large" | "right-large";
}

export function EditorialCollage({
  mainImage,
  secondaryImage,
  detailImage,
  orientation = "left-large",
}: EditorialCollageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [mainImage, secondaryImage, detailImage];

  function openAt(idx: number) {
    setSelectedIndex(idx);
    setLightboxOpen(true);
  }

  const isLeft = orientation === "left-large";

  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-center">
        {/* Main Prominent Photo */}
        <div
          className={`relative h-[380px] sm:h-[480px] lg:h-[560px] ${
            isLeft ? "md:col-span-7" : "md:col-span-7 md:order-2"
          } image-zoom-container cursor-pointer group shadow-lg border border-[#E5E0D8]`}
          onClick={() => openAt(0)}
        >
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4 text-[#22201E]" />
          </div>
          {mainImage.caption && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 text-white">
              <p className="font-serif-editorial text-sm sm:text-base italic">{mainImage.caption}</p>
            </div>
          )}
        </div>

        {/* Stacked Secondary and Detail Photos */}
        <div
          className={`flex flex-col gap-4 lg:gap-6 ${
            isLeft ? "md:col-span-5" : "md:col-span-5 md:order-1"
          }`}
        >
          {/* Secondary photo */}
          <div
            className="relative h-[220px] sm:h-[260px] image-zoom-container cursor-pointer group shadow-md border border-[#E5E0D8]"
            onClick={() => openAt(1)}
          >
            <Image
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#22201E]" />
            </div>
            {secondaryImage.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                <p className="font-serif-editorial text-xs sm:text-sm italic">{secondaryImage.caption}</p>
              </div>
            )}
          </div>

          {/* Detail photo */}
          <div
            className="relative h-[220px] sm:h-[260px] image-zoom-container cursor-pointer group shadow-md border border-[#E5E0D8]"
            onClick={() => openAt(2)}
          >
            <Image
              src={detailImage.src}
              alt={detailImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#22201E]" />
            </div>
            {detailImage.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                <p className="font-serif-editorial text-xs sm:text-sm italic">{detailImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Lightbox
        images={images}
        initialIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}


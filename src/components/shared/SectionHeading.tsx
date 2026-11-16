import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  scriptAccent?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  theme?: "light" | "dark" | "forest";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  scriptAccent,
  title,
  subtitle,
  alignment = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = alignment === "center";
  const isDark = theme === "dark" || theme === "forest";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {/* Eyebrow & Script Accent */}
      {(eyebrow || scriptAccent) && (
        <div
          className={cn(
            "flex items-center gap-3",
            isCenter && "justify-center"
          )}
        >
          {eyebrow && (
            <span
              className={cn(
                "text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase font-sans-clean",
                isDark ? "text-[#EBDDD8]" : "text-[#C86D44]"
              )}
            >
              {eyebrow}
            </span>
          )}
          {scriptAccent && (
            <span
              className={cn(
                "font-script-accent text-2xl md:text-3xl lowercase -translate-y-0.5",
                isDark ? "text-[#FFDBCF]" : "text-[#B85D3B]"
              )}
            >
              ~ {scriptAccent}
            </span>
          )}
        </div>
      )}

      {/* Main Title */}
      <h2
        className={cn(
          "font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.12]",
          isDark ? "text-[#F7F5F0]" : "text-[#22201E]"
        )}
      >
        {title}
      </h2>

      {/* Subtitle / Paragraph */}
      {subtitle && (
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed font-sans-clean pt-1",
            isDark ? "text-[#E5E0D8]/80" : "text-[#444748]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}


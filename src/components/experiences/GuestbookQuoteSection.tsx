export function GuestbookQuoteSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#EFECE6] border-y border-[#E5E0D8]/60 text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-5">
        {/* Decorative Quote Mark */}
        <div className="flex justify-center">
          <span className="font-serif-editorial text-3xl sm:text-4xl text-[#747878]/60 select-none">
            &rdquo;
          </span>
        </div>

        {/* Italic Quote */}
        <blockquote className="font-serif-editorial italic text-2xl sm:text-3xl lg:text-[34px] text-[#22201E] font-normal leading-[1.38] tracking-tight">
          &ldquo;An unforgettable experience in every sense! Staying at Majak Rum Hussein Camp was beyond amazing—from
          the moment we arrived until we left, everything exceeded our expectations. Dinner was a highlight: the traditional Zarb cooked under the sand...&rdquo;
        </blockquote>

        <p className="text-xs font-sans-clean uppercase tracking-[0.2em] text-[#747878]">
          — Hreera, Jordan (Verified Guest on Booking.com)
        </p>

        {/* Small subtle divider */}
        <div className="pt-2 flex justify-center">
          <span className="w-8 h-px bg-[#747878]/40" />
        </div>
      </div>
    </section>
  );
}

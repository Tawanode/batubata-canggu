export function FamilyGatesQuoteSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F6] border-y border-[#E5E0D8]/60 text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-5">
        {/* Italic Serif Quote */}
        <blockquote className="font-serif-editorial italic text-2xl sm:text-3xl lg:text-[32px] text-[#22201E] font-normal leading-[1.38] tracking-tight">
          &ldquo;Welcome to our family desert home&mdash;where ancient Bedouin hospitality
          meets the serene 5-star comforts of panoramic Martian bubble domes.&rdquo;
        </blockquote>

        {/* Small subtle centered hairline divider */}
        <div className="pt-1 flex justify-center">
          <span className="w-8 h-px bg-[#747878]/40" />
        </div>
      </div>
    </section>
  );
}

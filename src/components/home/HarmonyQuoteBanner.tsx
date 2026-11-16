import Image from "next/image";

export function HarmonyQuoteBanner() {
  return (
    <section className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Cinematic Full-Bleed Background: Morning tropical mist over palms and ocean surf */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-morning-mist.jpg"
          alt="Dramatic sandstone mountains and golden red desert sands in Wadi Rum Protected Area, Jordan"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.62] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Centered Editorial Italic Quote */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-3">
        <blockquote className="font-serif-editorial italic text-2xl sm:text-3xl md:text-[34px] font-normal leading-[1.35] tracking-wide text-white drop-shadow-sm">
          &ldquo;Stop everything, to experience harmony.
          <br />
          Allow yourself to unwind.&rdquo;
        </blockquote>

        {/* Minimalist delicate center accent line */}
        <div className="w-12 h-[1px] bg-white/40 mx-auto pt-2" />
      </div>
    </section>
  );
}


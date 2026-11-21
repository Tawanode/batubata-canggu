import { Star, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { reviewsData } from "@/data/reviews";

export function GuestReviewsSection() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Score Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            title="What Our Guests Say"
            subtitle="Rated 9.3/10 'Superb' across 71 reviews, with a 9.6/10 score for Staff hospitality."
          />
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.slice(0, 3).map((review, index) => (
            <div
              key={review.id}
              className={`bg-[#FFFFFF] border border-[#E5E0D8] p-8 shadow-xs flex flex-col justify-between hover:border-[#C86D44] transition-colors ${
                index === 2 ? "hidden md:flex" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C86D44] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C86D44]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#7B8B76] font-sans-clean">
                    {review.verifiedPlatform}
                  </span>
                </div>

                <h4 className="font-serif-editorial text-xl text-[#22201E] font-normal mb-2 leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h4>

                <p className="text-xs sm:text-sm text-[#444748] leading-relaxed font-sans-clean mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-[#E5E0D8]/60 flex items-center justify-between text-xs font-sans-clean">
                <div>
                  <span className="font-semibold text-[#22201E] block">
                    {review.guestName}
                  </span>
                  <span className="text-[#7B8B76] text-[11px]">
                    {review.country} • {review.travelerType}
                  </span>
                </div>
                <ShieldCheck className="w-4 h-4 text-[#2A4B3C]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

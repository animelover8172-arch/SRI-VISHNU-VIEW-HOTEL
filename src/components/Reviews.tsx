import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA, HOTEL_INFO } from '../data/hotelData';

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const current = REVIEWS_DATA[currentIdx];

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 bg-[#211C18] text-[#F7F3EA] relative overflow-hidden"
    >
      <div className="absolute inset-0 luxury-dark-grain opacity-80 pointer-events-none" />

      {/* Subtle Top & Bottom Architectural Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#C9A86A] font-semibold">
              VERIFIED FEEDBACK
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
          </div>

          <h2
            id="reviews-main-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-tight mb-6"
          >
            Guest Impressions
          </h2>

          {/* Google Rating Pillar */}
          <div className="inline-flex items-center space-x-4 bg-[#2A221C] border border-[#C9A86A]/40 px-6 py-3 rounded-sm shadow-md">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]"
                />
              ))}
            </div>
            <div className="h-5 w-[1px] bg-[#5A4030]" />
            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-xl font-bold text-[#F7F3EA]">
                {HOTEL_INFO.googleRating} ★
              </span>
              <span className="text-xs text-[#D8C9B4] tracking-wider uppercase">
                {HOTEL_INFO.reviewsCount} Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Minimalist Editorial Carousel */}
        <div className="max-w-4xl mx-auto bg-[#29221C] border border-[#C9A86A]/25 rounded-sm p-8 sm:p-14 shadow-2xl relative">
          {/* Large Stylized Quotation Mark */}
          <div className="absolute top-6 left-8 text-[#C9A86A]/15 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Star Rating for This Guest */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(Math.floor(current.rating))].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]"
                />
              ))}
              {current.rating % 1 !== 0 && (
                <Star className="w-4 h-4 fill-[#C9A86A]/60 text-[#C9A86A]" />
              )}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F7F3EA] leading-relaxed italic mb-8 max-w-3xl">
              &ldquo;{current.comment}&rdquo;
            </p>

            {/* Author & Verification */}
            <div className="border-t border-[#5A4030]/60 pt-6 w-full max-w-md flex flex-col items-center">
              <h4 className="font-serif text-lg text-[#DFC493] font-semibold tracking-wide">
                {current.author}
              </h4>
              <p className="text-xs text-[#8B7B6B] mt-0.5">
                {current.location} &bull; <span className="italic text-[#D8C9B4]">{current.purpose}</span>
              </p>
              <div className="inline-flex items-center space-x-1.5 text-[11px] text-[#C9A86A] mt-2">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{current.date}</span>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={prevReview}
                id="prev-review-btn"
                className="p-3 rounded-full border border-[#C9A86A]/40 text-[#D8C9B4] hover:text-[#211C18] hover:bg-[#C9A86A] transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {REVIEWS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-1.5 transition-all rounded-full ${
                      currentIdx === idx
                        ? 'w-6 bg-[#C9A86A]'
                        : 'w-2 bg-[#5A4030] hover:bg-[#8B7B6B]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                id="next-review-btn"
                className="p-3 rounded-full border border-[#C9A86A]/40 text-[#D8C9B4] hover:text-[#211C18] hover:bg-[#C9A86A] transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

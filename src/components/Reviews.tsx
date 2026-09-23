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
      className="py-28 sm:py-36 bg-[#080807] text-[#F7F3EA] relative overflow-hidden"
    >
      <div className="absolute inset-0 luxury-dark-grain opacity-50 pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              VERIFIED FEEDBACK
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            id="reviews-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-6"
          >
            Guest Impressions
          </h2>

          {/* Google Rating Pillar */}
          <div className="inline-flex items-center space-x-4 bg-[#0D0D0B] border border-[#D4AF37]/30 px-6 py-3 rounded-full shadow-2xl">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>
            <div className="h-5 w-[1px] bg-[#D4AF37]/30" />
            <div className="flex items-baseline space-x-2">
              <span className="font-cinzel text-lg font-bold text-[#F7F3EA]">
                {HOTEL_INFO.googleRating} ★
              </span>
              <span className="text-xs text-[#A7A49C] tracking-wider uppercase font-sans">
                {HOTEL_INFO.reviewsCount} Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Minimalist Editorial Carousel (Dark Luxury Card) */}
        <div className="max-w-4xl mx-auto bg-[#0D0D0B] border border-[#D4AF37]/25 rounded-sm p-8 sm:p-14 shadow-2xl relative">
          
          {/* Subtle Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Large Stylized Quotation Mark */}
          <div className="absolute top-6 left-8 text-[#D4AF37]/10 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Star Rating for This Guest */}
            <div className="flex items-center space-x-1.5 mb-6">
              {[...Array(Math.floor(current.rating))].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
              {current.rating % 1 !== 0 && (
                <Star className="w-4 h-4 fill-[#D4AF37]/60 text-[#D4AF37]" />
              )}
            </div>

            {/* Testimonial Quote */}
            <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#F7F3EA] leading-relaxed italic mb-8 max-w-3xl font-light">
              &ldquo;{current.comment}&rdquo;
            </p>

            {/* Author & Verification */}
            <div className="border-t border-[#D4AF37]/15 pt-6 w-full max-w-md flex flex-col items-center">
              <h4 className="font-cinzel text-base sm:text-lg text-[#E1BE4A] font-medium tracking-wide">
                {current.author}
              </h4>
              <p className="text-xs text-[#A7A49C] mt-0.5 font-sans">
                {current.location} &bull; <span className="italic text-[#F7F3EA]/70">{current.purpose}</span>
              </p>
              <div className="inline-flex items-center space-x-1.5 text-[11px] text-[#D4AF37] mt-2 font-sans font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{current.date}</span>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={prevReview}
                id="prev-review-btn"
                className="p-3 rounded-full border border-[#D4AF37]/30 text-[#A7A49C] hover:text-[#080807] hover:bg-[#D4AF37] transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {REVIEWS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-1.5 transition-all rounded-full cursor-pointer ${
                      currentIdx === idx
                        ? 'w-6 bg-[#D4AF37]'
                        : 'w-2 bg-[#2A2823] hover:bg-[#A7A49C]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                id="next-review-btn"
                className="p-3 rounded-full border border-[#D4AF37]/30 text-[#A7A49C] hover:text-[#080807] hover:bg-[#D4AF37] transition-all cursor-pointer"
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

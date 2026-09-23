import { Star, ChevronDown, Compass, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToIntro = () => {
    const el = document.getElementById('introduction');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080807]"
    >
      {/* Background with Cinematic Zoom & Multi-Layered Dark Film Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="Sri Vishnu View Hotel exterior and serene arrival"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center animate-slow-zoom scale-105 filter brightness-[0.55] contrast-[1.12]"
        />

        {/* Cinematic Vignette & Atmospheric Lighting */}
        <div className="absolute inset-0 luxury-dark-grain opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-[#080807]/60 to-[#080807]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080807]/95 via-[#080807]/65 to-[#080807]/30" />
        
        {/* Soft Radial Gold Spotlight Behind Text */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28 w-full flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          
          {/* Eyebrow Label with Architectural Gold Lines */}
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span
              id="hero-badge-label"
              className="text-xs sm:text-sm uppercase tracking-[0.32em] font-sans font-semibold text-[#D4AF37] flex items-center space-x-2"
            >
              <span>HERITAGE</span>
              <span className="text-[#D4AF37]/50">&bull;</span>
              <span>HOSPITALITY</span>
              <span className="text-[#D4AF37]/50">&bull;</span>
              <span>GAYA</span>
            </span>
            <span className="text-xs font-serif text-[#A7A49C] hidden sm:inline">
              श्री विष्णु व्यू होटल
            </span>
          </div>

          {/* Large Architectural Editorial Heading */}
          <h1
            id="hero-main-heading"
            className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F3EA] font-normal leading-[1.05] tracking-[0.02em] mb-6"
          >
            Stay Above the{' '}
            <span className="italic font-cormorant text-[#E1BE4A] block sm:inline font-normal">
              Ordinary.
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            id="hero-supporting-text"
            className="text-base sm:text-lg md:text-xl text-[#A7A49C] leading-relaxed max-w-2xl mb-10 font-sans font-light"
          >
            A refined stay in the heart of Gaya, where comfort, heritage and warm
            Indian hospitality come together.
          </p>

          {/* Luxury CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
            {/* Primary Button: Gold filled, dark text, rounded, subtle glow */}
            <button
              onClick={onOpenBooking}
              id="hero-book-stay-btn"
              className="bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-xs sm:text-sm font-bold tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-300 transform active:scale-98 text-center shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>BOOK YOUR STAY</span>
              <ArrowRight className="w-4 h-4 text-[#080807]" />
            </button>

            {/* Secondary Button: Transparent, gold border, ivory/gold text, rounded */}
            <button
              onClick={scrollToRooms}
              id="hero-explore-rooms-btn"
              className="border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#F7F3EA] hover:text-[#E1BE4A] text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-300 text-center cursor-pointer"
            >
              EXPLORE ROOMS
            </button>
          </div>

          {/* Verified Rating Badge Element (Dark Luxury Glass Card) */}
          <div
            id="hero-rating-badge"
            className="inline-flex items-center space-x-4 bg-[#0D0D0B]/85 backdrop-blur-md border border-[#D4AF37]/25 px-5 py-3 rounded-full shadow-2xl"
          >
            <div className="flex items-center space-x-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>

            <div className="h-5 w-[1px] bg-[#D4AF37]/30" />

            <div className="flex items-baseline space-x-2">
              <span className="font-cinzel text-base text-[#F7F3EA] font-semibold">
                {HOTEL_INFO.googleRating}
              </span>
              <span className="text-xs text-[#A7A49C]">/ 5</span>
              <span className="text-xs text-[#A7A49C] tracking-wide ml-1 font-sans">
                ({HOTEL_INFO.reviewsCount} Google Reviews)
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Bar: Quick Authentic Highlights & Scroll Guide */}
      <div className="absolute bottom-8 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#A7A49C] tracking-widest uppercase">
          <div className="flex items-center space-x-8">
            <span className="flex items-center space-x-2">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#F7F3EA]/80">Vishnupad Road, Chand Chaura</span>
            </span>
            <span className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#F7F3EA]/80">Sanitized Restful Stays</span>
            </span>
            <span className="text-[#F7F3EA]/80">In-House Pure Veg Restaurant</span>
          </div>

          {/* Elegant Vertical Scroll Indicator */}
          <button
            onClick={scrollToIntro}
            aria-label="Scroll to hotel introduction"
            className="flex items-center space-x-2 text-[#D4AF37] hover:text-[#E1BE4A] transition-colors group cursor-pointer"
          >
            <span className="text-[10px] tracking-[0.25em] font-semibold">DISCOVER</span>
            <div className="w-5 h-8 rounded-full border border-[#D4AF37]/50 flex items-start justify-center p-1 group-hover:border-[#D4AF37]">
              <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <button
        onClick={scrollToIntro}
        aria-label="Scroll to hotel overview"
        className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#D4AF37]"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase mb-1">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}

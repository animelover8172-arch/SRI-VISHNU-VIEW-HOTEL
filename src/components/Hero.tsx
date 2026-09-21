import { Star, ChevronDown, Compass, ShieldCheck } from 'lucide-react';
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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#211C18]"
    >
      {/* Background with Subtle Cinematic Zoom & Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="Sri Vishnu View Hotel exterior and serene arrival"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center animate-slow-zoom scale-105 filter brightness-[0.78] contrast-[1.04]"
        />

        {/* Soft Film Grain & Architectural Gradients */}
        <div className="absolute inset-0 luxury-dark-grain opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211C18] via-[#211C18]/45 to-[#211C18]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211C18]/90 via-[#211C18]/40 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Subtle Label with Gold Accent */}
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
            <span
              id="hero-badge-label"
              className="text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-semibold text-[#C9A86A]"
            >
              SRI VISHNU VIEW &bull; GAYA
            </span>
            <span className="text-xs font-serif text-[#D8C9B4]/80 hidden sm:inline">
              श्री विष्णु व्यू होटल
            </span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-main-heading"
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F3EA] font-normal leading-[1.08] tracking-tight mb-6"
          >
            Stay Above the{' '}
            <span className="italic font-cormorant font-normal text-[#DFC493] block sm:inline">
              Ordinary.
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            id="hero-supporting-text"
            className="text-base sm:text-lg md:text-xl text-[#D8C9B4] leading-relaxed max-w-2xl mb-10 font-sans font-normal"
          >
            A refined stay in the heart of Gaya, where comfort, heritage and warm
            Indian hospitality come together.
          </p>

          {/* Action Buttons & Rating */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
            <button
              onClick={onOpenBooking}
              id="hero-book-stay-btn"
              className="bg-[#C9A86A] hover:bg-[#DFC493] text-[#211C18] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all duration-300 transform active:scale-98 text-center shadow-lg shadow-[#211C18]/50"
            >
              BOOK YOUR STAY
            </button>

            <button
              onClick={scrollToRooms}
              id="hero-explore-rooms-btn"
              className="border border-[#C9A86A]/60 hover:border-[#C9A86A] hover:bg-[#C9A86A]/10 text-[#F7F3EA] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all duration-300 text-center"
            >
              EXPLORE ROOMS
            </button>
          </div>

          {/* Rating Badge Element */}
          <div
            id="hero-rating-badge"
            className="inline-flex items-center space-x-4 bg-[#211C18]/85 backdrop-blur-md border border-[#C9A86A]/30 px-5 py-3 rounded-sm shadow-xl"
          >
            <div className="flex items-center space-x-1 text-[#C9A86A]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]"
                />
              ))}
            </div>

            <div className="h-6 w-[1px] bg-[#5A4030]/60" />

            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-lg text-[#F7F3EA] font-semibold">
                {HOTEL_INFO.googleRating}
              </span>
              <span className="text-xs text-[#8B7B6B]">/ 5</span>
              <span className="text-xs text-[#D8C9B4] tracking-wide ml-1">
                ({HOTEL_INFO.reviewsCount} Google Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Bar: Quick Authentic Highlights */}
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#D8C9B4]/80 tracking-widest uppercase">
          <div className="flex items-center space-x-8">
            <span className="flex items-center space-x-2">
              <Compass className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Vishnupad Road, Chand Chaura</span>
            </span>
            <span className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Sanitized Restful Stays</span>
            </span>
            <span>In-House Pure Veg Restaurant</span>
          </div>

          {/* Elegant Vertical Scroll Indicator */}
          <button
            onClick={scrollToIntro}
            aria-label="Scroll to introduction"
            className="flex items-center space-x-2 text-[#C9A86A] hover:text-[#DFC493] transition-colors group cursor-pointer"
          >
            <span className="text-[10px] tracking-[0.25em]">DISCOVER</span>
            <div className="w-5 h-8 rounded-full border border-[#C9A86A]/50 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#C9A86A] rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <button
        onClick={scrollToIntro}
        aria-label="Scroll to hotel overview"
        className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#C9A86A]"
      >
        <span className="text-[10px] tracking-widest uppercase mb-1">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}

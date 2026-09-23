import { Check, ArrowUpRight, Sparkles } from 'lucide-react';
import LuxuryImage from './LuxuryImage';
import { HOTEL_INFO } from '../data/hotelData';
import hotelFacadeImg from '../assets/images/sri_vishnu_view_facade_1789987125126.jpg';

interface IntroductionProps {
  onOpenBooking: () => void;
}

export default function Introduction({ onOpenBooking }: IntroductionProps) {
  return (
    <section
      id="introduction"
      className="relative py-28 sm:py-36 bg-[#0D0D0B] text-[#F7F3EA] luxury-dark-grain overflow-hidden"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#D4AF37]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column: Client Facade Image with Architectural Offset Frame */}
          <div className="lg:col-span-6 relative">
            {/* Outer offset gold border frame */}
            <div className="absolute -inset-3 sm:-inset-4 border border-[#D4AF37]/25 translate-x-3 translate-y-3 hidden sm:block pointer-events-none rounded-sm" />
            
            <div className="relative shadow-2xl overflow-hidden rounded-sm border border-[#D4AF37]/35 bg-[#080807] group">
              <LuxuryImage
                src={hotelFacadeImg}
                fallbackSrc="/hotel-facade.jpg"
                alt="Sri Vishnu View Hotel and Sri Vishnu View Restaurant exterior building on Vishnupad Road, Chand Chaura, Gaya"
                aspectClass="aspect-[4/5] sm:aspect-[3/4]"
                priority={true}
                className="group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#080807]/95 backdrop-blur-md text-[#F7F3EA] p-5 border border-[#D4AF37]/35 shadow-2xl rounded-sm">
                <div className="flex items-center space-x-1.5 text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AUTHENTIC PROPERTY &bull; GAYA</span>
                </div>
                <p className="font-cinzel text-base text-[#F7F3EA] tracking-wide font-medium">
                  Sri Vishnu View Hotel &amp; Restaurant
                </p>
                <span className="text-[11px] text-[#A7A49C] block mt-1 font-sans">
                  Vishnupad Rd, Chand Chaura, Gaya &bull; 4.4 ★ (720+ Reviews)
                </span>
              </div>
            </div>

            {/* Subtle Devanagari Motif Tag */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#A7A49C]">
              <span className="tracking-[0.25em] uppercase font-mono text-[10px] text-[#D4AF37]">
                LOCATION &bull; 24.78° N, 84.99° E
              </span>
              <span className="font-serif italic text-[#F7F3EA]/70">
                श्री विष्णु व्यू होटल एवं रेस्टोरेंट
              </span>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1.5px] bg-[#D4AF37]" />
              <span
                id="intro-small-label"
                className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold"
              >
                WELCOME TO SRI VISHNU VIEW
              </span>
            </div>

            {/* Large Architectural Heading */}
            <h2
              id="intro-main-heading"
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#F7F3EA] leading-[1.16] tracking-[0.02em] mb-6 font-normal"
            >
              Where Gaya&apos;s Heritage Meets{' '}
              <span className="italic font-cormorant text-[#E1BE4A]">
                Modern Comfort.
              </span>
            </h2>

            {/* Architectural Line Graphic Motif */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#0D0D0B]" />
              <div className="w-24 h-[1px] bg-[#D4AF37]/30" />
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-[#A7A49C] leading-relaxed font-sans font-light">
              <p>
                Nestled on Vishnupad Road in the historic quarter of Chand Chaura,{' '}
                <strong className="text-[#F7F3EA] font-medium">Sri Vishnu View Hotel</strong>{' '}
                offers a restful sanctuary for pilgrims, devotees, and travelers
                journeying to the holy city of Gaya.
              </p>
              <p className="text-sm sm:text-base text-[#A7A49C]/80 leading-relaxed">
                Whether arriving for sacred rituals at Vishnupad Temple, seeking the
                enlightened calm of Bodh Gaya, or traveling with family, our hotel
                pairs tranquil, sanitized rooms and an in-house pure vegetarian
                restaurant with genuine Indian hospitality that treats every guest with
                dignity and care.
              </p>
            </div>

            {/* Key Authentic Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 pt-6 border-t border-[#D4AF37]/20">
              <div className="flex items-start space-x-3 p-3.5 rounded-sm bg-[#131210] border border-[#D4AF37]/15">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F7F3EA] uppercase tracking-wider">
                    Vishnupad Road Proximity
                  </h3>
                  <p className="text-xs text-[#A7A49C] mt-1 font-sans">
                    Moments from Vishnupad sanctuary & Falgu river ghats.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-sm bg-[#131210] border border-[#D4AF37]/15">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F7F3EA] uppercase tracking-wider">
                    In-House Dining
                  </h3>
                  <p className="text-xs text-[#A7A49C] mt-1 font-sans">
                    Fresh, hygienic vegetarian fare prepared with devotion.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-sm bg-[#131210] border border-[#D4AF37]/15">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F7F3EA] uppercase tracking-wider">
                    24/7 Front Desk & Care
                  </h3>
                  <p className="text-xs text-[#A7A49C] mt-1 font-sans">
                    Attentive guidance for early morning darshan & transport.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-sm bg-[#131210] border border-[#D4AF37]/15">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F7F3EA] uppercase tracking-wider">
                    Family & Pilgrim Suited
                  </h3>
                  <p className="text-xs text-[#A7A49C] mt-1 font-sans">
                    Quiet, climate-controlled comfort tailored for all generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons & direct call */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button
                onClick={onOpenBooking}
                id="intro-plan-stay-btn"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-bold text-[#D4AF37] border-b border-[#D4AF37] pb-1 hover:text-[#E1BE4A] hover:border-[#E1BE4A] transition-colors w-fit cursor-pointer"
              >
                <span>PLAN YOUR VISIT</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <a
                href={HOTEL_INFO.phoneTel}
                className="text-xs tracking-wider text-[#A7A49C] hover:text-[#F7F3EA] transition-colors font-sans"
              >
                Direct Enquiries: <span className="font-semibold text-[#D4AF37]">{HOTEL_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

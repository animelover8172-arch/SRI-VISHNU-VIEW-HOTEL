import { Check, ArrowUpRight } from 'lucide-react';
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
      className="relative py-24 sm:py-32 bg-[#F7F3EA] text-[#211C18] luxury-grain overflow-hidden"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />
      <div className="absolute -left-32 top-1/2 w-64 h-64 rounded-full border border-[#D8C9B4]/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Editorial Image with Architectural Framing) */}
          <div className="lg:col-span-6 relative">
            {/* Outer offset frame */}
            <div className="absolute -inset-3 border border-[#C9A86A]/30 translate-x-3 translate-y-3 hidden sm:block pointer-events-none" />
            
            <div className="relative shadow-2xl overflow-hidden rounded-sm border border-[#C9A86A]/40 bg-[#211C18]">
              <LuxuryImage
                src={hotelFacadeImg}
                fallbackSrc="/hotel-facade.jpg"
                alt="Sri Vishnu View Hotel and Sri Vishnu View Restaurant exterior building on Vishnupad Road, Chand Chaura, Gaya"
                aspectClass="aspect-[4/5] sm:aspect-[3/4]"
                priority={true}
              />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#211C18]/95 backdrop-blur-md text-[#F7F3EA] p-5 border border-[#C9A86A]/40 shadow-xl rounded-sm">
                <span className="text-[10px] tracking-[0.25em] text-[#C9A86A] uppercase block font-semibold mb-1">
                  AUTHENTIC PROPERTY &bull; GAYA
                </span>
                <p className="font-serif text-base text-[#F7F3EA] italic">
                  Sri Vishnu View Hotel &amp; Restaurant
                </p>
                <span className="text-[11px] text-[#D8C9B4] block mt-1">
                  Vishnupad Rd, Chand Chaura, Gaya &bull; 4.4 ★ (720+ Reviews)
                </span>
              </div>
            </div>

            {/* Subtle Devanagari Motif Tag */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#8B7B6B]">
              <span className="tracking-widest uppercase font-mono text-[10px]">
                COORD &bull; 24.78° N, 84.99° E
              </span>
              <span className="font-serif italic text-[#5A4030] font-medium">
                श्री विष्णु व्यू होटल एवं रेस्टोरेंट
              </span>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1.5px] bg-[#C9A86A]" />
              <span
                id="intro-small-label"
                className="text-xs uppercase tracking-[0.28em] text-[#5A4030] font-semibold"
              >
                WELCOME TO SRI VISHNU VIEW
              </span>
            </div>

            {/* Large Heading */}
            <h2
              id="intro-main-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#211C18] leading-[1.18] tracking-tight mb-6 font-normal"
            >
              Where Gaya&apos;s Heritage Meets{' '}
              <span className="italic text-[#5A4030] font-cormorant">
                Modern Comfort.
              </span>
            </h2>

            {/* Architectural Line Graphic Motif */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-[1px] bg-[#C9A86A]" />
              <div className="w-2 h-2 rotate-45 border border-[#C9A86A] bg-[#F7F3EA]" />
              <div className="w-24 h-[1px] bg-[#D8C9B4]" />
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-[#5A4030]/90 leading-relaxed font-sans">
              <p>
                Nestled on Vishnupad Road in the historic quarter of Chand Chaura,{' '}
                <strong className="text-[#211C18] font-semibold">Sri Vishnu View Hotel</strong>{' '}
                offers a restful sanctuary for pilgrims, devotees, and travelers
                journeying to the holy city of Gaya.
              </p>
              <p className="text-sm sm:text-base text-[#8B7B6B] leading-relaxed">
                Whether arriving for sacred rituals at Vishnupad Temple, seeking the
                enlightened calm of Bodh Gaya, or traveling with family, our hotel
                pairs tranquil, sanitized rooms and an in-house pure vegetarian
                restaurant with genuine Indian hospitality that treats every guest with
                dignity and care.
              </p>
            </div>

            {/* Key Authentic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 pt-4 border-t border-[#D8C9B4]/50">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A86A]/20 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-[#5A4030]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#211C18]">
                    Vishnupad Road Proximity
                  </h3>
                  <p className="text-xs text-[#8B7B6B] mt-0.5">
                    Moments from Vishnupad sanctuary & Falgu river ghats.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A86A]/20 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-[#5A4030]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#211C18]">
                    In-House Dining
                  </h3>
                  <p className="text-xs text-[#8B7B6B] mt-0.5">
                    Fresh, hygienic vegetarian fare prepared with devotion.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A86A]/20 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-[#5A4030]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#211C18]">
                    24/7 Front Desk & Care
                  </h3>
                  <p className="text-xs text-[#8B7B6B] mt-0.5">
                    Attentive guidance for early morning darshan & transport.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A86A]/20 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-[#5A4030]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#211C18]">
                    Family & Pilgrim Suited
                  </h3>
                  <p className="text-xs text-[#8B7B6B] mt-0.5">
                    Quiet, climate-controlled comfort tailored for all generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2 flex items-center space-x-6">
              <button
                onClick={onOpenBooking}
                id="intro-plan-stay-btn"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#211C18] border-b-2 border-[#C9A86A] pb-1 hover:text-[#5A4030] hover:border-[#5A4030] transition-colors"
              >
                <span>PLAN YOUR VISIT</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A86A]" />
              </button>

              <a
                href={HOTEL_INFO.phoneTel}
                className="text-xs tracking-wider text-[#8B7B6B] hover:text-[#211C18] transition-colors"
              >
                Direct Enquiries: <span className="font-semibold text-[#5A4030]">{HOTEL_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

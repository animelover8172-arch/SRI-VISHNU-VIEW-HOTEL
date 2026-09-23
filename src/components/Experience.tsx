import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../data/hotelData';
import LuxuryImage from './LuxuryImage';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export default function Experience({ onOpenBooking }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-28 sm:py-36 bg-[#0D0D0B] text-[#F7F3EA] luxury-dark-grain relative overflow-hidden"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              THE SIGNATURE STAY
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            id="experience-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-6"
          >
            Refined Living in the{' '}
            <span className="italic font-cormorant text-[#E1BE4A]">
              Sacred City.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A49C] leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Thoughtfully tailored to the rhythm of Gaya. From sacred dawn prayers
            to peaceful evening sanctuary, our spaces and services harmonize comfort
            with heartfelt Indian hospitality.
          </p>
        </div>

        {/* Magazine Spreads: Alternating Image/Text Layouts with Gold Borders */}
        <div className="space-y-24 sm:space-y-32">
          {EXPERIENCES.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Column with Architectural Framing */}
                <div
                  className={`lg:col-span-7 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-sm shadow-2xl group border border-[#D4AF37]/25 bg-[#080807]">
                    <LuxuryImage
                      src={item.image}
                      alt={item.title}
                      aspectClass="aspect-[16/10] sm:aspect-[16/11]"
                      className="group-hover:scale-104 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Depth Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/70 via-transparent to-transparent pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#080807]/90 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.22em] px-3.5 py-1.5 font-semibold rounded-sm">
                      {item.badge}
                    </div>
                  </div>

                  {/* Architectural Numbering (Page-like) */}
                  <div className="hidden sm:block absolute -bottom-5 right-6 bg-[#080807] border border-[#D4AF37]/35 px-4 py-1.5 text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] shadow-xl">
                    PAGE 0{index + 1} &bull; SRI VISHNU VIEW
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.28em] text-[#D4AF37] font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.subtitle}</span>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#F7F3EA] leading-[1.2] mb-5 font-normal tracking-wide">
                    {item.title}
                  </h3>

                  <div className="w-14 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-6" />

                  <p className="text-base text-[#A7A49C] leading-relaxed mb-6 font-sans font-light">
                    {item.description}
                  </p>

                  <div className="p-4 bg-[#131210] border-l-2 border-[#D4AF37] border border-[#D4AF37]/15 rounded-sm mb-8">
                    <div className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#F7F3EA] font-medium leading-normal italic font-serif">
                        {item.highlight}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={onOpenBooking}
                      className="text-xs uppercase tracking-[0.24em] font-bold text-[#D4AF37] hover:text-[#E1BE4A] transition-colors inline-flex items-center space-x-2 group cursor-pointer"
                    >
                      <span>EXPERIENCE THIS STAY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

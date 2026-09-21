import { Check, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/hotelData';
import LuxuryImage from './LuxuryImage';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export default function Experience({ onOpenBooking }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#F7F3EA] text-[#211C18] luxury-grain relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#5A4030] font-semibold">
              THE SIGNATURE STAY
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
          </div>

          <h2
            id="experience-main-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#211C18] font-normal leading-tight tracking-tight mb-6"
          >
            Refined Living in the{' '}
            <span className="italic font-cormorant text-[#5A4030]">
              Sacred City.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A4030]/90 leading-relaxed font-sans max-w-2xl mx-auto">
            Thoughtfully tailored to the rhythm of Gaya. From sacred dawn prayers
            to peaceful evening sanctuary, our spaces and services harmonize comfort
            with heartfelt Indian hospitality.
          </p>
        </div>

        {/* Magazine Spreads: Alternating Image/Text Layouts */}
        <div className="space-y-20 sm:space-y-28">
          {EXPERIENCES.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-sm shadow-xl group">
                    <LuxuryImage
                      src={item.image}
                      alt={item.title}
                      aspectClass="aspect-[16/10] sm:aspect-[16/11]"
                      className="group-hover:scale-103 transition-transform duration-700 ease-out"
                    />

                    {/* Gold hairline frame */}
                    <div className="absolute inset-0 border border-[#C9A86A]/30 pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#211C18]/90 text-[#C9A86A] text-[10px] sm:text-xs uppercase tracking-[0.2em] px-3.5 py-1.5 font-semibold">
                      {item.badge}
                    </div>
                  </div>

                  {/* Architectural Numbering (Page-like) */}
                  <div className="hidden sm:block absolute -bottom-5 right-6 bg-[#F7F3EA] border border-[#C9A86A]/40 px-4 py-1 text-[11px] font-mono text-[#5A4030] tracking-widest shadow-sm">
                    PAGE 0{index + 1} &bull; SRI VISHNU VIEW
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.subtitle}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#211C18] leading-[1.2] mb-5 font-normal">
                    {item.title}
                  </h3>

                  <div className="w-12 h-[2px] bg-[#C9A86A] mb-6" />

                  <p className="text-base text-[#5A4030] leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>

                  <div className="p-4 bg-[#D8C9B4]/25 border-l-2 border-[#C9A86A] mb-8">
                    <div className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-[#5A4030] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#211C18] font-medium leading-normal italic">
                        {item.highlight}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={onOpenBooking}
                      className="text-xs uppercase tracking-[0.2em] font-semibold text-[#211C18] hover:text-[#C9A86A] transition-colors inline-flex items-center space-x-2 group"
                    >
                      <span>EXPERIENCE THIS STAY</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
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

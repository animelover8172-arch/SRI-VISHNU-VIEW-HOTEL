import { Compass, Landmark, Sunrise, MapPin } from 'lucide-react';
import { GAYA_HIGHLIGHTS } from '../data/hotelData';
import LuxuryImage from './LuxuryImage';

export default function GayaGuide() {
  return (
    <section
      id="gaya"
      className="py-28 sm:py-36 bg-[#080807] text-[#F7F3EA] relative overflow-hidden"
    >
      <div className="absolute inset-0 luxury-dark-grain opacity-50 pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              DESTINATION &bull; GAYA, BIHAR
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            id="gaya-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-6"
          >
            Stay in the{' '}
            <span className="italic font-cormorant text-[#E1BE4A]">
              Heart of Gaya.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A49C] leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Located in Chand Chaura along Vishnupad Road, our hotel anchors you
            at the cultural and spiritual core of Gaya, where millennia of devotion,
            Vedic tradition, and enlightenment converge.
          </p>
        </div>

        {/* Chand Chaura Editorial Callout Banner (Black Luxury Showcase) */}
        <div className="relative rounded-sm overflow-hidden mb-16 border border-[#D4AF37]/25 shadow-2xl bg-[#0D0D0B]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold mb-3">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>CHAND CHAURA &bull; VISHNUPAD ROAD</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F3EA] mb-4 font-normal">
                An Address Connected to Sacred Rituals
              </h3>

              <p className="text-sm sm:text-base text-[#A7A49C] leading-relaxed mb-6 font-sans font-light">
                Chand Chaura is one of the most culturally revered localities of Gaya.
                Staying here means you avoid long travel delays across the city and can
                reach the sacred Vishnupad Temple complex at ease, whether for early
                morning Mangala Aarti, sacred Pinda Daan, or tranquil sunset contemplation
                by the Falgu River.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/15 text-xs text-[#F7F3EA]">
                <div className="flex items-center space-x-2.5">
                  <Landmark className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-sans">Vishnupad Sanctuary</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Sunrise className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-sans">Falgu River Ghats</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-sans">Chand Chaura Bazaar</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#D4AF37]/20">
              <LuxuryImage
                src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80"
                alt="Sacred spiritual atmosphere and ancient architectural temple spires of Gaya"
                aspectClass="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B] via-transparent to-transparent lg:hidden" />
            </div>

          </div>
        </div>

        {/* Authentic Gaya Destination Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GAYA_HIGHLIGHTS.map((spot) => (
            <div
              key={spot.id}
              className="bg-[#0D0D0B] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 transition-all duration-300 rounded-sm overflow-hidden flex flex-col group shadow-xl hover:shadow-2xl"
            >
              <div className="relative overflow-hidden aspect-[16/10] border-b border-[#D4AF37]/15">
                <LuxuryImage
                  src={spot.image}
                  alt={spot.title}
                  aspectClass="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/90 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] block font-semibold">
                    {spot.category}
                  </span>
                  <span className="text-[11px] font-serif text-[#F7F3EA]/80 italic">
                    {spot.hindiTitle}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-cinzel text-base sm:text-lg text-[#F7F3EA] mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {spot.title}
                  </h4>
                  <p className="text-xs text-[#A7A49C] leading-relaxed mb-4 font-sans font-light">
                    {spot.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D4AF37]/15">
                  <p className="text-[11px] text-[#D4AF37] italic font-serif">
                    {spot.significance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Cuisine Note */}
        <div className="mt-14 text-center p-6 bg-[#0D0D0B] border border-[#D4AF37]/20 rounded-sm max-w-2xl mx-auto shadow-lg">
          <span className="text-xs uppercase tracking-[0.26em] text-[#D4AF37] font-semibold block mb-2">
            HERITAGE DELICACIES OF GAYA
          </span>
          <p className="text-xs text-[#A7A49C] leading-relaxed font-sans font-light">
            During your stay at Sri Vishnu View Hotel, explore the renowned sweet bazaars of
            Chand Chaura and Ramna, celebrated for authentic winter <span className="text-[#F7F3EA] font-medium">Tilkut</span> (sesame confection),{' '}
            <span className="text-[#F7F3EA] font-medium">Khaja</span>, and traditional regional specialties.
          </p>
        </div>

      </div>
    </section>
  );
}

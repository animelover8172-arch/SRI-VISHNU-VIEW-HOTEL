import { Compass, Landmark, Sunrise, MapPin } from 'lucide-react';
import { GAYA_HIGHLIGHTS, HOTEL_INFO } from '../data/hotelData';
import LuxuryImage from './LuxuryImage';

export default function GayaGuide() {
  return (
    <section
      id="gaya"
      className="py-24 sm:py-32 bg-[#211C18] text-[#F7F3EA] relative overflow-hidden"
    >
      <div className="absolute inset-0 luxury-dark-grain opacity-75 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#C9A86A] font-semibold">
              DESTINATION &bull; GAYA, BIHAR
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
          </div>

          <h2
            id="gaya-main-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-tight mb-6"
          >
            Stay in the{' '}
            <span className="italic font-cormorant text-[#DFC493]">
              Heart of Gaya.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D8C9B4] leading-relaxed font-sans max-w-2xl mx-auto">
            Located in Chand Chaura along Vishnupad Road, our hotel anchors you
            at the cultural and spiritual core of Gaya, where millennia of devotion,
            Vedic tradition, and enlightenment converge.
          </p>
        </div>

        {/* Chand Chaura Editorial Callout Banner */}
        <div className="relative rounded-sm overflow-hidden mb-16 border border-[#C9A86A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-gradient-to-r from-[#211C18] via-[#2A231E] to-[#211C18]">
            
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C9A86A] font-medium mb-3">
                <MapPin className="w-4 h-4" />
                <span>CHAND CHAURA &bull; VISHNUPAD ROAD</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EA] mb-4">
                An Address Connected to Sacred Rituals
              </h3>

              <p className="text-sm sm:text-base text-[#D8C9B4] leading-relaxed mb-6 font-sans">
                Chand Chaura is one of the most culturally revered localities of Gaya.
                Staying here means you avoid long travel delays across the city and can
                reach the sacred Vishnupad Temple complex at ease, whether for early
                morning Mangala Aarti, sacred Pinda Daan, or tranquil sunset contemplation
                by the Falgu River.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#5A4030]/60 text-xs text-[#D8C9B4]">
                <div className="flex items-center space-x-2">
                  <Landmark className="w-4 h-4 text-[#C9A86A]" />
                  <span>Vishnupad Sanctuary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sunrise className="w-4 h-4 text-[#C9A86A]" />
                  <span>Falgu River Ghats</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-[#C9A86A]" />
                  <span>Chand Chaura Bazaar</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
              <LuxuryImage
                src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80"
                alt="Sacred spiritual atmosphere and ancient architectural temple spires of Gaya"
                aspectClass="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211C18] via-transparent to-transparent lg:hidden" />
            </div>

          </div>
        </div>

        {/* Authentic Gaya Destination Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GAYA_HIGHLIGHTS.map((spot) => (
            <div
              key={spot.id}
              className="bg-[#2B231D] border border-[#5A4030]/40 hover:border-[#C9A86A]/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col group shadow-lg"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <LuxuryImage
                  src={spot.image}
                  alt={spot.title}
                  aspectClass="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211C18] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86A] block font-semibold">
                    {spot.category}
                  </span>
                  <span className="text-[11px] font-serif text-[#D8C9B4]/80 italic">
                    {spot.hindiTitle}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-serif text-lg text-[#F7F3EA] mb-2 group-hover:text-[#DFC493] transition-colors">
                    {spot.title}
                  </h4>
                  <p className="text-xs text-[#D8C9B4]/90 leading-relaxed mb-4">
                    {spot.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#5A4030]/40">
                  <p className="text-[11px] text-[#C9A86A] italic font-serif">
                    {spot.significance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Cuisine Note */}
        <div className="mt-14 text-center p-6 bg-[#261F1A] border border-[#5A4030]/50 rounded-sm max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-semibold block mb-2">
            HERITAGE DELICACIES OF GAYA
          </span>
          <p className="text-xs text-[#D8C9B4] leading-relaxed">
            During your stay at Sri Vishnu View Hotel, explore the renowned sweet bazaars of
            Chand Chaura and Ramna, celebrated for authentic winter <span className="text-[#F7F3EA] font-medium">Tilkut</span> (sesame confection),{' '}
            <span className="text-[#F7F3EA] font-medium">Khaja</span>, and traditional regional specialties.
          </p>
        </div>

      </div>
    </section>
  );
}

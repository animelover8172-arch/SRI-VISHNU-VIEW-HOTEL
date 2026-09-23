import { useState } from 'react';
import { Users, Bed, CheckCircle2, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import LuxuryImage from './LuxuryImage';

interface RoomsProps {
  onSelectRoomForBooking: (roomName: string) => void;
}

export default function Rooms({ onSelectRoomForBooking }: RoomsProps) {
  const [activeTab, setActiveTab] = useState<string>(ROOMS_DATA[0].id);

  const activeRoom = ROOMS_DATA.find((r) => r.id === activeTab) || ROOMS_DATA[0];

  return (
    <section
      id="rooms"
      className="py-28 sm:py-36 bg-[#080807] text-[#F7F3EA] relative overflow-hidden"
    >
      {/* Background Subtle Luxury Grain */}
      <div className="absolute inset-0 luxury-dark-grain opacity-50 pointer-events-none" />

      {/* Subtle Top & Bottom Architectural Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              ACCOMMODATIONS &bull; GAYA
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            id="rooms-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-6"
          >
            Designed for Rest.{' '}
            <span className="italic font-cormorant text-[#E1BE4A] block sm:inline">
              Remembered for Comfort.
            </span>
          </h2>

          <p className="text-[#A7A49C] text-base sm:text-lg leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Each space is conceived as a calm sanctuary after meaningful hours at
            Vishnupad and Bodh Gaya, pairing pristine cleanliness with peaceful warmth.
          </p>

          {/* Room Selection Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
            {ROOMS_DATA.map((room) => {
              const isSelected = room.id === activeTab;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveTab(room.id)}
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-full font-semibold cursor-pointer ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#080807] shadow-lg shadow-[#D4AF37]/25 font-bold'
                      : 'bg-[#131210] hover:bg-[#1A1916] text-[#A7A49C] hover:text-[#F7F3EA] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                  }`}
                >
                  {room.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Storytelling Room Card Showcase (Dark Luxury Showcase) */}
        <div className="bg-[#0D0D0B] border border-[#D4AF37]/25 rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl mb-16 relative">
          
          {/* Subtle Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Room Image with Zoom & Architectural Details */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded-sm border border-[#D4AF37]/25">
              <div className="relative overflow-hidden aspect-[16/11]">
                <LuxuryImage
                  src={activeRoom.image}
                  alt={activeRoom.name}
                  aspectClass="aspect-[16/11]"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/90 via-[#080807]/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#080807]/90 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold rounded-sm">
                  {activeRoom.category}
                </div>
              </div>
            </div>

            {/* Room Narrative & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs text-[#D4AF37] tracking-[0.2em] uppercase mb-2 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeRoom.tagline}</span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#F7F3EA] font-normal mb-4 leading-tight">
                  {activeRoom.name}
                </h3>

                <p className="text-sm sm:text-base text-[#A7A49C] leading-relaxed mb-6 font-sans font-light">
                  {activeRoom.description}
                </p>

                {/* Occupancy and Bed Type */}
                <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#D4AF37]/15 mb-6 text-xs text-[#F7F3EA]">
                  <div className="flex items-center space-x-2.5">
                    <Users className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-sans">{activeRoom.occupancy}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Bed className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-sans">{activeRoom.bedType}</span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7A49C] block mb-3 font-semibold">
                    ROOM AMENITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F7F3EA]/90 font-sans">
                    {activeRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & Booking Trigger */}
              <div className="pt-6 border-t border-[#D4AF37]/15">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#A7A49C] block font-semibold">
                      TARIFF & RESERVATIONS
                    </span>
                    <span className="text-xs text-[#D4AF37] font-serif italic">
                      {activeRoom.priceNote}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectRoomForBooking(activeRoom.name)}
                    id={`book-room-${activeRoom.id}`}
                    className="bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-xs font-bold uppercase tracking-[0.22em] px-7 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D4AF37]/20 active:scale-95 cursor-pointer"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* All Rooms Storytelling Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="bg-[#0D0D0B] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 transition-all duration-300 p-5 rounded-sm flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/5"
            >
              <div>
                <div className="overflow-hidden rounded-sm mb-4 aspect-[16/10] relative border border-[#D4AF37]/20">
                  <LuxuryImage
                    src={room.image}
                    alt={room.name}
                    aspectClass="aspect-[16/10]"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#080807]/90 text-[#D4AF37] text-[9px] uppercase tracking-wider px-2 py-1 font-semibold border border-[#D4AF37]/30">
                    {room.category}
                  </div>
                </div>

                <h4 className="font-cinzel text-base sm:text-lg text-[#F7F3EA] mb-1 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {room.name}
                </h4>
                <p className="text-xs text-[#A7A49C] line-clamp-2 mb-3 font-sans font-light">
                  {room.description}
                </p>

                <div className="flex items-center space-x-3 text-[11px] text-[#A7A49C] py-2 border-t border-[#D4AF37]/10 mb-3 font-sans">
                  <span className="flex items-center space-x-1.5">
                    <Users className="w-3 h-3 text-[#D4AF37]" />
                    <span>{room.occupancy}</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <span className="text-[10px] text-[#D4AF37] italic font-serif">
                  Direct Best Rate
                </span>
                <button
                  onClick={() => onSelectRoomForBooking(room.name)}
                  className="text-xs uppercase tracking-wider text-[#F7F3EA] hover:text-[#D4AF37] font-semibold transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>RESERVE</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Concierge Prompt */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#A7A49C] mb-2 font-sans">
            Have special requirements for large pilgrim groups, elderly travelers, or early arrival?
          </p>
          <a
            href={HOTEL_INFO.phoneTel}
            className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] text-[#D4AF37] hover:text-[#E1BE4A] uppercase font-bold transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak With Hotel Front Desk Directly: {HOTEL_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

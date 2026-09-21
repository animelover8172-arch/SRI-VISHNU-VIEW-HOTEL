import { useState } from 'react';
import { Users, Bed, CheckCircle2, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { ROOMS_DATA, Room, HOTEL_INFO } from '../data/hotelData';
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
      className="py-24 sm:py-32 bg-[#211C18] text-[#F7F3EA] relative overflow-hidden"
    >
      {/* Background Subtle Luxury Grain */}
      <div className="absolute inset-0 luxury-dark-grain opacity-80 pointer-events-none" />

      {/* Subtle Top & Bottom Architectural Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#C9A86A] font-semibold">
              ACCOMMODATIONS &bull; GAYA
            </span>
            <span className="w-6 h-[1px] bg-[#C9A86A]" />
          </div>

          <h2
            id="rooms-main-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-tight mb-6"
          >
            Designed for Rest.{' '}
            <span className="italic font-cormorant text-[#DFC493] block sm:inline">
              Remembered for Comfort.
            </span>
          </h2>

          <p className="text-[#D8C9B4] text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
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
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-[0.18em] transition-all duration-300 rounded-sm font-medium ${
                    isSelected
                      ? 'bg-[#C9A86A] text-[#211C18] shadow-lg shadow-[#C9A86A]/20 font-semibold'
                      : 'bg-[#5A4030]/30 hover:bg-[#5A4030]/50 text-[#D8C9B4] hover:text-[#F7F3EA] border border-[#5A4030]/50'
                  }`}
                >
                  {room.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Storytelling Room Card Showcase */}
        <div className="bg-[#2D2621] border border-[#C9A86A]/25 rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Room Image with Zoom & Architectural Details */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded-sm">
              <div className="relative overflow-hidden aspect-[16/11]">
                <LuxuryImage
                  src={activeRoom.image}
                  alt={activeRoom.name}
                  aspectClass="aspect-[16/11]"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211C18]/80 via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#211C18]/90 backdrop-blur-md border border-[#C9A86A]/40 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#C9A86A] font-semibold">
                  {activeRoom.category}
                </div>
              </div>

              {/* Gold Bottom Accent Line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[#C9A86A] via-[#DFC493] to-transparent mt-0.5" />
            </div>

            {/* Room Narrative & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs text-[#C9A86A] tracking-widest uppercase mb-2 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeRoom.tagline}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F7F3EA] font-normal mb-4">
                  {activeRoom.name}
                </h3>

                <p className="text-sm sm:text-base text-[#D8C9B4] leading-relaxed mb-6 font-sans">
                  {activeRoom.description}
                </p>

                {/* Occupancy and Bed Type */}
                <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#5A4030]/50 mb-6 text-xs text-[#D8C9B4]">
                  <div className="flex items-center space-x-2.5">
                    <Users className="w-4 h-4 text-[#C9A86A]" />
                    <span>{activeRoom.occupancy}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Bed className="w-4 h-4 text-[#C9A86A]" />
                    <span>{activeRoom.bedType}</span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div className="mb-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#8B7B6B] block mb-3 font-semibold">
                    ROOM AMENITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F7F3EA]/90">
                    {activeRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86A] shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & Booking Trigger */}
              <div className="pt-6 border-t border-[#5A4030]/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#8B7B6B] block">
                      TARIFF & RESERVATIONS
                    </span>
                    <span className="text-xs text-[#C9A86A] font-serif italic">
                      {activeRoom.priceNote}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectRoomForBooking(activeRoom.name)}
                    id={`book-room-${activeRoom.id}`}
                    className="bg-[#C9A86A] hover:bg-[#DFC493] text-[#211C18] text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3.5 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
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
              className="bg-[#28211C] border border-[#5A4030]/40 hover:border-[#C9A86A]/50 transition-all duration-300 p-5 rounded-sm flex flex-col justify-between group"
            >
              <div>
                <div className="overflow-hidden rounded-sm mb-4 aspect-[16/10] relative">
                  <LuxuryImage
                    src={room.image}
                    alt={room.name}
                    aspectClass="aspect-[16/10]"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#211C18]/90 text-[#C9A86A] text-[10px] uppercase tracking-wider px-2 py-1">
                    {room.category}
                  </div>
                </div>

                <h4 className="font-serif text-lg text-[#F7F3EA] mb-1 group-hover:text-[#C9A86A] transition-colors">
                  {room.name}
                </h4>
                <p className="text-xs text-[#8B7B6B] line-clamp-2 mb-3">
                  {room.description}
                </p>

                <div className="flex items-center space-x-3 text-[11px] text-[#D8C9B4]/80 py-2 border-t border-[#5A4030]/30 mb-3">
                  <span className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-[#C9A86A]" />
                    <span>{room.occupancy}</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#5A4030]/30 flex items-center justify-between">
                <span className="text-[10px] text-[#C9A86A] italic font-serif">
                  Direct Best Rate
                </span>
                <button
                  onClick={() => onSelectRoomForBooking(room.name)}
                  className="text-xs uppercase tracking-wider text-[#F7F3EA] hover:text-[#C9A86A] font-semibold transition-colors flex items-center space-x-1"
                >
                  <span>RESERVE</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Concierge Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8B7B6B] mb-2">
            Have special requirements for large pilgrim groups, elderly travelers, or early arrival?
          </p>
          <a
            href={HOTEL_INFO.phoneTel}
            className="inline-flex items-center space-x-2 text-xs tracking-widest text-[#C9A86A] hover:text-[#DFC493] uppercase font-semibold"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak With Hotel Front Desk Directly: {HOTEL_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

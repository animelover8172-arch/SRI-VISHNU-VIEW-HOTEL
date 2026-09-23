import { MapPin, Phone, Navigation, Clock, Landmark, ExternalLink } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function LocationSection() {
  return (
    <section
      id="location"
      className="py-28 sm:py-36 bg-[#080807] text-[#F7F3EA] relative overflow-hidden"
    >
      <div className="absolute inset-0 luxury-dark-grain opacity-50 pointer-events-none" />

      {/* Subtle Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              FIND YOUR WAY
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            id="location-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-4"
          >
            Location & Surroundings
          </h2>
          <p className="text-sm sm:text-base text-[#A7A49C] font-sans font-light">
            Centrally situated on Vishnupad Road, Chand Chaura, Gaya.
          </p>
        </div>

        {/* Premium Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address & Details (Deep Luxury Card) */}
          <div className="lg:col-span-5 bg-[#0D0D0B] border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-2xl relative">
            
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] block font-semibold mb-2">
                HOTEL & RESTAURANT SANCTUARY
              </span>

              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F3EA] font-normal mb-1">
                SRI VISHNU VIEW HOTEL
              </h3>
              <p className="font-serif text-sm text-[#E1BE4A] italic mb-6">
                श्री विष्णु व्यू होटल
              </p>

              <div className="space-y-5 text-xs sm:text-sm text-[#A7A49C] mb-8 font-sans font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1 font-medium">Full Postal Address</strong>
                    <p className="leading-relaxed">
                      Sri Vishnu View Restaurant, Vishnupad Rd,<br />
                      Chand Chaura, Gaya, Bihar 823001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1 font-medium">Reception & Inquiries</strong>
                    <a
                      href={HOTEL_INFO.phoneTel}
                      className="text-[#D4AF37] hover:text-[#E1BE4A] transition-colors font-semibold text-base font-cinzel tracking-wider"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1 font-medium">Check-in / Check-out</strong>
                    <p>Check-in: {HOTEL_INFO.checkInTime} &bull; Check-out: {HOTEL_INFO.checkOutTime}</p>
                    <span className="text-[11px] text-[#A7A49C]/70 block mt-0.5">
                      (24-Hour Front Desk for late/early arrivals)
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Landmark className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1 font-medium">Prime Landmarks</strong>
                    <p className="text-xs text-[#A7A49C]/80">
                      Walking proximity to Vishnupad Temple, Falgu River, Chand Chaura market square.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="flex-1 bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-xs font-bold uppercase tracking-[0.22em] py-3.5 px-5 rounded-full transition-all duration-300 text-center flex items-center justify-center space-x-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={HOTEL_INFO.phoneTel}
                className="border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#F7F3EA] text-xs font-semibold uppercase tracking-wider py-3.5 px-5 rounded-full transition-colors text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>CALL HOTEL</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed in Dark Container */}
          <div className="lg:col-span-7 bg-[#0D0D0B] border border-[#D4AF37]/25 rounded-sm overflow-hidden relative shadow-2xl flex flex-col min-h-[420px]">
            
            {/* Interactive Map Embed via Google Maps */}
            <div className="relative w-full flex-1 min-h-[360px]">
              <iframe
                title="Sri Vishnu View Hotel Location in Chand Chaura, Gaya"
                src="https://maps.google.com/maps?q=Sri+Vishnu+View+Restaurant+Vishnupad+Rd+Chand+Chaura+Gaya+Bihar+823001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Map Footer Bar */}
            <div className="p-4 bg-[#080807] border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#A7A49C] font-sans">
              <span className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#F7F3EA]/80">Vishnupad Rd, Chand Chaura, Gaya, Bihar 823001</span>
              </span>

              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#E1BE4A] flex items-center space-x-1 font-semibold uppercase tracking-wider text-[11px]"
              >
                <span>OPEN IN MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

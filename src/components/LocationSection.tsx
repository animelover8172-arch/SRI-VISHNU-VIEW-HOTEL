import { MapPin, Phone, Navigation, Clock, Landmark, ExternalLink } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function LocationSection() {
  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-[#211C18] text-[#F7F3EA] relative overflow-hidden"
    >
      <div className="absolute inset-0 luxury-dark-grain opacity-75 pointer-events-none" />

      {/* Subtle Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#C9A86A] font-semibold">
              FIND YOUR WAY
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
          </div>

          <h2
            id="location-main-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-tight mb-4"
          >
            Location & Surroundings
          </h2>
          <p className="text-sm sm:text-base text-[#D8C9B4] font-sans">
            Centrally situated on Vishnupad Road, Chand Chaura, Gaya.
          </p>
        </div>

        {/* Premium Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address & Details */}
          <div className="lg:col-span-5 bg-[#2B231D] border border-[#C9A86A]/30 p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] block font-semibold mb-2">
                HOTEL & RESTAURANT SANCTUARY
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EA] font-normal mb-1">
                SRI VISHNU VIEW HOTEL
              </h3>
              <p className="font-serif text-sm text-[#DFC493] italic mb-6">
                श्री विष्णु व्यू होटल
              </p>

              <div className="space-y-5 text-xs sm:text-sm text-[#D8C9B4] mb-8 font-sans">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1">Full Postal Address</strong>
                    <p className="leading-relaxed">
                      Sri Vishnu View Restaurant, Vishnupad Rd,<br />
                      Chand Chaura, Gaya, Bihar 823001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C9A86A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1">Reception & Inquiries</strong>
                    <a
                      href={HOTEL_INFO.phoneTel}
                      className="text-[#C9A86A] hover:text-[#DFC493] transition-colors font-medium text-base"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#C9A86A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1">Check-in / Check-out</strong>
                    <p>Check-in: {HOTEL_INFO.checkInTime} &bull; Check-out: {HOTEL_INFO.checkOutTime}</p>
                    <span className="text-[11px] text-[#8B7B6B] block mt-0.5">
                      (24-Hour Front Desk for late/early arrivals)
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Landmark className="w-4 h-4 text-[#C9A86A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F3EA] block mb-1">Prime Landmarks</strong>
                    <p className="text-xs text-[#8B7B6B]">
                      Walking proximity to Vishnupad Temple, Falgu River, Chand Chaura market square.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#5A4030]/50 flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="flex-1 bg-[#C9A86A] hover:bg-[#DFC493] text-[#211C18] text-xs font-semibold uppercase tracking-[0.2em] py-3.5 px-5 rounded-sm transition-all duration-300 text-center flex items-center justify-center space-x-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={HOTEL_INFO.phoneTel}
                className="border border-[#C9A86A]/40 hover:border-[#C9A86A] text-[#F7F3EA] text-xs font-medium uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>CALL HOTEL</span>
              </a>
            </div>
          </div>

          {/* Right Column: Elegant Rounded Map Container */}
          <div className="lg:col-span-7 bg-[#2B231D] border border-[#C9A86A]/30 rounded-sm overflow-hidden relative shadow-2xl flex flex-col min-h-[420px]">
            
            {/* Interactive Map Embed via Google Maps */}
            <div className="relative w-full flex-1 min-h-[360px]">
              <iframe
                title="Sri Vishnu View Hotel Location in Chand Chaura, Gaya"
                src="https://maps.google.com/maps?q=Sri+Vishnu+View+Restaurant+Vishnupad+Rd+Chand+Chaura+Gaya+Bihar+823001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Map Footer Bar */}
            <div className="p-4 bg-[#211C18] border-t border-[#5A4030]/50 flex items-center justify-between text-xs text-[#D8C9B4]">
              <span className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>Vishnupad Rd, Chand Chaura, Gaya, Bihar 823001</span>
              </span>

              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A86A] hover:text-[#DFC493] flex items-center space-x-1 font-semibold uppercase tracking-wider text-[11px]"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

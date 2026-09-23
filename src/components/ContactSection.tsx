import { Phone, MessageCircle, Navigation, Star, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Namaste Sri Vishnu View Hotel, I would like to inquire about room booking and stay details in Gaya.'
  )}`;

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 bg-[#0D0D0B] text-[#F7F3EA] luxury-dark-grain relative overflow-hidden"
    >
      {/* Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Luxury Contact Container */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              HOSPITALITY CONCIERGE
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          {/* Heading */}
          <h2
            id="contact-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-6"
          >
            Let Your Journey{' '}
            <span className="italic font-cormorant text-[#E1BE4A]">
              Begin.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A49C] leading-relaxed font-sans font-light max-w-xl mx-auto mb-12">
            Whether you are planning your holy pilgrimage, family stay, or exploratory visit,
            our front desk is prepared to assist you with genuine warmth.
          </p>

          {/* Key Facts Cards (Dark Luxury Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
            
            {/* Phone */}
            <div className="bg-[#12110F] border border-[#D4AF37]/20 p-6 rounded-sm shadow-xl hover:border-[#D4AF37]/50 transition-colors">
              <Phone className="w-5 h-5 text-[#D4AF37] mb-3" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#A7A49C] block font-semibold">
                TELEPHONE INQUIRIES
              </span>
              <a
                href={HOTEL_INFO.phoneTel}
                className="font-cinzel text-base font-semibold text-[#F7F3EA] hover:text-[#D4AF37] block mt-1 tracking-wider"
              >
                {HOTEL_INFO.phone}
              </a>
              <span className="text-[11px] text-[#A7A49C]/70 font-sans block mt-0.5">Available 24 Hours</span>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#12110F] border border-[#D4AF37]/20 p-6 rounded-sm shadow-xl hover:border-[#D4AF37]/50 transition-colors">
              <MessageCircle className="w-5 h-5 text-[#25D366] mb-3" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#A7A49C] block font-semibold">
                INSTANT WHATSAPP
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel text-base font-semibold text-[#F7F3EA] hover:text-[#D4AF37] block mt-1 tracking-wider"
              >
                +91 70915 90500
              </a>
              <span className="text-[11px] text-[#A7A49C]/70 font-sans block mt-0.5">Direct Desk Messaging</span>
            </div>

            {/* Address */}
            <div className="bg-[#12110F] border border-[#D4AF37]/20 p-6 rounded-sm shadow-xl hover:border-[#D4AF37]/50 transition-colors">
              <MapPin className="w-5 h-5 text-[#D4AF37] mb-3" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#A7A49C] block font-semibold">
                ADDRESS
              </span>
              <p className="font-cinzel text-sm font-semibold text-[#F7F3EA] mt-1 line-clamp-2">
                Chand Chaura, Vishnupad Rd
              </p>
              <span className="text-[11px] text-[#A7A49C]/70 font-sans block mt-0.5">Gaya, Bihar 823001</span>
            </div>

            {/* Google Rating */}
            <div className="bg-[#12110F] border border-[#D4AF37]/20 p-6 rounded-sm shadow-xl hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center space-x-1 text-[#D4AF37] mb-3">
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-4 h-4 fill-[#D4AF37]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#A7A49C] block font-semibold">
                GOOGLE RATING
              </span>
              <p className="font-cinzel text-base font-semibold text-[#F7F3EA] mt-1">
                {HOTEL_INFO.googleRating} ★ Rating
              </p>
              <span className="text-[11px] text-[#A7A49C]/70 font-sans block mt-0.5">{HOTEL_INFO.reviewsCount} Google Reviews</span>
            </div>

          </div>

          {/* Three Primary Buttons as Specified */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Call Hotel */}
            <a
              href={HOTEL_INFO.phoneTel}
              id="contact-call-btn"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-xs font-bold uppercase tracking-[0.22em] px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D4AF37]/20 active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#080807]" />
              <span>CALL HOTEL</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-[#FFFFFF] text-xs font-bold uppercase tracking-[0.22em] px-8 py-4 rounded-full transition-colors flex items-center justify-center space-x-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>

            {/* Get Directions */}
            <a
              href={HOTEL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-directions-btn"
              className="w-full sm:w-auto border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#F7F3EA] text-xs font-semibold uppercase tracking-[0.22em] px-8 py-4 rounded-full transition-colors flex items-center justify-center space-x-2"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

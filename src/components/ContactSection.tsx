import { Phone, MessageCircle, Navigation, Star, MapPin, Mail, Clock } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Namaste Sri Vishnu View Hotel, I would like to inquire about room booking and stay details in Gaya.'
  )}`;

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#F7F3EA] text-[#211C18] luxury-grain relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Luxury Contact Container */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Small Label */}
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#5A4030] font-semibold">
              HOSPITALITY CONCIERGE
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]" />
          </div>

          {/* Heading */}
          <h2
            id="contact-main-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#211C18] font-normal leading-tight tracking-tight mb-6"
          >
            Let Your Journey{' '}
            <span className="italic font-cormorant text-[#5A4030]">
              Begin.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A4030]/90 leading-relaxed font-sans max-w-xl mx-auto mb-12">
            Whether you are planning your holy pilgrimage, family stay, or exploratory visit,
            our front desk is prepared to assist you with genuine warmth.
          </p>

          {/* Key Facts Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
            
            {/* Phone */}
            <div className="bg-[#FFFFFF] border border-[#D8C9B4]/60 p-6 rounded-sm shadow-sm hover:border-[#C9A86A] transition-colors">
              <Phone className="w-5 h-5 text-[#C9A86A] mb-3" />
              <span className="text-[10px] uppercase tracking-widest text-[#8B7B6B] block">
                TELEPHONE INQUIRIES
              </span>
              <a
                href={HOTEL_INFO.phoneTel}
                className="font-serif text-base font-semibold text-[#211C18] hover:text-[#5A4030] block mt-1"
              >
                {HOTEL_INFO.phone}
              </a>
              <span className="text-[11px] text-[#8B7B6B]">Available 24 Hours</span>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#FFFFFF] border border-[#D8C9B4]/60 p-6 rounded-sm shadow-sm hover:border-[#C9A86A] transition-colors">
              <MessageCircle className="w-5 h-5 text-[#25D366] mb-3" />
              <span className="text-[10px] uppercase tracking-widest text-[#8B7B6B] block">
                INSTANT WHATSAPP
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base font-semibold text-[#211C18] hover:text-[#5A4030] block mt-1"
              >
                +91 70915 90500
              </a>
              <span className="text-[11px] text-[#8B7B6B]">Direct Desk Messaging</span>
            </div>

            {/* Address */}
            <div className="bg-[#FFFFFF] border border-[#D8C9B4]/60 p-6 rounded-sm shadow-sm hover:border-[#C9A86A] transition-colors">
              <MapPin className="w-5 h-5 text-[#C9A86A] mb-3" />
              <span className="text-[10px] uppercase tracking-widest text-[#8B7B6B] block">
                ADDRESS
              </span>
              <p className="font-serif text-sm font-semibold text-[#211C18] mt-1 line-clamp-2">
                Chand Chaura, Vishnupad Rd
              </p>
              <span className="text-[11px] text-[#8B7B6B]">Gaya, Bihar 823001</span>
            </div>

            {/* Google Rating */}
            <div className="bg-[#FFFFFF] border border-[#D8C9B4]/60 p-6 rounded-sm shadow-sm hover:border-[#C9A86A] transition-colors">
              <div className="flex items-center space-x-1 text-[#C9A86A] mb-3">
                <Star className="w-4 h-4 fill-[#C9A86A]" />
                <Star className="w-4 h-4 fill-[#C9A86A]" />
                <Star className="w-4 h-4 fill-[#C9A86A]" />
                <Star className="w-4 h-4 fill-[#C9A86A]" />
                <Star className="w-4 h-4 fill-[#C9A86A]" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#8B7B6B] block">
                GOOGLE RATING
              </span>
              <p className="font-serif text-base font-semibold text-[#211C18] mt-1">
                {HOTEL_INFO.googleRating} ★ Rating
              </p>
              <span className="text-[11px] text-[#8B7B6B]">{HOTEL_INFO.reviewsCount} Google Reviews</span>
            </div>

          </div>

          {/* Three Primary Buttons as Specified */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Call Hotel */}
            <a
              href={HOTEL_INFO.phoneTel}
              id="contact-call-btn"
              className="w-full sm:w-auto bg-[#211C18] hover:bg-[#5A4030] text-[#F7F3EA] text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#C9A86A]" />
              <span>CALL HOTEL</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-colors flex items-center justify-center space-x-2 shadow-sm"
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
              className="w-full sm:w-auto border border-[#5A4030] hover:border-[#C9A86A] hover:bg-[#C9A86A]/10 text-[#211C18] text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Navigation className="w-4 h-4 text-[#C9A86A]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

import { Phone, MessageCircle, Globe, MapPin, ChevronUp } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gaya', href: '#gaya' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#050504] text-[#F7F3EA] pt-20 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden"
    >
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 luxury-dark-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#D4AF37]/15">
          
          {/* Brand Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] block font-semibold">
              {HOTEL_INFO.nameHindi}
            </span>
            
            <h2 className="font-cinzel text-3xl sm:text-4xl text-[#F7F3EA] font-semibold tracking-[0.08em] uppercase leading-tight">
              SRI VISHNU VIEW<br />
              <span className="text-xl sm:text-2xl tracking-[0.22em] text-[#E1BE4A]">HOTEL</span>
            </h2>

            <p className="text-xs text-[#A7A49C] max-w-sm leading-relaxed font-sans font-light pt-2">
              “Stay Above the Ordinary.” A sanctuary combining modern architectural comfort
              and pure hospitality in the revered pilgrimage heart of Gaya, Bihar.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-colors cursor-pointer shadow-md shadow-[#D4AF37]/20"
              >
                RESERVE YOUR STAY
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold mb-4">
              HOTEL DIRECTORY
            </span>
            <ul className="space-y-2.5 text-xs text-[#A7A49C]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#D4AF37] transition-colors uppercase tracking-[0.16em] block py-0.5 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address & Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold mb-4">
              SANCTUARY ADDRESS
            </span>

            <div className="space-y-3 text-xs text-[#A7A49C] leading-relaxed font-sans font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p>
                  Sri Vishnu View Restaurant,<br />
                  Vishnupad Rd, Chand Chaura,<br />
                  Gaya, Bihar 823001
                </p>
              </div>

              <div className="flex items-center space-x-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={HOTEL_INFO.phoneTel}
                  className="hover:text-[#D4AF37] transition-colors font-cinzel font-semibold text-sm tracking-wider text-[#F7F3EA]"
                >
                  {HOTEL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors font-sans"
                >
                  +91 70915 90500 (WhatsApp)
                </a>
              </div>

              <p className="text-[11px] text-[#A7A49C]/70 pt-2 font-sans">
                Google Rating: <span className="text-[#D4AF37] font-semibold">{HOTEL_INFO.googleRating} ★</span> ({HOTEL_INFO.reviewsCount} verified reviews)
              </p>
            </div>
          </div>

        </div>

        {/* Developer Credit & Legal Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A7A49C]">
          
          {/* Left: Copyright */}
          <div>
            <p className="font-sans font-light">
              &copy; {new Date().getFullYear()} Sri Vishnu View Hotel. All rights reserved.
            </p>
          </div>

          {/* Middle: Developer Credit */}
          <div
            id="developer-credit-box"
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 bg-[#0D0D0B] border border-[#D4AF37]/25 px-5 py-2.5 rounded-full text-center shadow-lg"
          >
            <span className="text-[#A7A49C] flex items-center space-x-1.5 font-sans">
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-medium text-[#F7F3EA]">Designed & Developed by RoadsideDeveloper</span>
            </span>

            <span className="hidden sm:inline text-[#D4AF37]/30">&bull;</span>

            <a
              href="https://wa.me/917654224826"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7A49C] hover:text-[#25D366] transition-colors flex items-center space-x-1 font-sans"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp: +91 7654224826</span>
            </a>

            <span className="hidden sm:inline text-[#D4AF37]/30">&bull;</span>

            <a
              href="tel:8405918172"
              className="text-[#A7A49C] hover:text-[#D4AF37] transition-colors flex items-center space-x-1 font-sans"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Call: +91 8405918172</span>
            </a>
          </div>

          {/* Right: Scroll to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-xs text-[#D4AF37] hover:text-[#E1BE4A] transition-colors uppercase tracking-[0.2em] font-semibold cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

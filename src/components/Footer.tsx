import { Phone, MessageCircle, Globe, MapPin, Heart, ChevronUp } from 'lucide-react';
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
      className="bg-[#191512] text-[#F7F3EA] pt-20 pb-12 border-t border-[#C9A86A]/20 relative overflow-hidden"
    >
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 luxury-dark-grain opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#5A4030]/40">
          
          {/* Brand Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86A] block font-semibold">
              {HOTEL_INFO.nameHindi}
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EA] font-medium tracking-[0.12em] uppercase leading-none">
              SRI VISHNU VIEW<br />
              <span className="text-xl sm:text-2xl tracking-[0.25em] text-[#D8C9B4]">HOTEL</span>
            </h2>

            <p className="text-xs text-[#8B7B6B] max-w-sm leading-relaxed font-sans pt-2">
              “Stay Above the Ordinary.” A sanctuary combining modern architectural comfort
              and pure hospitality in the revered pilgrimage heart of Gaya, Bihar.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#C9A86A] hover:bg-[#DFC493] text-[#211C18] text-xs font-semibold uppercase tracking-[0.18em] px-6 py-3 rounded-sm transition-colors"
              >
                RESERVE YOUR STAY
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] block font-semibold mb-4">
              HOTEL DIRECTORY
            </span>
            <ul className="space-y-2.5 text-xs text-[#D8C9B4]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#C9A86A] transition-colors uppercase tracking-wider block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address & Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] block font-semibold mb-4">
              SANCTUARY ADDRESS
            </span>

            <div className="space-y-3 text-xs text-[#D8C9B4] leading-relaxed font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
                <p>
                  Sri Vishnu View Restaurant,<br />
                  Vishnupad Rd, Chand Chaura,<br />
                  Gaya, Bihar 823001
                </p>
              </div>

              <div className="flex items-center space-x-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <a
                  href={HOTEL_INFO.phoneTel}
                  className="hover:text-[#C9A86A] transition-colors font-medium text-sm"
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
                  className="hover:text-[#C9A86A] transition-colors"
                >
                  +91 70915 90500 (WhatsApp)
                </a>
              </div>

              <p className="text-[11px] text-[#8B7B6B] pt-2">
                Google Rating: <span className="text-[#C9A86A] font-semibold">{HOTEL_INFO.googleRating} ★</span> ({HOTEL_INFO.reviewsCount} verified reviews)
              </p>
            </div>
          </div>

        </div>

        {/* Mandatory Developer Credit & Legal Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8B7B6B]">
          
          {/* Left: Copyright */}
          <div>
            <p>
              &copy; {new Date().getFullYear()} Sri Vishnu View Hotel. All rights reserved.
            </p>
          </div>

          {/* Middle: Developer Credit */}
          <div
            id="developer-credit-box"
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 bg-[#211C18] border border-[#5A4030]/60 px-5 py-2.5 rounded-sm text-center"
          >
            <span className="text-[#D8C9B4] flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span className="font-medium text-[#F7F3EA]">Designed & Developed by RoadsideDeveloper</span>
            </span>

            <span className="hidden sm:inline text-[#5A4030]">&bull;</span>

            <a
              href="https://wa.me/917654224826"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8C9B4] hover:text-[#25D366] transition-colors flex items-center space-x-1"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp: +91 7654224826</span>
            </a>

            <span className="hidden sm:inline text-[#5A4030]">&bull;</span>

            <a
              href="tel:8405918172"
              className="text-[#D8C9B4] hover:text-[#C9A86A] transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3 text-[#C9A86A]" />
              <span>Call: +91 8405918172</span>
            </a>
          </div>

          {/* Right: Scroll to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-xs text-[#C9A86A] hover:text-[#DFC493] transition-colors uppercase tracking-widest font-medium"
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

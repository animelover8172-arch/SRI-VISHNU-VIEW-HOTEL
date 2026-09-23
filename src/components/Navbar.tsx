import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

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
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080807]/95 backdrop-blur-xl py-3 border-b border-[#D4AF37]/20 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#080807]/95 via-[#080807]/60 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Editorial Typography */}
          <a
            href="#hero"
            id="brand-logo"
            className="flex items-center space-x-3.5 group cursor-pointer text-left select-none"
          >
            {/* Architectural Insignia / Monogram */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm border border-[#D4AF37]/40 bg-gradient-to-br from-[#1A1916] to-[#0D0D0B] flex items-center justify-center relative overflow-hidden group-hover:border-[#D4AF37] transition-all duration-300 shadow-md">
              <span className="font-serif text-[#D4AF37] text-base sm:text-lg font-semibold tracking-wider">
                SV
              </span>
              <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.26em] text-[#D4AF37] uppercase font-sans font-medium">
                {HOTEL_INFO.nameHindi}
              </span>
              <span className="font-cinzel text-base sm:text-lg lg:text-xl tracking-[0.18em] text-[#F7F3EA] font-semibold uppercase leading-tight group-hover:text-[#E1BE4A] transition-colors">
                SRI VISHNU VIEW
              </span>
              <span className="text-[9px] tracking-[0.34em] text-[#A7A49C] uppercase font-sans font-medium">
                HOTEL &bull; GAYA
              </span>
            </div>
          </a>

          {/* Desktop Luxury Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.24em] text-[#F7F3EA]/80 hover:text-[#D4AF37] transition-colors duration-300 font-medium py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#E1BE4A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Area Desktop */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Direct Call Button */}
            <a
              href={HOTEL_INFO.phoneTel}
              id="nav-call-btn"
              title="Call Reception"
              className="inline-flex items-center space-x-2 text-xs tracking-wider text-[#A7A49C] hover:text-[#F7F3EA] px-3 py-2 transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden xl:inline font-sans">{HOTEL_INFO.phone}</span>
            </a>

            {/* Direct Book Now Button */}
            <button
              onClick={onOpenBooking}
              id="nav-book-now-btn"
              className="relative overflow-hidden bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-[11px] uppercase tracking-[0.22em] font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-[#D4AF37]/20 active:scale-95 flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2.5 lg:hidden">
            <button
              onClick={onOpenBooking}
              id="mobile-quick-book-btn"
              className="bg-[#D4AF37] text-[#080807] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full sm:hidden"
            >
              BOOK
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-[#F7F3EA] hover:text-[#D4AF37] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D4AF37]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu (Dark Luxury Fullscreen Backdrop) */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-40 bg-[#080807]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-fade-in overflow-y-auto"
        >
          <div className="space-y-6">
            {/* Header info */}
            <div className="pb-5 border-b border-[#D4AF37]/20">
              <span className="text-[11px] text-[#D4AF37] tracking-[0.26em] block uppercase font-medium">
                {HOTEL_INFO.nameHindi}
              </span>
              <span className="font-cinzel text-2xl text-[#F7F3EA] tracking-[0.14em] uppercase font-semibold block mt-0.5">
                SRI VISHNU VIEW HOTEL
              </span>
              <p className="text-xs text-[#A7A49C] mt-1 font-sans">
                Vishnupad Road, Chand Chaura, Gaya &bull; 4.4 ★
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-marcellus text-xl text-[#F7F3EA] hover:text-[#D4AF37] transition-colors py-3 border-b border-[#D4AF37]/10 flex items-center justify-between group"
                >
                  <span className="tracking-wide">{link.label}</span>
                  <span className="text-[#D4AF37] text-base group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer CTA footer */}
          <div className="space-y-3 pt-6 border-t border-[#D4AF37]/20 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              id="mobile-drawer-book-btn"
              className="w-full bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-xs font-bold tracking-[0.22em] uppercase py-3.5 rounded-full transition-colors text-center shadow-lg shadow-[#D4AF37]/20"
            >
              BOOK YOUR STAY
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={HOTEL_INFO.phoneTel}
                className="flex items-center justify-center space-x-2 border border-[#D4AF37]/30 text-[#F7F3EA] py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Hotel</span>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Hello Sri Vishnu View Hotel, I would like to inquire about room booking and availability.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366]/15 border border-[#25D366]/40 text-[#F7F3EA] py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#25D366]/25 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-[#A7A49C] text-center pt-2 font-sans">
              Google Rating: {HOTEL_INFO.googleRating} ★ ({HOTEL_INFO.reviewsCount} reviews)
            </p>
          </div>
        </div>
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
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
            ? 'bg-[#211C18]/95 backdrop-blur-md py-3.5 border-b border-[#C9A86A]/20 shadow-xl shadow-[#211C18]/20'
            : 'bg-gradient-to-b from-[#211C18]/80 via-[#211C18]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            id="brand-logo"
            className="flex flex-col group cursor-pointer text-left"
          >
            <span className="text-[10px] tracking-[0.28em] text-[#C9A86A] uppercase font-sans font-medium transition-colors">
              {HOTEL_INFO.nameHindi}
            </span>
            <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.16em] text-[#F7F3EA] font-semibold uppercase leading-tight group-hover:text-[#DFC493] transition-colors">
              SRI VISHNU VIEW
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#D8C9B4]/80 uppercase font-sans">
              HOTEL &bull; GAYA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.18em] text-[#F7F3EA]/85 hover:text-[#C9A86A] transition-colors duration-300 font-medium py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A86A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Direct Call Button */}
            <a
              href={HOTEL_INFO.phoneTel}
              id="nav-call-btn"
              title="Call Reception"
              className="inline-flex items-center space-x-2 text-xs tracking-wider text-[#D8C9B4] hover:text-[#F7F3EA] px-3 py-2 transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span className="hidden xl:inline">{HOTEL_INFO.phone}</span>
            </a>

            {/* Direct Book Now Button */}
            <button
              onClick={onOpenBooking}
              id="nav-book-now-btn"
              className="relative overflow-hidden bg-[#C9A86A] hover:bg-[#DFC493] text-[#211C18] text-xs uppercase tracking-[0.18em] font-semibold px-5 py-2.5 rounded-sm transition-all duration-300 shadow-sm active:scale-95 flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              id="mobile-quick-book-btn"
              className="bg-[#C9A86A] text-[#211C18] text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm sm:hidden"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-[#F7F3EA] hover:text-[#C9A86A] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C9A86A]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-40 bg-[#211C18]/98 backdrop-blur-lg flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-fade-in"
        >
          <div className="space-y-1">
            <div className="pb-4 border-b border-[#C9A86A]/20 mb-6">
              <span className="text-xs text-[#C9A86A] tracking-widest block uppercase">
                {HOTEL_INFO.nameHindi}
              </span>
              <span className="font-serif text-2xl text-[#F7F3EA] tracking-wider uppercase">
                SRI VISHNU VIEW HOTEL
              </span>
              <p className="text-xs text-[#8B7B6B] mt-1">
                Chand Chaura, Vishnupad Road, Gaya
              </p>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl text-[#F7F3EA] hover:text-[#C9A86A] transition-colors py-2 border-b border-[#5A4030]/20 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#C9A86A] text-sm">&rarr;</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#C9A86A]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              id="mobile-drawer-book-btn"
              className="w-full bg-[#C9A86A] hover:bg-[#DFC493] text-[#211C18] text-sm font-semibold tracking-widest uppercase py-3.5 rounded-sm transition-colors text-center"
            >
              BOOK YOUR STAY
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={HOTEL_INFO.phoneTel}
                className="flex items-center justify-center space-x-2 border border-[#C9A86A]/40 text-[#F7F3EA] py-3 rounded-sm text-xs font-medium tracking-wider uppercase hover:border-[#C9A86A]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>Call Hotel</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Hello Sri Vishnu View Hotel, I would like to inquire about room booking and availability.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#F7F3EA] py-3 rounded-sm text-xs font-medium tracking-wider uppercase hover:bg-[#25D366]/30"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-[#8B7B6B] text-center pt-2">
              Google Rating: {HOTEL_INFO.googleRating} ★ ({HOTEL_INFO.reviewsCount} reviews)
            </p>
          </div>
        </div>
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      if (winScroll > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Namaste Sri Vishnu View Hotel, I would like to inquire about room booking and stay details in Gaya.'
  )}`;

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#E1BE4A] to-[#D4AF37] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating WhatsApp Concierge Button (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end space-y-3">
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            id="back-to-top-floating"
            className="w-10 h-10 rounded-full bg-[#0D0D0B]/90 border border-[#D4AF37]/35 text-[#D4AF37] hover:text-[#080807] hover:bg-[#D4AF37] transition-all duration-300 flex items-center justify-center shadow-2xl cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group relative flex items-center bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20ba59] transition-all duration-300 active:scale-95"
          aria-label="Chat with hotel reception on WhatsApp"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold tracking-wider uppercase pr-0 group-hover:pr-2">
            WhatsApp Desk
          </span>
          <MessageCircle className="w-5 h-5 shrink-0" />
          
          {/* Subtle Online Dot */}
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-[#080807] animate-pulse" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Dark Luxury Glass) */}
      <div
        id="mobile-sticky-bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#080807]/95 backdrop-blur-xl border-t border-[#D4AF37]/25 p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl"
      >
        <a
          href={HOTEL_INFO.phoneTel}
          className="flex-1 flex items-center justify-center space-x-1.5 bg-[#12110F] text-[#F7F3EA] border border-[#D4AF37]/25 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 bg-[#25D366]/20 border border-[#25D366]/50 text-[#F7F3EA] py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-[1.4] flex items-center justify-center space-x-1.5 bg-[#D4AF37] text-[#080807] py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md shadow-[#D4AF37]/20 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Stay</span>
        </button>
      </div>
    </>
  );
}

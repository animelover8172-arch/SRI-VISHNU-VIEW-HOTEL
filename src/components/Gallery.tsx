import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hotelData';
import LuxuryImage from './LuxuryImage';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedIdx(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedIdx(null);
    document.body.style.overflow = '';
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [selectedIdx]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % GALLERY_ITEMS.length);
  }, [selectedIdx]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      className="py-28 sm:py-36 bg-[#0D0D0B] text-[#F7F3EA] luxury-dark-grain relative overflow-hidden"
    >
      {/* Subtle Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              VISUAL REPERTORY
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            id="gallery-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-6"
          >
            Architectural{' '}
            <span className="italic font-cormorant text-[#E1BE4A]">
              Perspectives.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A49C] leading-relaxed font-sans font-light max-w-2xl mx-auto">
            A glimpse into the understated beauty, refined wooden craftsmanship,
            and tranquil spaces awaiting you at Sri Vishnu View Hotel.
          </p>
        </div>

        {/* Editorial Masonry Grid (Preserves all approved client assets) */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item: GalleryItem, index: number) => {
            return (
              <div
                key={item.id}
                className={`${item.span} group relative cursor-pointer overflow-hidden rounded-sm bg-[#080807] border border-[#D4AF37]/20 shadow-xl hover:shadow-2xl transition-all duration-500`}
                onClick={() => handleOpenLightbox(index)}
              >
                <div className={`relative w-full h-full overflow-hidden ${item.aspect}`}>
                  <LuxuryImage
                    src={item.image}
                    alt={item.title}
                    aspectClass="w-full h-full"
                    className="group-hover:scale-106 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/95 via-[#080807]/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Subtle Gold Border Frame on Hover */}
                  <div className="absolute inset-3 border border-[#D4AF37]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm" />

                  {/* Hover Caption Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-cinzel text-base sm:text-lg lg:text-xl text-[#F7F3EA] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Top Right Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080807]/85 backdrop-blur-sm border border-[#D4AF37]/40 text-[#F7F3EA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A7A49C] font-sans">
            Click any perspective to enter the high-definition architectural viewer.
          </p>
        </div>

      </div>

      {/* Interactive Lightbox Modal (Black Luxury Viewport) */}
      {selectedIdx !== null && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-[#080807]/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-[#F7F3EA] w-full max-w-6xl mx-auto pb-4 border-b border-[#D4AF37]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
                {GALLERY_ITEMS[selectedIdx].category}
              </span>
              <h4 className="font-cinzel text-lg sm:text-xl text-[#F7F3EA]">
                {GALLERY_ITEMS[selectedIdx].title}
              </h4>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs font-mono text-[#A7A49C]">
                {selectedIdx + 1} / {GALLERY_ITEMS.length}
              </span>

              <button
                onClick={handleCloseLightbox}
                id="lightbox-close-btn"
                className="p-2 text-[#A7A49C] hover:text-[#D4AF37] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Central Image Presentation */}
          <div
            className="flex-1 flex items-center justify-center relative my-4 sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              id="lightbox-prev-btn"
              className="absolute left-2 sm:left-6 p-3 rounded-full bg-[#0D0D0B]/90 text-[#F7F3EA] hover:text-[#080807] hover:bg-[#D4AF37] transition-colors border border-[#D4AF37]/40 z-10 cursor-pointer shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Visual */}
            <div className="max-w-4xl max-h-[72vh] overflow-hidden rounded-sm shadow-2xl border border-[#D4AF37]/35 bg-[#080807]">
              <img
                src={GALLERY_ITEMS[selectedIdx].image}
                alt={GALLERY_ITEMS[selectedIdx].title}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] w-auto object-contain mx-auto transition-all duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              id="lightbox-next-btn"
              className="absolute right-2 sm:right-6 p-3 rounded-full bg-[#0D0D0B]/90 text-[#F7F3EA] hover:text-[#080807] hover:bg-[#D4AF37] transition-colors border border-[#D4AF37]/40 z-10 cursor-pointer shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails */}
          <div
            className="w-full max-w-xl mx-auto flex items-center justify-center space-x-3 overflow-x-auto py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {GALLERY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`w-14 h-10 rounded-sm overflow-hidden border transition-all shrink-0 cursor-pointer ${
                  selectedIdx === idx
                    ? 'border-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/25'
                    : 'border-transparent opacity-45 hover:opacity-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

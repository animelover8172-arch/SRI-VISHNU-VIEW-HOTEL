import { useState } from 'react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

export default function LuxuryImage({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[16/10]',
  priority = false,
  fallbackSrc
}: LuxuryImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);

  if (src !== currentSrc && !hasTriedFallback && !hasError) {
    setCurrentSrc(src);
  }

  const handleError = () => {
    if (fallbackSrc && !hasTriedFallback) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#0D0D0B] ${aspectClass} ${className}`}
    >
      {/* Loading skeleton shimmer with dark luxury tones */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0B] via-[#1A1916] to-[#0D0D0B] animate-pulse flex items-center justify-center">
          <div className="w-7 h-7 rounded-full border border-[#D4AF37]/30 border-t-[#D4AF37] animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#131210] to-[#080807] text-[#F7F3EA] border border-[#D4AF37]/20">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-2 bg-[#080807]">
            <span className="font-serif text-[#D4AF37] text-base">ॐ</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">
            Sri Vishnu View Hotel
          </span>
          <p className="text-[#A7A49C] text-xs max-w-[220px] leading-relaxed line-clamp-2">
            {alt}
          </p>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}
    </div>
  );
}

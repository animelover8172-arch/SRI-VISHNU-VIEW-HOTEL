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

  // Update currentSrc if prop changes
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

  // High-reliability architectural backup in case network has issues
  const fallbackBg = 'linear-gradient(135deg, #211C18 0%, #5A4030 100%)';

  return (
    <div
      className={`relative overflow-hidden bg-[#211C18] ${aspectClass} ${className}`}
      style={{ background: fallbackBg }}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#211C18]/60 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#C9A86A]/40 border-t-[#C9A86A] animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#211C18] to-[#5A4030] text-[#F7F3EA]">
          <div className="w-12 h-12 rounded-full border border-[#C9A86A]/40 flex items-center justify-center mb-3">
            <span className="font-serif text-[#C9A86A] text-xl">ॐ</span>
          </div>
          <span className="font-serif tracking-widest text-[#C9A86A] text-xs uppercase mb-1">
            Sri Vishnu View Hotel
          </span>
          <p className="text-[#D8C9B4] text-xs max-w-[200px] leading-relaxed">
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

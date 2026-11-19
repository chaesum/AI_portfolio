import {useState} from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  fallbackLabel = 'Archive Frame',
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-surface-container via-surface-container-high to-surface-dim flex flex-col items-center justify-center p-6 text-center select-none"
      >
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary mb-2">
          Editorial Archive
        </span>
        <span className="text-sm font-medium text-on-surface-variant max-w-[20ch] leading-snug">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

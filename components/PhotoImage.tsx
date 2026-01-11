'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PhotoImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

export default function PhotoImage({
  src,
  alt,
  fill,
  className,
  priority,
  sizes,
  width,
  height,
}: PhotoImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Se houver erro ao carregar, tentar usar o caminho original sem codificação
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Tentar decodificar o caminho
      try {
        const decodedSrc = decodeURIComponent(src);
        setImgSrc(decodedSrc);
      } catch {
        // Se falhar, usar o caminho original
        setImgSrc(src);
      }
    }
  };

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        onError={handleError}
        unoptimized={imgSrc.includes('🎉') || imgSrc.includes('🥂') || imgSrc.includes('🎆')}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={handleError}
      unoptimized={imgSrc.includes('🎉') || imgSrc.includes('🥂') || imgSrc.includes('🎆')}
    />
  );
}



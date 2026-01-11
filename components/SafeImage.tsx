'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  onError?: () => void;
}

export default function SafeImage({
  src,
  alt,
  fill,
  className = '',
  priority,
  sizes,
  width,
  height,
  onError,
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Tentar decodificar o caminho
      try {
        const decodedSrc = decodeURIComponent(src);
        if (decodedSrc !== src) {
          setImgSrc(decodedSrc);
          return;
        }
      } catch {
        // Se falhar, continuar
      }
      
      // Se ainda houver erro, chamar callback se fornecido
      if (onError) {
        onError();
      }
    }
  };

  // Se houver erro definitivo, mostrar placeholder
  if (hasError && imgSrc === src) {
    return (
      <div
        className={`bg-black/20 flex items-center justify-center ${className}`}
        style={fill ? {} : { width, height }}
      >
        <span className="text-white/40 text-xs">Imagem não disponível</span>
      </div>
    );
  }

  const imageProps = {
    src: imgSrc,
    alt,
    className,
    priority,
    sizes,
    onError: handleError,
    unoptimized: imgSrc.includes('🎉') || imgSrc.includes('🥂') || imgSrc.includes('🎆') || imgSrc.includes(' '),
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return <Image {...imageProps} width={width} height={height} />;
}


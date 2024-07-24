"use client";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc,
  style,
  className,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      width={500}
      height={500}
      alt={alt}
      style={style}
      className={className}
      onErrorCapture={() => setImgSrc(fallbackSrc)}
      priority
    />
  );
};

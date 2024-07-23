"use client";
import Image from "next/image";
import { CSSProperties, useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  style: CSSProperties;
}

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc,
  style,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      width={500}
      height={500}
      priority
      alt={alt}
      style={style}
      className="card"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

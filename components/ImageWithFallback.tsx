import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      width={500}
      height={500}
      alt={alt}
      style={{
        width: "100%",
        height: "65%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

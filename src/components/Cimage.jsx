import { useState } from "react";

export default function CImage({
  src,
  alt = "",
  blur,
  fallback = "/images/image-not-found-small.webp",
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      
      {/* Blur Image (placeholder) */}
      {blur && !loaded && (
        <img
          src={blur}
          alt="blur"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl"
        />
      )}

      {/* Main Image */}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
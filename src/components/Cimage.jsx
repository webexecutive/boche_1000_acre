import { useState } from "react";

export default function CImage({
  src,
  alt = "",
  blur,
  fallback = "/images/image-not-found-small.webp",
  className = "",
  imgClassName,        // optional override for the <img> tag classes
}) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleLoad = () => setLoaded(true);

  const handleError = () => {
    if (imgSrc !== fallback) setImgSrc(fallback);
  };

  // Default mode: absolute fill (for fixed-size containers)
  // Override mode: natural sizing when imgClassName is provided
  const defaultImgClass =
    "absolute inset-0 w-full h-full object-cover";
  const resolvedImgClass = imgClassName ?? defaultImgClass;

  return (
    <div className={`relative overflow-hidden ${className}`}>

      {/* Blur placeholder */}
      {blur && !loaded && (
        <img
          src={blur}
          alt=""
          aria-hidden="true"
          className={`${resolvedImgClass} scale-110 blur-xl`}
        />
      )}

      {/* Main image */}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`${resolvedImgClass} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
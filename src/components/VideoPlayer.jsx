import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

export default function VideoPlayer({
  src,                 // video source (m3u8 or mp4/webm)
  type = "hls",        // "hls" | "video"
  poster,
  blurPoster,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  className = "",
  overlay = null,
  children,
}) {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (type === "hls") {
      if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 10,
        });

        hls.loadSource(src);
        hls.attachMedia(video);

        return () => hls.destroy();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    } else {
      video.src = src;
    }
  }, [src, type]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Blurred Poster Background */}
      {blurPoster && (
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ 
            backgroundImage: `url(${blurPoster})`,
            filter: "blur(20px)",
            opacity: isLoaded ? 0 : 1,
            transition: "opacity 0.8s ease"
          }}
        />
      )}

      <video
        ref={videoRef}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload="auto"
        poster={poster}
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: "opacity 0.8s ease" }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 pointer-events-none">
          {overlay}
        </div>
      )}

      {/* Content */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
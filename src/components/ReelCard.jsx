import { useState, useEffect } from 'react';
import CImage from './Cimage';

const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

function getAutoplayUrl(embedUrl) {
    if (!embedUrl) return '';
    const base = embedUrl.split('?')[0];
    const videoId = base.split('/embed/')[1] ?? '';
    const params = new URLSearchParams({
        autoplay: '1',
        mute: '1',
        controls: '0',
        loop: '1',
        modestbranding: '1',
        rel: '0',
        playlist: videoId,
        disablekb: '1',
        fs: '0',
        iv_load_policy: '3',
         playsinline: '1',
    });
    return `${base}?${params.toString()}`;
}

function getBlurSrc(thumbnail) {
    if (!thumbnail) return '';
    return thumbnail.replace(/small\.webp$/, 'blur.webp');
}

export default function ReelCard({ title, thumbnail, videoLink, onPlay, isPreviewActive, onPreviewStart, onPreviewStop }) {
    const hasVideo = Boolean(videoLink);
    const showIframe = isPreviewActive;
    const [videoReady, setVideoReady] = useState(false);

    // Reset readiness whenever the preview turns off (so next hover starts fresh)
    useEffect(() => {
        if (!showIframe) {
            setVideoReady(false);
        }
    }, [showIframe]);

    const handleTap = () => {
        if (!hasVideo) return;
        if (!showIframe) {
            onPreviewStart();
        } else {
            onPlay?.();
        }
    };

    const handleIframeLoad = () => {
        setTimeout(() => setVideoReady(true), 300);
    };

    // Only animate the fade when a video is transitioning IN.
    // Returning to the thumbnail happens instantly, matching the iframe's instant unmount.
    const thumbnailHidden = showIframe && videoReady;

    return (
        <div
            className="w-full aspect-9/16 rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onMouseEnter={() => { if (hasVideo && !isMobile) onPreviewStart(); }}
            onMouseLeave={() => { if (hasVideo && !isMobile) onPreviewStop(); }}
            onClick={isMobile ? handleTap : (hasVideo ? onPlay : undefined)}
        >
            {/* Thumbnail — fades out smoothly, but snaps back instantly */}
            <div
                className={`absolute inset-0 ${thumbnailHidden ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'}`}
            >
                <CImage
                    src={thumbnail}
                    blur={getBlurSrc(thumbnail)}
                    alt={title}
                    title={title}
                    className="w-full h-full"
                    imgClassName="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* iframe with full overlay to hide all YouTube UI */}
            {showIframe && (
                <div
                    className={`absolute inset-0 transition-opacity duration-500 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
                    style={{ isolation: 'isolate' }}
                >
                    <iframe
                        src={getAutoplayUrl(videoLink)}
                        className="absolute w-full pointer-events-none"
                        style={{
                            border: 'none',
                            top: '-80px',
                            bottom: '-80px',
                            height: 'calc(100% + 160px)',
                        }}
                        allow="autoplay; encrypted-media"
                        title={title}
                        onLoad={handleIframeLoad}
                    />
                    {/* Full cover — hides all YouTube controls */}
                    <div
                        className="absolute inset-0 cursor-pointer"
                        style={{ zIndex: 2 }}
                    />
                </div>
            )}

            {/* Mobile: "tap to preview" hint */}
            {isMobile && hasVideo && !showIframe && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
                    ▶ Tap to preview
                </div>
            )}

            {/* Mobile: "tap to open" hint when previewing */}
            {isMobile && showIframe && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-black/60 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    Tap to open
                </div>
            )}

            {/* Title bar */}
            <div className="absolute bottom-0 w-full text-center bg-black/50 text-white p-2 z-10">
                <p className="text-2xl">{title}</p>
            </div>
        </div>
    );
}
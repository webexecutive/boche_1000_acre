import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { BsCalendar3, BsClock, BsGeoAlt, BsHourglass } from 'react-icons/bs';
import events from '../data/events.js';
import { getImageById } from '../services/galleryService.js';
import Button from '../components/Button.jsx';
import CImage from '../components/CImage.jsx';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';



const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).format(date);
};

const getDuration = (startTime, endTime) => {
    if (!startTime || !endTime) return null;

    const parse = (t) => {
        const [time, period] = t.split(' ');
        let [h, m] = time.split(':').map(Number);

        if (period === 'PM' && h !== 12) h += 12;
        if (period === 'AM' && h === 12) h = 0;

        return h * 60 + m;
    };

    const diff = parse(endTime) - parse(startTime);
    if (diff <= 0) return null;

    const hrs = Math.floor(diff / 60);
    const mins = diff % 60;

    return mins > 0 ? `${hrs}h ${mins}m` : `${hrs} Hours`;
};

// ─── Info Card ────────────────────────────────────────────────────────────────

const InfoContent = ({ event, dateRange, duration }) => {
    const price = event.pricing?.amount;
    const pricingType = event.pricing?.type;

    return (
        <>
            <div className="space-y-3 text-sm text-[#1a1a1a]">

                <div className="flex items-center gap-3">
                    <BsCalendar3 size={16} className="text-neutral-500" />
                    <span>{dateRange}</span>
                </div>

                {event.startTime && (
                    <div className="flex items-center gap-3">
                        <BsClock size={16} className="text-neutral-500" />
                        <span>{event.startTime}</span>
                    </div>
                )}

                {duration && (
                    <div className="flex items-center gap-3">
                        <BsHourglass size={16} className="text-neutral-500" />
                        <span>{duration}</span>
                    </div>
                )}

                {event.location && (
                    <div className="flex items-center gap-3">
                        <BsGeoAlt size={16} className="text-neutral-500" />
                        <span>{event.location}</span>
                    </div>
                )}
            </div>

            <hr className="border-neutral-300" />

            {/* ✅ Pricing */}
            {event.isTicketed && price && (
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-lg font-semibold text-[#1a1a1a]">
                            ₹ {price}/-
                        </p>
                        <p className="text-xs text-neutral-500">
                            {pricingType === "starting" ? "Onwards" : "Per Ticket"}
                        </p>
                    </div>

                    {event.bookingLink && (
                        <Button size="sm" as="a" href={event.bookingLink}>
                            Book Tickets
                        </Button>
                    )}
                </div>
            )}
        </>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const EventDetails = () => {
    const { id } = useParams();
    const event = events.find(e => String(e.id) === String(id));

    const [expanded, setExpanded] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {
        if (!galleryRef.current) return;

        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryRef.current,
            children: 'a[data-pswp-src]',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();

        return () => lightbox.destroy();
    }, [id]);

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafaf8]">
                <p className="text-neutral-400 text-lg">Event not found.</p>
            </div>
        );
    }

    const bannerItem = event.bannerId ? getImageById(event.bannerId) : null;
    const bannerSrc = bannerItem?.variants?.large || bannerItem?.variants?.small || null;
    const bannerBlur = bannerItem?.variants?.blur || null;

    const bodyText = event.eventOver ? event.debrief : event.description;

    const galleryImages = (event.imageIds || []).map(imgId => getImageById(imgId)).filter(Boolean);

    const duration = getDuration(event.startTime, event.endTime);

    const dateRange =
        event.endDate && event.endDate !== event.startDate
            ? `${formatDate(event.startDate)} — ${formatDate(event.endDate)}`
            : formatDate(event.startDate);

    return (
        <div className="min-h-screen bg-[#fafaf8] pt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-8">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-serif font-light text-[#1a1a1a]">
                    {event.title}
                </h1>

                {/* GRID */}
                <div
                    className={`grid grid-cols-1 gap-8 ${!event.eventOver ? 'lg:grid-cols-[1fr_320px]' : 'lg:grid-cols-1'
                        }`}
                >

                    {/* LEFT */}
                    <div className="flex flex-col gap-8">

                        {/* Banner */}
                        <div className="w-full rounded-2xl overflow-hidden shadow-sm">
                            {bannerSrc ? (
                                <CImage
                                    src={bannerSrc}
                                    blur={bannerBlur}
                                    alt={event.title}
                                    className="w-full"
                                    imgClassName="relative w-full h-auto object-contain"
                                />
                            ) : (
                                <div className="w-full aspect-video bg-neutral-200 flex items-center justify-center">
                                    <span className="text-neutral-400 text-sm">No image</span>
                                </div>
                            )}
                        </div>

                        {/* MOBILE INFO CARD */}
                        {!event.eventOver && (
                            <div className="lg:hidden shadow-lg bg-[#f0f4ec] rounded-2xl p-6 space-y-4">
                                <InfoContent
                                    event={event}
                                    dateRange={dateRange}
                                    duration={duration}
                                />
                            </div>
                        )}

                        {/* DESCRIPTION */}
                        {bodyText && (
                            <div className="bg-[#f0f4ec] shadow-md rounded-2xl p-6 md:p-8 space-y-3">
                                <h2 className="text-2xl font-serif font-light text-[#1a1a1a]">
                                    About The Event
                                </h2>

                                <div className="relative">
                                    <p
                                        className="text-neutral-700 leading-relaxed whitespace-pre-line overflow-hidden transition-all duration-300"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: expanded ? 'unset' : 4,
                                            WebkitBoxOrient: 'vertical'
                                        }}
                                    >
                                        {bodyText}
                                    </p>

                                    {/* Fade effect */}
                                    {!expanded && (
                                        <div className="absolute bottom-0 left-0 w-full h-10  pointer-events-none" />
                                    )}

                                    {/* Toggle */}
                                    {bodyText.length > 180 && (
                                        <button
                                            onClick={() => setExpanded(prev => !prev)}
                                            className="mt-3 text-sm font-medium text-[#3b5d2a] hover:underline"
                                        >
                                            {expanded ? 'Read Less' : 'Read More'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* RIGHT FLOATING CARD */}

                    {!event.eventOver && (
                        <div className="hidden lg:block">
                            <div className="sticky top-24">
                                <div className="bg-[#f0f4ec] shadow-md rounded-2xl p-6 space-y-4">
                                    <InfoContent
                                        event={event}
                                        dateRange={dateRange}
                                        duration={duration}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* GALLERY SECTION */}
                {galleryImages.length > 0 && (
                    <div >
                        <h2 className="text-2xl font-serif font-light text-[#1a1a1a]">
                            Event Gallery
                        </h2>
                        <div ref={galleryRef} className="columns-2 sm:columns-3 lg:columns-4 gap-2">

                            {galleryImages.map((item) => (
                                <a
                                    key={item.id}
                                    data-pswp-src={item.variants.large}
                                    data-pswp-width="1920"
                                    data-pswp-height="1280"
                                    href={item.variants.large}
                                    className="block mb-3 break-inside-avoid overflow-hidden rounded-xl group cursor-zoom-in relative"
                                >
                                    {/* Blur image */}
                                    <img
                                        src={item.variants.blur}
                                        alt=""
                                        aria-hidden="true"
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Real image */}
                                    <img
                                        src={item.variants.small}
                                        alt={item.alt || 'Gallery image'}
                                        loading="lazy"
                                        onLoad={(e) => {
                                            const img = e.currentTarget;
                                            const a = img.closest('a');
                                            img.style.opacity = 1;
                                            if (a && img.naturalWidth > 0) {
                                                const scale = 1920 / Math.max(img.naturalWidth, img.naturalHeight);
                                                a.dataset.pswpWidth = Math.round(img.naturalWidth * scale);
                                                a.dataset.pswpHeight = Math.round(img.naturalHeight * scale);
                                            }
                                        }}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = '/images/image-not-found-small.webp';
                                            e.currentTarget.style.opacity = 1;
                                        }}
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:scale-105"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EventDetails;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import events from '../data/events.js';
import EventCard from '../components/EventCard.jsx';
import { getImageById } from '../services/galleryService.js';

// ─── helpers ──────────────────────────────────────────────────────────────────

const isFuture = (e) => !e.eventOver;
const isPast   = (e) =>  e.eventOver;

// ─── Banner Carousel ──────────────────────────────────────────────────────────

const BannerCarousel = ({ events }) => {
    if (!events.length) return null;

    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={4000}
            showThumbs={false}
            showStatus={false}
            showArrows={events.length > 1}
            swipeable
            emulateTouch
        >
            {events.map(event => {
                const imageItem = event.bannerId ? getImageById(event.bannerId) : null;
                const bgSrc = imageItem?.variants?.large || imageItem?.variants?.small || null;

                // Debug — remove once banner is working
                console.log(`[Banner] event=${event.title} bannerId=${event.bannerId}`, imageItem);

                return (
                    <div key={event.id} className="relative w-full overflow-hidden">
                        {bgSrc ? (
                            <img
                                src={bgSrc}
                                alt={event.title}
                                className="w-full h-auto block"
                            />
                        ) : (
                            <div className="w-full h-[320px] md:h-[420px] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]" />
                        )}
                    </div>
                );
            })}
        </Carousel>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Events = () => {
    const upcoming = events.filter(isFuture);
    const past     = events.filter(isPast);

    return (
        <div className="min-h-screen bg-[#fafaf8] pt-20">

            {/* ── Hero carousel (hidden if no upcoming events) ── */}
            {upcoming.length > 0 && <BannerCarousel events={upcoming} />}

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-20 space-y-16">

                {/* ── Upcoming Events ── */}
                {upcoming.length > 0 && (
                    <section className="space-y-6">
                        <h2 className=" ">
                            Upcoming Events
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcoming.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Divider ── */}
                {upcoming.length > 0 && past.length > 0 && (
                    <div className="border-t border-neutral-200" />
                )}

                {/* ── Past Events ── */}
                {past.length > 0 && (
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif font-light text-[#1a1a1a]">
                            Events We've Hosted
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {past.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
};

export default Events;
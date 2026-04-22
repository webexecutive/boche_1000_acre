import React from 'react';
import events from '../data/events.js';
import EventCard from '../components/EventCard.jsx';



const isFuture = (e) => !e.eventOver;
const isPast = (e) => e.eventOver;


const Events = () => {
    const upcoming = events.filter(isFuture);
    const past = events.filter(isPast);

    return (
        <div className="min-h-screen bg-[#fafaf8] pt-26">

         

            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 space-y-12">

                {/* ── Upcoming Events ── */}
                {upcoming.length > 0 && (
                    <section className="space-y-6">
                        <h2 className=" ">
                            Upcoming Events
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
                        <h2>
                            Events We've Hosted
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
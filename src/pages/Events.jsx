import React from 'react';
import events from '../data/events.js';
import EventCard from '../components/EventCard.jsx';
import SEO from '../components/SEO';

const isFuture = (e) => !e.eventOver;
const isPast = (e) => e.eventOver;

const Events = () => {
    const upcoming = events.filter(isFuture);
    const past = events.filter(isPast);

    return (
        <>
            <SEO
                title="Events in Wayanad | boCHE 1000 Acres"
                description="Discover upcoming events, cultural gatherings, celebrations, and memorable experiences hosted at boCHE 1000 Acres in Wayanad."
                keywords="events in wayanad, wayanad events, resort events wayanad, cultural events kerala, boche events"
                url="https://www.boche1000acre.in/events"
            />

            <div className="min-h-screen bg-[#F7FDE9] ">

                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-10">
                    <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#6a8f3a] mb-3">
                        boCHE Events
                    </p>

                    <h1 className="text-[#1e3209]  mb-4">
                        Events & Celebrations
                    </h1>

                    <div className="w-12 h-px bg-[#c8dba0] mb-5" />

                    <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-6xl">
                        From cultural gatherings and special celebrations to
                        unforgettable experiences, discover the events that
                        bring people together at boCHE 1000 Acres.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-16">

                    {/* Upcoming Events */}
                    {upcoming.length > 0 && (
                        <section>
                            <h2 className="text-[#1e3209] mb-8">
                                Upcoming Events
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                {upcoming.map((event) => (
                                    <EventCard
                                        key={event.id}
                                        event={event}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Divider */}
                    {upcoming.length > 0 && past.length > 0 && (
                        <div className="border-t border-[#c8dba0]" />
                    )}

                    {/* Past Events */}
                    {past.length > 0 && (
                        <section>
                            <h2 className="text-[#1e3209] mb-8">
                                Events We've Hosted
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                {past.map((event) => (
                                    <EventCard
                                        key={event.id}
                                        event={event}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </div>
        </>
    );
};

export default Events;
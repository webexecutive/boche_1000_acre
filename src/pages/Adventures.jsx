import { useState, useEffect } from 'react';
import adventures from '../data/adventuresData';
import AdventureCard from '../components/AdventureCard';
import SEO from '../components/SEO';

function Adventures() {
    const [reelModal, setReelModal] = useState(null);

    /* Lock body scroll when modal is open */
    useEffect(() => {
        document.body.style.overflow = reelModal ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [reelModal]);

    useEffect(() => {
        if (reelModal) {
            window.history.pushState({ modal: true }, "");

            const handlePopState = () => {
                setReelModal(null);
            };

            window.addEventListener("popstate", handlePopState);
            return () => window.removeEventListener("popstate", handlePopState);
        }
    }, [reelModal]);

    return (
        <>
            <SEO
                title="Adventure Activities in Wayanad | Zipline | boCHE 1000 Acre"
                description="Experience thrilling adventure activities in Wayanad at boCHE 1000 Acre. Enjoy Zipline, Giant Swing, ATV Rides, Sky Cycling, and exciting outdoor experiences amidst a breathtaking 1000-acre tea plantation."
                keywords="adventure activities in wayanad, zipline wayanad, ATV ride wayanad, sky cycling wayanad, giant swing wayanad, adventure resort wayanad, wayanad resorts with activities, outdoor activities in wayanad"
               
            />

            <div className="min-h-screen bg-[#F7FDE9]">

                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-10">
                    <p className="text-[11px] font-medium tracking-[0.25em] text-[#6a8f3a] mb-3">
                        boCHE ADVENTURES
                    </p>

                    <h1 className="text-[#1e3209]  mb-4">
                        Adventures in the Heart of Wayanad
                    </h1>

                    <div className="w-12 h-px bg-[#c8dba0] mb-5" />

                    <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-6xl">
                        Experience thrilling outdoor adventures amidst our 1000-acre tea plantation.
                        From sky cycling and giant swings to ATV rides and ziplines, every activity
                        is designed to create unforgettable memories.
                    </p>
                </div>

                {/* Adventure Cards */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {adventures.map((adventure) => (
                            <AdventureCard
                                key={adventure.id}
                                adventure={adventure}
                                onPlay={() => setReelModal(adventure)}
                            />
                        ))}
                    </div>
                </div>

                {/* Reel Modal */}
                {reelModal && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        onClick={() => setReelModal(null)}
                    >
                        <button
                            onClick={() => setReelModal(null)}
                            className="absolute top-4 right-4 z-10 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:bg-black transition"
                        >
                            ✕
                        </button>

                        <div
                            className="w-[90vw] sm:w-80 md:w-96 aspect-9/16 rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                key={reelModal.id}
                                src={`${reelModal.videoLink}?autoplay=1&mute=1&controls=1`}
                                className="w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

            </div>

        </>


    );
}

export default Adventures;
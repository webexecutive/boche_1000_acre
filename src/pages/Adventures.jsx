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
                title="Adventure Activities in Wayanad | Zipline, ATV & Sky Cycling | boCHE 1000 Acre"
                description="Experience thrilling adventure activities in Wayanad at boCHE 1000 Acre. Enjoy Zipline, Giant Swing, ATV Rides, Sky Cycling, and exciting outdoor experiences amidst a breathtaking 1000-acre tea plantation."
                keywords="adventure activities in wayanad, zipline wayanad, ATV ride wayanad, sky cycling wayanad, giant swing wayanad, adventure resort wayanad, wayanad resorts with activities, outdoor activities in wayanad"
                url="https://www.boche1000acre.in/adventures"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 lg:pt-24 pb-20 space-y-8">



                <h2>Adventures</h2>

                {/* ── Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {adventures.map((adventure) => (
                        <AdventureCard
                            key={adventure.id}
                            adventure={adventure}
                            onPlay={() => setReelModal(adventure)}
                        />
                    ))}
                </div>

                {/* ── Reel Modal ── */}
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
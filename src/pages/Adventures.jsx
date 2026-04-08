import { useState, useEffect } from 'react';
import adventures from '../data/adventuresData';
import AdventureCard from '../components/AdventureCard';

function Adventures() {
    const [reelModal, setReelModal] = useState(null);

    /* Lock body scroll when modal is open */
    useEffect(() => {
        document.body.style.overflow = reelModal ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [reelModal]);

    return (
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
    );
}

export default Adventures;
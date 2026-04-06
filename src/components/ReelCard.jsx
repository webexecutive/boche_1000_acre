import { FaPlay } from 'react-icons/fa';

export default function reelCard({
    title,
    thumbnail,
    videoLink,
    onPlay
}) {
    const hasVideo = Boolean(videoLink);

    return (
        <>
            <div className="w-full h-full flex flex-col aspect-3/4 sm:aspect-4/5 rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-shadow duration-300">

                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover absolute inset-0"
                />


                <div className="absolute text-center shadow-black bottom-0 w-full bg-black/50 text-white p-2">
                    <p className="text-2xl">{title}</p>
                </div>


                {hasVideo && (
                    <button
                        onClick={onPlay}
                        aria-label={`Play ${title} video`}
                        className="bg-white/70 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute hover:bg-white rounded-full p-3 hover:cursor-pointer"
                    >
                        <FaPlay className="h-6 w-6 text-black ml-1 opacity-80" />
                    </button>
                )}
            </div>
        </>

    );
}
import { FaPlay } from 'react-icons/fa';
import CImage from './Cimage';

export default function AdventureCard({ adventure, onPlay }) {
    const hasVideo = Boolean(adventure.videoLink);

    return (
        <div className="bg-[#FDFFF8] rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-[0_2px_12px_rgba(46,71,21,0.08)] hover:shadow-[0_8px_32px_rgba(46,71,21,0.16)] hover:-translate-y-1 transition-all duration-300">

            <div
                className={`relative shrink-0 w-full sm:w-[38%] ${
                    hasVideo ? 'cursor-pointer group' : ''
                }`}
                onClick={hasVideo ? onPlay : undefined}
                aria-label={hasVideo ? `Play ${adventure.title} video` : undefined}
            >
                <CImage
                    src={adventure.thumbnail}
                    alt={adventure.title}
                    className="w-full h-56 sm:h-full object-cover"
                />

                {/* Play button overlay */}
                {hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#FDFFF8]/90 group-hover:bg-[#FDFFF8] rounded-full p-3 transition-all duration-200 shadow-[0_2px_12px_rgba(46,71,21,0.12)]">
                            <FaPlay className="w-4 h-4 text-black ml-0.5 opacity-80" />
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-center gap-2 p-5 sm:p-6 flex-1 min-w-0">

                {/* Title */}
                <h3 className="text-gray-900 leading-tight">
                    {adventure.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    {adventure.description}
                </p>

                {/* Condition + Price row */}
                <hr className="border-[#e8f0dc]" />

                <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-gray-500">
                        {adventure.condition}
                    </span>

                    {adventure.price && (
                        <span className="text-lg text-gray-900">
                            ₹{adventure.price.toLocaleString('en-IN')}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
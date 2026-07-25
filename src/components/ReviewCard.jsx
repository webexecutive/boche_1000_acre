import { FaPlay, FaStar, FaUserCircle } from "react-icons/fa";

const getYoutubeThumbnail = (videoLink) => {
  if (!videoLink) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = videoLink.match(regExp);
  const videoId = (match && match[2].length === 11) ? match[2] : null;
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

export default function ReviewCard({ review, onPlay }) {
  if (review.type === "video") {
    const thumbnail = getYoutubeThumbnail(review.videoLink);
    return (
      <div className="w-full aspect-4/3 rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-shadow duration-300 group">
        <img
          src={thumbnail}
          alt={review.title}
          title={review.title}
          className="w-full h-full object-cover absolute inset-0"
        />
        <button
          onClick={() => onPlay && onPlay(review)}
          aria-label={`Play ${review.title} video`}
          className="bg-white/70 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute hover:bg-white rounded-full p-3 hover:cursor-pointer transition-all duration-300 group-hover:scale-110"
        >
          <FaPlay className="h-6 w-6 text-black ml-0.5 opacity-80" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-full aspect-4/3 rounded-2xl bg-white border border-gray-150 shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col select-none overflow-hidden">
        <div className="flex items-center gap-3 shrink-0 mb-3">
          <FaUserCircle className="h-10 w-10 text-gray-400 shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{review.reviewerName}</h4>
            <div className="flex gap-0.5 mt-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={`h-4 w-4 ${
                    index < review.rating ? "text-amber-400 fill-current" : "text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed overflow-y-auto flex-1 min-h-0 pr-1 scrollbar-thin">
          {review.reviewText}
        </p>
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 text-[10px] text-gray-400 shrink-0">
          <span>Google Review</span>
          <span className="text-blue-500 font-semibold">G</span>
        </div>
      </div>
    );
  }
}

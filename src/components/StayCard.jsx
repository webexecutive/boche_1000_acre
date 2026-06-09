import { Link } from "react-router-dom";
import CImage from "./Cimage";

export default function StayCard({
    image,
    blur,
    title,
    tagline,
    description,
    id,
    className = '',
}) {
    return (
        <Link
            to={`/stays/${id}`}
            className={`group flex flex-col w-full h-full bg-[#FDFFF8] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(46,71,21,0.08)] hover:shadow-[0_8px_32px_rgba(46,71,21,0.16)] hover:-translate-y-1 transition-all duration-300 cursor-pointer ${className}`}
        >
            <CImage
                src={image}
                blur={blur}
                alt={title}
                className="w-full h-52 shrink-0 object-cover"
            />

            <div className="flex flex-col flex-1 p-5">

                <h4 className="font-medium text-[#1e3209] leading-snug line-clamp-1 mb-1">
                    {title}
                </h4>

                <p className="text-[11px] font-medium tracking-widest uppercase text-[#6a8f3a] mb-3">
                    {tagline}
                </p>

                <div className="w-8 h-px bg-[#c8dba0] mb-3" />

                <p className="text-[13px] font-light text-[#4a5c35] leading-relaxed line-clamp-3 flex-1">
                    {description}
                </p>

                <div className="flex justify-end mt-4 pt-3 border-t border-[#e8f0dc]">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-[#3a5a1c] flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        Explore <span>→</span>
                    </span>
                </div>

            </div>
        </Link>
    );
}
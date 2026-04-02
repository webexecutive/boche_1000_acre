import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function RoomCard({
    image,
    blur,
    title,
    guests,
    price,
    id,
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Link
            to={`/stays/${id}`}
            className="flex flex-col w-full bg-[#FDFFF8] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
            {/* Image */}
            <div className="relative overflow-hidden w-full h-[200px] shrink-0">
                {!loaded && blur && (
                    <img
                        src={blur}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                {image && (
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            loaded ? "opacity-100" : "opacity-0"
                        }`}
                    />
                )}
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-4 gap-2">

                {/* Title */}
                <h4 className="leading-snug line-clamp-1">
                    {title}
                </h4>

                {/* Guests */}
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <span
                        className="material-symbols-outlined text-[14px]"
                        style={{ fontVariationSettings: "'wght' 250" }}
                    >
                        person
                    </span>
                    <span>{guests} guests</span>
                </div>

                {/* Price — nowrap prevents line break */}
                <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                        ₹ {new Intl.NumberFormat("en-IN").format(price)}
                    </span>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                        + GST Per Night
                    </span>
                </div>

                {/* Book Now — pinned to bottom */}
                <div className="mt-auto pt-1" onClick={(e) => e.preventDefault()}>
                    <Button variant="primary" size="sm" fullWidth>
                        Book Now
                    </Button>
                </div>

            </div>
        </Link>
    );
}
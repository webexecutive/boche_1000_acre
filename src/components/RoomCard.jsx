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
        <div
            style={{ width: "300px" }}
            className="bg-[#FDFFF8] rounded-2xl overflow-hidden shadow-md  hover:shadow-xl transition-shadow duration-300"
        >
            {/* Image */}
            <div
                style={{ width: "300px", height: "200px" }}
                className="relative overflow-hidden"
            >
                {/* Blur placeholder — visible until actual image loads */}
                {!loaded && blur && (
                    <img
                        src={blur}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover "
                    />
                )}

                {/* Actual image — always in DOM so it can download, invisible until loaded */}
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
            <div className="p-4 space-y-2">

                {/* Title */}
                <h4 className="leading-snug line-clamp-1  ">
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

                {/* Price */}
                <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-lg font-semibold text-gray-900">
                        ₹ {new Intl.NumberFormat("en-IN").format(price)}
                    </span>
                    <span className="text-sm text-gray-500">
                        + GST Per Night
                    </span>
                </div>

                {/* Buttons */}
                <div className="space-y-2 pt-1">
                    <Button variant="primary" size="sm" fullWidth>
                        Book Now
                    </Button>
                    <Link to={`/stays/${id}`}>
                        <Button variant="secondary" size="sm" fullWidth>
                            Explore
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
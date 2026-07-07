import { useState } from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";
import rooms from "../data/roomsData";
import { getImageById } from "../services/galleryService";
import SEO from "../components/SEO";
import StayCard from "@/components/StayCard";
const sortOptions = [
    { label: "Default", value: "default" },
    { label: "Price: Low to High", value: "asc" },
    { label: "Price: High to Low", value: "desc" },
];

const Stays = () => {
    const [sortOrder, setSortOrder] = useState("default");

    const sortedRooms = [...rooms].sort((a, b) => {
        if (sortOrder === "asc") return a.basicInfo.pricePerNight - b.basicInfo.pricePerNight;
        if (sortOrder === "desc") return b.basicInfo.pricePerNight - a.basicInfo.pricePerNight;
        return 0;
    });

    return (
        <>
            <SEO
                title="Rooms & Unique Stays in Wayanad | boCHE 1000 Acre"
                description="Discover unique stays in Wayanad at boCHE 1000 Acre."
                keywords="rooms in wayanad, unique stays in wayanad"
                url="https://www.boche1000acre.in/stays"
            />

            <div className="min-h-screen bg-[#F7FDE9]">

                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-10">
                    <p className="text-[11px] font-medium tracking-[0.25em]  text-[#6a8f3a] mb-3">
                        boCHE STAYS
                    </p>

                    <h1 className="text-[#1e3209]  mb-4">
                        Experience Our Unique Stays
                    </h1>

                    <div className="w-12 h-px bg-[#c8dba0] mb-5" />

                    <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-6xl">
                        From luxurious Bubble Domes and charming Mud Houses to the
                        iconic British Bungalow and futuristic XPods, discover
                        unforgettable stays nestled within our 1000-acre tea estate
                        in Wayanad.
                    </p>
                </div>

                {/* Cards */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedRooms.map((room) => {
                            const cover = getImageById(room.images?.[0]);

                            return (
                                <StayCard
                                    key={room.id}
                                    image={
                                        cover?.variants?.small ??
                                        "/images/image-not-found-small.webp"
                                    }
                                    blur={cover?.variants?.blur ?? ""}
                                    title={room.name}
                                    tagline={room.aboutStay.tagline}
                                    description={room.aboutStay.description}
                                    price={room.basicInfo.pricePerNight}
                                    id={room.id}
                                />
                            );
                        })}
                    </div>
                </div>

            </div>
        </>

    );
};

export default Stays;
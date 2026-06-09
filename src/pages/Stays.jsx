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
                description="Discover unique stays in Wayanad at boCHE 1000 Acre. Choose from the British Bungalow, Bubble Dome, Mud House, and XPod, all nestled within a breathtaking 1000-acre tea plantation."
                keywords="rooms at wayanad, rooms in wayanad kerala, unique stays in wayanad, best stay in wayanad, wayanad stay resort, bubble dome wayanad, british bungalow wayanad, mud house wayanad, xpod wayanad, tea plantation stay wayanad"
                url="https://www.boche1000acre.in/stays"
            />

            <div className="max-w-7xl mx-auto pt-10 md:pt-20 px-6">



                <div className="flex items-center justify-between pt-10">
                    <h2>Experience Our Stays</h2>

                    {/* Sort dropdown
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button variant="outline" size="sm" className="gap-2 border-gray-200!">
                                <HiSortAscending />
                                {sortOptions.find((o) => o.value === sortOrder)?.label || "Sort"}
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content minW="12rem" className="bg-white shadow-xl rounded-xl border border-gray-100 p-2 outline-none">
                                    <Menu.RadioItemGroup
                                        value={sortOrder}
                                        onValueChange={(e) => setSortOrder(e.value)}
                                    >
                                        {sortOptions.map((option) => (
                                            <Menu.RadioItem
                                                key={option.value}
                                                value={option.value}
                                                className="flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50 rounded-lg outline-none transition-colors"
                                            >
                                                {option.label}
                                                <Menu.ItemIndicator className="text-green-700" />
                                            </Menu.RadioItem>
                                        ))}
                                    </Menu.RadioItemGroup>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 lg:grid-cols-3 gap-10 justify-items-center">
                    {sortedRooms.map((room) => {
                        // CORRECTED: resolve gallery ID to get variants with actual URLs
                        const cover = getImageById(room.images?.[0]);
                        return (
                            <StayCard
                                image={cover?.variants?.small ?? "/images/image-not-found-small.webp"}
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
        </>

    );
};

export default Stays;
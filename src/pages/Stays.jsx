import { useState } from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";
import rooms from "../data/roomsData";
import RoomCard from "../components/RoomCard";

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
        <div className="max-w-7xl mx-auto pt-10 md:pt-20 px-6">
            <div className="flex items-center justify-between pt-10">
                <h2>Stays</h2>

                {/* Sort dropdown */}
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
                </Menu.Root>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-10 md:py-16 lg:grid-cols-4 gap-10 justify-items-center">
                {sortedRooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        image={room.images[0]?.small}
                        blur={room.images[0]?.blur}
                        title={room.name}
                        guests={room.basicInfo.maxGuests}
                        price={room.basicInfo.pricePerNight}
                        id={room.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stays;
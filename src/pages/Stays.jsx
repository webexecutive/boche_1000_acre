import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

const Stays = () => {
    return (
        <div className="max-w-7xl mx-auto pt-20 px-6">
            <h1 className="pt-10">Stays</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 py-16 lg:grid-cols-4 gap-10 justify-items-center">
                {rooms.map((room) => (
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
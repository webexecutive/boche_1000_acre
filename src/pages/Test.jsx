import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";
import EmblaCarousel from "../components/EmblaCarousel";
import ReelCard from "../components/ReelCard";
import adventures from "../data/adventures";
import GalleryThumbnail from "../components/GalleryThumbnail";
import { gallery, categories } from "../data/gallery";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import "../assets/styles/image-carousel.css";
import LogoCarousel from "../components/LogoCarousel";
import group from "../data/group";


function Test() {
    const xPodRoom = rooms.find((r) => r.name.toLowerCase().includes("pod") || r.id === 5) || rooms[0];

    return (
        <>
            <div className="min-h-screen mt-32">

                <section className="py-12 bg-gray-50 mb-12">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">
                            X-Pod Image Carousel
                        </h2>
                        <ImageCarousel
                            images={xPodRoom.images}
                            options={{ loop: true }}
                        />
                    </div>
                </section>
                <EmblaCarousel>
                    {rooms.map((room) => (
                        <div className="embla__slide" key={room.id}>
                            <RoomCard
                                image={room.images[0].small}
                                blur={room.images[0].blur}
                                title={room.name}
                                guests={room.basicInfo.maxGuests}
                                price={room.basicInfo.pricePerNight}
                                id={room.id}
                            />
                        </div>
                    ))}
                </EmblaCarousel>
            </div>

            <EmblaCarousel>
                {adventures.map((activity) => (
                    <div className="embla__slide" key={activity.id}>
                        <ReelCard {...activity} />
                    </div>
                ))}
            </EmblaCarousel>
            <div className="w-72 aspect-9/16 overflow-hidden rounded-2xl relative">

                <iframe
                    src="https://www.youtube.com/embed/ROx3H15qtzI?autoplay=1&mute=1&controls=0"
                    className="absolute top-1/2 left-1/2 
               w-full h-full 
               -translate-x-1/2 -translate-y-1/2"
                    allow="autoplay"
                />
            </div>

            <iframe src="https://www.youtube.com/watch?v=wpPvbWDzDr8" frameBorder="0"></iframe>




            <div className="max-w-350 mx-auto px-4 md:px-8 py-12">
                <h1 className="text-4xl md:text-5xl font-serif mb-8">Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => {
                        let repItem;
                        if (cat.category === 'all') {
                            // Find an interior image or fallback to the first stay
                            repItem = gallery.find(g => g.category === 'stays' && g.id === 5) || gallery[3] || gallery[0];
                        } else {
                            repItem = gallery.find(g => g.category === cat.category);
                        }

                        const image = repItem ? repItem.images.medium : "/images/image-not-found-small.webp";
                        const blur = repItem ? repItem.images.blur : "";
                        const title = cat.title === "All" ? "Recent" : cat.title;

                        return (
                            <Link to={`/gallery/${cat.category}`} key={cat.id}>
                                <GalleryThumbnail
                                    image={image}
                                    blur={blur}
                                    title={title}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <LogoCarousel items={group} />

        </>
    );
}

export default Test;
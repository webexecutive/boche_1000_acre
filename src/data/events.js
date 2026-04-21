import { resolveImageIds } from '../services/galleryService';

const events = [
    {
        id: 1,
        title: "Youthful Wayanad",
        discription: `In a landmark event to promote tourism in Wayanad, 1,000 bikers successfully set a world record by completing an 80-kilometer ride from boCHE 1000 Acres, Meppadi to Gundlupet. The rally, titled "Servo Youthful Wayanad – 1000 Riders to boCHE 1000 Acres," was organized by the Royal Enfield Himalayan Club and Pedlock Motor Sport and was officially recognized by Kalam World Records.
The rally began with riders from across South India participating enthusiastically and concluded by noon after covering the scenic route. Certificates were awarded to all participants, and a lucky rider from the event was announced to win a superbike worth ₹10 lakhs.
The event aimed to boost tourism and showcase Wayanad as a vibrant destination for adventure and travel enthusiasts. In addition to the ride, several activities including off-road adventures, a motor show, treasure hunt, live DJ, yoga, Zumba, jungle safari, and stage programs were organized at boCHE 1000 Acres. A special "Bikeography" event was also held at SKMJ School Grounds, Kalpetta, where bikes formed the word "boCHE" in a unique display. The initiative brought together youth, biking communities, and tourism enthusiasts, making it a memorable milestone for Wayanad tourism.`,
        // thumbnailId: first event image (global ID 20)
        thumbnailId: 20,
        // Global gallery IDs for all images in this event → events/20 through events/37
        imageIds: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
    }
];

/** Resolve imageIds → full gallery items with variants */
export function getEventImages(event) {
    return resolveImageIds(event.imageIds);
}

/** Resolve thumbnailId → single gallery item with variants */
export function getEventThumbnail(event) {
    return resolveImageIds([event.thumbnailId])[0] ?? null;
}

export default events;
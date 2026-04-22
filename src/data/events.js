const events = [
    {
        id: 1,
        title: "Youthful Wayanad",
        startDate: "2024-11-30",
        endDate: "2024-12-01",
        startTime: "08:00 AM",
        endTime: "05:00 PM",
        location: "boCHE 1000 Acres",

        isTicketed: true,

    
        pricing: {
            type: "fixed",   
            amount: 500
        },

        bookingLink: "",

        description: "",
        eventOver: true,

        debrief: `In a landmark event to promote tourism in Wayanad, 1,000 bikers successfully set a world record by completing an 80-kilometer ride from boCHE 1000 Acres, Meppadi to Gundlupet. The rally, titled "Servo Youthful Wayanad – 1000 Riders to boCHE 1000 Acres," was organized by the Royal Enfield Himalayan Club and Pedlock Motor Sport and was officially recognized by Kalam World Records. The rally began with riders from across South India participating enthusiastically and concluded by noon after covering the scenic route. Certificates were awarded to all participants, and a lucky rider from the event was announced to win a superbike worth ₹10 lakhs. The event aimed to boost tourism and showcase Wayanad as a vibrant destination for adventure and travel enthusiasts. In addition to the ride, several activities including off-road adventures, a motor show, treasure hunt, live DJ, yoga, Zumba, jungle safari, and stage programs were organized at boCHE 1000 Acres. A special "Bikeography" event was also held at SKMJ School Grounds, Kalpetta, where bikes formed the word "boCHE" in a unique display. The initiative brought together youth, biking communities, and tourism enthusiasts, making it a memorable milestone for Wayanad tourism.`,

        thumbnailId: 38,
        bannerId: 39,
        imageIds: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
    },

    {
        id: 2,
        title: "Boche Carnival",
        startDate: "2024-12-23",
        endDate: "2025-01-04",
        startTime: "03:00 PM",
        endTime: "12:00 AM",
        location: "boCHE 1000 Acres",

        isTicketed: true,

        // ✅ Variable pricing (starting from)
        pricing: {
            type: "starting",   // base price / onwards
            amount: 500
        },

        bookingLink: "https://www.google.com",

        description: `The Wayanad Tourism Carnival, held from December 23 to January 4 at boCHE 1000 Acres in Meppadi, was a spectacular celebration of culture and community. Organized by the Kerala Vyapari Vyavasayi Ekopana Samithi, Wayanad Tourism, and the boCHE 1000 Acres Labour Welfare Committee, the carnival featured a massive Shopping Festival alongside a daily lineup of cultural events and entertainment that drew visitors from across Kerala and neighboring states. The excitement reached its peak on New Year’s Eve, where a massive crowd gathered for a historic double celebration. The night was headlined by electrifying musical performances from renowned artists Vedan and Gowry Lakshmi, setting an energetic tone for the countdown. In a breathtaking finale, boCHE ceremonially ignited a 65-foot Papaanji effigy with an arrow—a record-breaking structure recognized by the Universal Forum as the largest of the year. This symbolic burning of the Papaanji, combined with the grand carnival atmosphere, made it a landmark event for Wayanad’s holiday season.`,

        eventOver: false,

        debrief: `The Wayanad Tourism Carnival, held from December 23 to January 4 at boCHE 1000 Acres in Meppadi, was a spectacular celebration of culture and community. Organized by the Kerala Vyapari Vyavasayi Ekopana Samithi, Wayanad Tourism, and the boCHE 1000 Acres Labour Welfare Committee, the carnival featured a massive Shopping Festival alongside a daily lineup of cultural events and entertainment that drew visitors from across Kerala and neighboring states. The excitement reached its peak on New Year’s Eve, where a massive crowd gathered for a historic double celebration. The night was headlined by electrifying musical performances from renowned artists Vedan and Gowry Lakshmi, setting an energetic tone for the countdown. In a breathtaking finale, boCHE ceremonially ignited a 65-foot Papaanji effigy with an arrow—a record-breaking structure recognized by the Universal Forum as the largest of the year. This symbolic burning of the Papaanji, combined with the grand carnival atmosphere, made it a landmark event for Wayanad’s holiday season.`,

        thumbnailId: 41,
        bannerId: 40,
        imageIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    }
];

export default events;
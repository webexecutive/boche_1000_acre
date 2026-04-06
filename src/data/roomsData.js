const rooms = [

    {

        id: "british-bungalow",
        name: "British Bungalow",

        basicInfo: {
            rooms: 4,
            maxGuests: 8,
            pricePerNight: 12000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "Experience colonial-era charm blended with modern luxury in our elegant British Bungalow. Perfect for families and travellers seeking comfort, privacy, and timeless architecture.",

            highlights: [
                "Contemporary heritage-style architecture with spacious interiors",
                "Private sit-out/verandah with scenic views",
                "Premium bedrooms with attached bathrooms",
                "Air-conditioning and modern amenities",
                "Ideal for families and group stays"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [
                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [
            {
                id: 1,
                alt: "boche 1000 acre british-bungalow exterior",
                blur: "/images/stays/british-bungalow/1-blur.webp",
                small: "/images/stays/british-bungalow/1-small.webp",
                medium: "/images/stays/british-bungalow/1-medium.webp",
                large: "/images/stays/british-bungalow/1-large.webp"
            },
        ],
    },

    {

        id: "mud-house",
        name: "Mud House",

        basicInfo: {
            rooms: 4,
            maxGuests: 8,
            pricePerNight: 12000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "Reconnect with nature in our eco-friendly Mud House, crafted using traditional materials to offer a cool, earthy, and authentic village-style living experience.",

            highlights: [
                "Naturally temperature-regulated interiors",
                "Traditional rustic design with modern comforts",
                "Eco-conscious construction",
                "Cozy bedrooms with essential amenities",
                "Peaceful surroundings close to nature"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [
                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [{
            id: 1,
            alt: "boche 1000 acre mud-house exterior",
            blur: "/images/stays/mud-house/1-blur.webp",
            small: "/images/stays/mud-house/1-small.webp",
            medium: "/images/stays/mud-house/1-medium.webp",
            large: "/images/stays/mud-house/1-large.webp"
        },]
    },

    {
        id: "x-pod",
        name: "X Pod",

        basicInfo: {
            rooms: 1,
            maxGuests: 2,
            pricePerNight: 10000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "A futuristic compact stay designed for modern travellers. X Pod offers a unique, stylish, and comfortable retreat with panoramic outdoor views.",

            highlights: [
                "Contemporary pod-style architecture",
                "Large glass panels for scenic views",
                "Compact yet luxurious interiors",
                "Air-conditioned comfort",
                "Ideal for couples and solo travellers"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [
                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },

        images: [
            {
                id: 1,
                alt: "boche 1000 acre x-pod exterior",
                blur: "/images/stays/x-pod/1-blur.webp",
                small: "/images/stays/x-pod/1-small.webp",
                medium: "/images/stays/x-pod/1-medium.webp",
                large: "/images/stays/x-pod/1-large.webp"
            },
            {
                id: 2,
                alt: "boche 1000 acre x-pod exterior",
                blur: "/images/stays/x-pod/2-blur.webp",
                small: "/images/stays/x-pod/2-small.webp",
                medium: "/images/stays/x-pod/2-medium.webp",
                large: "/images/stays/x-pod/2-large.webp"
            },
            {
                id: 3,
                alt: "boche 1000 acre x-pod exterior",
                blur: "/images/stays/x-pod/3-blur.webp",
                small: "/images/stays/x-pod/3-small.webp",
                medium: "/images/stays/x-pod/3-medium.webp",
                large: "/images/stays/x-pod/3-large.webp"
            },
            {
                id: 4,
                alt: "boche 1000 acre x-pod bedroom",
                blur: "/images/stays/x-pod/4-blur.webp",
                small: "/images/stays/x-pod/4-small.webp",
                medium: "/images/stays/x-pod/4-medium.webp",
                large: "/images/stays/x-pod/4-large.webp"
            },
            {
                id: 5,
                alt: "boche 1000 acre x-pod toilet",
                blur: "/images/stays/x-pod/5-blur.webp",
                small: "/images/stays/x-pod/5-small.webp",
                medium: "/images/stays/x-pod/5-medium.webp",
                large: "/images/stays/x-pod/5-large.webp"
            },
            {
                id: 6,
                alt: "boche 1000 acre x-pod amenities",
                blur: "/images/stays/x-pod/6-blur.webp",
                small: "/images/stays/x-pod/6-small.webp",
                medium: "/images/stays/x-pod/6-medium.webp",
                large: "/images/stays/x-pod/6-large.webp"
            },
            {
                id: 7,
                alt: "boche 1000 acre x-pod projector",
                blur: "/images/stays/x-pod/7-blur.webp",
                small: "/images/stays/x-pod/7-small.webp",
                medium: "/images/stays/x-pod/7-medium.webp",
                large: "/images/stays/x-pod/7-large.webp"
            }
        ],
    },

    {

        id: "bubble-domee",
        name: "Bubble Dome",

        basicInfo: {
            rooms: 1,
            maxGuests: 2,
            pricePerNight: 6500,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "Sleep beneath the stars in our transparent Bubble Dome. A magical experience that combines comfort with breathtaking night-sky views.",

            highlights: [
                "Transparent dome structure",
                "Stargazing experience from bed",
                "Climate-controlled interiors",
                "Private and secluded setting",
                "Ideal for couples and special occasions"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [
                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [
            {
                id: 1,
                alt: "boche 1000 acre bubble-dome exterior",
                blur: "/images/stays/bubble-dome/1-blur.webp",
                small: "/images/stays/bubble-dome/1-small.webp",
                medium: "/images/stays/bubble-dome/1-medium.webp",
                large: "/images/stays/bubble-dome/1-large.webp"
            },
        ],
    },

    {

        id: "sexy-dome",
        name: "SexyDome",

        basicInfo: {
            rooms: 1,
            maxGuests: 2,
            pricePerNight: 8000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "A romantic dome-shaped retreat designed for couples seeking privacy and a memorable getaway under the stars.",

            highlights: [
                "Unique dome architecture",
                "Panoramic sky views",
                "Elegant and cozy interiors",
                "Perfect for romantic stays",
                "Private sit-out area "
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [
                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [
            {
                id: 1,
                alt: "boche 1000 acre sexy-dome exterior",
                blur: "/images/stays/sexy-dome/1-blur.webp",
                small: "/images/stays/sexy-dome/1-small.webp",
                medium: "/images/stays/sexy-dome/1-medium.webp",
                large: "/images/stays/sexy-dome/1-large.webp"
            },
        ],
    },

    {

        id: "back-packers-room",
        name: "Back Packers Room",

        basicInfo: {
            rooms: 1,
            maxGuests: 2,
            pricePerNight: 5000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "Designed for groups and adventure travellers, this budget friendly stay offers a vibrant and community-driven atmosphere.",

            highlights: [
                "Dormitory-style accommodation",
                "Affordable group stay option",
                "Shared common spaces",
                "Comfortable bedding",
                "Ideal for backpackers and student groups"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [
                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [
            {
                id: 1,
                alt: "boche 1000 acre back-packers-room exterior",
                blur: "/images/stays/back-packers-room/1-blur.webp",
                small: "/images/stays/back-packers-room/1-small.webp",
                medium: "/images/stays/back-packers-room/1-medium.webp",
                large: "/images/stays/back-packers-room/1-large.webp"
            },
        ],
    },

    {

        id: "back-packers-full-property",
        name: "Back Packers Full Property",

        basicInfo: {
            rooms: 4,
            maxGuests: 8,
            pricePerNight: 18000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "Designed for groups and adventure travellers, this budget friendly stay offers a vibrant and community-driven atmosphere.",

            highlights: [
                "Dormitory-style accommodation",
                "Affordable group stay option",
                "Shared common spaces",
                "Comfortable bedding",
                "Ideal for backpackers and student groups"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [
                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [
            {
                id: 1,
                alt: "boche 1000 acre back-packers-full-property exterior",
                blur: "/images/stays/back-packers-full-property/1-blur.webp",
                small: "/images/stays/back-packers-full-property/1-small.webp",
                medium: "/images/stays/back-packers-full-property/1-medium.webp",
                large: "/images/stays/back-packers-full-property/1-large.webp"
            },
        ],
    },

    {

        id: "agraharam",
        name: "Agraharam",

        basicInfo: {
            rooms: 1,
            maxGuests: 3,
            pricePerNight: 4000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "Inspired by traditional South Indian heritage homes, Agraharam offers a culturally rich and peaceful stay experience.",

            highlights: [
                "Traditional architectural style",
                "Spacious courtyards",
                "Wooden accents and heritage design",
                "Modern bathroom facilities",
                "Ideal for cultural and family retreats"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [

                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [{
            id: 1,
            alt: "boche 1000 acre agraharam exterior",
            blur: "/images/stays/agraharam/1-blur.webp",
            small: "/images/stays/agraharam/1-small.webp",
            medium: "/images/stays/agraharam/1-medium.webp",
            large: "/images/stays/agraharam/1-large.webp"
        },],
    },

    {

        id: "natural-tent-stay",
        name: "Natural Tent Stay",

        basicInfo: {
            rooms: 1,
            maxGuests: 1,
            pricePerNight: 1000,
            currency: "INR",
        },

        checkTime: {
            checkIn: "02:00 PM",
            checkOut: "10:00 AM",
        },

        inclusions: [
            "Includes Free Breakfast",
            "Includes Camp Fire with Music (for 5 pax and above)",
            "Includes Property Trekking",
        ],

        cancellationPolicy: [
            {
                refundPercent: 100,
                daysBeforeCheckIn: 7,
                label: "100% refund if cancelled 7 days before check-in.",
            },
            {
                refundPercent: 50,
                daysBeforeCheckIn: 2,
                label: "50% refund if cancelled 2 days before check-in.",
            },
        ],

        aboutStay: {
            description:
                "Immerse yourself in the outdoors with our Natural Tent Stay a perfect blend of camping adventure and basic comfort.",

            highlights: [
                "Comfortable tent accommodation",
                "Close-to-nature setting",
                "Campfire experience ",
                "Shared restroom facilities",
                "Ideal for adventure seekers"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
            ],

            roomAmenities: [

                "bathroom",
                "workDesk",
                "closet",
                "chair",
                "hotColdWater",
                "teaCoffee",
                "toiletries",
                "mineralWater",
            ],

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant"],
        },


        images: [{
            id: 1,
            alt: "boche 1000 acre natural-tent-stay exterior",
            blur: "/images/stays/natural-tent-stay/1-blur.webp",
            small: "/images/stays/natural-tent-stay/1-small.webp",
            medium: "/images/stays/natural-tent-stay/1-medium.webp",
            large: "/images/stays/natural-tent-stay/1-large.webp"
        },],
    }
];

export default rooms;
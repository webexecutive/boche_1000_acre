const rooms = [

    {

        id: "british-bungalow",
        name: "British Bungalow",

        basicInfo: {
            rooms: 4,
            maxGuests: 8,
            pricePerNight: 15000,
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

            tagline: "Timeless Elegance for Families",

            description:
                "Inspired by classic colonial architecture, the British Bungalow is a spacious luxury residence ideal for families and multigenerational travellers. Featuring expansive living spaces, elegant interiors, two master suites, dedicated children's rooms, and stunning mountain views, it offers the perfect setting for meaningful family moments and private celebrations.",

            highlights: [
                "Contemporary heritage-style architecture with spacious interiors",
                "Private sit-out/verandah with scenic views",
                "Premium bedrooms with attached bathrooms",
                "Ideal for families and group stays"
            ],
        },

        amenities: {
            basicFacilities: [
                "roomService",
                "housekeeping",
                "parking",
                "powerBackup",
                "kitchen",
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


        images: [79, 90, 95, 96, 97, 98, 99, 100, 101, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94,],
    },

    {

        id: "mud-house",
        name: "Mud House",

        basicInfo: {
            rooms: 2,
            maxGuests: 4,
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
            tagline: "A Rustic Retreat Rooted in Nature",
            description:
                "Experience the charm of traditional living in our handcrafted Mud Villa, built using natural materials and timeless architectural techniques. Surrounded by peaceful greenery, it offers naturally cool interiors, rustic elegance, and modern comforts. Unwind in a serene setting and reconnect with nature through an authentic countryside experience.",

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


        images: [102, 105, 106, 107, 108, 109, 110, 111, 112, 104, 103,],
    },

    {
        id: "hill-pod",
        name: "Hill Pod",

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

            tagline: "Luxury Among the Peaks",

            description:
                "Set against a backdrop of rolling mountains and endless greenery, the Hill Pod offers a sophisticated retreat for couples seeking peace, privacy, and spectacular scenery. Floor-to-ceiling views and carefully curated interiors create a truly immersive mountain experience.",

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
                "ac",
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
            113,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            114,
            115
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

            tagline: "A Celestial Retreat",

            description:
                "Experience the wonder of sleeping beneath the stars while surrounded by nature's beauty. The Bubble Dome combines innovative design with luxury comforts, offering guests an enchanting stay where mountain landscapes, moonlit skies, and unforgettable memories come together.",

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
                "ac",
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
            124,
            125,
            126,
            127,
            128,
            129,
            130,
            131
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

            tagline: "An Exclusive Romantic Escape",

            description:
                "A private sanctuary designed for couples, the Sexy Dome offers breathtaking mountain views, luxurious interiors, and an intimate atmosphere where every moment feels special. Perfect for honeymoons, anniversaries, and romantic getaways, this unique retreat blends contemporary luxury with the serenity of nature.",

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
                "ac",
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
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140
        ],
    },

    {

        id: "the-mountain-residence-room",
        name: "The Mountain Residence Room",

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

            tagline: "Contemporary Comfort for Couples",
            description:
                "A cozy private room within The Mountain Residence, designed for couples or two guests seeking a comfortable stay amidst nature. The room offers modern comforts, and easy access to the resort's experiences make it an ideal choice for travellers looking to explore, connect, and create lasting memories.",

            highlights: [
                "Private room for 2 guests",
                "Attached bathroom",
                "Located withinThe Mountain Residence Villa",
                "Comfortable and budget-friendly stay",
                "Surrounded by scenic tea plantation views"
            ]
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
            146,
            147,
            148,
            149],
    },

    {

        id: "the-mountain-residence-full-property",
        name: "The Mountain Residence Full Property",

        basicInfo: {
            rooms: 4,
            maxGuests: 8,
            pricePerNight: 20000,
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
            tagline: "Contemporary Comfort for Groups",
            description:
                "Designed for friends, adventure seekers, and small groups, the The Mountain Residence combines privacy with social living. Spacious 4 bed room accommodations, modern comforts, and easy access to the resort's experiences make it an ideal choice for travellers looking to explore, connect, and create lasting memories together.",

            highlights: [
                "4-bedroom private villa",
                "Each room accommodates 2 guests",
                "Attached bathroom in every room",
                "Fully equipped shared kitchen",
                "Spacious common living areas",
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
            141,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            142
        ],
    },

    // {

    //     id: "agraharam",
    //     name: "Agraharam",

    //     basicInfo: {
    //         rooms: 1,
    //         maxGuests: 3,
    //         pricePerNight: 4000,
    //         currency: "INR",
    //     },

    //     checkTime: {
    //         checkIn: "02:00 PM",
    //         checkOut: "10:00 AM",
    //     },

    //     inclusions: [
    //         "Includes Free Breakfast",
    //         "Includes Camp Fire with Music (for 5 pax and above)",
    //         "Includes Property Trekking",
    //     ],

    //     cancellationPolicy: [
    //         {
    //             refundPercent: 100,
    //             daysBeforeCheckIn: 7,
    //             label: "100% refund if cancelled 7 days before check-in.",
    //         },
    //         {
    //             refundPercent: 50,
    //             daysBeforeCheckIn: 2,
    //             label: "50% refund if cancelled 2 days before check-in.",
    //         },
    //     ],

    //     aboutStay: {
    //         tagline:"Forest Hideaway for Friends & Social Gatherings",
    //         description:
    //             "Tucked away amidst lush greenery and serene forest surroundings, Agraharam is the perfect hideaway for friends and bachelor groups seeking a relaxed escape in nature. Featuring a comfortable bedroom,  living area, dining space, and modern amenities, it offers the ideal setting to unwind, reconnect, and create unforgettable memories amidst the tranquillity of the mountains.",

    //         highlights: [
    //             "Traditional architectural style",
    //             "Spacious courtyards",
    //             "Wooden accents and heritage design",
    //             "Modern bathroom facilities",
    //             "Ideal for cultural and family retreats"
    //         ],
    //     },

    //     amenities: {
    //         basicFacilities: [
    //             "roomService",
    //             "housekeeping",
    //             "parking",
    //             "powerBackup",
    //         ],

    //         roomAmenities: [

    //             "bathroom",
    //             "workDesk",
    //             "closet",
    //             "chair",
    //             "hotColdWater",
    //             "teaCoffee",
    //             "toiletries",
    //             "mineralWater",
    //         ],

    //         staffAndKeyServices: ["luggage"],
    //         healthAndWellness: ["firstAid"],
    //         sftyAndSecurity: ["cctv"],
    //         commonArea: ["reception", "restaurant"],
    //     },


    //     images: [3, 42, 43, 44, 45],
    // },

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
            tagline: "Where Nature Becomes Your Home",
            description:
                "Escape the rush of everyday life and reconnect with nature in our Natural Tent Stay. Surrounded by lush greenery and fresh mountain air, it offers a peaceful outdoor retreat with the perfect balance of comfort, relaxation, and adventure.",

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

            staffAndKeyServices: ["luggage"],
            healthAndWellness: ["firstAid"],
            sftyAndSecurity: ["cctv"],
            commonArea: ["reception", "restaurant", "commonBathroom"],
        },


        images: [151, 152, 153],
    },
];

export default rooms;
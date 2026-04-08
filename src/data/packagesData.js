export const packageInclusions = {
    guestActivities: { id: 1, label: "Guest Activities" },
    breakfast: { id: 2, label: "Breakfast" },
    lunch: { id: 3, label: "Lunch" },
    dinner: { id: 4, label: "Dinner" },
    accommodation: { id: 5, label: "Accommodation" },
    transportation: { id: 6, label: "Transportation" },
    spa: { id: 7, label: "Spa Access" },
    photography: { id: 8, label: "Photography Session" },
    bonfire: { id: 9, label: "Bonfire & Music" },
    welcomeDrinks: { id: 10, label: "Welcome Drinks" },
    teaSnacks: { id: 11, label: "Tea & Snacks" },
};

export const packages = [

    {
        id: "day-out",
        title: "A Day Out Package",
        subtitle: "Boche 1000 Acre",
        checkIn: "10:00 AM",
        checkOut: "09:00 PM",
        minGuests: 30,
        posterImg: "/images/packages/dayout-package.webp",
        posterBlurImg: "/images/packages/dayout-package-blur.webp",
        cost:1999,


        includes: [
            "guestActivities",
            "breakfast",
            "lunch",
            "dinner",
            "welcomeDrinks",
            "teaSnacks",
            "bonfire",
        ],

        activities: [
            {
                id: 1,
                name: "Visit 900 Kandi",
                image: "/images/packages/900-kandi.webp",
                blurImage: "/images/packages/900-kandi-blur.webp"
            },
            {
                id: 2,
                name: "Visit Soochipara Waterfall",
                image: "/images/packages/soojipara-waterfalls.webp",
                blurImage: "/images/packages/soojipara-waterfalls-blur.webp"
            },
            {
                id: 3,
                name: "Visit Chooral Mala",
                image: "/images/packages/chooralmala.webp",
                blurImage: "/images/packages/chooralmala-blur.webp"
            },
            {
                id: 4,
                name: "Boche Adventure Park (Sky Cycling or Zip Line)",
                image: "/images/packages/boche-adventure-park.webp",
                blurImage: "/images/packages/boche-adventure-park-blur.webp"
            },
            {
                id: 5,
                name: "Jungle Safari",
                image: "/images/packages/jungle-saffari.webp",
                blurImage: "/images/packages/jungle-saffari-blur.webp"
            },
        ],
        meals: {
            breakfast: {
                label: "Breakfast",
                items: ["Idly Sambar and Chutney", "Poori Bhaji", "Bread Butter Jam", "Omelet", "Juice"],
            },
            lunch: {
                label: "Lunch",
                items: ["Kerala Traditional Meals with 4 seafood dishes"],
            },
            dinner: {
                label: "Dinner",
                items: [
                    "Choices of soup",
                    "Two Indian breads",
                    "Rice or Noodles",
                    "Two non-vegetarian dishes",
                    "One vegetarian dish",
                    "Dessert",
                ],
            },
        },

        schedule: [
            { time: "10:00 AM", activity: "Check-in with welcome drinks" },
            { time: "10:30 AM", activity: "Breakfast" },
            { time: "11:00 AM", activity: "Visit 900 Kandi" },
            { time: "1:30 PM", activity: "Lunch" },
            { time: "2:30 PM", activity: "Soochipara Waterfall, Chooral Mala, Boche Adventure Park" },
            { time: "5:30 PM", activity: "Jungle Safari at Boche 1000 Acre" },
            { time: "6:30 PM", activity: "Tea and snacks" },
            { time: "7:00 PM", activity: "Dinner with campfire and music" },
            { time: "9:00 PM", activity: "Wind up" },
        ],
    },

];
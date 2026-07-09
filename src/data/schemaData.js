const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "boCHE 1000 Acre",
    "description": "Unique stay destination in Wayanad set within a 1000-acre tea plantation featuring British Bungalow, Bubble Dome, Mud House, XPod, adventure activities and authentic dining.",
    "url": "https://www.boche1000acre.com",
    "telephone": "+919961008008",
    "priceRange": "₹₹₹",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wayanad",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.53277079179528",
        "longitude": "76.12516761839017"
    },
    "amenityFeature": [
        {
            "@type": "LocationFeatureSpecification",
            "name": "Restaurant",
            "value": true
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Adventure Activities",
            "value": true
        }
    ]
}

export default schemaData;
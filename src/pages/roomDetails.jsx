import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdOutlineRoomService, MdOutlineCleaningServices, MdOutlineElectricalServices, MdOutlineDesk, MdOutlineCheckroom, MdOutlineChair, MdOutlineLuggage, MdOutlineMedicalServices, MdOutlineMeetingRoom, MdOutlinePeople, MdOutlineCheck, MdOutlineLogin, MdOutlineLogout, MdOutlineCurrencyRupee, MdOutlineShower } from 'react-icons/md';
import { LuCircleParking, LuGlassWater } from "react-icons/lu";
import { FaWater } from "react-icons/fa";
import { GiCoffeePot } from "react-icons/gi";
import { PiHandSoap } from "react-icons/pi";
import { BiCctv } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoRestaurantOutline } from "react-icons/io5";
import rooms from '../data/rooms';
import ImageCarousel from '../components/ImageCarousel';
import EmblaCarousel from '../components/EmblaCarousel';
import Button from '../components/Button';
import RoomCard from '../components/RoomCard';

const amenitiesIconsMap = {
    roomService: { label: "Room Service", icon: MdOutlineRoomService },
    housekeeping: { label: "House Keeping", icon: MdOutlineCleaningServices },
    parking: { label: "Parking", icon: LuCircleParking },
    powerBackup: { label: "Power Backup", icon: MdOutlineElectricalServices },
    bathroom: { label: "Bathroom", icon: MdOutlineShower },
    workDesk: { label: "Work Desk", icon: MdOutlineDesk },
    closet: { label: "Closet", icon: MdOutlineCheckroom },
    chair: { label: "Chair", icon: MdOutlineChair },
    hotColdWater: { label: "Hot & Cold Water", icon: FaWater },
    teaCoffee: { label: "Tea and Coffee", icon: GiCoffeePot },
    toiletries: { label: "Toiletries", icon: PiHandSoap },
    mineralWater: { label: "Mineral Water", icon: LuGlassWater },
    luggage: { label: "Luggage", icon: MdOutlineLuggage },
    firstAid: { label: "First Aid", icon: MdOutlineMedicalServices },
    cctv: { label: "CCTV", icon: BiCctv },
    reception: { label: "Reception", icon: BsPersonWorkspace },
    restaurant: { label: "Restaurant", icon: IoRestaurantOutline }
};

const amenityCategories = [
    { key: 'basicFacilities', label: 'Basic Facilities' },
    { key: 'roomAmenities', label: 'Room Amenities' },
    { key: 'staffAndKeyServices', label: 'Staff and Key Services' },
    { key: 'healthAndWellness', label: 'Health and Wellness' },
    { key: 'sftyAndSecurity', label: 'Safety and Security' },
    { key: 'commonArea', label: 'Common Area' }
];

const RoomDetails = () => {
    const { id } = useParams();
    const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
    const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('basicFacilities');

    useEffect(() => {
        if (isAmenitiesModalOpen || isHighlightsModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isAmenitiesModalOpen, isHighlightsModalOpen]);

    const scrollToCategory = (key) => {
        setActiveTab(key);
        const element = document.getElementById(`amenity-category-${key}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const room = rooms.find(r => r.id === id);

    if (!room) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
                <h1 className="text-3xl font-bold mb-4">Room not found</h1>
                <p className="text-gray-500 mb-6">We couldn't find the room you were looking for.</p>
                <Link to="/"><Button variant="primary">Back to Home</Button></Link>
            </div>
        );
    }

    const basicAmenitiesToPreview = room.amenities.basicFacilities ? room.amenities.basicFacilities.slice(0, 4) : [];
    const otherRooms = rooms.filter(r => r.id !== room.id);

    const renderRoomDetailsCard = () => (
        <div className="bg-[#f2faeb] rounded-4xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#e5efdb]">
            <h3 className="mb-6 text-4xl md:text-5xl font-serif text-gray-900">{room.name}</h3>

            {/* Basic Info (Rooms & Guests) */}
            <div className="flex flex-wrap items-center gap-8 mb-6 text-gray-800 font-medium">
                <div className="flex items-center gap-3">
                    <MdOutlineMeetingRoom className="w-5 h-5 text-gray-700" />
                    <span>{room.basicInfo.rooms} Rooms</span>
                </div>
                <div className="flex items-center gap-3">
                    <MdOutlinePeople className="w-5 h-5 text-gray-700" />
                    <span>{room.basicInfo.maxGuests} Guests</span>
                </div>
            </div>

            {/* Features & Times Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-6 mb-6 text-sm sm:text-base text-gray-800">
                {/* Inclusions */}
                <div className="space-y-3">
                    {room.inclusions.map((inclusion, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <MdOutlineCheck className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
                            <span>{inclusion}</span>
                        </div>
                    ))}
                </div>

                {/* Check In / Check Out */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <MdOutlineLogin className="w-5 h-5 text-gray-700 shrink-0" />
                        <span>Check in : {room.checkTime.checkIn}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdOutlineLogout className="w-5 h-5 text-gray-700 shrink-0" />
                        <span>Check Out : {room.checkTime.checkOut}</span>
                    </div>
                </div>
            </div>

            {/* Cancellation Policies */}
            <div className="space-y-3 mb-8 text-sm sm:text-base text-gray-800">
                {room.cancellationPolicy && room.cancellationPolicy.map((policy, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <MdOutlineCurrencyRupee className="w-5 h-5 mt-0.5 text-gray-700 shrink-0" />
                        <span>{policy.label}</span>
                    </div>
                ))}
            </div>

            {/* Price and Action */}
            <div className="flex flex-col gap-6 -mx-2">
                <div className="flex items-baseline gap-2 px-2">
                    <span className="text-3xl sm:text-4xl text-gray-900">
                        ₹ {room.basicInfo.pricePerNight} <span className="text-2xl font-light mx-1">/</span><span className="text-xl mr-1">-</span>
                    </span>
                    <span className="text-gray-800 font-medium">
                        per night
                    </span>
                </div>

                <div className="flex justify-center px-2">
                    <Button variant="primary" >
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-4 pt-20 lg:pt-24 pb-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                {/* Left Column (Scrolls) */}
                <div className="flex-1 w-full space-y-8">

                    {/* Images Carousel */}
                    <div className="w-full">
                        {room.images && room.images.length > 0 ? (
                            <ImageCarousel images={room.images} options={{ loop: true }} />
                        ) : (
                            <div className="aspect-3/2 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                                No images available
                            </div>
                        )}
                    </div>

                    {/* Mobile Right Card */}
                    <div className="block lg:hidden w-full">
                        {renderRoomDetailsCard()}
                    </div>

                    {/* About Stay Card */}
                    <div className="bg-[#f2faeb] rounded-4xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#e5efdb]">
                        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">About Stay</h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            {room.aboutStay.description}
                        </p>
                        <button
                            onClick={() => setIsHighlightsModalOpen(true)}
                            className="text-[#3b5998] font-medium text-sm hover:underline"
                        >
                            Know More
                        </button>
                    </div>

                    {/* Amenities Card */}
                    <div className="bg-[#f2faeb] rounded-4xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#e5efdb]">
                        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">Amenities</h3>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-6 sm:gap-10">
                                {basicAmenitiesToPreview.map(amKey => {
                                    const am = amenitiesIconsMap[amKey];
                                    if (!am) return null;
                                    return (
                                        <div key={amKey} className="flex flex-col items-center gap-2">
                                            <am.icon className="w-8 h-8 text-black" />
                                            <span className="text-xs sm:text-sm text-gray-700 font-medium text-center w-20 leading-tight">
                                                {am.label}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                            <button
                                onClick={() => setIsAmenitiesModalOpen(true)}
                                className="text-[#3b5998] font-medium text-sm hover:underline self-end pb-2"
                            >
                                See all
                            </button>
                        </div>
                    </div>

                </div>

                {/* Right side: Room Details Card (Sticky) */}
                <div className="hidden lg:block top-24 sticky flex-1 w-full">
                    {renderRoomDetailsCard()}
                </div>
            </div>

            {/* Also Check Out */}
            <div className="mt-20">
                <EmblaCarousel sectionTitle="Also Check Out">
                    {otherRooms.map(r => (
                        <div className="embla__slide" key={r.id}>
                            <RoomCard
                                id={r.id}
                                title={r.name}
                                image={r.images?.[0]?.small || r.images?.[0]?.medium || "/images/image-not-found-small.webp"}
                                blur={r.images?.[0]?.blur || ""}
                                guests={r.basicInfo.maxGuests}
                                price={r.basicInfo.pricePerNight}
                            />
                        </div>
                    ))}
                </EmblaCarousel>

                <div className="mt-8 flex justify-center">
                    <Link to="/stays">
                        <Button variant="primary" >
                            View All Stays
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Highlight Modal */}
            {isHighlightsModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300">
                    <div className="bg-[#fcfdfa] rounded-4xl w-full max-w-2xl p-6 md:p-10 shadow-2xl relative">
                        <h2 className="text-4xl font-serif text-gray-900 mb-4">{room.name}</h2>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                            {room.aboutStay.description}
                        </p>

                        <h3 className="text-2xl font-serif text-gray-900 mb-4">Stay Highlights</h3>
                        <ul className="space-y-3 mb-10 text-gray-700 text-sm md:text-base">
                            {room.aboutStay.highlights.map((hlt, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span className="text-[#4A5D23]">•</span>
                                    <span>{hlt}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-end mt-4">
                            <Button variant="primary" onClick={() => setIsHighlightsModalOpen(false)}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Amenities Modal */}
            {isAmenitiesModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300">
                    <div className="bg-[#fcfdfa] rounded-4xl w-full max-w-3xl p-6 md:p-10 shadow-2xl relative flex flex-col h-[80vh] md:h-auto max-h-[90vh]">
                        {/* Modal Header */}
                        <div className="shrink-0 border-b border-gray-200 mb-6">
                            <h2 className="text-4xl font-serif text-gray-900 mb-6">Amenities</h2>

                            {/* Tabs */}
                            <div className="flex gap-6 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                                {amenityCategories.map(cat => {
                                    // hide if empty
                                    if (!room.amenities[cat.key] || room.amenities[cat.key].length === 0) return null;

                                    return (
                                        <button
                                            key={cat.key}
                                            id={`amenity-tab-btn-${cat.key}`}
                                            onClick={() => scrollToCategory(cat.key)}
                                            className={`pb-3 text-sm sm:text-base font-medium transition-colors ${activeTab === cat.key ? 'text-[#4A5D23] border-b-2 border-[#4A5D23]' : 'text-gray-400 hover:text-gray-700'}`}
                                        >
                                            {cat.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div
                            className="overflow-y-auto pr-2 space-y-12 grow hide-scroll-bar scroll-smooth"
                            onScroll={(e) => {
                                const containerTop = e.target.getBoundingClientRect().top;
                                const categories = amenityCategories.filter(cat => room.amenities[cat.key] && room.amenities[cat.key].length > 0);

                                let newActive = categories[0]?.key;

                                for (let i = categories.length - 1; i >= 0; i--) {
                                    const cat = categories[i];
                                    const el = document.getElementById(`amenity-category-${cat.key}`);
                                    if (el) {
                                        const rect = el.getBoundingClientRect();
                                        if (rect.top <= containerTop + 150) {
                                            newActive = cat.key;
                                            break;
                                        }
                                    }
                                }

                                setActiveTab(prev => {
                                    if (newActive && prev !== newActive) {
                                        const tabList = document.getElementById("amenities-tab-list");
                                        const tabBtn = document.getElementById(`amenity-tab-btn-${newActive}`);
                                        if (tabBtn) {
                                            tabBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                                        }
                                        return newActive;
                                    }
                                    return prev;
                                });
                            }}
                        >
                            {amenityCategories.map(cat => {
                                if (!room.amenities[cat.key] || room.amenities[cat.key].length === 0) return null;

                                return (
                                    <div key={cat.key} id={`amenity-category-${cat.key}`} className="space-y-6">
                                        <h3 className="text-2xl font-serif text-gray-900">{cat.label}</h3>
                                        <div className="flex flex-wrap gap-8 sm:gap-10">
                                            {room.amenities[cat.key].map(amKey => {
                                                const am = amenitiesIconsMap[amKey];
                                                if (!am) return null;
                                                return (
                                                    <div key={amKey} className="flex flex-col items-center gap-3">
                                                        <am.icon className="w-10 h-10 text-black" />
                                                        <span className="text-xs sm:text-sm text-gray-700 font-medium text-center w-20 leading-tight">
                                                            {am.label}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex justify-end mt-8 pt-4 border-t border-gray-100 shrink-0">
                            <Button variant="primary" onClick={() => setIsAmenitiesModalOpen(false)}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomDetails;
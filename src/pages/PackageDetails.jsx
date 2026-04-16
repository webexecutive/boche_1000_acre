import { useParams, Link } from 'react-router-dom';
import { packages, packageInclusions } from '../data/packagesData';
import CImage from '../components/Cimage';
import Button from '../components/Button';
import {
    MdOutlinePeople,
    MdOutlineCheck,
    MdOutlineLogin,
    MdOutlineLogout,
} from 'react-icons/md';

const PackageDetails = () => {
    const { id } = useParams();
    const pkg = packages.find((p) => p.id === id);

    if (!pkg) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-8">
                <h1 className="text-3xl">Package not found</h1>
                <p className="text-gray-800">We couldn't find the package you were looking for.</p>
                <Link to="/packages-and-offers">
                    <Button variant="primary">View All Packages</Button>
                </Link>
            </div>
        );
    }

    const mealKeys = ['breakfast', 'lunch', 'dinner'];
    const includedMeals = mealKeys.filter((key) => pkg.meals?.[key]);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 lg:pt-24 pb-20 space-y-6">

            {/* ── Hero Section ── */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch">

                {/* Poster Image */}
                <div className="w-full md:w-[46%] shrink-0 aspect-4/3 md:min-h-[300px] relative overflow-hidden rounded-2xl">
                    <CImage
                        src={pkg.posterImg}
                        blur={pkg.posterBlurImg}
                        alt={pkg.title}
                        className="w-full h-full"
                    />
                </div>

                {/* Info Card */}
                <div className="flex-1 bg-[#f5faea] rounded-2xl px-6 py-7 sm:px-8 sm:py-8 flex flex-col justify-between gap-5">

                    {/* Title */}
                    <h2 className="">{pkg.title}</h2>

                    {/* Meta row: guests | check-in ● check-out */}
                    <div className="flex flex-col sm:items-start gap-4 sm:gap-0 text-sm text-gray-800">

                        {/* Left: Guests */}
                        <div className="flex items-center gap-2 sm:w-1/2">
                            <MdOutlinePeople className="w-4 h-4 text-gray-800 shrink-0" />
                            <span>Min {pkg.minGuests} Guests</span>
                        </div>



                        {/* Right: Check-in / Check-out */}
                        <div className="space-y-1.5 ">
                            <div className="flex items-center gap-2">
                                <MdOutlineLogin className="w-4 h-4 text-gray-800 shrink-0" />
                                <span>Check in : {pkg.checkIn}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineLogout className="w-4 h-4 text-gray-800 shrink-0" />
                                <span>Check Out : {pkg.checkOut}</span>
                            </div>
                        </div>
                    </div>

                    {/* Includes — 2-column grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-gray-700">
                        {pkg.includes.map((key) => {
                            const inc = packageInclusions[key];
                            if (!inc) return null;
                            return (
                                <div key={key} className="flex items-center gap-2">
                                    <MdOutlineCheck className="w-4 h-4 text-green-600 shrink-0" />
                                    <span>Includes {inc.label}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Cost + Book Now */}
                    <div className="flex items-end justify-between gap-4 pt-1">

                        {/* Price */}
                        {pkg.cost && (
                            <div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl md:text-3xl  text-gray-900">
                                        ₹{pkg.cost.toLocaleString('en-IN')}
                                    </span>
                                    <span className="text-sm text-gray-800">+ GST</span>
                                </div>
                                <p className="text-xs text-gray-800 mt-0.5">per person</p>
                            </div>
                        )}

                        <Link to="/booking">
                            <Button variant="primary" size="sm">Book Now</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Guest Activities ── */}
            {pkg.activities && pkg.activities.length > 0 && (
                <div className="bg-[#f2faeb] rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e5efdb]">
                    <h3 className="mb-6">Guest Activities</h3>
                    <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                        {pkg.activities.map((activity) => (
                            <div key={activity.id} className="flex flex-col items-center gap-2 shrink-0 w-[120px] sm:w-[200px]">
                                <CImage
                                    src={activity.image}
                                    blur={activity.blurImage}
                                    alt={activity.name}
                                    className="w-full aspect-3/4 rounded-xl"
                                />
                                <p className="text-center text-gray-800 leading-snug px-1">{activity.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ── Meals + Schedule ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Meals */}
                {includedMeals.length > 0 && (
                    <div className="bg-[#f2faeb] rounded-2xl p-6 sm:p-10 shadow-sm border border-[#e5efdb]">
                        <div className="space-y-8">
                            {includedMeals.map((key) => {
                                const meal = pkg.meals[key];
                                return (
                                    <div key={key}>
                                        {/* Large serif heading — same scale as schedule title */}
                                        <h4 className="mb-3">{meal.label}</h4>
                                        <ul className="space-y-1.5 text-sm text-gray-800">
                                            {meal.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span>•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Schedule */}
                {pkg.schedule && pkg.schedule.length > 0 && (
                    <div className="bg-[#f2faeb] rounded-2xl p-6 sm:p-10 shadow-sm border border-[#e5efdb]">

                        {/* Title — large serif, like reference */}
                        <h4 className="font-serif text-gray-900 mb-8">
                            {pkg.title.replace('Package', '').trim()} Schedule
                        </h4>

                        {/* Timeline wrapper — single continuous line */}
                        <div className="relative">
                            {/* Continuous vertical line — left = time-col(80px) + dot-center(10px) */}
                            <div className="absolute top-0 bottom-0 w-px bg-[#b5c99a]" style={{ left: '90px' }} />

                            <div className="flex flex-col">
                                {pkg.schedule.map((item, idx) => (
                                    <div key={idx} className="flex items-start py-3.5">

                                        {/* Time — right aligned, fixed 80px */}
                                        <div className="shrink-0 text-right pr-4 pt-0.5" style={{ width: '80px' }}>
                                            <span className="text-sm text-gray-500 font-normal leading-5 whitespace-nowrap">{item.time}</span>
                                        </div>

                                        {/* Dot — 20px wide, dot centered = at 90px from left, ON the line */}
                                        <div className="shrink-0 flex justify-center pt-1" style={{ width: '20px' }}>
                                            <div className="w-3 h-3 rounded-full bg-[#4A5D23] relative z-10 shrink-0" />
                                        </div>

                                        {/* Activity text */}
                                        <div className="flex-1 pl-3 pt-0.5">
                                            <p className="text-sm text-gray-800 leading-snug">{item.activity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PackageDetails;

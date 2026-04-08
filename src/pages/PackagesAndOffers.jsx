import { Link } from 'react-router-dom';
import { packages, packageInclusions } from '../data/packagesData';
import CImage from '../components/Cimage';
import Button from '../components/Button';
import { MdOutlinePeople, MdOutlineCheck, MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';

function PackagesAndOffers() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 lg:pt-24 pb-20 space-y-8">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900">Packages &amp; Offers</h1>

            {packages.map((pkg) => (
                <div
                    key={pkg.id}
                    className="bg-[#f2faeb] rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-sm border border-[#e5efdb]"
                >
                    {/* Poster */}
                    <div className="w-full sm:w-[45%] aspect-4/3 sm:aspect-auto sm:min-h-[240px] shrink-0 relative overflow-hidden rounded-2xl">
                        <CImage
                            src={pkg.posterImg}
                            blur={pkg.posterBlurImg}
                            alt={pkg.title}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-between p-6 sm:p-8 gap-6 flex-1">
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif text-gray-900">{pkg.title}</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <MdOutlinePeople className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span>Min {pkg.minGuests} Guests</span>
                                    </div>
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
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <MdOutlineLogin className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span>Check in : {pkg.checkIn}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdOutlineLogout className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span>Check Out : {pkg.checkOut}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Link to={`/packages-and-offers/${pkg.id}`}>
                                <Button variant="primary" size="sm">Book Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PackagesAndOffers;
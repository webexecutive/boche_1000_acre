import { Link } from 'react-router-dom';
import CImage from './Cimage';
import { MdOutlinePeople, MdOutlineCheck } from 'react-icons/md';
import { packageInclusions } from '../data/packagesData';

const MAX_INCLUDES = 4;

export default function PackageCard({ pkg }) {
    const visibleIncludes = pkg.includes.slice(0, MAX_INCLUDES);
    const extraCount = pkg.includes.length - MAX_INCLUDES;

    return (
        <Link to={`/packages-and-offers/${pkg.id}`} className="block group">
            <div className="bg-[#FDFFF8] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(46,71,21,0.08)] hover:shadow-[0_8px_32px_rgba(46,71,21,0.16)] hover:-translate-y-1 transition-all duration-300">

                {/* Image */}
                <CImage
                    src={pkg.posterImg}
                    blur={pkg.posterBlurImg}
                    alt={pkg.title}
                    className="w-full aspect-4/3 "
                />

                {/* Info */}
                <div className="p-4 space-y-2.5">

                    {/* Package Name */}
                    <h4 className="leading-tight">
                        {pkg.title}
                    </h4>

                    {/* Guests */}
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        <MdOutlinePeople className="w-4 h-4 shrink-0" />
                        <span>{pkg.minGuests} guests min</span>
                    </div>

                    {/* Includes */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-gray-700">
                        {visibleIncludes.map((key) => {
                            const inc = packageInclusions[key];
                            if (!inc) return null;

                            return (
                                <div key={key} className="flex items-start gap-1.5">
                                    <MdOutlineCheck className="w-4 h-4 text-[#6a8f3a] shrink-0 mt-0.5" />
                                    <span className="leading-tight">
                                        Includes {inc.label}
                                    </span>
                                </div>
                            );
                        })}

                        {extraCount > 0 && (
                            <div className="col-span-2 text-sm text-gray-500 mt-0.5">
                                and more
                            </div>
                        )}
                    </div>

                    {/* Price */}
                    {pkg.cost && (
                        <div className="pt-1 border-t border-[#e8f0dc]">
                            <p className="text-lg">
                                ₹{pkg.cost.toLocaleString('en-IN')}/-
                                <span className="text-sm"> Per Person</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
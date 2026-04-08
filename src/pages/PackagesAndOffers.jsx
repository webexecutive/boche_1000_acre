import { packages } from '../data/packagesData';
import PackageCard from '../components/PackageCard';

function PackagesAndOffers() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 lg:pt-24 pb-20 space-y-10">
            <h2>Packages &amp; Offers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    );
}

export default PackagesAndOffers;
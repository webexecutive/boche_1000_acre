import { packages } from '../data/packagesData';
import PackageCard from '../components/PackageCard';
import SEO from '../components/SEO';

function PackagesAndOffers() {
    return (
        <>
            <SEO
                title="Wayanad Resort Packages & Offers | boCHE 1000 Acre"
                description="Explore resort packages at boCHE 1000 Acre in Wayanad. Discover stay packages, family getaways, couple experiences, day outings, adventure activities, and exclusive offers within a breathtaking 1000-acre tea plantation."
                keywords="wayanad resort packages, resort offers wayanad, couple package wayanad, family package wayanad, day outing wayanad, stay packages in wayanad, adventure resort packages wayanad, tea plantation resort wayanad, best stay packages in wayanad"
                url="https://www.boche1000acre.com/packages-and-offers"
            />

            <div className="min-h-screen bg-[#F7FDE9] font-['DM_Sans']">

                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-10">
                    <p className="text-[11px] font-medium tracking-[0.25em] text-[#6a8f3a] mb-3">
                        boCHE PACKAGES
                    </p>

                    <h1 className="text-[#1e3209] l mb-4">
                        Packages & Offers
                    </h1>

                    <div className="w-12 h-px bg-[#c8dba0] mb-5" />

                    <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-6xl">
                        Discover curated experiences designed for couples,
                        families, groups, and adventure seekers. Enjoy the
                        best of boCHE 1000 Acres with exclusive packages,
                        activities, and unforgettable moments in the heart
                        of Wayanad.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <PackageCard
                                key={pkg.id}
                                pkg={pkg}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default PackagesAndOffers;
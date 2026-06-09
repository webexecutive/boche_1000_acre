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
                url="https://www.boche1000acre.in/packages-and-offers"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 lg:pt-24 pb-20 space-y-10">
                <h2>Packages &amp; Offers</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>

        </>

    );
}

export default PackagesAndOffers;
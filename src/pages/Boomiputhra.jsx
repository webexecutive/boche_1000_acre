import VideoPlayer from '../components/VideoPlayer';
import { LuMountainSnow, LuMap, LuLeaf, LuFactory, LuCpu, LuTrendingUp, LuCircleCheck, LuDroplets, LuSun, LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { GiPowder } from "react-icons/gi";
import { FaCloudRain } from "react-icons/fa6";
import bhoomiputhraLogo from '../assets/logos/bhoomiputra-logo.webp';

const Boomiputhra = () => {
    return (
        <div className="min-h-screen text-gray-800 font-sans">
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .delay-200 { animation-delay: 200ms; }
      `}</style>

            {/* Hero Section */}
            <section className="relative w-full h-dvh overflow-hidden">
                <VideoPlayer
                    src="/videos/boomiputhra/index.m3u8"
                    type="hls"
                    poster="/videos/boomiputhra/poster.webp"
                    blurPoster="/videos/boomiputhra/poster-blur.webp"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center z-10 pointer-events-none">
                    <div className="max-w-5xl opacity-0 animate-fade-in-up delay-200">
                        <img src={bhoomiputhraLogo} alt="Bhoomiputhra Logo" className="mx-auto w-auto max-h-[14rem] md:max-h-[20rem] mb-6 drop-shadow-xl object-contain" />
                        <p className="text-xl md:text-2xl text-white/95  max-w-3xl mx-auto drop-shadow-md tracking-wide">
                            A 600-Acre Legacy of Premium Plantations & Excellence in South India
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Plantation Section */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-[#3a5a1c] tracking-[0.3em] uppercase mb-6">Our Plantation</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                        Nestled in the Pristine Highlands of South India
                    </h3>
                    <p className="mt-8 text-xl text-gray-600 leading-relaxed ">
                        Our plantations are located at an average altitude of 3,280 – 3,850 feet above sea level, offering ideal agro-climatic conditions for premium-quality crops.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Card 1: Altitude */}
                    <div className="bg-white p-12 rounded-4xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                        <div className="w-20 h-20 bg-[#f2f7ec] rounded-full flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#e8f0dc] transition-all duration-500">
                            <LuMountainSnow className="text-4xl text-[#3a5a1c]" />
                        </div>
                        <h4 className="text-3xl  text-gray-900 mb-6">Altitude & Climate</h4>
                        <p className="text-gray-600 text-lg mb-8  leading-relaxed">Our estates are situated in cool, mist-covered hill ranges that provide:</p>
                        <ul className="space-y-4 mb-8">
                            {[
                                { icon: <FaCloudRain />, text: "Optimal rainfall distribution" },
                                { icon: <GiPowder />, text: "Rich loamy soil" },
                                { icon: <LuLeaf />, text: "Natural shade ecosystem" },
                                { icon: <WiHumidity />, text: "Balanced humidity levels" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700 gap-4 text-lg ">
                                    <span className="text-[#3a5a1c] p-2 bg-[#f2f7ec] rounded-lg">{item.icon}</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-500 italic border-t border-gray-100 pt-6">
                            These conditions contribute to superior leaf quality, aroma, and flavor.
                        </p>
                    </div>

                    {/* Card 2: Area */}
                    <div className="bg-white p-12 rounded-4xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col">
                        <div className="w-20 h-20 bg-[#f2f7ec] rounded-full flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#e8f0dc] transition-all duration-500">
                            <LuMap className="text-4xl text-[#3a5a1c]" />
                        </div>
                        <h4 className="text-3xl  text-gray-900 mb-6">Plantation Area</h4>
                        <div className="flex items-baseline gap-3 mb-8">
                            <span className="text-7xl  text-[#3a5a1c]">600<span className="text-4xl  text-[#3a5a1c]">+</span></span>
                            <span className="text-gray-500 text-xl  uppercase tracking-widest">Acres</span>
                        </div>
                        <p className="text-gray-600 text-lg  leading-relaxed">
                            We manage an expansive plantation spread across cultivated land, carefully divided into organized sections for efficient agricultural management and sustainability practices.
                        </p>
                    </div>

                    {/* Card 3: Crops */}
                    <div className="bg-white p-12 rounded-4xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                        <div className="w-20 h-20 bg-[#f2f7ec] rounded-full flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#e8f0dc] transition-all duration-500">
                            <LuLeaf className="text-4xl text-[#3a5a1c]" />
                        </div>
                        <h4 className="text-3xl  text-gray-900 mb-6">Types of Crops</h4>
                        <p className="text-gray-600 text-lg mb-8  leading-relaxed">Cultivating a diversified portfolio of high-value crops:</p>
                        <ul className="space-y-5 mb-8">
                            <li className="flex items-start gap-4">
                                <LuCircleCheck className="text-[#3a5a1c] text-xl shrink-0 mt-1" />
                                <div className="text-lg  text-gray-600"><span className=" text-gray-900">Tea:</span> Premium orthodox and CTC varieties</div>
                            </li>
                            <li className="flex items-start gap-4">
                                <LuCircleCheck className="text-[#3a5a1c] text-xl shrink-0 mt-1" />
                                <div className="text-lg  text-gray-600"><span className=" text-gray-900">Coffee:</span> Arabica and Robusta</div>
                            </li>
                            <li className="flex items-start gap-4">
                                <LuCircleCheck className="text-[#3a5a1c] text-xl shrink-0 mt-1" />
                                <div className="text-lg  text-gray-600"><span className=" text-gray-900">Spices:</span> Cardamom, naturally cured vanilla, pepper</div>
                            </li>
                            <li className="flex items-start gap-4">
                                <LuCircleCheck className="text-[#3a5a1c] text-xl shrink-0 mt-1" />
                                <div className="text-lg  text-gray-600"><span className=" text-gray-900">Minor Crops:</span> Lychee, Turmeric, Dragon fruit</div>
                            </li>
                        </ul>
                        <p className="text-sm text-gray-500 italic border-t border-gray-100 pt-6">
                            All crops are grown using sustainable and responsible farming practices.
                        </p>
                    </div>

                </div>
            </section>

            {/* Factory Section - Now Light/Homogeneous */}
            <section className="bg-[#F7FDE9] text-gray-900 py-32 relative overflow-hidden mb-24">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">

                        <div className="lg:w-1/3">
                            <div className="sticky top-32">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-[#e8f0dc] shadow-sm">
                                    <LuFactory className="text-3xl text-[#3a5a1c]" />
                                </div>
                                <h2 className="text-sm font-bold text-[#3a5a1c] tracking-[0.3em] uppercase mb-4">Tea Factory</h2>
                                <h3 className="text-5xl  leading-tight mb-8 text-gray-900">Our Manufacturing Excellence</h3>
                                <p className="text-gray-600 leading-relaxed mb-12 text-xl ">
                                    Combining traditional craftsmanship with modern technology to produce high-quality teas that meet both domestic and international standards. Each stage is strictly monitored to maintain consistency and flavor integrity.
                                </p>

                                <div className="bg-white p-10 rounded-4xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-[#c5d5ad] transition-colors duration-500">
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#f2f7ec] rounded-full blur-3xl group-hover:bg-[#e8f0dc] transition-colors duration-500" />
                                    <div className="flex items-center gap-4 mb-6 relative">
                                        <div className="p-3 bg-[#f2f7ec] rounded-xl">
                                            <LuTrendingUp className="text-2xl text-[#3a5a1c]" />
                                        </div>
                                        <h4 className="text-2xl  text-gray-900">Production Capacity</h4>
                                    </div>
                                    <div className="text-5xl  text-gray-900 mb-4 relative drop-shadow-sm">12,000 <span className="text-2xl text-gray-500  tracking-wide">kg / day</span></div>
                                    <p className="text-base text-gray-500  leading-relaxed relative">
                                        Green leaf processing capacity, scalable to accommodate seasonal peak production while ensuring uncompromised quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">

                            <div className="space-y-10">
                                <h4 className="text-3xl  text-gray-900 pb-6 border-b border-gray-200">Processing Stages</h4>
                                <div className="space-y-1">
                                    {[
                                        { title: "Withering", desc: "Controlled moisture reduction for optimal leaf conditioning" },
                                        { title: "Rolling", desc: "Leaf twisting and cell breakdown to release enzymes" },
                                        { title: "Fermentation", desc: "Oxidation for flavor and color development under controlled conditions" },
                                        { title: "Drying", desc: "Moisture stabilization to preserve quality" },
                                        { title: "Sorting & Grading", desc: "Precision grading using automated sifters" },
                                        { title: "Packing & Dispatch", desc: "Hygienic packaging under quality control standards" }
                                    ].map((stage, idx) => (
                                        <div key={idx} className="flex gap-6 group">
                                            <div className="flex flex-col items-center pt-1">
                                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-base font-medium text-gray-500 group-hover:bg-[#3a5a1c] group-hover:text-white group-hover:border- transition-all duration-300 group-hover:scale-110 shadow-sm">
                                                    {idx + 1}
                                                </div>
                                                {idx !== 5 && <div className="w-px h-12 bg-gray-200 my-3 group-hover:bg-[#e8f0dc] transition-colors duration-300" />}
                                            </div>
                                            <div className="pb-6 pt-2">
                                                <h5 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[#3a5a1c] transition-colors">{stage.title}</h5>
                                                <p className="text-gray-600 text-base leading-relaxed ">{stage.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="bg-white p-10 rounded-4xl border border-gray-100 shadow-sm h-full hover:border-gray-200 transition-colors duration-500">
                                    <div className="w-16 h-16 bg-[#f2f7ec] rounded-2xl flex items-center justify-center mb-8 border border-[#e8f0dc]">
                                        <LuCpu className="text-3xl text-[#3a5a1c]" />
                                    </div>
                                    <h4 className="text-3xl  text-gray-900 mb-6">Technology Used</h4>
                                    <p className="text-gray-600 mb-10 text-lg  leading-relaxed">
                                        We integrate modern automation with skilled supervision to ensure precision and efficiency across all operations.
                                    </p>
                                    <ul className="space-y-6">
                                        {[
                                            "Automated withering trough systems",
                                            "Rotorvane and rolling machines",
                                            "Vibratory sorting machines",
                                            "Electronic weighing systems",
                                            "Quality control laboratory equipment"
                                        ].map((tech, idx) => (
                                            <li key={idx} className="flex gap-4 text-gray-600 text-lg  items-start">
                                                <LuCircleCheck className="text-[#3a5a1c] shrink-0 text-xl mt-1" />
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Visual Showcase Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-20">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-[#3a5a1c] tracking-[0.3em] uppercase mb-6">Visual Showcase</h2>
                    <h3 className="text-4xl md:text-6xl  text-gray-900 leading-tight mb-8">
                        Experience Our Estate
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed mb-10 ">
                        Our visuals reflect our commitment to quality, sustainability, and excellence. We invite you to explore:
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {[
                            "Aerial Plantations", "Hand-Plucking", "Modern Machinery", "Quality Inspection", "Sustainable Farming", "Ready for Dispatch"
                        ].map((pill, i) => (
                            <span key={i} className="px-6 py-3 bg-[#F7FDE9] text-gray-800 rounded-full text-sm font-medium border border-[#e8f0dc] shadow-sm hover:shadow-md hover:border-[#c5d5ad] hover:bg-[#f2f7ec] transition-all duration-300 cursor-default">
                                {pill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">

                    <div className="md:col-span-2 md:row-span-2 rounded-4xl overflow-hidden relative group shadow-sm bg-gray-100">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/bhoomiputhrabg-lg.webp')" }}></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.2),transparent)] transition-opacity duration-500" />
                        <div className="absolute bottom-10 left-10 right-10">
                            <h4 className="text-white text-3xl  drop-shadow-md mb-2">Aerial Views</h4>
                            <p className="text-white/90  text-base">Lush green plantations spanning 600 acres</p>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 rounded-4xl overflow-hidden relative group shadow-sm bg-gray-200 min-h-[300px] md:min-h-0">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/skilled plucking.webp')" }}></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.3),rgba(0,0,0,0.1))]" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <h4 className="text-white text-xl  drop-shadow-md">Skilled Plucking</h4>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 rounded-4xl overflow-hidden relative group shadow-sm bg-gray-200 min-h-[300px] md:min-h-0">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/modern machinery.webp')" }}></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.3),rgba(0,0,0,0.1))]" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <h4 className="text-white text-xl  drop-shadow-md">Modern Machinery</h4>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:row-span-1 rounded-4xl overflow-hidden relative group shadow-sm bg-gray-200 min-h-[300px] md:min-h-0">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/sustainable farmig.webp')" }}></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.3),rgba(0,0,0,0.1))]" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <h4 className="text-white text-2xl  drop-shadow-md mb-1">Sustainable Excellence</h4>
                            <p className="text-white/80  text-sm">Responsibly driving agricultural practices</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Boomiputhra;

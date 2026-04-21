import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Button from "../components/Button";
import RoomCard from "../components/RoomCard";
import rooms from "../data/roomsData";
import EmblaCarousel from "../components/EmblaCarousel";
import bhoomiputraLogo from "../assets/logos/bhoomiputra-logo.webp";
import toddy1 from "../assets/images/toddy-1.webp";
import toddy2 from "../assets/images/toddy-2.webp";
import toddy3 from "../assets/images/toddy-3.webp";
import toddy4 from "../assets/images/toddy-4.webp";
import toddy5 from "../assets/images/toddy-5.webp";
import toddyLogo from "../assets/logos/boche-toddypub.webp";
import bhojanamLogo from "../assets/logos/boche-bhojanam.webp";
import bocheWithFood from "../assets/images/bohe-withfood.webp";
import { Document, Page, pdfjs } from "react-pdf";
import adventures from "../data/adventuresData";
import ReelCard from "../components/ReelCard";
import GalleryThumbnail from "../components/GalleryThumbnail";
import { categories } from "../data/gallery";
import { getImagesByCategory, getImageById } from "../services/galleryService";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Home() {
  const getVideoSrc = () => {
    const width = window.innerWidth;
    if (width <= 640) return "/videos/heroanimationsm.webm";
    if (width <= 1024) return "/videos/heroanimationmd.webm";
    return "/videos/heroanimationlg.webm";
  };

  const [videoSrc, setVideoSrc] = useState(getVideoSrc);
  const [showCard, setShowCard] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const videoRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLoading, setPageLoading] = useState(false);
  const [reelModal, setReelModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newSrc = getVideoSrc();
      setVideoSrc(prev => (prev !== newSrc ? newSrc : prev));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => { });
      }
    }
  }, [videoSrc]);

  useEffect(() => {
    document.body.style.overflow = reelModal ? "hidden" : "auto";
  }, [reelModal]);

  const handleCall = () => {
    window.location.href = "tel:+919961008008";
    setDismissed(true);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPage = (fn) => {
    setPageLoading(true);
    setPageNumber(fn);
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-dvh overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src={videoSrc} type="video/webm" />
        </video>

        {!dismissed && (
          <div
            className="absolute bottom-6 right-4 z-10 sm:bottom-10 sm:right-10"
            style={{
              transform: showCard ? "translateX(0)" : "translateX(120%)",
              opacity: showCard ? 1 : 0,
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
            }}
          >
            <div className="bg-black/70 backdrop-blur-sm rounded-xl px-5 py-4 sm:px-6 sm:py-5 max-w-65 sm:max-w-xs shadow-2xl border border-white/10">
              <button
                onClick={() => setDismissed(true)}
                className="absolute top-2 right-3 text-white/50 hover:text-white text-lg leading-none transition-colors"
                aria-label="Dismiss"
              >
                ×
              </button>
              <h2 className="text-white text-xs font-semibold sm:text-lg uppercase tracking-widest mb-1">
                For Booking Call
              </h2>
              <h2 className="text-white font-semibold text-base sm:text-lg leading-snug mb-1">
                Hello Boche
              </h2>
              <a
                href="tel:+919961008008"
                className="text-white/80 text-sm sm:text-base hover:text-white transition-colors"
              >
                +91 99610 08008
              </a>
              <Button size="sm" className="mt-4 w-full" onClick={handleCall}>
                Call Now
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Welcome Section */}
      <section className="relative overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet="https://placehold.co/1600x600" />
          <source media="(min-width: 768px)" srcSet="https://placehold.co/1200x700" />
          <img src="https://placehold.co/600x800" alt="Welcome" className="w-full object-cover" />
        </picture>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-6 md:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance">Welcome to boCHE 1000 Acre</h1>
          <h4 className="mt-4 text-base sm:text-lg md:text-xl text-balance">Immerse yourself in a stay surrounded by a 1,000-acre tea plantation.</h4>
        </div>
      </section>

      {/* Banner section */}
      <section>
        <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}>
          <div>
            <img src="/images/banners/banner1.webp" alt="Slide 1" />
          </div>
        </Carousel>
      </section>

      {/* Stay cards */}
      <section className="bg-[#F7FDE9] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <EmblaCarousel sectionTitle="Our Stays" sectionSubtitle="Comfort Meets Nature">
            {rooms.map((room) => {
              {/* CORRECTED: resolve gallery ID to get variants with actual URLs */ }
              const cover = getImageById(room.images?.[0]?.galleryId);
              return (
                <div className="embla__slide" key={room.id}>
                  <RoomCard
                    image={cover?.variants?.small ?? "/images/image-not-found-small.webp"}
                    blur={cover?.variants?.blur ?? ""}
                    title={room.name}
                    guests={room.basicInfo?.maxGuests}
                    price={room.basicInfo?.pricePerNight}
                    id={room.id}
                  />
                </div>
              );
            })}
          </EmblaCarousel>
          <div className="flex justify-center">
            <Button size="sm">View All Stays</Button>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-20 text-center bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/restaurantbg-sm.svg')] md:bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/restaurantbg-md.svg')] lg:bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/restaurantbg-lg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl relative mx-auto px-4">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-2" style={{ gridTemplateRows: "repeat(3, 160px)" }}>
              <div className="row-span-2 rounded-xl overflow-hidden bg-[#c8b89a]"><img src={toddy2} className="w-full h-full object-cover" /></div>
              <div className="rounded-xl overflow-hidden bg-[#c8b89a]"><img src={toddy1} className="w-full h-full object-cover" /></div>
              <div className="rounded-xl overflow-hidden bg-[#c8b89a]"><img src={toddy3} className="w-full h-full object-cover" /></div>
              <div className="rounded-xl overflow-hidden bg-[#c8b89a]"><img src={toddy4} className="w-full h-full object-cover" /></div>
              <div className="rounded-xl overflow-hidden bg-[#c8b89a]"><img src={toddy5} className="w-full h-full object-cover" /></div>
            </div>
            <div className="order-1 md:order-2 flex flex-col items-center text-center gap-6">
              <div>
                <h2 className="text-black">The Resto Toddy Pub</h2>
                <p className="text-gray-500 max-w-lg">
                  Experience authentic toddy shop flavors and the finest toddy, served in the refreshing climate of Wayanad with an exceptional ambiance.
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <img src={toddyLogo} className="h-40 object-contain" />
                <img src={bhojanamLogo} className="h-28 object-contain" />
              </div>
              <Button size="sm" onClick={() => { setPageNumber(1); setPageLoading(true); setShowMenu(true); }}>Explore the Menu</Button>
            </div>
          </div>
          <img src={bocheWithFood} className="hidden xl:block absolute -bottom-20 -right-16 h-96" />
          <p className="absolute -bottom-20 left-2.5 bg-white text-sm text-gray-500">*Drinking alcohol is injurious to health.</p>
        </div>
      </section>

      {/* Adventure section */}
      <section className="bg-[#F7FDE9] py-20">
        <div className="max-w-7xl relative mx-auto px-4">
          <EmblaCarousel sectionTitle="Adventure Experiences" sectionSubtitle="More ways to feel alive">
            {adventures.map((adventure) => (
              <div className="embla__slide" key={adventure.id}>
                <ReelCard {...adventure} onPlay={() => setReelModal(adventure)} />
              </div>
            ))}
          </EmblaCarousel>
          <div className="flex justify-center">
            <Link to="/adventures"><Button size="sm">Know More</Button></Link>
          </div>
        </div>
      </section>

      {/* Bhoomiputra section */}
      <section className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/bhoomiputhrabg-sm.webp')] md:bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/bhoomiputhrabg-md.webp')] lg:bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/bhoomiputhrabg-lg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 text-white flex flex-col items-center space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
              <img className="lg:w-md object-contain" src={bhoomiputraLogo} alt="bhoomiputralogo" />
              <p className="leading-relaxed text-justify md:text-left">
                Located in the misty highlands of South India at 3,280–3,850 feet, our
                600-acre plantation grows premium tea, coffee, cardamom, vanilla,
                pepper, and select minor crops using sustainable practices. Our modern
                tea factory processes up to 12,000 kg of green leaf daily, combining
                traditional craftsmanship with advanced technology to ensure consistent
                quality, rich aroma, and superior flavor from estate to dispatch.
              </p>
            </div>
            <div>
              <img src="/images/teaFactory.webp" className="w-full rounded-xl object-cover" alt="Tea Factory" />
            </div>
          </div>
          <Link to="/boomiputhra">
            <Button size="sm" className="border-white border">Know More</Button>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/gallerybg-sm.svg')] md:bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/gallerybg-md.svg')] lg:bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/gallerybg-lg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="pb-8 md:pb-10 text-center md:text-left">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories
              .filter(cat => cat.showInGallery !== false)
              .map((cat) => {
                const catImages = getImagesByCategory(cat.category)
                  .sort((a, b) => b.id - a.id); // ✅ newest first

                const repItem = cat.category === 'all'
                  ? catImages.find(g => g.category === 'stays') ?? catImages[0]
                  : catImages[0];

                const image = repItem ? repItem.variants.small : "/images/image-not-found-small.webp";
                const blur = repItem ? repItem.variants.blur : "";
                const title = cat.title === "All" ? "Recent" : cat.title;

                return (
                  <Link to={`/gallery/${cat.category}`} key={cat.id}>
                    <GalleryThumbnail image={image} blur={blur} title={title} />
                  </Link>
                );
              })
            }
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Subscribe To Our Newsletter</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Stay updated with our latest offers, new experiences, and events happening around the 1000-acre estate.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full flex-1 px-6 py-3.5 bg-gray-50/50 border border-gray-300 rounded-full focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
            <Button size="md" className="w-full sm:w-auto px-8 py-3.5 rounded-full whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Menu modal */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setShowMenu(false)}>
          <div className="relative bg-white rounded-xl w-full max-w-4xl flex flex-col overflow-hidden" style={{ maxHeight: "95dvh" }} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shrink-0">
              <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Our Menu</span>
              <button onClick={() => { setShowMenu(false); setPageNumber(1); }} className="bg-gray-100 text-black w-9 h-9 rounded-full flex items-center justify-center text-lg leading-none hover:bg-gray-200 transition">✕</button>
            </div>
            <div className="overflow-auto flex justify-center p-2 sm:p-4" style={{ maxHeight: "calc(95dvh - 110px)" }}>
              <div className="relative">
                {pageLoading && (
                  <div className="absolute inset-0 bg-white flex items-center justify-center z-10 rounded">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                  </div>
                )}
                <Document file="/menu.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                    key={pageNumber}
                    pageNumber={pageNumber}
                    width={Math.min(window.innerWidth - 32, 750)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    onRenderSuccess={() => { setTimeout(() => setPageLoading(false), 150); }}
                  />
                </Document>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-3 px-4 border-t border-gray-200 bg-white shrink-0">
              <button onClick={() => goToPage((prev) => Math.max(prev - 1, 1))} disabled={pageLoading || pageNumber === 1} className="px-4 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition active:scale-95">← Prev</button>
              <span className="text-sm text-gray-600 min-w-15 text-center">{pageNumber} / {numPages ?? "..."}</span>
              <button onClick={() => goToPage((prev) => Math.min(prev + 1, numPages))} disabled={pageLoading || !numPages || pageNumber === numPages} className="px-4 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition active:scale-95">Next →</button>
            </div>
          </div>
        </div>
      )}

      {reelModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setReelModal(null)}>
          <button onClick={() => setReelModal(null)} className="absolute top-4 right-4 z-10 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:bg-black transition">✕</button>
          <div className="w-[90vw] sm:w-80 md:w-96 aspect-9/16 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <iframe
              key={reelModal.id}
              src={`${reelModal.videoLink}?autoplay=1&mute=1&controls=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
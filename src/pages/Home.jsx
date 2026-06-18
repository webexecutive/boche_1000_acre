import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Button from "../components/Button";
import RoomCard from "../components/RoomCard";
import rooms from "../data/roomsData";
import EmblaCarousel from "../components/EmblaCarousel";
import bhoomiputraLogo from "../assets/logos/bhoomiputra-logo.webp";
import toddyLogo from "../assets/logos/boche-toddypub.webp";
import CImage from "../components/Cimage";
import bhojanamLogo from "../assets/logos/boche-bhojanam.webp";
import bocheWithFood from "../assets/images/bohe-withfood.webp";
import { Document, Page, pdfjs } from "react-pdf";
import adventures from "../data/adventuresData";
import ReelCard from "../components/ReelCard";
import GalleryThumbnail from "../components/GalleryThumbnail";
import { categories } from "../data/gallery";
import { getImagesByCategory, getImageById } from "../services/galleryService";
import videoReviews from "../data/videoReviewData";
import reviewData from "../data/googleReviewData";
import ReviewCard from "../components/ReviewCard";
import StayCard from "../components/StayCard";
import SEO from "../components/SEO";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const combinedReviews = [];
const maxLength = Math.max(videoReviews.length, reviewData.length);
for (let i = 0; i < maxLength; i++) {
  if (i < videoReviews.length) {
    combinedReviews.push({ ...videoReviews[i], type: "video" });
  }
  if (i < reviewData.length) {
    combinedReviews.push({ ...reviewData[i], type: "google" });
  }
}

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
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle"); // idle | loading | success | error
  const [subError, setSubError] = useState("");
  const [activePreview, setActivePreview] = useState(null);

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

  useEffect(() => {
    if (reelModal) {
      window.history.pushState({ modal: true }, "");

      const handlePopState = () => {
        setReelModal(null);
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [reelModal]);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--welcome-h', `${window.innerHeight}px`);
    };
    setVh();

  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919961008008";
    ;
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPage = (fn) => {
    setPageLoading(true);
    setPageNumber(fn);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubStatus("loading");
    setSubError("");
    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
      await axios.post(`${serverUrl}/subscribe`, { email: subEmail });
      setSubStatus("success");
      setSubEmail("");
    } catch (err) {
      if (err.response?.status === 409) {
        setSubStatus("already");
      } else {
        setSubStatus("error");
        setSubError(err.response?.data?.message || "Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <SEO
        title="boCHE 1000 Acres|Resorts in Wayanad Kerala | Luxury Stay & Adventure |"
        description="boCHE 1000 Acres is one of the best resorts in Wayanad Kerala — a luxury experiential retreat set within a sprawling 1000-acre tea plantation. Stay in a British Bungalow, Bubble Dome, Mud House, or XPod. Enjoy zipline, giant swing, ATV rides, sky cycling, authentic Kerala cuisine, and breathtaking plantation views. Book your Wayanad resort stay today."
        keywords="resorts in wayanad, resorts in wayanad kerala, best resorts in wayanad, luxury resorts in wayanad, best resort in wayanad kerala, stay in wayanad, rooms at wayanad, wayanad resort booking, wayanad resort packages, adventure activities in wayanad, wayanad adventure activities, zipline wayanad, wayanad zipline, bubble dome wayanad, british bungalow wayanad, mud house wayanad, xpod wayanad, ATV ride wayanad, sky cycling wayanad, tea plantation resort wayanad"
        url="https://www.boche1000acre.in"
      />

      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden"
        style={{ height: 'var(--welcome-h, 100dvh)' }}>
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
              <h3 className="text-white text-xs font-semibold sm:text-lg uppercase tracking-widest mb-1">
                For Booking Call
              </h3>
              <h3 className="text-white font-semibold text-base sm:text-lg leading-snug mb-1">
                Hello Boche
              </h3>
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
      <section className="relative overflow-hidden md:h-180"
        style={{ height: 'var(--welcome-h, 100dvh)' }}>

        {/* ── MOBILE LAYOUT: stacked (image top / dark panel bottom) ── */}
        <div className="flex flex-col h-full md:hidden">


          {/* Top: photo */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="/images/gallery/stays/174/blur.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
              aria-hidden="true"
            />
            <img
              src="/images/gallery/stays/174/small.webp"
              srcSet="/images/gallery/stays/174/small.webp 400w, /images/gallery/stays/174/large.webp 1200w"
              sizes="100vw"
              alt="boCHE 1000 Acres resort in Wayanad Kerala"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
              onLoad={(e) => { e.target.previousSibling.style.opacity = 0; }}
            />
            {/* Gradient fade into black panel below */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-black" />
          </div>

          {/* Bottom: dark text panel */}
          <div className="bg-black px-6 py-8 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1">
              Welcome to boCHE 1000 Acre
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-5">
              Wayanad, Kerala
            </p>
            <h1 className="text-4xl leading-tight text-white mb-4">
              A Resort in Wayanad Like No Other
            </h1>
            <div className="w-8 h-px bg-white/40 mb-4" />
            <p className="text-sm text-white/70 leading-relaxed text-justify">
              Nestled in the heart of a sprawling tea plantation, boCHE 1000 Acres is a one-of-a-kind resort in Wayanad Kerala — where thrilling adventures, breathtaking plantation views, and the warmth of Kerala come together in one unforgettable stay.
            </p>
          </div>

        </div>

        {/* ── DESKTOP LAYOUT: original overlaid style ── */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/images/gallery/stays/78/blur.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
            aria-hidden="true"
          />
          <img
            src="/images/gallery/stays/78/large.webp"
            alt="boCHE 1000 Acres resort in Wayanad Kerala"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onLoad={(e) => { e.target.previousSibling.style.opacity = 0; }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent" />
          <div className="relative h-full flex items-center">
            <div className="px-16 lg:px-24 max-w-xl text-left text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
                Welcome to boCHE 1000 Acre — Wayanad, Kerala
              </p>
              <h1 className="text-4xl lg:text-5xl text-balance mb-4 text-white">
                A Resort in Wayanad Like No Other
              </h1>
              <div className="w-12 h-px bg-white/50 mb-4" />
              <p className="text-base text-white/80 leading-relaxed">
                Nestled in the heart of a sprawling tea plantation, boCHE 1000 Acres is a one-of-a-kind resort in Wayanad Kerala — where thrilling adventures, breathtaking plantation views, and the warmth of Kerala come together in one unforgettable stay.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Banner section */}
      <section>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          onClickItem={() => window.location.href = "/packages-and-offers/day-out"}
          className="cursor-pointer"
        >
          <div>
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/gallery/banner/171/large.webp" />
              <source media="(min-width: 769px)" srcSet="/images/banners/banner1.webp" />
              <img src="/images/banners/banner1.webp" alt="Slide 1" />
            </picture>
          </div>
        </Carousel>
      </section>

      {/* Stay cards */}
      <section className="bg-[#F7FDE9] py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section intro */}
          <div className=" max-w-5xl mx-auto px-3">
            <h2 className="text-[#1e3209] text-center mb-4">
              A Sanctuary Above the Clouds
            </h2>

            <div className="w-12 h-px bg-[#c8dba0] mx-auto mb-6" />

            <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed text-justify">
              Nestled amidst the pristine mountains of Kerala, boCHE 1000 Acres is one of the best resorts in Wayanad, offering a unique blend of luxury, nature, wellness, and adventure. Surrounded by panoramic mountain views, lush forests, and sprawling tea plantations, this luxury resort in Wayanad creates an unforgettable escape for travellers seeking both relaxation and discovery.
            </p>

            <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed mt-4 text-justify">
              From the iconic Bubble Dome and heritage-inspired British Bungalow to the eco-friendly Mud House and futuristic XPod, every stay in Wayanad at boCHE 1000 Acres is designed to immerse guests in comfort and natural beauty. Whether planning a romantic getaway, family holiday, or group retreat, guests can enjoy exceptional hospitality, adventure activities in Wayanad, and experiences that inspire lasting memories.
            </p>
          </div>

          <EmblaCarousel className="stays-carousel" >
            {rooms.map((room) => {
              const cover = getImageById(room.images?.[0]);
              return (
                <div className="embla__slide" key={room.id}>
                  <StayCard
                    image={cover?.variants?.small ?? "/images/image-not-found-small.webp"}
                    blur={cover?.variants?.blur ?? ""}
                    alt={cover?.alt ?? room.name}
                    title={room.name}
                    tagline={room.aboutStay.tagline}
                    description={room.aboutStay.description}
                    id={room.id}
                  />
                </div>
              );
            })}
          </EmblaCarousel>

          <div className="flex justify-center">
            <Link to="/stays"><Button size="sm">View All Stays</Button></Link>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-20 text-center overflow-hidden bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/restaurantbg-sm.svg')] md:bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/restaurantbg-md.svg')] lg:bg-[linear-gradient(rgba(254,255,251,0.9),rgba(254,255,251,0.9)),url('/images/restaurantbg-lg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl relative mx-auto px-4">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-2" style={{ gridTemplateRows: "repeat(3, 160px)" }}>
              <CImage className="row-span-2 rounded-xl bg-[#c8b89a] w-full h-full" src={getImageById(74)?.variants?.large} blur={getImageById(74)?.variants?.blur} alt="Toddy 2" />
              <CImage className="rounded-xl bg-[#c8b89a] w-full h-full" src={getImageById(154)?.variants?.small} blur={getImageById(154)?.variants?.blur} alt="Toddy 1" />
              <CImage className="rounded-xl bg-[#c8b89a] w-full h-full" src={getImageById(155)?.variants?.small} blur={getImageById(155)?.variants?.blur} alt="Toddy 3" />
              <CImage className="rounded-xl bg-[#c8b89a] w-full h-full" src={getImageById(156)?.variants?.small} blur={getImageById(156)?.variants?.blur} alt="Toddy 4" />
              <CImage className="rounded-xl bg-[#c8b89a] w-full h-full" src={getImageById(77)?.variants?.small} blur={getImageById(77)?.variants?.blur} alt="Toddy 5" />
            </div>
            <div className="order-1 md:order-2 flex flex-col items-center text-center gap-6">
              <div>
                <h2 className="text-black">
                  The Resto Toddy Pub
                </h2>
                <p className="text-gray-500 max-w-lg">
                  Savor authentic Kerala toddy shop flavors and traditional cuisine at our Wayanad resort, where great food, refreshing toddy, and the serene climate of Wayanad come together for a memorable dining experience.
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
          <EmblaCarousel sectionTitle="Discover the Best Adventure Activities in Wayanad" sectionSubtitle="Adventure woven into nature's beauty">
            {adventures.map((adventure) => (
              <div className="embla__slide flex-[0_0_220px]!" key={adventure.id}>
                <ReelCard {...adventure} onPlay={() => setReelModal(adventure)}
                  isPreviewActive={activePreview === adventure.id}
                  onPreviewStart={() => setActivePreview(adventure.id)}
                  onPreviewStop={() => setActivePreview(null)} />
              </div>
            ))}
          </EmblaCarousel>
          <div className="flex justify-center">
            <Link to="/adventures"><Button size="sm">Know More</Button></Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden h-auto md:h-180">


        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col h-full lg:hidden">

          {/* Top: photo */}
          <div className="relative h-75 md:h-96 overflow-hidden">
            <img
              src="/images/gallery/events/170/large.webp"
              alt="Campfire evenings at boCHE 1000 Acre"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-black" />
          </div>

          {/* Bottom: dark text panel */}
          <div className="bg-black px-6 py-8 flex-1 flex flex-col justify-center">
            <h2 className="text-3xl text-white mb-4">
              Unwind at One of the Best Resorts in Wayanad
            </h2>
            <div className="w-8 h-px bg-white/40 mb-4" />
            <p className="text-sm text-white/70 leading-relaxed">
              Gather around the fire and enjoy peaceful evenings amidst tea plantations, luxury stays, and unforgettable experiences in Wayanad.
            </p>
          </div>

        </div>

        {/* ── DESKTOP LAYOUT: original ── */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src="/images/gallery/events/168/large.webp"
            alt="Campfire evenings at boCHE 1000 Acre"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-l from-black/80 via-black/25 to-transparent" />
          <div className="relative h-full flex items-center justify-end">
            <div className="px-16 lg:px-24 max-w-xl text-left text-white">
              <h2 className="text-4xl lg:text-5xl text-balance mb-4 text-white">
                Unwind at One of the Best Resorts in Wayanad
              </h2>
              <div className="w-12 h-px bg-white/50 mb-4" />
              <p className="text-base text-white/80 leading-relaxed">
                Gather around the fire and enjoy peaceful evenings amidst tea plantations, luxury stays, and unforgettable experiences in Wayanad.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* boChe Experience */}
      <section className="bg-[#F7FDE9] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">

          {/* Text block */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#6a8f3a] mb-4">
              The boCHE Experience
            </p>

            <h2 className="text-[#1e3209] mb-4">
              Experience the Best Resort Stay in Wayanad
            </h2>

            <div className="w-12 h-px bg-[#c8dba0] mx-auto mb-6" />

            <p className="text-[14px] md:text-[15px] font-light text-justify text-[#4a5c35] leading-relaxed">
              At boCHE 1000 Acres, one of the best resorts in Wayanad, every stay is enriched by panoramic mountain views, tea plantation landscapes, luxury accommodations, adventure activities in Wayanad, wellness experiences, and authentic Kerala hospitality. From thrilling zipline rides and ATV adventures to unique stays in our Bubble Dome, British Bungalow, Mud House, and XPod, every moment becomes part of an unforgettable Wayanad experience.
            </p>
          </div>

          {/* Feature rows */}
          <div className="max-w-5xl mx-auto text-justify divide-y divide-[#c8dba0]">
            {[
              {
                num: "01",
                label: "Adventure in the Hills",
                tag: "Adventure",
                desc: "Experience some of the most exciting adventure activities in Wayanad, including zipline rides, sky cycling, giant swings, and ATV rides through scenic tea plantation trails. For travellers seeking unforgettable Wayanad adventure activities, boCHE 1000 Acres offers thrills surrounded by breathtaking highland landscapes.",
              },
              {
                num: "02",
                label: "A Sea of Green",
                tag: "Scenery",
                desc: "Nestled within sprawling tea plantations, our tea plantation resort in Wayanad offers spectacular views at every turn. Wake up to rolling hills, mist-covered valleys, and the serenity that makes a stay in Wayanad truly unforgettable.",
              },
              {
                num: "03",
                label: "Tastes of Kerala",
                tag: "Cuisine",
                desc: "From authentic Kerala delicacies to local Wayanad specialties, every meal celebrates the region's rich culinary heritage. Enjoy memorable dining experiences at one of the best resorts in Wayanad, where great food is part of every stay.",
              },
              {
                num: "04",
                label: "A Place to Slow Down",
                tag: "Wellness",
                desc: "Whether you choose a Bubble Dome, British Bungalow, Mud House, or XPod stay, our luxury resort in Wayanad is designed for rest, renewal, and reconnecting with nature amidst the tranquil hills of Kerala.",
              },
            ].map(({ num, label, tag, desc }) => (
              <div key={num} className="flex items-start gap-4 md:gap-10 py-7 md:py-10 group">

                {/* Number */}
                <span className="text-[36px] md:text-[64px] font-light leading-none text-[#c8dba0] select-none shrink-0 w-10 md:w-20 group-hover:text-[#6a8f3a] transition-colors duration-300">
                  {num}
                </span>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10 flex-1">

                  <div className="shrink-0 md:w-56 flex flex-col gap-2 md:pt-3">
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6a8f3a] bg-[#e4f5c8] px-2 py-1 rounded-full w-fit">
                      {tag}
                    </span>
                    <h3 className="text-[#1e3209] text-[16px] md:text-[20px] font-medium leading-tight">
                      {label}
                    </h3>
                  </div>

                  <p className="text-[13px] md:text-[14px] font-light text-[#4a5c35] leading-relaxed md:pt-3 flex-1">
                    {desc}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bhoomiputra section */}
      <section className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/gallery/estate/177/large.webp')] md:bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/gallery/estate/176/large.webp')] lg:bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/gallery/estate/175/large.webp')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 text-white flex flex-col items-center space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
              <img
                className="lg:w-md object-contain"
                src={bhoomiputraLogo}
                alt="Bhoomiputhra Plantation Wayanad"
              />
              <p className="leading-relaxed text-justify">
                Nestled in the mist-covered hills of Wayanad, Kerala, Bhoomiputhra Plantation spans over 600 acres of thriving tea, coffee, cardamom, vanilla, and pepper estates. As the heart of boCHE 1000 Acres, our tea plantation resort in Wayanad offers guests an immersive connection to nature, where scenic landscapes, sustainable farming practices, and authentic plantation experiences come together. Our modern tea factory processes up to 12,000 kg of green leaf daily, blending traditional craftsmanship with advanced technology to create premium teas renowned for their rich aroma and exceptional quality.
              </p>
            </div>
            <div>
              <img
                src="/images/gallery/estate/166/large.webp"
                className="w-full rounded-xl object-cover"
                alt="Bhoomiputhra Tea Plantation and Tea Factory in Wayanad Kerala"
              />
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
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#6a8f3a] mb-4">
              A Visual Journey
            </p>
            <h2 className="text-[#1e3209] mb-4">Our Gallery</h2>
            <div className="w-12 h-px bg-[#c8dba0] mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories
              .filter(cat => cat.showInGallery !== false)
              .map((cat) => {
                const catImages = getImagesByCategory(cat.category)
                  .sort((a, b) => b.id - a.id); // ✅ newest first

                const repItem = catImages[0];

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

      {/* Testimonials section */}
      <section className="bg-[#F7FDE9] py-20">
        <div className="max-w-7xl relative mx-auto px-4">
          <EmblaCarousel sectionTitle="Experiences Worth Sharing" sectionSubtitle="Hear from our guests">
            {combinedReviews.map((review) => (
              <div className="embla__slide" key={review.type === "video" ? `video-${review.id}` : `google-${review.id}`}>
                <ReviewCard review={review} onPlay={setReelModal} />
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </section>


      {/* Map Section */}
      <section className="w-full h-112.5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8414.148655069192!2d76.12723070987565!3d11.530258170742771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba613ab91efa5ab%3A0x3f76852d27db0cc9!2sBoche%201000%20Acre!5e1!3m2!1sen!2sin!4v1779511842065!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Boche 1000 Acre Location"
        />
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Stay Connected with boCHE 1000 Acres
          </h2>

          <p className="text-gray-500 mb-8 max-w-3xl mx-auto">
            Be the first to receive exclusive offers, Wayanad resort packages, luxury stay updates, adventure activity launches, and special experiences from one of the best resorts in Wayanad.
          </p>
          {/* Already Subscribed */}
          {subStatus === "already" && (
            <p className="text-amber-600 text-sm mb-4">
              You are already subscribed!
            </p>
          )}

          {/* Success Message */}
          {subStatus === "success" && (
            <p className="text-green-600 text-sm mb-4">
              You have successfully subscribed!
            </p>
          )}

          {/* Error Message */}
          {subStatus === "error" && (
            <p className="text-red-500 text-sm mb-4">
              {subError}
            </p>
          )}

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={subEmail}
              onChange={(e) => setSubEmail(e.target.value)}
              disabled={subStatus === "loading"}
              className="w-full flex-1 px-6 py-3.5 bg-gray-50/50 border border-gray-300 rounded-full focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition disabled:opacity-50"
            />
            <Button
              type="submit"
              size="md"
              disabled={subStatus === "loading"}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full whitespace-nowrap disabled:opacity-50"
            >
              {subStatus === "loading" ? "Subscribing..." : "Subscribe"}
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
              src={`${reelModal.videoLink}${reelModal.videoLink.includes('?') ? '&' : '?'}autoplay=1&controls=0`}
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
import { useCallback, useEffect, useState, } from "react";
import useEmblaCarousel from "embla-carousel-react";
import '../assets/styles/embla-carousel.css';
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

function EmblaCarousel({ children, sectionTitle, sectionSubtitle }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: "start" },
        [WheelGesturesPlugin({ forceWheelAxis: "x" })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();
    const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

    const onInit = useCallback((api) => {
        setScrollSnaps(api.scrollSnapList());
    }, []);

    const onSelect = useCallback((api) => {
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className="flex flex-col items-center justify-center  ">
            <div className="embla">
                <div className="flex flex-row justify-between pb-3  pl-4 ">
                    <div className="text-center flex flex-col gap-2">
                        <h2>{sectionTitle}</h2>
                        <p className="text-sm">{sectionSubtitle}</p>
                    </div>

                    <div className="embla__buttons flex items-center justify-end gap-3 mb-1 mr-4">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full hover:cursor-pointer text-3xl border-2  border-gray-300 flex items-center justify-center font-light hover:bg-[#e8f0dc] hover:border-[#3a5a1c] hover:text-[#3a5a1c] transition-all duration-200"
                        >
                            ‹
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full hover:cursor-pointer text-3xl border-2 border-gray-300 flex items-center justify-center font-light hover:bg-[#e8f0dc] hover:border-[#3a5a1c] hover:text-[#3a5a1c] transition-all duration-200"
                        >
                            ›
                        </button>
                    </div>
                </div>


                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {children}

                    </div>
                </div>

                <div className="embla__dots pb-4 flex items-center justify-center gap-3">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EmblaCarousel;
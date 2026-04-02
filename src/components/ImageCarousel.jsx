import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './ImageCarouselThumbsButton'

const SlideImage = ({ src, blur, alt }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {!loaded && blur && (
                <img
                    src={blur}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
            <img 
                src={src} 
                alt={alt} 
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
};

const ImageCarousel = (props) => {
    const { images, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()

        emblaMainApi.on('select', onSelect).on('reinit', onSelect)
    }, [emblaMainApi, onSelect])

    // Fallback if images array is empty or undefined
    const safeImages = images && images.length > 0 
        ? images 
        : [{ small: "/images/image-not-found-small.webp", medium: "/images/image-not-found-small.webp", large: "/images/image-not-found-small.webp" }];

    return (
        <div className="image-carousel-wrapper embla">
            <div className="embla__viewport rounded-2xl" ref={emblaMainRef}>
                <div className="embla__container">
                    {safeImages.map((img, index) => {
                        // Prefer large or medium for the main view, fallback to small or placeholder
                        const mainSrc = img.large || img.medium || img.small || "/images/image-not-found-small.webp";
                        
                        return (
                            <div className="embla__slide" key={index}>
                                <SlideImage src={mainSrc} blur={img.blur} alt={`Slide ${index + 1}`} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="embla-thumbs">
                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                    <div className="embla-thumbs__container">
                        {safeImages.map((img, index) => {
                            // Use small image for thumbnail
                            const thumbSrc = img.small || img.medium || "/images/image-not-found-small.webp";
                            
                            return (
                                <Thumb
                                    key={index}
                                    onClick={() => onThumbClick(index)}
                                    selected={index === selectedIndex}
                                    index={index}
                                    imgSrc={thumbSrc}
                                    blur={img.blur}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel

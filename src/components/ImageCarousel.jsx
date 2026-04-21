import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './ImageCarouselThumbsButton'
import '../assets/styles/image-carousel.css'
import CImage from "./Cimage";

const SlideImage = ({ src, blur, alt }) => {
    return (
        <CImage
            src={src}
            blur={blur}
            alt={alt}
            className="w-full h-full aspect-3/2 rounded-2xl"
        />
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

    // CORRECTED: fallback object now matches the variants shape from galleryService
    const safeImages = images && images.length > 0
        ? images
        : [{ variants: { small: "/images/image-not-found-small.webp", medium: "/images/image-not-found-small.webp", large: "/images/image-not-found-small.webp", blur: "" } }];

    return (
        <div className="image-carousel-wrapper embla">
            <div className="embla__viewport rounded-2xl" ref={emblaMainRef}>
                <div className="embla__container">
                    {safeImages.map((img, index) => {
                        // CORRECTED: read URLs from img.variants
                        const mainSrc = img.variants?.large || img.variants?.medium || img.variants?.small || "/images/image-not-found-small.webp";
                        return (
                            <div className="embla__slide" key={index}>
                                <SlideImage src={mainSrc} blur={img.variants?.blur} alt={`Slide ${index + 1}`} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="embla-thumbs">
                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                    <div className="embla-thumbs__container">
                        {safeImages.map((img, index) => {
                            // CORRECTED: read URLs from img.variants
                            const thumbSrc = img.variants?.small || img.variants?.medium || "/images/image-not-found-small.webp";
                            return (
                                <Thumb
                                    key={index}
                                    onClick={() => onThumbClick(index)}
                                    selected={index === selectedIndex}
                                    index={index}
                                    imgSrc={thumbSrc}
                                    blur={img.variants?.blur}
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
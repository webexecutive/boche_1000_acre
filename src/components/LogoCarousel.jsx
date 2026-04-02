import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import '../assets/styles/logo-carousel.css'

// ─── useAutoScroll hook ───────────────────────────────────────────────────────

const useAutoScroll = (emblaApi) => {
  const [autoScrollIsPlaying, setAutoScrollIsPlaying] = useState(false)

  const onAutoScrollButtonClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return
      autoScroll.stop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoScroll = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return
    const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return
    setAutoScrollIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoscroll:play', () => setAutoScrollIsPlaying(true))
      .on('autoscroll:stop', () => setAutoScrollIsPlaying(false))
      .on('reinit', () => setAutoScrollIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return { autoScrollIsPlaying, toggleAutoScroll, onAutoScrollButtonClick }
}

// ─── usePrevNextButtons hook ──────────────────────────────────────────────────

const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reinit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick }
}

// ─── Arrow Button Components ──────────────────────────────────────────────────

const PrevButton = (props) => {
  const { children, disabled, ...restProps } = props
  return (
    <button
      className={'groupLogoCarousel__button groupLogoCarousel__button--prev'.concat(
        disabled ? ' groupLogoCarousel__button--disabled' : ''
      )}
      type="button"
      {...restProps}
    >
      <svg className="groupLogoCarousel__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  )
}

const NextButton = (props) => {
  const { children, disabled, ...restProps } = props
  return (
    <button
      className={'groupLogoCarousel__button groupLogoCarousel__button--next'.concat(
        disabled ? ' groupLogoCarousel__button--disabled' : ''
      )}
      type="button"
      {...restProps}
    >
      <svg className="groupLogoCarousel__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  )
}

// ─── Main LogoCarousel Component ──────────────────────────────────────────────

const LogoCarousel = ({ items = [], options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, ...options },
    [AutoScroll({ speed: 1, stopOnInteraction: false })]
  )

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const { onAutoScrollButtonClick } = useAutoScroll(emblaApi)

  const handleMouseEnter = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (autoScroll) autoScroll.stop()
  }, [emblaApi])

  const handleMouseLeave = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (autoScroll) autoScroll.play()
  }, [emblaApi])

  return (
    <div className="groupLogoCarousel">
      <div
        className="groupLogoCarousel__viewport"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="groupLogoCarousel__container">
          {items.map((item) => (
            <div className="groupLogoCarousel__slide" key={item.id}>
              <a
                href={item.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="groupLogoCarousel__slide__inner"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="groupLogoCarousel__slide__img"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="groupLogoCarousel__controls">
        <PrevButton
          onClick={() => onAutoScrollButtonClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
        <NextButton
          onClick={() => onAutoScrollButtonClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  )
}

export default LogoCarousel

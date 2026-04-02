import { useState } from 'react';

export const Thumb = (props) => {
  const { selected, index, onClick, imgSrc, blur } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className={`embla-thumbs__slide__number w-full relative p-0 border-none bg-transparent rounded-xl transition-all duration-300 ${
            selected ? 'border-2 border-black opacity-100 scale-100' : 'opacity-50 hover:opacity-100 scale-95'
        }`}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
            {!loaded && blur && (
                <img
                    src={blur}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
            <img 
                src={imgSrc} 
                alt={`Thumbnail ${index + 1}`} 
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                draggable="false"
            />
        </div>
      </button>
    </div>
  );
};

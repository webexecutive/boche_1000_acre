import CImage from './Cimage';

export const Thumb = (props) => {
  const { selected, index, onClick, imgSrc, blur } = props;

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
        <CImage
            src={imgSrc}
            blur={blur}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full aspect-3/2 rounded-xl"
        />
      </button>
    </div>
  );
};

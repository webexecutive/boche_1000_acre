import CImage from "./Cimage";

function GalleryThumbnail({ image, title, onClick, blur }) {

    return (
        <div
            onClick={onClick}
            className="relative cursor-pointer rounded-xl overflow-hidden group shadow-md"
        >
            {/* IMAGE WRAPPER */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <CImage
                    src={image}
                    blur={blur}
                    alt={title}
                    className="w-full h-full absolute inset-0 [&>img]:transition-transform [&>img]:duration-500 [&>img]:group-hover:scale-105"
                />

                <div className="absolute left-0 bottom-0 w-full h-44  transition-all duration-500 group-hover:h-52 bg-linear-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
            </div>


            <div className="absolute bottom-4 transition-all duration-500 group-hover:bottom-7 right-4 text-white ">
                <h4>{title}</h4>
                
            </div>
        </div>
    );
}

export default GalleryThumbnail;
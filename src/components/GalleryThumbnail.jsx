import { useState } from "react";

function GalleryThumbnail({ image, title, onClick, blur }) {
    const [loaded, setLoaded] = useState(false);
    const [imgSrc, setImgSrc] = useState(image);





    return (
        <div
            onClick={onClick}
            className="relative cursor-pointer rounded-xl overflow-hidden group shadow-md"
        >
            {/* IMAGE WRAPPER */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden">


                <>

                    {!loaded && (
                        <img
                            src={blur}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}


                    <img
                        src={imgSrc}
                        alt={title}
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"
                            } group-hover:scale-105`}
                    />
                </>


                <div className="absolute left-0 bottom-0 w-full h-44  transition-all duration-500 group-hover:h-52 bg-linear-to-t from-black via-black/20 to-transparent"></div>
            </div>


            <div className="absolute bottom-4 transition-all duration-500 group-hover:bottom-7 right-4 text-white ">
                <h4>{title}</h4>
                
            </div>
        </div>
    );
}

export default GalleryThumbnail;
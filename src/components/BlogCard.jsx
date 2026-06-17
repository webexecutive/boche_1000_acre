import { Link } from "react-router-dom";
import CImage from "./Cimage";
import { getImageById } from "../services/galleryService";

const BlogCard = ({
  id,
  slug,
  category,
  title,
  excerpt,
  date,
  coverImageId,
  featured = false,
}) => {
  const href = `/blog/${slug}`;

  const cover = getImageById(coverImageId);
  const image =
    cover?.variants?.large ?? "/images/image-not-found-small.webp";
  const blur = cover?.variants?.blur ?? "";
  const alt = cover?.alt ?? title;

  if (featured) {
    return (
      <Link
        to={href}
        className="group block relative w-full aspect-video md:aspect-21/9 overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(46,71,21,0.08)] hover:shadow-[0_8px_32px_rgba(46,71,21,0.16)] hover:-translate-y-1 transition-all duration-300"
      >
        <CImage
          src={image}
          blur={blur}
          alt={alt}
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#b3d08c] bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            {category}
          </span>

          <h2 className="text-white text-2xl md:text-4xl mt-3 mb-2 max-w-2xl leading-tight">
            {title}
          </h2>

          <p className="text-white/70 text-sm md:text-base max-w-xl line-clamp-2 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center gap-3 mt-4 text-white/50 text-xs">
            <span>{date}</span>

            <span className="inline-flex items-center gap-1 text-[#b3d08c] font-medium">
              Read more
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={href}
      className="group flex flex-col bg-[#FDFFF8] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(46,71,21,0.08)] hover:shadow-[0_8px_32px_rgba(46,71,21,0.16)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <CImage
        src={image}
        blur={blur}
        alt={alt}
        className="w-full h-52 shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#6a8f3a] mb-3">
          {category}
        </p>

        {/* Title */}
        <h3 className="font-medium text-[#1e3209] leading-snug line-clamp-2 mb-2 group-hover:text-[#3a5a1c] transition-colors duration-200">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-8 h-px bg-[#c8dba0] mb-3" />

        {/* Description */}
        <p className="text-[13px] font-light text-[#4a5c35] leading-relaxed line-clamp-3 flex-1">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#e8f0dc]">
          <span className="text-[11px] text-[#6a8f3a]/70">{date}</span>

          <span className="text-[11px] font-medium tracking-wider uppercase text-[#3a5a1c] flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
            Read more
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
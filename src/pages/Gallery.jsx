import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { categories, gallery } from '../data/galleryData';

/* Map category ids to display labels for the tab bar */
const DISPLAY_LABELS = {
    all: 'Recent',
    adventures: 'Adventure',
    stays: 'Stays',
    'toddy-pub': 'Toddy Pub',
    events: 'Events',
    estate: 'Estate',
};

const ITEMS_PER_PAGE = 24;

function Gallery() {
    const { category } = useParams();
    const navigate = useNavigate();
    const galleryRef = useRef(null);
    const [page, setPage] = useState(1);

    const activeCategory = category || 'all';

    const filteredImages =
        activeCategory === 'all'
            ? gallery
            : gallery.filter((img) => img.category === activeCategory);

    const totalCount = filteredImages.length;
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    const pagedImages = filteredImages.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE,
    );



    /* Reset to page 1 when category changes */
    useEffect(() => {
        setPage(1);
    }, [activeCategory]);

    /* Initialise / reinitialise PhotoSwipe whenever the visible set changes */
    useEffect(() => {
        if (!galleryRef.current) return;

        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryRef.current,
            children: 'a[data-pswp-src]',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();
        return () => lightbox.destroy();
    }, [activeCategory, page]);

    const handleTab = (cat) => {
        cat === 'all' ? navigate('/gallery') : navigate(`/gallery/${cat}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 lg:pt-24 pb-20 space-y-8">

            {/* ── Heading ── */}
            <h1>Gallery</h1>

            {/* ── Category tabs ── */}
            <div className="flex gap-6 border-b border-gray-200 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => handleTab(cat.category)}
                        className={`pb-3 text-sm whitespace-nowrap transition-colors duration-200 ${activeCategory === cat.category
                            ? 'border-b-2 border-gray-900 text-gray-900 font-medium'
                            : 'text-gray-400 hover:text-gray-700'
                            }`}
                    >
                        {DISPLAY_LABELS[cat.category] ?? cat.title}
                    </button>
                ))}
            </div>

            {/* ── Masonry grid ── */}
            {pagedImages.length === 0 ? (
                <p className="text-gray-400 text-center py-20">No images in this category yet.</p>
            ) : (
                <div
                    id="gallery-section"
                    ref={galleryRef}
                    className="columns-2 sm:columns-3 lg:columns-4 gap-3"
                >
                    {pagedImages.map((item) => (
                        <a
                            key={item.id}
                            data-pswp-src={item.images.large}
                            data-pswp-width="1920"
                            data-pswp-height="1280"
                            href={item.images.large}
                            className="block mb-3 break-inside-avoid overflow-hidden rounded-xl group cursor-zoom-in"
                        >
                            <div className="relative w-full overflow-hidden">
                                {/* Blur image */}
                                <img
                                    src={item.images.blur}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-full h-auto object-cover transition-opacity duration-500 opacity-100"
                                />

                                {/* Real image */}
                                <img
                                    src={item.images.small}
                                    alt={item.alt}
                                    loading="lazy"
                                    onLoad={(e) => {
                                        const img = e.currentTarget;
                                        const a = img.closest('a');

                                        // fade in
                                        img.style.opacity = 1;

                                        if (a && img.naturalWidth > 0) {
                                            const scale = 1920 / Math.max(img.naturalWidth, img.naturalHeight);
                                            a.dataset.pswpWidth = Math.round(img.naturalWidth * scale);
                                            a.dataset.pswpHeight = Math.round(img.naturalHeight * scale);
                                        }
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = '/images/image-not-found-small.webp';
                                        e.currentTarget.style.opacity = 1;
                                    }}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:scale-105"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            )}

            {/* ── Pagination ── */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 pt-4">

                    {/* Prev */}
                    <button
                        onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        disabled={page === 1}
                        className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        ‹ Prev
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                        .reduce((acc, p, idx, arr) => {
                            if (idx > 0 && p - arr[idx - 1] > 1) acc.push('…');
                            acc.push(p);
                            return acc;
                        }, [])
                        .map((p, idx) =>
                            p === '…' ? (
                                <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 select-none">…</span>
                            ) : (
                                <button
                                    key={p}
                                    onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                    className={`min-w-[36px] px-3 py-1.5 text-sm rounded-lg border transition-colors ${p === page
                                        ? 'bg-gray-900 text-white border-gray-900'
                                        : 'border-gray-200 hover:bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {p}
                                </button>
                            )
                        )
                    }

                    {/* Next */}
                    <button
                        onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        disabled={page === totalPages}
                        className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        Next ›
                    </button>
                </div>
            )}
        </div>
    );
}

export default Gallery;
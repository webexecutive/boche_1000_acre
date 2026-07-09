import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import blogData from "../data/blogData";
import SEO from "../components/SEO";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(blogData.map((p) => p.category)))];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    const featured = blogData.find((p) => p.featured);
    const filtered =
        activeCategory === "All"
            ? blogData.filter((p) => !p.featured)
            : blogData.filter((p) => p.category === activeCategory && !p.featured);

    return (
        <>
            <SEO
                title="Blog | Stories from the Heart of Nature | boCHE 1000 Acres"
                description="Explore travel stories, nature guides, Kerala cuisine, adventure tips, and sustainability insights from boCHE 1000 Acres — a luxury resort in Wayanad, Kerala."
                keywords="wayanad blog, things to do in wayanad, wayanad travel guide, kerala nature stories, boCHE 1000 acres blog, tea plantation wayanad, wayanad adventure, kerala cuisine"
                url="https://www.boche1000acre.com/blog"
            />

            <div className="min-h-screen  bg-[#F7FDE9] ">

                {/* Page Header */}
                <div className="max-w-7xl mx-auto px-6  pt-28 pb-10">
                    <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#6a8f3a] mb-3">
                        boCHE Stories
                    </p>
                    <h1 className="text-[#1e3209]  mb-4">
                        Stories from the Heart of Nature
                    </h1>
                    <div className="w-12 h-px bg-[#c8dba0] mb-5" />
                    <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-2xl">
                        Discover the art of the harvest and the soul of the mountains through stories from our estate in Wayanad.
                    </p>
                </div>

                {/* Featured Post */}
                {featured && activeCategory === "All" && (
                    <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
                        <BlogCard {...featured} />
                    </div>
                )}

                {/* Category Filter */}
                <div className="max-w-7xl mx-auto px-6 mb-10">
                    <div className="flex gap-2 flex-wrap">
                        {ALL_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                        ? "bg-[#1e3209] text-white"
                                        : "bg-[#C8D4AA]/50 text-[#4a5c35] hover:bg-[#C8D4AA]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="max-w-7xl mx-auto px-6 md:px-0 pb-24">
                    {filtered.length === 0 ? (
                        <p className="text-[#4a5c35] text-sm py-16 text-center">
                            No posts in this category yet.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map((post) => (
                                <BlogCard key={post.id} {...post} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </>
    );
};

export default Blog;
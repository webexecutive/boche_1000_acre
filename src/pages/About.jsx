import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { aboutData } from '../data/aboutData.js';
import ReactMarkdown from 'react-markdown';
import LogoCarousel from "../components/LogoCarousel";
import group from "../data/groupData";
import SEO from "../components/SEO";

const About = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Fall back to the first tab if no slug, or an unknown slug, is in the URL
  const activeContent =
    aboutData.find(tab => tab.slug === slug) || aboutData[0];

  useEffect(() => {
    // If someone hits /about with no slug (or a bad one), normalize the URL
    if (!slug || !aboutData.some(tab => tab.slug === slug)) {
      navigate(`/about/${aboutData[0].slug}`, { replace: true });
    }
  }, [slug, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeContent.slug]);

  const goToTab = (tabSlug) => {
    navigate(`/about/${tabSlug}`);
  };

  return (
    <>
      <SEO
        title={activeContent.seo.title}
        description={activeContent.seo.description}
        keywords={activeContent.seo.keywords}
        url={activeContent.seo.url}
      />

      <div className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto bg-[#F7FFE6] flex flex-col md:flex-row w-full font-['DM_Sans']">

        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block w-64 lg:w-80 bg-[#C8D4AA] shrink-0 sticky top-0 h-screen overflow-y-auto">
          <div className="flex flex-col pt-32">
            {aboutData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => goToTab(tab.slug)}
                className={`w-full text-left py-6 px-8 lg:px-12 text-sm lg:text-base transition-colors duration-200 ${activeContent.slug === tab.slug
                  ? 'bg-[#F7FFE6] text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-black/5 font-normal hover:text-gray-900'
                  }`}
              >
                <div className="w-4/5">{tab.navTitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full bg-[#F7FFE6] min-h-screen pt-16">
          <div className="max-w-7xl mx-auto w-full">

            {/* Hero Section */}
            <div className="w-full aspect-video md:aspect-21/9 max-h-120 bg-[#C8D4AA]/30 overflow-hidden relative">
              <img
                key={activeContent.id}
                src={activeContent.heroImage}
                alt={activeContent.navTitle}
                onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
                className="w-full h-full object-cover object-top opacity-0 transition-opacity duration-500"
              />
            </div>

            {/* Mobile Tab Navigation */}
            <div className="md:hidden flex overflow-x-auto bg-[#C8D4AA] snap-x scrollbar-hide py-3 px-4 shadow-sm border-b border-[#b0bd92]/30">
              <div className="flex gap-2 min-w-max">
                {aboutData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => goToTab(tab.slug)}
                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all snap-center ${activeContent.slug === tab.slug
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-700 hover:bg-black/5'
                      }`}
                  >
                    {tab.navTitle}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full text-gray-800">
              <div className="prose max-w-none">
                <div className="w-full px-6 md:px-12 lg:px-16 py-12 text-gray-800">
                  <ReactMarkdown
                    components={{
                      h1: ({ ...props }) => <h1 className="text-2xl md:text-3xl font-bold mb-4" {...props} />,
                      h2: ({ ...props }) => <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3" {...props} />,
                      p: ({ ...props }) => <p className="mb-5 leading-relaxed text-justify" {...props} />,
                      ul: ({ ...props }) => <ul className="list-disc pl-6 space-y-3 mt-3 mb-5" {...props} />,
                      li: ({ ...props }) => <li className="leading-relaxed" {...props} />,
                    }}
                  >
                    {activeContent.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='text-center py-16'>
        <h3 className='pb-10'>Our Companies</h3>
        <LogoCarousel items={group} />
      </div>
    </>
  );
};

export default About;
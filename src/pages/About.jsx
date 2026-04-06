import React, { useState, useEffect } from 'react';
import { aboutData } from '../data/aboutData.js';
import ReactMarkdown from 'react-markdown';
import LogoCarousel from "../components/LogoCarousel";
import group from "../data/groupData";

const About = () => {
  const [activeTab, setActiveTab] = useState(aboutData[0].id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeTab]);

  const activeContent = aboutData.find(tab => tab.id === activeTab);

  return (
    <>
      <div className="min-h-[calc(100vh-80px)] max-w-7xl  mx-auto bg-[#F7FFE6] flex flex-col md:flex-row w-full font-['DM_Sans']">

        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block w-64 lg:w-80 bg-[#C8D4AA] shrink-0 sticky top-0 h-screen overflow-y-auto">
          <div className="flex flex-col pt-32">
            {aboutData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left py-6 px-8 lg:px-12 text-sm lg:text-base transition-colors duration-200 ${activeTab === tab.id
                  ? 'bg-[#F7FFE6] text-gray-900 font-medium '
                  : 'text-gray-700 hover:bg-black/5 font-normal hover:text-gray-900 '
                  }`}
              >
                <div className="w-4/5">
                  {tab.navTitle}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full bg-[#F7FFE6] min-h-screen pt-16">
          <div className="max-w-7xl mx-auto w-full">

            {/* Hero Section */}
            <div className="w-full  overflow-hidden">
              <img
                src={activeContent.heroImage}
                alt={activeContent.navTitle}
                className="w-full max-h-120 object-cover object-top"
              />
            </div>

            {/* Mobile Tab Navigation */}
            <div className="md:hidden flex overflow-x-auto bg-[#C8D4AA] snap-x scrollbar-hide py-3 px-4 shadow-sm border-b border-[#b0bd92]/30">
              <div className="flex gap-2 min-w-max">
                {aboutData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all snap-center ${activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-700 hover:bg-black/5'
                      }`}
                  >
                    {tab.navTitle}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Content (Markdown Rendered) */}
            <div className="w-full   text-gray-800">
              <div className="prose max-w-none">
                <div className="w-full px-6 md:px-12 lg:px-16 py-12 text-gray-800">
                  <ReactMarkdown
                    components={{
                      h1: ({ ...props }) => (
                        <h1 className="text-2xl md:text-3xl font-bold mb-4" {...props} />
                      ),
                      h2: ({ ...props }) => (
                        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3" {...props} />
                      ),
                      p: ({ ...props }) => (
                        <p className="mb-5 leading-relaxed text-justify" {...props} />
                      ),
                      ul: ({ ...props }) => (
                        <ul className="list-disc pl-6 space-y-3 mt-3 mb-5" {...props} />
                      ),
                      li: ({ ...props }) => (
                        <li className="leading-relaxed" {...props} />
                      )
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
import React from 'react';
import mainAbout from '../assets/images/About_Pic_2.jpg'

const AboutSection = () => {
    return (
        <section id="about" className="relative w-full max-w-6xl mx-auto px-4 py-12 font-sans bg-white overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: Images Section */}
                <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[400px]">



                    {/* Main Image Container */}
                    {/* Yahan se 'border border-gray-100' hata diya gaya hai */}
                    <div className="w-[92%] sm:w-[88%] rounded-3xl overflow-hidden shadow-sm ml-auto">
                        <img
                            src={mainAbout}
                            alt="Healthy Food Bowl"
                            className="w-full h-72 sm:h-88 "
                        />
                    </div>

                    {/* Small Overlapping Image (Bottom Left) */}
                    {/* Yahan se 'border-4 border-white' hata diya gaya hai */}
                    <div className="absolute left-0 bottom-0 w-40 h-28 sm:w-52 sm:h-36 rounded-2xl overflow-hidden shadow-lg z-10">
                        <img
                            src="/images/03_about_chef_inset.png"
                            alt="Chef Preparing Food"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Overlapping Badge (Nourishing Lives Daily) */}
                    <div className="absolute left-24 sm:left-32 bottom-3 sm:bottom-5 bg-[#f4f6f0] px-3.5 py-2.5 rounded-2xl shadow-md border border-gray-100 flex items-center gap-2.5 z-20">
                        <div className="w-7 h-7 rounded-full border border-emerald-800/30 flex items-center justify-center text-emerald-800 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c2.5 0 4.5 2 4.5 4.5S14.5 16 12 16s-4.5-2-4.5-4.5S9.5 7 12 7z" />
                            </svg>
                        </div>
                        <span className="text-xs font-semibold text-emerald-950 leading-tight h-10 max-w-[85px]">
                            Nourishing Lives Daily
                        </span>
                    </div>

                </div>

                {/* Right Side: Content Section */}
                <div className="lg:col-span-6 space-y-4 sm:space-y-5 z-10">

                    {/* Subheading */}
                    <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase">
                        ABOUT HEALTHIFY
                    </span>

                    {/* Main Heading (Size reduced & balanced) */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-emerald-950 font-bold leading-tight">
                        Your Trusted Healthy <br className="hidden sm:inline" /> Food Partner
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">

                        {/* Feature 1 */}
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
                                </svg>
                            </div>
                            <span className="text-xs font-medium text-gray-800 leading-tight">
                                Freshly Prepared Daily
                            </span>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                </svg>
                            </div>
                            <span className="text-xs font-medium text-gray-800 leading-tight">
                                Balanced Nutrition
                            </span>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" />
                                </svg>
                            </div>
                            <span className="text-xs font-medium text-gray-800 leading-tight">
                                Great Taste
                            </span>
                        </div>

                    </div>

                    {/* Button */}
                    <div className="pt-2">
                        <button className="inline-flex items-center gap-2 bg-[#2d4027] hover:bg-[#23331f] text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-md">
                            More About Us
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;
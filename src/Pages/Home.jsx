import React from 'react'
import Navbar from '../Compountes/Navbar.jsx'
import { UtensilsCrossed, Heart, Star, Users } from 'lucide-react';

const Home = () => {
    return (
        <div id="home">
            <Navbar />

            {/* Hero Section - Bottom margin/padding removed to ensure 0 gap with the banner below */}
            <div className='flex flex-col md:flex-row items-center justify-between text-sm pt-4 pb-0'>
                <div className='max-w-xl pb-6 md:pb-0'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text-[#193322] font-serif font-bold leading-tight tracking-tight'>
                        Healthy Meals <br /> <span className='text-[#5B6846] font-normal'>Happier Lives</span>
                    </h1>

                    <h3 className='text-[#193322] font-semibold text-base md:text-lg leading-tight mt-5'>
                        Fresh, Nutritious. Convenient. Delivered to You.
                    </h3>

                    <p className='mt-3 text-[#4A5243] leading-relaxed text-sm md:text-base'>
                        At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellness goals.
                    </p>

                    <div className='flex items-center gap-4 text-sm py-6'>
                        <button className='flex items-center gap-2 px-6 py-2.5 bg-[#193322] text-white rounded-full text-sm font-medium hover:bg-[#0f2115] transition cursor-pointer shadow-sm'>
                            Explore Meal plans →
                        </button>
                        <button className='flex items-center gap-2 px-6 py-2.5 bg-[#EBEAE3] border border-[#A3A796] text-[#193322] rounded-full text-sm font-medium hover:bg-[#193322] hover:text-white transition cursor-pointer'>
                            Learn More
                        </button>
                    </div>

                    <div className='flex flex-wrap items-center gap-4 text-sm pt-2 '>
                        <p className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 8 0 6-4.5 10-10 10Z"></path>
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                            </svg>
                            Fresh ingredients
                        </p>

                        <p className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            Nutritionist Approved
                        </p>

                        <p className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="1" y="3" width="15" height="13"></rect>
                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                <circle cx="18.5" cy="18.5" r="2.5"></circle>
                            </svg>
                            Delivered to Your Door
                        </p>
                    </div>
                    <br />
                </div>




                                {/* w-400 max-w-xl h-100   flex flex-wrap */}
                <div className='self-end'>
                    <img className='w-300 h-110 sm:h-100  ' src="/images/01_hero_bowl.png" alt="Hero Bowl" />
                </div>

            </div>

            {/* Banner Section - Touches directly with 0 margin */}
            <div className="w-full bg-[#F6F6F2] py-4 border-y border-gray-200">
                <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center md:justify-between divide-y md:divide-y-0 md:divide-x divide-gray-300">
                    <div className="flex items-center gap-3 px-4 lg:px-6 py-2 md:py-0">
                        <UtensilsCrossed className="w-7 h-7 text-[#2D5A27]" />
                        <div>
                            <h4 className="text-xl font-serif font-bold text-gray-900 leading-none">1M+</h4>
                            <p className="text-xs text-gray-600 font-medium">Meals Delivered</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 px-4 lg:px-6 py-2 md:py-0">
                        <Heart className="w-7 h-7 text-[#2D5A27]" />
                        <div>
                            <h4 className="text-xl font-serif font-bold text-gray-900 leading-none">30K+</h4>
                            <p className="text-xs text-gray-600 font-medium">Happy Customers</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 px-4 lg:px-6 py-2 md:py-0">
                        <Star className="w-7 h-7 text-[#2D5A27]" />
                        <div>
                            <h4 className="text-xl font-serif font-bold text-gray-900 leading-none">4.8/5</h4>
                            <p className="text-xs text-gray-600 font-medium">Customer Satisfaction</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 px-4 lg:px-6 py-2 md:py-0">
                        <Users className="w-7 h-7 text-[#2D5A27]" />
                        <div>
                            <h4 className="text-xl font-serif font-bold text-gray-900 leading-none">550+</h4>
                            <p className="text-xs text-gray-600 font-medium">Corporate Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

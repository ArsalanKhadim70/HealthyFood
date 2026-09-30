import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section id="get-started" className="relative w-full  overflow-hidden py-12 px-6 sm:px-10 lg:px-16 font-sans">
      {/* Background Image Container (Aap apni marzi ki image URL yahan replace kar sakte hain) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1600"
          alt="Healthy Meals Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Blurred Green Overlay (Image text readout clear rakhne ke liye) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20311D]/90 via-[#2E4229]/80 to-[#182716]/85 backdrop-blur-[2px]" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Text Section */}
        <div className="max-w-2xl text-white">
          <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase">
            READY TO START?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold mt-1.5 leading-snug">
            Transform Your Health, One Meal At A Time
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 mt-2 font-normal leading-relaxed">
            Fresh. Nutritious. Convenient. Join thousands of happy customers today.
          </p>
        </div>

        {/* Action Button */}
        <div className="shrink-0 w-full sm:w-auto hover:text-white">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-white hover:bg-[#193322]  hover:text-white text-[#1F2921] text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg gap-2 cursor-pointer"
          >
            Get Started Today <ArrowRight className="w-4 h-4 group-hover:text-white " />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
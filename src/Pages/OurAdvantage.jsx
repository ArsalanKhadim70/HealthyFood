import React from "react";
import { ArrowRight, Gem, Heart, Truck, Leaf } from "lucide-react";

const advantages = [
  {
    id: 1,
    title: "Premium Quality",
    description: "High-quality, fresh ingredients",
    icon: Gem,
  },
  {
    id: 2,
    title: "Health Focused",
    description: "Nutritionist designed meals",
    icon: Heart,
  },
  {
    id: 3,
    title: "Convenient Delivery",
    description: "To your home or office",
    icon: Truck,
  },
  {
    id: 4,
    title: "Flexible Plans",
    description: "Options for every dietary need",
    icon: Leaf,
  },
];

const OurAdvantage=()=> {
  return (
    <section id="advantages" className="bg-[#f3f4ee] py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        
        {/* Left Side: Header & Text */}
        <div className="w-full lg:w-[35%] flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest text-[#788863] font-bold mb-2">
            OUR ADVANTAGES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-serif text-gray-900 font-medium leading-tight mb-3">
            Why Choose Healthify
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
            More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-[#485e30] hover:bg-[#3b4e27] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm"
          >
            Discover All Advantages <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side: Advantage Cards Grid */}
        <div className="w-full  lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#faf9f5] rounded-2xl px-8 sm:p-5 flex flex-col items-center text-center justify-center min-h-[190px] border border-gray-100/60 shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="mb-4 text-[#485e30]">
                  <Icon className="w-7 h-7 stroke-[1.5]" />
                </div>

                {/* Content */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[160px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OurAdvantage
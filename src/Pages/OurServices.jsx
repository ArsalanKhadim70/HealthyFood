import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Healthy Ready-To-Eat Meals",
        description: "Fresh, balanced meals prepared daily and ready to enjoy.",
        image: "/images/04_service_ready_to_eat.png",
    },
    {
        id: 2,
        title: "Customized Meal Plans",
        description: "Personalized nutrition plans designed for your goals.",
        image: "/images/05_service_custom_plans.png",
    },
    {
        id: 3,
        title: "Weight Management Plans",
        description: "Delicious meals to support your weight loss or maintenance journey.",
        image: "/images/06_service_weight_mgmt.png",
    },
    {
        id: 4,
        title: "High-Protein Meal Plans",
        description: "Nutrient-rich meals for active lifestyles and fitness goals.",
        image: "/images/07_service_high_protein.png",
    },
];

const OurServices = () => {
    return (
        <section id="services" className="bg-[#fcfbf7] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Top Header - Max width 1600px for wider layout */}
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <span className="text-xs uppercase tracking-widest text-[#788863] font-semibold block mb-2">
                        OUR SERVICES
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-medium">
                        Healthy Meal Plans for Every Lifestyle
                    </h2>
                </div>

                <a
                    href="#services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black transition-colors self-start md:self-auto group"
                >
                    View All Services
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            {/* Services Grid - Container Wider + Compact Cards */}
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-gray-100 group"
                    >
                        {/* Image Container - Height reduced to h-36 sm:h-44 & added object-cover */}
                        <div className="w-full h-36 sm:h-44 bg-gray-100 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full  group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content & Action Button - Compact Padding */}
                        <div className="flex flex-col justify-between flex-grow p-4">
                            <div>
                                <h3 className="text-base sm:text-lg font-serif font-semibold text-gray-900 mb-1.5 leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom Arrow Icon Button */}
                            <div className="flex justify-end ">
                                <button
                                    type="button"
                                    className="w-8 h-8 rounded-full border border-green-500 bg-[#eaf0e6] group-hover:bg-[#d8e4d2] flex items-center justify-center text-gray-700 transition-colors"
                                    aria-label={`View ${service.title}`}
                                >
                                    {/* <ArrowUpRight className="w-4 h-4 text-green-700" /> */}
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurServices
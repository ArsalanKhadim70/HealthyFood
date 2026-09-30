import React, { useState } from 'react';
import { Leaf, Star, BarChart3, Check, ArrowRight } from 'lucide-react';
import imgmain from '../assets/images/8_pic.jpg'

const OrowthPlan = () => {
    const [hoveredIndex, setHoveredIndex] = useState(1); // Default hover on 2nd plan (Balanced Plan)

    const plans = [
        {
            name: 'Essential Plan',
            description: 'Great for individuals starting their healthy journey.',
            price: 'AED 299',
            period: '/ month',
            icon: Leaf,
            features: [
                'Fresh daily meals',
                'Balanced nutrition',
                'Flexible delivery',
            ],
        },
        {
            name: 'Balanced Plan',
            description: 'Our best value plan for a healthier lifestyle.',
            price: 'AED 499',
            period: '/ month',
            icon: Star,
            features: [
                'Customized meal options',
                'Wide variety of meals',
                'Nutritionist support',
                'Flexible delivery',
            ],
        },
        {
            name: 'Performance Plan',
            description: 'For fitness enthusiasts and active lifestyles.',
            price: 'AED 699',
            period: '/ month',
            icon: BarChart3,
            features: [
                'High-protein meals',
                'Performance-focused nutrition',
                'Personalized plans',
                'Priority support',
            ],
        },
    ];

    return (
        <section id="growth-plans" className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-[#788863] uppercase">
                            Growth Plans
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F2921] font-semibold mt-1">
                            Find the Perfect Plan for You
                        </h2>
                    </div>
                    <a
                        href="#all-plans"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-800 mt-3 sm:mt-0 transition-colors"
                    >
                        View All Plans <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {plans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${isHovered
                                    ? 'bg-[#FAF9F5] border-2 border-[#324828] shadow-lg scale-[1.02]'
                                    : 'bg-[#F5F4EE] border border-gray-200/80'
                                    }`}
                            >
                                {/* Popular Badge Header (Shows on Hover) */}
                                <div
                                    className={`bg-[#324828] text-white text-[11px] font-bold tracking-wider text-center py-1.5 uppercase transition-opacity duration-300 ${isHovered ? 'opacity-100 h-auto' : 'opacity-0 h-0 py-0 overflow-hidden'
                                        }`}
                                >
                                    MOST POPULAR ★
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Icon & Title */}
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`p-2.5 rounded-full shrink-0 transition-colors duration-300 ${isHovered
                                                    ? 'bg-[#E5E9E0] text-[#324828]'
                                                    : 'bg-gray-200/70 text-gray-600'
                                                    }`}
                                            >
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-serif font-bold text-[#1F2921]">
                                                    {plan.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                                    {plan.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="mt-6 mb-6">
                                            <span className="text-xl font-bold text-[#1F2921]">
                                                {plan.price}
                                            </span>
                                            <span className="text-xs text-gray-500"> {plan.period}</span>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-xs text-gray-600">
                                                    <Check className="w-4 h-4 text-gray-700 mr-2 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <button
                                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-300 ${isHovered
                                            ? 'bg-[#1C2C1E] text-white hover:bg-[#142116] shadow-sm'
                                            : 'bg-transparent text-gray-800 border border-gray-400 hover:bg-gray-200'
                                            }`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {/* Right Banner Card */}
                    <div className="relative rounded-2xl overflow-hidden min-h-[350px] lg:min-h-full flex flex-col justify-between p-6 bg-gray-900 group">
                        {/* Background Image */}
                        <img
                            src={imgmain}
                            alt="Healthy Meal Bowl"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="p-2 rounded-full bg-white/20 backdrop-blur-md w-fit text-white">
                                <Leaf className="w-4 h-4" />
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-2xl font-serif text-white font-medium leading-snug">
                                    Invest in <br />
                                    a Healthier <br />
                                    You
                                </h3>
                                <div className="w-12 h-0.5 bg-white/60 mt-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrowthPlan
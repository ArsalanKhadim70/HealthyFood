import React from 'react';
import { UserCheck, Salad, Truck, ArrowRight } from 'lucide-react';

const Advantage = () => {
  const steps = [
    {
      number: '1',
      icon: UserCheck,
      title: 'Choose Your Plan',
      description: 'Select the meal plan that fits your goals.',
    },
    {
      number: '2',
      icon: Salad,
      title: 'We Prepare Fresh Meals',
      description: 'Our chefs prepare nutritious meals with care.',
    },
    {
      number: '3',
      icon: Truck,
      title: 'Enjoy Convenient Delivery',
      description: 'Receive your meals and enjoy a healthier you.',
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FAF9F5] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#788863] uppercase">
              OUR ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F2921] font-semibold mt-1">
              Healthy Eating in 3 Simple Steps
            </h2>
          </div>
          <a
            href="#get-started"
            className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-gray-800 mt-3 sm:mt-0 transition-colors"
          >
            It's Easy to Get Started <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <React.Fragment key={index}>
                {/* Step Item */}
                <div className="flex items-start gap-4 flex-1 w-full max-w-sm lg:max-w-none">
                  {/* Circle Number */}
                  <div className="w-12 h-12 rounded-full bg-[#E2E7DB] text-[#1F2921] font-serif text-xl font-semibold flex items-center justify-center shrink-0">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-[#324828] pt-1.5 shrink-0">
                    <IconComponent className="w-8 h-8 stroke-[1.5]" />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-base font-serif font-bold text-[#1F2921] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (Hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="text-gray-400 shrink-0 my-2 lg:my-0">
                    {/* Desktop Horizontal Arrow */}
                    <ArrowRight className="hidden lg:block w-5 h-5" />
                    {/* Mobile/Tablet Vertical Arrow */}
                    <div className="lg:hidden transform rotate-90 my-1">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
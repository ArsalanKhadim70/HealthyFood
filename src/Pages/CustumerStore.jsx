import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const CustumerStore = () => {
  const reviews = [
    {
      id: 1,
      quote:
        '"Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!"',
      name: 'Sara M.',
      location: 'Dubai, UAE',
      rating: 5,
      // Replacing with high quality avatar image
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 2,
      quote:
        '"Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle."',
      name: 'Ahmed R.',
      location: 'Dubai, UAE',
      rating: 5,
      // Replacing with high quality avatar image
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 3,
      quote:
        '"Great quality, variety, and customer service. I feel healthier and more energized every day."',
      name: 'Fatima K.',
      location: 'Dubai, UAE',
      rating: 5,
      // Replacing with high quality avatar image
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
  ];

  return (
    <section id="reviews" className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#788863] uppercase">
              Customer Stories
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F2921] font-semibold mt-1">
              What Our Customers Say
            </h2>
          </div>
          <a
            href="#reviews"
            className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-gray-800 mt-3 sm:mt-0 transition-colors"
          >
            View More Reviews <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              {/* Review Quote */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-6">
                {review.quote}
              </p>

              {/* User Details & Rating */}
              <div className="flex items-center justify-between pt-2">
                {/* Profile Pic & Name */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1F2921]">
                      {review.name}
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 stroke-none"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustumerStore;
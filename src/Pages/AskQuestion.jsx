import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your meal plans?',
      answer:
        'We offer a variety of meal plans tailored to different goals including Essential, Balanced, and Performance plans. Each plan is designed by nutritionists and prepared fresh daily.',
    },
    {
      question: 'How does delivery work?',
      answer:
        'Our delivery team delivers fresh meals daily right to your doorstep during your selected time slots. You can manage or pause deliveries anytime through your account.',
    },
    {
      question: 'Can I customize my meals?',
      answer:
        'Yes! You can choose your preferred meals each week, specify dietary restrictions, and exclude any unwanted ingredients directly from your dashboard.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit/debit cards, Apple Pay, Google Pay, and online bank transfers securely through Stripe.',
    },
    {
      question: 'Do you have a mobile app?',
      answer:
        'Yes, our iOS and Android mobile apps allow you to track delivery, customize meal plans, and contact support effortlessly.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#FAF9F5] py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#79836E] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2921] font-semibold mt-2 leading-tight">
              Have Questions? <br className="hidden sm:block" />
              We’ve Got Answers.
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed max-w-md">
              Find quick answers to common questions about our meal plans, delivery, and more.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#all-faqs"
              className="inline-flex items-center gap-2 bg-[#3A4D2E] hover:bg-[#2D3C23] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-sm"
            >
              View All FAQs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Accordion List Column */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#F5F4EE] border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#1F2921] pr-4">
                    {faq.question}
                  </span>
                  <div className="text-gray-500 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#3A4D2E]" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Body */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
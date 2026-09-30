import React from 'react';
import FooterLogo from '../assets/images/Footer_Logo.png'
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#0F2212] text-gray-300 font-sans pt-12 pb-6 px-4 sm:px-6 lg:px-12 border-t border-[#1C3320]">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-10">

                    {/* Column 1: Brand Info & Socials */}
                    <div className="space-y-4">

                        <div className="flex items-center gap-2">

                            <img className='w-28' src={FooterLogo} alt="" />
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                            At Healthify, We Believe Healthy Eating Should Be Convenient, Affordable, And Enjoyable.
                        </p>

                        <div className="flex items-center gap-3 pt-2">

                            <a href="#facebook">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-white hover:opacity-80 transition-opacity"
                                >
                                    {/* Outer Border Circle */}
                                    <circle cx="12" cy="12" r="10" />

                                    {/* Inner 'f' Icon */}
                                    <path d="M15 8h-2a2 2 0 0 0-2 2v2H9.5v3H11v6h3v-6h2.25l.75-3H14v-1.5a.5.5 0 0 1 .5-.5H15V8z" fill="currentColor" stroke="none" />
                                </svg>
                            </a>


                            <a href="#x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" strokeWidth="2" />
                                </svg>
                            </a>

                            <a href="#instagram">

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                                    <circle cx="12" cy="12" r="10" />
                                    <rect x="8.5" y="8.5" width="7" height="7" rx="2" strokeWidth="1.2" />
                                    <circle cx="12" cy="12" r="1.8" strokeWidth="1.2" />
                                    <circle cx="14.3" cy="9.7" r="0.4" fill="currentColor" />
                                </svg>
                            </a>

                            <a href="#youtube">

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                                    <circle cx="12" cy="12" r="10" />
                                    <rect x="8" y="9" width="8" height="6" rx="1.5" strokeWidth="1.2" />
                                    <polygon points="11,10.5 14,12 11,13.5" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                        </div>

                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                            <li><a href="#advantages" className="hover:text-white transition-colors">Advantages</a></li>
                            <li><a href="#growth-plans" className="hover:text-white transition-colors">Growth Plans</a></li>
                            <li><a href="#blogs" className="hover:text-white transition-colors">Blogs</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
                            Our Services
                        </h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#ready-meals" className="hover:text-white transition-colors">Healthy ready to eat meals</a></li>
                            <li><a href="#customized-plans" className="hover:text-white transition-colors">Customized meal plans</a></li>
                            <li><a href="#weight-management" className="hover:text-white transition-colors">Weight management meal</a></li>
                            <li><a href="#high-protein" className="hover:text-white transition-colors">High-protein meal plans</a></li>
                            <li><a href="#corporate-solutions" className="hover:text-white transition-colors">Corporate meal solutions</a></li>
                            <li><a href="#fitness-nutrition" className="hover:text-white transition-colors">Fitness and wellness nutrition</a></li>
                            <li><a href="#healthy-snacks" className="hover:text-white transition-colors">Healthy snacks and beverages</a></li>
                            <li><a href="#delivery-services" className="hover:text-white transition-colors">Delivery and pickup services</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Get In Touch */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
                            Get In Touch
                        </h3>
                        <ul className="space-y-3 text-xs text-gray-400">
                            <li className="flex items-start gap-2.5">
                                {/* <MapPin className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" /> */}
                                <MapPin className="w-5 h-5 text-white" />
                                <span>Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                {/* <Phone className="w-4 h-4 text-gray-300 shrink-0" /> */}
                                <Phone className="w-5 h-5 text-white" />
                                <a href="tel:+971502626144" className="hover:text-white transition-colors">
                                    +971 50 262 6144
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                {/* <Mail className="w-4 h-4 text-gray-300 shrink-0" /> */}
                                <Mail className="w-5 h-5 text-white" />
                                <a href="mailto:info@healthify.ae" className="hover:text-white transition-colors">
                                    info@healthify.ae
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar Separator */}
                <div className="border-t border-[#1C3320] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
                    <p>Copyright © 2026 Healthify. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 mr-2 animate-pulse" />
                            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                AfterClass
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            The #1 dating app designed exclusively for college students. Find your perfect campus match today.
                        </p>
                        {/* Social media */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#safety" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Safety
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Success Stories
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Community Guidelines
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:support@afterclass.com" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                                    support@afterclass.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                                <a href="tel:+1234567890" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">
                                    123 Campus Drive<br />
                                    College Town, CA 12345
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                        <p className="text-gray-300 mb-4">Get the latest news and updates from AfterClass</p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-400">
                        © {currentYear} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">AfterClass</span>. All rights reserved. Made with <Heart className="w-4 h-4 inline fill-pink-500 text-pink-500 animate-pulse" /> for college students.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
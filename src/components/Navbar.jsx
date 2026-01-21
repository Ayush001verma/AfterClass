import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
            scrollY > 50 
                ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
                : 'bg-white/10 backdrop-blur-md border-b border-white/20'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer">
                        <Heart className="w-8 h-8 text-pink-500 fill-pink-500 mr-2 animate-pulse" />
                        <span className={`text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ${
                            scrollY > 50 ? '' : 'drop-shadow-lg'
                        }`}>
                            AfterClass
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                            href="#home" 
                            className={`font-semibold transition-all duration-300 hover:scale-105 ${
                                scrollY > 50 
                                    ? 'text-gray-700 hover:text-purple-600' 
                                    : 'text-white hover:text-pink-200'
                            }`}
                        >
                            Home
                        </a>
                        <a 
                            href="#features" 
                            className={`font-semibold transition-all duration-300 hover:scale-105 ${
                                scrollY > 50 
                                    ? 'text-gray-700 hover:text-purple-600' 
                                    : 'text-white hover:text-pink-200'
                            }`}
                        >
                            Features
                        </a>
                        <a 
                            href="#safety" 
                            className={`font-semibold transition-all duration-300 hover:scale-105 ${
                                scrollY > 50 
                                    ? 'text-gray-700 hover:text-purple-600' 
                                    : 'text-white hover:text-pink-200'
                            }`}
                        >
                            Safety
                        </a>
                        <a 
                            href="#about" 
                            className={`font-semibold transition-all duration-300 hover:scale-105 ${
                                scrollY > 50 
                                    ? 'text-gray-700 hover:text-purple-600' 
                                    : 'text-white hover:text-pink-200'
                            }`}
                        >
                            About
                        </a>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${
                            scrollY > 50 
                                ? 'bg-purple-100 text-purple-600' 
                                : 'bg-white/20 backdrop-blur-md'
                        }`}
                    >
                        {isMenuOpen ? (
                            <X className={`w-6 h-6 ${scrollY > 50 ? 'text-purple-600' : 'text-white'}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${scrollY > 50 ? 'text-purple-600' : 'text-white'}`} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 animate-slide-down">
                    <div className="px-4 py-4 space-y-3">
                        <a 
                            href="#home" 
                            className="block py-2 text-gray-700 hover:text-purple-600 font-semibold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a 
                            href="#features" 
                            className="block py-2 text-gray-700 hover:text-purple-600 font-semibold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a 
                            href="#safety" 
                            className="block py-2 text-gray-700 hover:text-purple-600 font-semibold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Safety
                        </a>
                        <a 
                            href="#about" 
                            className="block py-2 text-gray-700 hover:text-purple-600 font-semibold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <button className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
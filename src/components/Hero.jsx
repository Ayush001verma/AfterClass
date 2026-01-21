import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Users, Calendar, Zap } from 'lucide-react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [floatingHearts, setFloatingHearts] = useState([]);

    useEffect(() => {
        const hearts = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 10,
            size: 20 + Math.random() * 30
        }));
        setFloatingHearts(hearts);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
    };

    return (
        <div
            id="home"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
            onMouseMove={handleMouseMove}
        >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></div>
            </div>

            {/* Floating hearts background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingHearts.map(heart => (
                    <div
                        key={heart.id}
                        className="absolute"
                        style={{
                            left: `${heart.left}%`,
                            animation: `float ${heart.duration}s linear infinite`,
                            animationDelay: `${heart.delay}s`,
                            fontSize: `${heart.size}px`,
                            opacity: 0.15
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>

            {/* Sparkle effects */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20 pb-16">
                <div
                    className="text-center max-w-5xl mx-auto"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                >
                    {/* Animated badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-xl hover:scale-105 transition-transform duration-300">
                        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
                        <span className="text-white font-semibold">🎓 College Dating Made Easy</span>
                        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
                    </div>

                    {/* Main heading with gradient text */}
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight">
                        <span className="block text-white drop-shadow-2xl animate-slide-up">
                            Find Your
                        </span>
                        <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl animate-slide-up-delay">
                            Campus Match
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in">
                        Connect with fellow students, find dates for campus events, and make
                        <span className="font-bold text-yellow-200"> meaningful connections </span>
                        right on your college campus.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4 animate-fade-in-delay">
                        <button className="group relative px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                Join AfterClass Free
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </button>

                        <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg">
                            See How It Works
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4 animate-fade-in-slow">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                            <Users className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50K+</div>
                            <div className="text-white/80 text-sm">Active Students</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                            <Heart className="w-8 h-8 text-pink-300 mx-auto mb-2 animate-pulse" />
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">10K+</div>
                            <div className="text-white/80 text-sm">Successful Matches</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                            <Calendar className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</div>
                            <div className="text-white/80 text-sm">College Campuses</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-2 h-3 bg-white rounded-full animate-scroll"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
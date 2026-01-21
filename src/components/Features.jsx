import React from 'react';
import { Shield, UserCheck, Calendar, MapPin, Coffee, BookOpen, Zap, Lock, CheckCircle } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "Verified Students Only",
            description: "We require a valid .edu email address to sign up. Say goodbye to bots, catfishes, and random locals.",
            icon: <UserCheck className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "Campus Events",
            description: "Find dates for the tailgate, the formal, Greek life events, or just a study session at the library.",
            icon: <Calendar className="w-8 h-8" />,
            color: "from-pink-500 to-pink-600",
            iconBg: "bg-pink-100",
            iconColor: "text-pink-600"
        },
        {
            title: "Safe & Secure",
            description: "Built-in safety features, photo verification, and community guidelines ensure a respectful environment.",
            icon: <Shield className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            title: "Local Hangouts",
            description: "Discover nearby campus hotspots, coffee shops, and date ideas recommended by students.",
            icon: <MapPin className="w-8 h-8" />,
            color: "from-green-500 to-green-600",
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            title: "Study Buddy Finder",
            description: "Match with students in your classes. Turn study sessions into something more meaningful.",
            icon: <BookOpen className="w-8 h-8" />,
            color: "from-orange-500 to-orange-600",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            title: "Instant Matching",
            description: "Our smart algorithm connects you with compatible students on your campus in seconds.",
            icon: <Zap className="w-8 h-8" />,
            color: "from-yellow-500 to-yellow-600",
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-600"
        }
    ];

    return (
        <section id="features" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                            WHY CHOOSE US
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                        Designed for
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Campus Life</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We understand the unique vibe of college dating. It's casual, it's fun, and it's right here on your campus.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                            
                            {/* Icon */}
                            <div className={`relative ${feature.iconBg} ${feature.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <CheckCircle className="w-6 h-6" />
                        Start Matching Today - It's Free!
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah M.",
            university: "UCLA",
            image: "👩🏻",
            rating: 5,
            text: "Met my boyfriend at a campus coffee shop after matching on AfterClass. We've been together for 8 months now! Best decision ever.",
            color: "from-purple-500 to-purple-600"
        },
        {
            name: "Jake T.",
            university: "University of Texas",
            image: "👨🏽",
            rating: 5,
            text: "Finally a dating app that gets college life. Found someone to go to football games with and now we're planning our future together!",
            color: "from-pink-500 to-pink-600"
        },
        {
            name: "Emily R.",
            university: "NYU",
            image: "👩🏼",
            rating: 5,
            text: "Love how everyone is actually verified. No more worrying about fake profiles. Met amazing people and made real connections.",
            color: "from-blue-500 to-blue-600"
        },
        {
            name: "Marcus L.",
            university: "Stanford",
            image: "👨🏿",
            rating: 5,
            text: "Started as study partners for our economics class, now we're inseparable. AfterClass made it so easy to connect with people who share my interests.",
            color: "from-green-500 to-green-600"
        },
        {
            name: "Anna K.",
            university: "MIT",
            image: "👩🏻‍🦰",
            rating: 5,
            text: "The campus events feature is genius! Found a date for our spring formal and we clicked immediately. Can't imagine college without this app now.",
            color: "from-orange-500 to-orange-600"
        },
        {
            name: "David P.",
            university: "USC",
            image: "👨🏻",
            rating: 5,
            text: "Skeptical at first, but AfterClass is different. Met my girlfriend here and we're both in the same major. It just works!",
            color: "from-red-500 to-red-600"
        }
    ];

    return (
        <section id="testimonials" className="relative py-20 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-pink-300 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        <Heart className="w-4 h-4 fill-white" />
                        SUCCESS STORIES
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                        Real Stories from
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Real Students</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join thousands of students who found their perfect match on AfterClass
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Quote icon */}
                            <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300`}>
                                <Quote className="w-6 h-6 text-white" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial text */}
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>

                            {/* User info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                                    {testimonial.image}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.university}</div>
                                </div>
                            </div>

                            {/* Decorative gradient on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                {/* Stats bar */}
                <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl sm:text-5xl font-black mb-2">94%</div>
                            <div className="text-white/90">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-black mb-2">4.9/5</div>
                            <div className="text-white/90">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl font-black mb-2">50K+</div>
                            <div className="text-white/90">Happy Couples</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
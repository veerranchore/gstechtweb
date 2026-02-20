import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: 'GS TECH delivered an app that scaled to 200K users in 3 months without a single major bug. Exceptional engineering.',
        name: 'Sarah Mitchell',
        title: 'CTO, FinTrack Inc.',
        initials: 'SM',
    },
    {
        quote: 'Handling 3M+ patient records daily with zero downtime. Their AWS architecture is bulletproof. Best investment we made.',
        name: 'Dr. Arjun Mehta',
        title: 'CEO, MedCore Health',
        initials: 'AM',
    },
    {
        quote: 'The team balanced complex real-time logistics with an intuitive UX that our drivers actually love. Outstanding.',
        name: 'Priya Nair',
        title: 'Product Lead, FleetOps',
        initials: 'PN',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id="about" className="bg-[#1F2B2D] py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="orange-line"></span>
                            <span className="font-mono-custom text-xs text-[#12B2C1] tracking-widest uppercase">Client Voices</span>
                        </div>
                        <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-none text-white tracking-wide">
                            TRUSTED BY<br />BUILDERS
                        </h2>
                    </div>
                    <p className="text-white/40 text-sm max-w-xs">
                        Founders, CTOs, and product leaders who trusted us with their most important projects.
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="group rounded-2xl p-8 border border-white/8 hover:border-[#12B2C1]/40 transition-all duration-300 flex flex-col gap-8"
                            style={{ background: 'rgba(255,255,255,0.03)' }}
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, si) => (
                                    <span key={si} className="text-[#12B2C1]">★</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/70 text-base leading-relaxed flex-1">
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                                <div className="w-11 h-11 rounded-full bg-[#12B2C1] flex items-center justify-center font-bold text-white text-sm">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="font-mono-custom text-[10px] text-white/40">{t.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

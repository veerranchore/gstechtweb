import React from 'react';
import { motion } from 'framer-motion';
import Earth3D from './Earth3D';

const stats = [
    { number: '500+', label: 'Projects Shipped' },
    { number: '14', label: 'Years of Craft' },
    { number: '50+', label: 'Team Members' },
    { number: '99.9%', label: 'Uptime SLA' },
];

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen bg-[#E5F9F8] flex flex-col justify-between pt-28 pb-0 overflow-hidden">
            {/* Big hero content */}
            <div className="max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: headline */}
                    <div className="lg:col-span-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="orange-line"></span>
                            {/* <span className="font-mono-custom text-xs text-[#12B2C1] tracking-widest uppercase">
                                Digital Product Studio
                            </span> */}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-display text-[clamp(5rem,12vw,11rem)] leading-[0.92] tracking-wide text-[#1F2B2D] mb-8"
                        >
                            WE BUILD
                            <br />
                            <span className="gradient-orange">DIGITAL</span>
                            <br />
                            PRODUCTS
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-[#23717B] text-lg leading-relaxed max-w-xl mb-10"
                        >
                            Mobile apps, web platforms & cloud systems — engineered
                            for scale by a team that has shipped over <strong className="text-[#1F2B2D]">500 products</strong> successfully.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#work" className="btn-orange">
                                View Our Work
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </a>
                            <a href="#contact" className="btn-outline">
                                Start a Project
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: 3D Earth */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="lg:col-span-4 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Earth3D />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-20 border-t border-black/8 bg-white"
            >
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8">
                    {stats.map((s) => (
                        <div key={s.label} className="px-8 py-8 flex flex-col">
                            <span className="font-display text-5xl text-[#1F2B2D] leading-none mb-1">{s.number}</span>
                            <span className="font-mono-custom text-xs text-[#23717B] tracking-wide">{s.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

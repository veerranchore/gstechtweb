import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutPage: React.FC = () => {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 100]);
    const xTimeline = useTransform(scrollY, [1000, 2000], [0, -300]);

    return (
        <div className="bg-navy text-white overflow-hidden">
            {/* ── HERO: ARCHITECTURAL MINIMALISM ── */}
            <section className="min-h-[75vh] pt-40 pb-20 px-6 relative flex flex-col justify-center overflow-hidden border-b border-white/5">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FF4D00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <motion.div
                    style={{ y: yHero }}
                    className="absolute top-[20%] right-[-5%] pointer-events-none select-none z-0 opacity-[0.05]"
                >
                    <h1 className="font-display text-[25vw] leading-none mb-0 tracking-tighter">STUDIO</h1>
                </motion.div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <span className="w-16 h-px bg-orange"></span>
                            <span className="font-mono text-[10px] text-orange tracking-[0.5em] uppercase font-bold text-shadow">Institutional Archive</span>
                        </div>

                        <h1 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] mb-12 tracking-tighter uppercase font-display">
                            We Engineer <span className="italic text-white opacity-90 underline decoration-orange/20 decoration-4 italic">High-Performance</span> Legacies.
                        </h1>

                        <div className="max-w-xl border-l border-white/10 pl-10">
                            <p className="text-white/40 text-lg lg:text-2xl leading-relaxed font-light italic">
                                "GSTECH is a specialized engineering studio. We bridge the gap between creative vision and robust technical execution."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── MANIFESTO ── */}
            <section className="py-24 lg:py-40 px-6 bg-[#FAFAF7] text-navy lg:rounded-[5rem] mx-0 lg:mx-4 my-10 relative z-10 shadow-2xl overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
                        <div className="lg:col-span-12 mb-16">
                            <span className="font-mono text-[10px] text-orange tracking-[0.6em] font-black uppercase mb-6 block">Our Manifesto</span>
                            <h2 className="text-5xl lg:text-8xl tracking-tighter leading-[0.8] font-display uppercase">THE <br />BELIEF SYSTEM.</h2>
                        </div>

                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-8 p-10 bg-white rounded-[3rem] shadow-xl border border-black/5">
                                <h3 className="text-3xl font-display uppercase tracking-widest italic">Precision first.</h3>
                                <p className="text-navy/50 text-base lg:text-lg leading-relaxed font-light">
                                    Our studio was founded on the belief that great design is nothing without high-performance code. We don't just build websites; we build scalable digital infrastructure.
                                </p>
                            </div>
                            <div className="space-y-8 p-10 border-l-4 border-orange bg-navy text-white rounded-[3rem] shadow-2xl">
                                <h3 className="text-2xl font-display uppercase tracking-widest italic">Culture Driven.</h3>
                                <p className="text-white/40 text-sm lg:text-base leading-relaxed font-light">
                                    Engineering is more than just syntax. It's about empathy, context, and the cultural footprint that every digital product leaves behind.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl group border-[10px] border-white">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="Tech Focus" />
                            <div className="absolute inset-0 bg-navy/20 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="py-24 lg:py-32 bg-navy relative border-b border-white/5 overflow-hidden">
                <motion.div style={{ x: xTimeline }} className="flex whitespace-nowrap opacity-[0.02] absolute top-10 left-0 pointer-events-none select-none">
                    <h2 className="text-[15vw] font-display uppercase leading-none italic">EVOLUTION EVOLUTION EVOLUTION</h2>
                </motion.div>


            </section>
        </div>
    );
};

export default AboutPage;

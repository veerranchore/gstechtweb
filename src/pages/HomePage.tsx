import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import RollReveal from '@/components/RollReveal';
import Earth3D from '@/components/Earth3D';


const HomePage: React.FC = () => {
    // Scroll Animations
    const { scrollY } = useScroll();

    const xLargeText = useTransform(scrollY, [0, 2000], [0, -200]);

    return (
        <div className="bg-navy overflow-hidden">
            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[95vh] flex items-center px-6 pt-24 pb-20 overflow-hidden bg-black">
                {/* Decorative background element */}
                <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center">
                        {/* Text: Professional Sized Typography */}
                        <div className="order-2 lg:order-1 pt-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-12 h-px bg-orange"></span>
                                    <span className="font-mono text-[10px] text-orange tracking-[0.5em] uppercase font-bold">GS TECH SOLUTIONS / STUDIO 25</span>
                                </div>

                                <h1 className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] mb-10 tracking-tighter uppercase font-display">
                                    Engineering <span className="italic text-white underline decoration-orange/20 underline-offset-8">Precision</span> Interfaces.
                                </h1>

                                <div className="max-w-md space-y-10">
                                    <p className="text-white/40 text-base lg:text-lg leading-relaxed font-light italic border-l border-white/10 pl-8">
                                        "We construct category-defining digital products for ambitious brands who refuse to compromise."
                                    </p>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <Link to="/contact" className="bg-orange text-white px-8 py-4 rounded-full font-display text-xl tracking-wide hover:bg-white hover:text-navy transition-all duration-300 shadow-2xl shadow-orange/20 uppercase italic">Get Started</Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3D Earth - Replace Image Mosaic */}
                        <div className="relative h-[500px] lg:h-[600px] w-full order-1 lg:order-2">
                            <Earth3D />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION DIFFERENCE 1: THE MARQUEE ── */}
            <div className="py-10 bg-white overflow-hidden relative z-20 shadow-2xl">
                <div className="flex whitespace-nowrap">
                    <div className="flex animate-marquee items-center gap-12 lg:gap-24">
                        {['MOBILE ARCHITECTURE', 'SAAS DESIGN', 'AI INTEGRATION', 'BRAND STRATEGY', 'CLOUD OPS', 'UI ENGINEERING'].map((item) => (
                            <div key={item} className="flex items-center gap-12 lg:gap-24">
                                <h2 className="text-black text-4xl lg:text-5xl font-display tracking-widest italic">{item}</h2>
                                <span className="material-symbols-outlined text-orange text-3xl">bolt</span>
                            </div>
                        ))}
                    </div>
                    {/* Duplicate */}
                    <div className="flex animate-marquee items-center gap-12 lg:gap-24">
                        {['MOBILE ARCHITECTURE', 'SAAS DESIGN', 'AI INTEGRATION', 'BRAND STRATEGY', 'CLOUD OPS', 'UI ENGINEERING'].map((item) => (
                            <div key={item} className="flex items-center gap-12 lg:gap-24">
                                <h2 className="text-black text-4xl lg:text-5xl font-display tracking-widest italic">{item}</h2>
                                <span className="material-symbols-outlined text-orange text-3xl">bolt</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SECTION DIFFERENCE 2: THE BRUTALIST STATEMENT ── */}
            <section className="py-24 lg:py-32 px-6 bg-navy relative overflow-hidden border-b border-white/5">
                {/* Background Parallax Text */}
                <motion.div style={{ x: xLargeText }} className="absolute bottom-0 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
                    <h2 className="text-[20vw] font-display uppercase leading-none">CRAFTSMANSHIP</h2>
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <RollReveal className="max-w-3xl">
                        <span className="font-mono text-[10px] text-orange tracking-[0.5em] font-bold uppercase mb-8 block">Statement.</span>
                        <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-display leading-[1.1] mb-12 uppercase italic tracking-tighter">
                            We don't build websites. We build <span className="text-white underline decoration-orange/40 underline-offset-4">Digital Ecosystems</span> that drive revenue and define cultures.
                        </h2>
                        <Link to="/about" className="group inline-flex items-center gap-6 text-white py-4 border-b border-white/10 hover:border-orange transition-all font-display text-xl uppercase tracking-widest italic">
                            Read Our Manifesto
                            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                        </Link>
                    </RollReveal>
                </div>
            </section>
            {/* ── SECTION DIFFERENCE 3: THE BENTO GRID (CLEAN WHITE) ── */}
            <div className="py-16 lg:py-24 px-6 bg-cream text-navy lg:rounded-[5rem] mx-0 lg:mx-4 my-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
                        <div className="space-y-2">
                            <span className="font-mono text-[10px] text-orange tracking-[0.5em] font-bold uppercase">Our Toolbox</span>
                            <h2 className="text-5xl lg:text-7xl font-display leading-[0.8] tracking-tighter">CAPABILITIES.</h2>
                        </div>
                        <p className="text-navy/40 text-base lg:text-lg max-w-sm italic font-light leading-relaxed">
                            "A multi-disciplinary approach to solving complex technical challenges through elegant design."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-navy/5 border border-navy/10 rounded-[2.5rem] overflow-hidden">
                        {[
                            { title: 'Mobile Dev', desc: 'Architecting high-performance native apps with React Native and Flutter, focused on fluid UX and bio-metric security.', icon: 'smartphone' },
                            { title: 'Web Platforms', desc: 'Building scalable SaaS and enterprise web portals with Next.js, ensuring sub-second load times and robust SEO.', icon: 'cloud_done' },
                            { title: 'Design Systems', desc: 'Creating modular, component-driven UI/UX design systems that grow with your brand and speed up feature releases.', icon: 'grid_view' },
                            { title: 'System Audits', desc: 'Expert technical audits to eliminate legacy debt, optimize database queries, and harden application security architecture.', icon: 'troubleshoot' },
                            { title: 'Cloud Strategy', desc: 'Resilient infrastructure design on AWS and GCP, featuring automated scaling and cost-efficient container orchestration.', icon: 'dns' },
                            { title: 'Product Logic', desc: 'Defining precise technical roadmaps, user journeys, and MVP scopes to transform complex ideas into winning products.', icon: 'architecture' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-8 lg:p-10 flex flex-col justify-between min-h-[240px] hover:bg-navy/[0.02] transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all shadow-lg">
                                    <span className="material-symbols-outlined text-xl">{s.icon}</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-display tracking-tight uppercase group-hover:italic transition-all">{s.title}</h3>
                                    <p className="text-navy/50 text-xs lg:text-sm leading-relaxed font-light">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
};

export default HomePage;

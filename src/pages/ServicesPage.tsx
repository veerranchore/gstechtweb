import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {


    return (
        <div className="bg-navy text-white overflow-hidden">
            {/* ── HERO: DEPTH & DIMENSION ── */}
            <section className="min-h-[75vh] pt-40 pb-20 px-6 relative flex flex-col justify-center border-b border-white/5 overflow-hidden">
                {/* Background "Noise" and Glow */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-6 mb-10">
                            <span className="w-16 h-px bg-orange"></span>
                            <span className="font-mono text-[10px] text-orange tracking-[0.6em] uppercase font-black italic">The Command Center</span>
                        </div>

                        <h1 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tighter uppercase font-display mb-12">
                            Precision <span className="italic text-white underline decoration-orange/20 decoration-8 underline-offset-8">Directives.</span>
                        </h1>
                        <p className="text-white/40 text-lg lg:text-xl max-w-xl leading-relaxed font-light italic border-l border-white/10 pl-8">
                            "We provide full-cycle digital development, from high-fidelity prototypes to enterprise-grade cloud deployments."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-square w-full rounded-[4rem] border border-white/5 bg-white/[0.02] flex items-center justify-center p-20 relative">
                            <div className="absolute inset-0 animate-pulse bg-orange/5 rounded-full blur-3xl" />
                            <span className="material-symbols-outlined text-[10rem] text-orange/20 select-none">settings_suggest</span>
                            <div className="absolute top-10 right-10 bg-navy border border-white/10 px-8 py-4 rounded-full font-mono text-[10px] tracking-widest text-orange italic">UNIT_04_ACTIVE</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── INNOVATION GRID ── */}
            <section className="py-24 lg:py-40 px-6 bg-[#FAFAF7] text-navy lg:rounded-[6rem] mx-0 lg:mx-6 my-16 relative z-10 shadow-[0_20px_100px_rgba(0,0,0,0.2)] overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
                        <div className="space-y-6">
                            <span className="font-mono text-[10px] text-orange tracking-[0.6em] font-black uppercase">Capabilities</span>
                            <h2 className="text-5xl lg:text-7xl font-display leading-[0.9] tracking-tighter uppercase whitespace-nowrap">WHAT WE CONSTRUCT.</h2>
                        </div>
                        <p className="text-navy/30 text-lg lg:text-xl max-w-sm italic font-light italic leading-relaxed">
                            "Specialized engineering pods designed for vertical scale and market dominance."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {[
                            {
                                title: 'MOBILE ARCHITECTURE',
                                desc: 'High-performance React Native ecosystems built for vertical scale.',
                                tags: ['REACT NATIVE', 'SWIFT', 'CI/CD'],
                                span: 'lg:col-span-8',
                                img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3'
                            },
                            {
                                title: 'WEB PLATFORMS',
                                desc: 'Next-gen enterprise SaaS solutions.',
                                tags: ['NEXT.JS', 'DOCKER'],
                                span: 'lg:col-span-4',
                                img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
                            },
                            {
                                title: 'UI ENGINEERING',
                                desc: 'System-driven design languages.',
                                tags: ['DESIGN SYSTEMS', 'UX R&D'],
                                span: 'lg:col-span-4',
                                img: 'https://images.unsplash.com/photo-1558655146-d09347e92766'
                            },
                            {
                                title: 'CLOUD SYSTEMS',
                                desc: 'Zero-downtime infrastructure for high-demand mission-critical loads.',
                                tags: ['AWS', 'KUBERNETES', 'OPS'],
                                span: 'lg:col-span-8',
                                img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
                            }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`${s.span} group relative h-[450px] lg:h-[500px] rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl`}
                            >
                                <img src={`${s.img}?auto=format&fit=crop&q=80&w=1200`} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110" alt={s.title} />
                                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-colors duration-1000" />
                                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {s.tags.map(t => <span key={t} className="px-4 py-1 glass rounded-full font-mono text-[7px] tracking-widest font-black uppercase text-white/80">{t}</span>)}
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-display leading-[0.85] tracking-tighter uppercase italic group-hover:italic transition-all">{s.title}</h3>
                                        <p className="text-white/60 text-base lg:text-lg max-w-sm leading-relaxed italic opacity-0 group-hover:opacity-100 transition-opacity duration-700">"{s.desc}"</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="py-24 lg:py-40 px-6 bg-navy relative border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Side Header */}
                        <div className="lg:w-1/3 sticky top-40 h-fit space-y-10">
                            <span className="font-mono text-orange text-[10px] tracking-[0.5em] font-black uppercase">Process</span>
                            <h2 className="text-5xl lg:text-7xl font-display leading-[0.9] tracking-tighter italic uppercase whitespace-nowrap">THE STUDIO PROTOCOL.</h2>
                            <Link to="/contact" className="inline-flex items-center gap-6 px-8 py-4 bg-orange text-white rounded-full font-display text-xl hover:bg-white hover:text-navy transition-all shadow-2xl shadow-orange/10 uppercase italic">Initiate Call</Link>
                        </div>

                        {/* Process Steps */}
                        <div className="lg:w-2/3 space-y-8">
                            {[
                                { title: 'DISCOVERY BRIEF', desc: 'Understanding your business goals and technical constraints.', meta: 'STEP_001' },
                                { title: 'ARCHITECTURE DESIGN', desc: 'Constructing the skeletal framework and prototypes.', meta: 'STEP_002' },
                                { title: 'AGILE ENGINEERING', desc: 'Iterative production cycles with daily builds.', meta: 'STEP_003' },
                                { title: 'MISSION LAUNCH', desc: 'Orchestrating transitions with zero-downtime nets.', meta: 'STEP_004' }
                            ].map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="p-10 lg:p-14 bg-white/5 border border-white/5 rounded-[3rem] hover:bg-white/10 transition-all group flex flex-col md:flex-row gap-10 items-start"
                                >
                                    <div className="w-20 h-20 rounded-full border border-orange flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors">
                                        <span className="font-display text-3xl lg:text-5xl text-orange group-hover:text-white transition-colors">{i + 1}</span>
                                    </div>
                                    <div className="space-y-4">
                                        <span className="font-mono text-[10px] text-orange tracking-[0.6em] font-black uppercase">[{p.meta}]</span>
                                        <h3 className="text-3xl lg:text-5xl font-display leading-none tracking-tight uppercase group-hover:italic transition-all">{p.title}</h3>
                                        <p className="text-white/40 text-lg lg:text-xl font-light italic leading-relaxed">"{p.desc}"</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENGAGEMENT ── */}
            <section className="py-24 lg:py-40 px-6 bg-white text-navy flex flex-col items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-24 space-y-6">
                        <span className="font-mono text-xs text-orange tracking-[0.8em] font-black uppercase">Engagement</span>
                        <h2 className="text-5xl lg:text-7xl font-display leading-[0.8] tracking-tighter italic">MODELS OF OPERATION.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { title: 'FIXED MISSION', desc: 'Best for clearly defined projects with fixed scopes.', icon: 'target' },
                            { title: 'DEDICATED UNIT', desc: 'Embed our engineering pod directly into your team.', icon: 'diversity_3' },
                            { title: 'HOURLY COMM', desc: 'Flexible time & materials for high-growth startups.', icon: 'schedule' }
                        ].map((m, i) => (
                            <div key={i} className="p-10 border-[6px] lg:border-[8px] border-navy rounded-[3rem] hover:bg-navy hover:text-white transition-all group flex flex-col justify-between min-h-[400px]">
                                <span className="material-symbols-outlined text-6xl text-orange group-hover:scale-110 transition-transform">{m.icon}</span>
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display uppercase italic tracking-widest">{m.title}</h3>
                                    <p className="text-navy/40 text-base lg:text-lg font-light leading-relaxed group-hover:text-white/40 italic">"{m.desc}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;

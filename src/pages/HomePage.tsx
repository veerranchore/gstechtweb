import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const HomePage: React.FC = () => {
    // Scroll Animations
    const { scrollY } = useScroll();
    const yHeroImagesL = useTransform(scrollY, [0, 800], [0, -80]);
    const yHeroImagesR = useTransform(scrollY, [0, 800], [0, 80]);
    const xLargeText = useTransform(scrollY, [0, 2000], [0, -200]);

    return (
        <div className="bg-navy overflow-hidden">
            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[95vh] flex items-center px-6 pt-24 pb-20 overflow-hidden">
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

                        {/* Image Mosaic */}
                        <div className="relative h-[400px] lg:h-[500px] w-full order-1 lg:order-2">
                            <div className="absolute inset-x-0 top-0 bottom-10 border border-white/5 rounded-[3rem] bg-white/[0.02]" />
                            <motion.div style={{ y: yHeroImagesL }} className="absolute top-[5%] right-[5%] w-[55%] aspect-[3/4] z-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-3xl border border-white/10">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Coding Workflow" />
                            </motion.div>
                            <motion.div style={{ y: yHeroImagesR }} className="absolute bottom-[5%] left-[5%] w-[50%] aspect-[4/5] z-10 shadow-2xl overflow-hidden rounded-3xl border border-white/5 opacity-40">
                                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale" alt="Team Synergy" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION DIFFERENCE 1: THE MARQUEE ── */}
            <section className="py-10 bg-white overflow-hidden relative z-20 shadow-2xl">
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
            </section>

            {/* ── SECTION DIFFERENCE 2: THE BRUTALIST STATEMENT ── */}
            <section className="py-24 lg:py-32 px-6 bg-navy relative overflow-hidden border-b border-white/5">
                {/* Background Parallax Text */}
                <motion.div style={{ x: xLargeText }} className="absolute bottom-0 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
                    <h2 className="text-[20vw] font-display uppercase leading-none">CRAFTSMANSHIP</h2>
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <span className="font-mono text-[10px] text-orange tracking-[0.5em] font-bold uppercase mb-8 block">Statement.</span>
                        <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-display leading-[1.1] mb-12 uppercase italic tracking-tighter">
                            We don't build websites. We build <span className="text-white underline decoration-orange/40 underline-offset-4">Digital Ecosystems</span> that drive revenue and define cultures.
                        </h2>
                        <Link to="/about" className="group inline-flex items-center gap-6 text-white py-4 border-b border-white/10 hover:border-orange transition-all font-display text-xl uppercase tracking-widest italic">
                            The Philosophy
                            <span className="material-symbols-outlined group-hover:translate-x-4 transition-transform text-orange">east</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SECTION DIFFERENCE 3: THE BENTO GRID (CLEAN WHITE) ── */}
            <section className="py-16 lg:py-24 px-6 bg-[#FAFAF7] text-navy lg:rounded-[5rem] mx-0 lg:mx-4 my-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
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
            </section>

            {/* ── SECTION DIFFERENCE 4: THE DARK IMMERSIVE PORTFOLIO ── */}
            {/* <section className="py-24 lg:py-32 px-6 bg-navy relative border-t border-white/5">
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <span className="font-mono text-[10px] text-orange tracking-[0.5em] font-bold uppercase underline decoration-orange/20 decoration-2 underline-offset-8">Selected Missions</span>
                        <h2 className="text-5xl lg:text-7xl font-display leading-none tracking-tighter italic opacity-90">THE ARCHIVE.</h2>
                    </div>
                </div>

                <div className="max-w-[1500px] mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1.05}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        className="portfolio-swiper-premium pb-24"
                    >
                        {[
                            { title: 'FINTRACK PRO', sub: 'ECOSYSTEM / 2024', img: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1600' },
                            { title: 'MEDCORE HUB', sub: 'DATAVIZ / 2024', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600' },
                            { title: 'FLEET OPS', sub: 'LOGISTICS / 2023', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600' },
                        ].map((work, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative aspect-video lg:aspect-[21/9] w-full rounded-[3rem] lg:rounded-[4rem] overflow-hidden group border border-white/10 shadow-2xl">
                                    <img src={work.img} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-110" alt={work.title} />
                                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-navy to-transparent" />
                                    <div className="absolute bottom-10 lg:bottom-16 left-10 lg:left-16 text-white">
                                        <span className="font-mono text-[10px] text-orange tracking-[0.8em] font-black mb-6 block uppercase">{work.sub}</span>
                                        <h3 className="text-4xl lg:text-7xl font-display leading-none tracking-tighter group-hover:italic transition-all duration-1000 uppercase">{work.title}</h3>
                                    </div>
                                    <div className="absolute top-10 right-10 lg:top-16 lg:right-16 w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:bg-orange hover:border-orange">
                                        <span className="material-symbols-outlined text-3xl text-white">north_east</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section> */}
        </div>
    );
};

export default HomePage;

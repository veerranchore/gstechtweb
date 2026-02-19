import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = ['All', 'Mobile', 'Web', 'AI', 'Cloud'];

const projects = [
    {
        id: '01', title: 'FINTRACK PRO', cat: 'MOBILE ECOSYSTEM', client: 'FINTRACK INC.', year: '2024',
        desc: 'AI-powered personal finance suite. Real-time transaction tracking for 200K+ concurrent users.',
        tech: ['React Native', 'Node.js', 'AWS', 'TensorFlow'],
        results: ['200K+ ACTIVE USERS', '4.9★ APP STORE', '72H TO #1 FINANCE'],
        duration: '6 MONTHS',
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: '02', title: 'MEDCORE HUB', cat: 'WEB SaaS', client: 'MEDCORE HEALTH', year: '2024',
        desc: 'Enterprise patient management SaaS. HIPAA-compliant records and real-time telemedicine pipelines.',
        tech: ['Next.js', 'PostgreSQL', 'WebRTC', 'Redis'],
        results: ['5,000+ PRACTITIONERS', '3M+ PATIENT RECORDS', '99.99% UPTIME'],
        duration: '8 MONTHS',
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: '03', title: 'FLEET OPS', cat: 'LOGISTICS CLOUD', client: 'FLEETOPS LTD.', year: '2023',
        desc: 'Real-time logistics & fleet management. Live GPS tracking and automated dispatch algorithms.',
        tech: ['Flutter', 'GraphQL', 'Firebase', 'Kubernetes'],
        results: ['50+ CITIES COVERED', '2,000+ VEHICLES', '40% FUEL REDUCTION'],
        duration: '10 MONTHS',
        img: 'https://images.unsplash.com/photo-1580674271109-9060b2496fcb?auto=format&fit=crop&q=80&w=1200'
    }
];

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const [selected, setSelected] = useState<typeof projects[0] | null>(null);
    const filtered = filter === 'All' ? projects : projects.filter(p => p.cat.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="bg-navy min-h-screen text-white overflow-hidden">
            {/* ── HERO: PORTFOLIO MONOLITH ── */}
            <section className="min-h-[75vh] pt-40 pb-20 px-6 relative flex flex-col justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0">
                    <h1 className="text-[30vw] font-display text-white leading-none tracking-widest uppercase italic translate-y-1/2">WORKS</h1>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-6 mb-12">
                            <span className="w-16 h-px bg-orange"></span>
                            <span className="font-mono text-[10px] text-orange tracking-[0.6em] uppercase font-black italic">Archive / Selected Case Studies</span>
                        </div>

                        <h1 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] mb-12 tracking-tighter uppercase font-display italic">
                            Building <span className="text-white opacity-90 underline decoration-orange/20 decoration-8 underline-offset-8 not-italic">Category</span> Winners.
                        </h1>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
                            <p className="text-white/40 text-xl lg:text-2xl max-w-xl leading-relaxed font-light italic border-l border-white/10 pl-10">
                                "Exploring the intersection of digital craftsmanship and business impact through released products."
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((c) => (
                                    <button key={c} onClick={() => setFilter(c)}
                                        className={`font-mono text-[9px] tracking-[0.3em] uppercase py-3 px-8 border-2 transition-all rounded-none font-black ${filter === c
                                            ? 'bg-orange border-orange text-white'
                                            : 'bg-white/5 border-white/10 text-white/40 hover:border-white hover:text-white'
                                            }`}>
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── STATS: THE PULSE READOUT ── */}
            <section className="py-24 lg:py-32 bg-white text-navy px-6 relative z-10 shadow-2xl skew-y-1">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 -skew-y-1">
                    {[
                        { label: 'DELIVERED PROJECTS', val: '100+' },
                        { label: 'USER APPS BUILT', val: '45' },
                        { label: 'COMBINED ARR', val: '$20M+' },
                        { label: 'STRATEGIC PARTNERS', val: '12' },
                    ].map((s, i) => (
                        <div key={i} className="space-y-4 border-l-4 border-orange pl-8">
                            <h4 className="font-display text-5xl lg:text-7xl leading-none italic">{s.val}</h4>
                            <p className="font-mono text-[10px] tracking-[0.5em] text-navy/40 uppercase font-black">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SHOWCASE GRID ── */}
            <section className="py-24 lg:py-40 px-6 bg-navy relative z-0">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                        <AnimatePresence mode='popLayout'>
                            {filtered.map((proj, i) => (
                                <motion.div
                                    key={proj.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setSelected(proj)}
                                    className="group relative cursor-pointer aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.3)] bg-white/5"
                                >
                                    <img src={proj.img} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110" alt={proj.title} />
                                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black to-transparent opacity-80" />

                                    <div className="absolute inset-0 p-10 lg:p-16 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className="font-display text-4xl lg:text-6xl text-white/20 group-hover:text-white transition-colors">/ {proj.id}</span>
                                            <div className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700 hover:bg-orange hover:border-orange">
                                                <span className="material-symbols-outlined text-3xl">north_east</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <span className="font-mono text-[9px] text-orange tracking-[0.8em] uppercase font-black underline decoration-orange/20 underline-offset-8 italic">{proj.cat}</span>
                                            <h3 className="text-4xl lg:text-6xl font-display leading-[0.8] tracking-tighter uppercase italic group-hover:italic transition-all duration-[1.5s]">{proj.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ── CASE STUDY MODAL ── */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-navy/98 backdrop-blur-2xl" onClick={() => setSelected(null)}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-white rounded-[4rem] w-full max-w-[1400px] h-[85vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative"
                        >
                            <button onClick={() => setSelected(null)} className="absolute top-10 right-10 z-50 text-navy hover:text-orange transition-colors">
                                <span className="material-symbols-outlined text-4xl">close</span>
                            </button>

                            {/* Left: Image Immersive */}
                            <div className="lg:w-1/2 relative h-1/2 lg:h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-[3s] group">
                                <img src={selected.img} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105" alt="" />
                                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
                                <div className="absolute bottom-12 left-12 text-white space-y-4">
                                    <span className="font-mono text-orange tracking-[0.5em] uppercase text-[10px] font-black italic">Immersive View</span>
                                    <p className="text-4xl lg:text-5xl font-display uppercase italic tracking-widest">{selected.title}</p>
                                </div>
                            </div>

                            {/* Right: Technical Data Column */}
                            <div className="lg:w-1/2 p-10 lg:p-20 overflow-y-auto bg-[#FAFAF7] text-navy">
                                <div className="space-y-16">
                                    <div className="space-y-8">
                                        <span className="font-mono text-[9px] text-orange tracking-[0.6em] font-black uppercase mb-4 block underline decoration-orange/20 decoration-2 underline-offset-8">Unit Deployment Metrics</span>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            {selected.results.map((r, i) => (
                                                <div key={i} className="border-b border-navy/5 pb-6">
                                                    <p className="text-3xl lg:text-5xl font-display uppercase tracking-widest leading-none text-navy mb-2">{r.split(' ')[0]}</p>
                                                    <p className="font-mono text-[9px] text-navy/40 tracking-widest uppercase">{r.split(' ').slice(1).join(' ')}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <h4 className="font-display text-3xl uppercase tracking-widest italic border-b border-navy/10 pb-4 mb-8">The Narrative.</h4>
                                        <p className="text-xl lg:text-2xl font-light italic leading-relaxed text-navy/70">
                                            "{selected.desc}"
                                        </p>
                                    </div>

                                    <div className="space-y-8">
                                        <h4 className="font-mono text-[9px] text-navy/30 tracking-[0.4em] uppercase font-black">CORE ARCHITECTURE</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selected.tech.map(t => (
                                                <span key={t} className="px-6 py-2 bg-navy text-white rounded-full font-mono text-[8px] tracking-widest uppercase font-black">{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-16 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-10">
                                        <div className="space-y-2">
                                            <p className="font-mono text-[8px] text-navy/30 tracking-widest uppercase italic">/ DEPLOYMENT YEAR</p>
                                            <p className="text-2xl font-display uppercase tracking-widest">{selected.year}</p>
                                        </div>
                                        <Link to="/contact" className="px-10 py-5 bg-orange text-white rounded-full font-display text-2xl hover:bg-navy transition-all shadow-2xl italic uppercase tracking-tighter" onClick={() => setSelected(null)}>Connect for Results</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsPage;

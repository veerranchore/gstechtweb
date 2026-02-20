import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
    { title: 'Remote Freedom', desc: 'Remote-first culture with studio hubs.', icon: 'public' },
    { title: 'Latest Stack', desc: 'Always working with the bleeding edge of engineering.', icon: 'auto_awesome' },
    { title: 'Flat Hierarchy', desc: 'Direct access to leadership and zero bureaucractic noise.', icon: 'account_tree' },
    { title: 'Profit Share', desc: 'Success of our clients is shared with the engineers who build it.', icon: 'payments' },
];

const jobs = [
    { id: 1, title: 'Lead React Native Engineer', type: 'Full-time', location: 'Remote', cat: 'Engineering', desc: 'Architecting high-scale mobile applications for fintech brands.', req: ['5+ years RN experience', 'Strong Typescript', 'Native Module experience'] },
    { id: 2, title: 'Senior Product Designer', type: 'Full-time', location: 'Remote', cat: 'Design', desc: 'Leading design systems for category-defining SaaS products.', req: ['Portfolio of released products', 'System thinking', 'Figma mastery'] },
    { id: 3, title: 'Backend Architect', type: 'Full-time', location: 'Remote', cat: 'Engineering', desc: 'Building secure, scalable node.js infrastructures.', req: ['Node.js expert', 'Kubernetes', 'PostgreSQL performance tuning'] },
    { id: 4, title: 'AI Solutions Specialist', type: 'Contract', location: 'Remote', cat: 'Engineering', desc: 'Integrating LLMs and custom models into enterprise workflows.', req: ['Python', 'LangChain', 'RAG implementation'] },
];

const CareersPage: React.FC = () => {
    const [selected, setSelected] = useState<typeof jobs[0] | null>(null);
    const [activeCat, setActiveCat] = useState('All');

    const filteredJobs = activeCat === 'All' ? jobs : jobs.filter(j => j.cat === activeCat);

    return (
        <div className="bg-navy text-white overflow-hidden">
            {/* ── HERO: THE VISION ── */}
            <section className="min-h-[75vh] flex flex-col justify-center pt-40 pb-20 px-6 relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#12B2C1 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

                <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-6 mb-10">
                            <span className="w-16 h-px bg-orange"></span>
                            <span className="font-mono text-[10px] text-orange tracking-[0.6em] uppercase font-black italic">Careers / Talent Node</span>
                        </div>
                        <h1 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tighter uppercase font-display mb-12">
                            Build The <span className="italic text-white underline decoration-orange/20 decoration-8 underline-offset-8">Future</span> Of Engineering.
                        </h1>
                        <p className="text-white/40 text-lg lg:text-xl max-w-xl font-light italic border-l border-white/10 pl-8 leading-relaxed">
                            "We are looking for architects, not just builders. Join a studio that values the craft of code."
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2s] border border-white/10 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="The Team" />
                        <div className="absolute inset-x-8 bottom-8 p-8 glass rounded-[2rem] flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="font-display text-2xl lg:text-3xl">100% REMOTE</p>
                                <p className="font-mono text-[9px] text-white/40 tracking-widest uppercase">Studio Collaboration</p>
                            </div>
                            <span className="material-symbols-outlined text-3xl text-orange animate-pulse">language</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="py-24 lg:py-40 px-6 bg-[#E5F9F8] text-navy lg:rounded-[5rem] mx-0 lg:mx-6 my-16 relative z-10 shadow-2xl overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-20 space-y-4">
                        <span className="font-mono text-orange text-[10px] tracking-[0.6em] font-black uppercase">Benefits</span>
                        <h2 className="text-5xl lg:text-8xl font-display leading-[0.8] tracking-tighter italic">WHY GSTECH?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-white rounded-[2.5rem] border border-black/5 hover:bg-navy hover:text-white transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-navy text-white flex items-center justify-center mb-8 group-hover:bg-orange transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{b.icon}</span>
                                </div>
                                <h3 className="text-2xl font-display uppercase italic mb-4 tracking-widest">{b.title}</h3>
                                <p className="text-navy/40 group-hover:text-white/40 text-base lg:text-lg font-light leading-relaxed">"{b.desc}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── JOB BOARD ── */}
            <section className="py-24 lg:py-32 px-6 bg-navy relative border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-10">
                        <div className="space-y-4">
                            <h2 className="text-5xl lg:text-7xl font-display leading-none tracking-tighter uppercase">OPEN NODES.</h2>
                            <p className="text-white/40 font-mono text-[9px] tracking-[0.4em]">FILTER BY SPECIALIZATION</p>
                        </div>
                        <div className="flex gap-2">
                            {['All', 'Engineering', 'Design'].map(cat => (
                                <button key={cat} onClick={() => setActiveCat(cat)}
                                    className={`px-6 py-2 rounded-full font-mono text-[9px] tracking-widest uppercase transition-all ${activeCat === cat ? 'bg-orange text-white' : 'bg-white/5 text-white/30 hover:text-white border border-white/5'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredJobs.map((job) => (
                            <motion.div
                                key={job.id}
                                layout
                                onClick={() => setSelected(job)}
                                className="group p-8 lg:p-10 bg-white/5 border border-white/5 rounded-[2.5rem] flex flex-col lg:flex-row justify-between items-center gap-10 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
                            >
                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-6">
                                        <span className="font-mono text-[9px] text-orange tracking-[0.6em] font-black uppercase italic">[{job.cat}]</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className="font-mono text-[9px] text-white/40 tracking-[0.4em] uppercase">{job.location}</span>
                                    </div>
                                    <h3 className="text-3xl lg:text-5xl font-display leading-none tracking-tight group-hover:italic transition-all uppercase">{job.title}</h3>
                                </div>
                                <div className="flex items-center gap-8">
                                    <span className="px-5 py-1 border border-white/10 rounded-full font-mono text-[9px] tracking-widest text-white/30 uppercase">{job.type}</span>
                                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all">
                                        <span className="material-symbols-outlined text-xl">east</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MODAL ── */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-navy/95 backdrop-blur-md" onClick={() => setSelected(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-white rounded-[3rem] w-full max-w-4xl p-10 lg:p-16 text-navy relative shadow-2xl"
                        >
                            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-navy/20 hover:text-navy transition-colors">
                                <span className="material-symbols-outlined text-3xl">close</span>
                            </button>

                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <span className="font-mono text-[9px] text-orange tracking-[0.8em] font-black uppercase mb-4 block underline decoration-orange/20 underline-offset-8">Unit Deployment</span>
                                    <h2 className="text-4xl lg:text-6xl font-display leading-[0.9] tracking-tighter uppercase italic">{selected.title}</h2>
                                    <div className="flex gap-4 items-center">
                                        <p className="font-mono text-[9px] text-navy/40 tracking-widest uppercase italic">{selected.cat} / {selected.location}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 border-t border-navy/5">
                                    <div className="space-y-6">
                                        <h4 className="font-display text-xl lg:text-2xl uppercase tracking-widest italic">Description</h4>
                                        <p className="text-navy/60 text-base lg:text-lg leading-relaxed italic">"{selected.desc}"</p>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="font-display text-xl lg:text-2xl uppercase tracking-widest italic">Requirements</h4>
                                        <ul className="space-y-3">
                                            {selected.req.map((r, i) => (
                                                <li key={i} className="flex gap-4 items-center">
                                                    <span className="w-1.5 h-1.5 bg-orange rounded-full" />
                                                    <p className="text-navy font-mono text-[9px] tracking-widest uppercase">{r}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button className="w-full py-6 bg-navy text-white rounded-[2rem] font-display text-2xl hover:bg-orange transition-all shadow-2xl shadow-navy/20 uppercase italic tracking-tighter">
                                    Transmit Application
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CareersPage;

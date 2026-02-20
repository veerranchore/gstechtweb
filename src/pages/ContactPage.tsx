import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    { q: 'How long does a typical project take?', a: 'It depends on scope. A focused MVP takes 4–8 weeks. Full-scale mobile or web products typically run 3–6 months. Enterprise platforms or custom AI solutions can range from 6–12 months.' },
    { q: 'What is your engagement model?', a: 'We offer three models: Fixed-price (defined scope, fixed budget), Time & Materials (flexible, billed monthly), and Dedicated Team (we embed our engineers directly into your organization).' },
    { q: 'Do you sign NDAs?', a: 'Absolutely. We sign NDAs before any detailed project conversation. IP ownership is always fully transferred to you upon completion.' },
    { q: 'Can you work with an existing codebase?', a: 'Yes. Many of our clients come to us with legacy systems. We audit the codebase first, provide a technical report, and then work alongside your team.' },
];

// Offices Section removed as per focus on remote/non-location specific presence.

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        requestType: 'SELECTION...',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate transmission delay
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value, name } = e.target;
        setFormData(prev => ({ ...prev, [id || name]: value }));
    };

    return (
        <div className="bg-navy text-white overflow-hidden">
            {/* ── HERO: CLEAN DISCOVERY ── */}
            <section className="min-h-[75vh] pt-40 pb-20 px-6 relative flex flex-col justify-center border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none z-0">
                    <h1 className="text-[30vw] font-display text-white leading-none rotate-90 origin-bottom-right transform translate-y-1/2">CONNECT</h1>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-4 mb-10">
                            <span className="w-16 h-px bg-orange"></span>
                            <span className="font-mono text-[10px] text-orange tracking-[0.5em] uppercase font-bold italic">Contact Node / Discovery</span>
                        </div>

                        <h1 className="text-[clamp(2.5rem,7.5vw,5rem)] leading-[0.9] mb-12 tracking-tighter uppercase font-display">
                            Initiate <span className="italic text-white underline decoration-orange/20 decoration-8 underline-offset-8">Transmission.</span>
                        </h1>
                        <p className="text-white/40 text-lg lg:text-xl max-w-xl leading-relaxed font-light italic border-l border-white/10 pl-8">
                            "Ready to transform your technical architecture? We respond to all inquiries within 24 hours."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── FORM: THE BENTO COMMAND ── */}
            <section className="py-24 lg:py-40 px-0 lg:px-6 bg-[#E5F9F8] text-navy relative z-10 lg:rounded-[5rem] mx-0 lg:mx-6 my-16 shadow-2xl">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px bg-navy/5 border border-navy/5 rounded-[4rem] overflow-hidden shadow-inner">
                    {/* Info Side */}
                    <div className="lg:col-span-4 bg-navy p-12 lg:p-16 text-white space-y-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="space-y-4 relative z-10">
                            <span className="font-mono text-orange text-[9px] tracking-[0.6em] font-black uppercase block italic">Mission Brief</span>
                            <h2 className="text-4xl lg:text-5xl font-display uppercase leading-[0.85] italic whitespace-nowrap">Start A Project.</h2>
                        </div>
                        <div className="space-y-10 relative z-10">
                            {[
                                { lab: 'General Info', val: 'gstecht7@gmail.com' },
                                { lab: 'Direct Voice', val: '+91 83200 23540' }
                            ].map(c => (
                                <div key={c.lab}>
                                    <p className="text-white/20 font-mono text-[9px] uppercase tracking-widest mb-2 italic">/ {c.lab}</p>
                                    <p className="text-2xl lg:text-3xl font-display uppercase tracking-widest text-orange transition-colors hover:text-white cursor-pointer">{c.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-8 p-12 lg:p-20 bg-white relative">
                        <AnimatePresence mode='wait'>
                            {submitted ? (
                                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <motion.div
                                        initial={{ rotate: -45, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ type: 'spring', damping: 10 }}
                                        className="w-24 h-24 rounded-full bg-navy text-orange flex items-center justify-center mb-10 shadow-2xl"
                                    >
                                        <span className="material-symbols-outlined text-5xl">verified</span>
                                    </motion.div>
                                    <h3 className="text-5xl lg:text-7xl font-display text-navy mb-6 tracking-tighter uppercase italic">MESSAGE RECEIVED.</h3>
                                    <p className="text-navy/40 text-xl italic max-w-sm">"Your coordinates have been logged. Our architects will contact you shortly."</p>
                                    <button onClick={() => setSubmitted(false)} className="mt-12 text-orange font-mono text-[10px] uppercase tracking-widest hover:underline">/ Send another transmission</button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {[
                                            { id: 'name', label: 'Full Identity', placeholder: 'NAME', type: 'text' },
                                            { id: 'email', label: 'Email Channel', placeholder: 'EMAIL', type: 'email' },
                                            { id: 'company', label: 'Organization', placeholder: 'COMPANY', type: 'text' }
                                        ].map(f => (
                                            <div key={f.id} className="space-y-4 group">
                                                <label className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-navy/30 italic group-focus-within:text-orange transition-colors">{f.label}</label>
                                                <input
                                                    id={f.id}
                                                    type={f.type}
                                                    required
                                                    value={formData[f.id as keyof typeof formData]}
                                                    onChange={handleInputChange}
                                                    placeholder={f.placeholder}
                                                    className="w-full bg-transparent border-b border-navy/10 py-3 font-display text-2xl text-navy outline-none focus:border-orange transition-all placeholder:opacity-10 italic uppercase tracking-tighter"
                                                />
                                            </div>
                                        ))}
                                        <div className="space-y-4 group">
                                            <label className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-navy/30 italic group-focus-within:text-orange transition-colors">Primary Request</label>
                                            <select
                                                id="requestType"
                                                required
                                                value={formData.requestType}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent border-b border-navy/10 py-3 font-display text-2xl text-navy outline-none focus:border-orange transition-all uppercase cursor-pointer italic"
                                            >
                                                <option disabled>SELECTION...</option>
                                                <option>MOBILE ENGINEERING</option>
                                                <option>WEB SaaS PLATFORM</option>
                                                <option>UI/UX DESIGN SYSTEM</option>
                                                <option>TECHNICAL AUDIT</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-4 group">
                                        <label className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-navy/30 italic group-focus-within:text-orange transition-colors">Mission Narrative</label>
                                        <textarea
                                            id="message"
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={2}
                                            placeholder="TELL US ABOUT THE MISSION GOALS..."
                                            className="w-full bg-transparent border-b border-navy/10 py-3 font-display text-2xl text-navy outline-none focus:border-orange transition-all placeholder:opacity-10 resize-none uppercase italic tracking-tighter"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full py-8 bg-navy text-white rounded-[2rem] font-display text-3xl hover:bg-orange transition-all shadow-2xl uppercase italic tracking-tighter flex items-center justify-center gap-4 ${loading ? 'opacity-80 cursor-wait' : ''}`}
                                    >
                                        {loading ? (
                                            <>
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                    className="material-symbols-outlined"
                                                >
                                                    sync
                                                </motion.span>
                                                TRANSMITTING...
                                            </>
                                        ) : (
                                            'Transmitting Brief'
                                        )}
                                    </button>
                                </form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ── OUR PRESENCE ── */}
            {/* <section className="py-24 lg:py-40 px-6 bg-white text-navy flex flex-col items-center border-b border-navy/5">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
                        <div className="space-y-4">
                            <span className="font-mono text-[9px] text-orange tracking-[0.6em] font-black uppercase italic">Presence</span>
                            <h2 className="text-6xl lg:text-9xl font-display leading-[0.8] tracking-tighter uppercase italic">OUR NODES.</h2>
                        </div>
                        <p className="text-navy/30 text-lg lg:text-2xl max-w-sm italic font-light leading-tight">
                            "Strategically positioned to build and scale your vision."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map(o => (
                            <div key={o.city} className="p-12 bg-[#E5F9F8] border border-black/5 rounded-[3rem] space-y-10 group hover:bg-navy hover:text-white transition-all duration-700 shadow-xl">
                                <div className="flex justify-between items-start">
                                    <span className="material-symbols-outlined text-5xl text-orange group-hover:rotate-12 transition-transform">{o.icon}</span>
                                    <span className="font-mono text-[8px] text-navy/20 group-hover:text-white/20 tracking-widest">{o.coord}</span>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-5xl font-display uppercase tracking-widest italic leading-none">{o.city}</h3>
                                    <p className="text-navy/40 group-hover:text-white/40 text-base lg:text-lg leading-relaxed font-light italic uppercase">"{o.address}"</p>
                                </div>
                                <div className="pt-8 border-t border-navy/5 group-hover:border-white/5 space-y-1">
                                    <p className="font-mono text-[9px] text-orange tracking-widest font-black uppercase italic">{o.email}</p>
                                    <p className="text-xl font-display text-navy group-hover:text-white transition-colors tracking-widest">{o.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ── FAQ: THE ARCHIVE ── */}
            <section className="py-24 lg:py-40 px-6 bg-navy relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10 space-y-20">
                    <div className="text-left space-y-6">
                        <span className="font-mono text-[9px] text-orange tracking-[0.8em] font-black uppercase block underline decoration-orange/20 decoration-2 underline-offset-8 text-center italic">Protocol FAQ</span>
                        <h2 className="text-6xl lg:text-[8rem] font-display uppercase tracking-tighter text-center italic">QUERIES.</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-1 border border-white/5 rounded-[2.5rem] transition-all hover:border-orange/30">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between text-left p-10 group"
                                >
                                    <h4 className="text-2xl lg:text-4xl font-display uppercase tracking-widest text-white/40 group-hover:text-white transition-colors leading-[0.9] italic">{faq.q}</h4>
                                    <div className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-orange transition-all duration-500 ${openFaq === i ? 'rotate-180 bg-orange text-white' : ''}`}>
                                        <span className="material-symbols-outlined text-2xl">expand_more</span>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <p className="text-white/30 text-lg lg:text-xl font-light italic p-10 pt-0 leading-relaxed border-t border-white/5 mt-4">
                                                "{faq.a}"
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

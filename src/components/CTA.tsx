import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="bg-[#FAFAF7] py-32">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[500px]"
                >
                    {/* Left panel - dark */}
                    <div className="bg-[#0A0F1E] p-12 lg:p-16 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="orange-line"></span>
                                <span className="font-mono-custom text-xs text-[#FF4D00] tracking-widest uppercase">Get In Touch</span>
                            </div>
                            <h2 className="font-display text-[clamp(3rem,5vw,5.5rem)] leading-none text-white tracking-wide mb-6">
                                READY TO<br />BUILD?
                            </h2>
                            <p className="text-white/50 text-base leading-relaxed max-w-sm">
                                Tell us about your project. We respond within 24 hours and can kickoff
                                the same week — no unnecessary meetings.
                            </p>
                        </div>

                        {/* Contact info */}
                        <div className="space-y-4 mt-10">
                            {[
                                { icon: 'mail', label: 'gstecht7@gmail.com' },
                                { icon: 'call', label: '+91 83200 23540' },
                                { icon: 'location_on', label: 'Chandkheda, Ahmedabad' },
                            ].map((c) => (
                                <div key={c.label} className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[#FF4D00] text-base">{c.icon}</span>
                                    </div>
                                    <span className="text-white/60 text-sm font-medium">{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right panel - form */}
                    <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">
                        <h3 className="font-display text-3xl text-[#0A0F1E] tracking-wide mb-8">START A PROJECT</h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="font-mono-custom text-[10px] text-[#6B7280] uppercase tracking-widest block mb-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Smith"
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAF7] text-[#0A0F1E] text-sm outline-none focus:border-[#FF4D00] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="font-mono-custom text-[10px] text-[#6B7280] uppercase tracking-widest block mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAF7] text-[#0A0F1E] text-sm outline-none focus:border-[#FF4D00] transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-mono-custom text-[10px] text-[#6B7280] uppercase tracking-widest block mb-2">Company</label>
                                <input
                                    type="text"
                                    placeholder="Your Company"
                                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAF7] text-[#0A0F1E] text-sm outline-none focus:border-[#FF4D00] transition-colors"
                                />
                            </div>
                            <div>
                                <label className="font-mono-custom text-[10px] text-[#6B7280] uppercase tracking-widest block mb-2">Project Brief</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAFAF7] text-[#0A0F1E] text-sm outline-none focus:border-[#FF4D00] transition-colors resize-none"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn-orange w-full justify-center py-4"
                            >
                                Send Message
                                <span className="material-symbols-outlined text-base">send</span>
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;

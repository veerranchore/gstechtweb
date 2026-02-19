import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
    const stats = [
        { label: 'Enterprises Scale', value: '500+' },
        { label: 'Uptime Reliability', value: '99.9%' },
        { label: 'Project Excellence', value: '15+' },
        { label: 'Expert Support', value: '24/7' },
    ];


    return (
        <section className="mt-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h3>
                    <h2 className="text-3xl md:text-4xl font-black mb-6 dark:text-white">Engineering Excellence At Scale</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                        Founded in 2010, GS TECH has grown from a specialized software house into a premier studio for digital infrastructure. We don't just provide services; we partner with visionary leaders to solve complex technical challenges.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-2"
                            >
                                <p className="text-3xl font-black text-primary">{stat.value}</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="aspect-[4/5] rounded-2xl bg-slate-200 dark:bg-neutral-800 overflow-hidden relative"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-primary/40 to-neutral-900"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="aspect-square rounded-2xl bg-slate-200 dark:bg-neutral-800 overflow-hidden relative"
                        >
                            <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-neutral-900"></div>
                        </motion.div>
                    </div>
                    <div className="space-y-4 pt-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="aspect-square rounded-2xl bg-slate-200 dark:bg-neutral-800 overflow-hidden relative"
                        >
                            <div className="w-full h-full bg-gradient-to-bl from-primary/30 to-neutral-900"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="aspect-[4/5] rounded-2xl bg-slate-200 dark:bg-neutral-800 overflow-hidden relative"
                        >
                            <div className="w-full h-full bg-gradient-to-t from-primary/40 to-neutral-900"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

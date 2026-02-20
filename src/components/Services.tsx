import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        num: '01',
        title: 'Mobile App Development',
        desc: 'Native iOS & Android, React Native, and Flutter apps built for millions. From MVPs to full-scale consumer products.',
        icon: 'smartphone',
        tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    },
    {
        num: '02',
        title: 'Web Platforms & SaaS',
        desc: 'Full-stack web applications with Next.js, robust APIs, and databases that scale effortlessly to enterprise workloads.',
        icon: 'web',
        tags: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
        num: '03',
        title: 'Cloud & DevOps',
        desc: 'AWS-powered infrastructure, Docker/Kubernetes orchestration, and CI/CD pipelines with 99.9% uptime guarantees.',
        icon: 'cloud_queue',
        tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
        num: '04',
        title: 'UI/UX Design',
        desc: 'End-to-end product design — from user research and wireframes to pixel-perfect design systems and prototypes.',
        icon: 'design_services',
        tags: ['Figma', 'Research', 'Prototyping', 'Design Systems'],
    },
    {
        num: '05',
        title: 'AI & Data Analytics',
        desc: 'Machine learning models, LLM integrations, real-time dashboards, and data pipelines that turn raw data into insight.',
        icon: 'psychology',
        tags: ['Python', 'TensorFlow', 'LLMs', 'BI Dashboards'],
    },
    {
        num: '06',
        title: 'Cybersecurity & Compliance',
        desc: 'Penetration testing, security audits, GDPR/HIPAA compliance consulting. Protect your product from day one.',
        icon: 'security',
        tags: ['GDPR', 'HIPAA', 'Pentesting', 'SOC 2'],
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-[#E5F9F8] py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="orange-line"></span>
                            <span className="font-mono-custom text-xs text-[#12B2C1] tracking-widest uppercase">What We Do</span>
                        </div>
                        <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-none text-[#1F2B2D] tracking-wide">
                            FULL-SPECTRUM<br />TECH SERVICES
                        </h2>
                    </div>
                    <p className="text-[#23717B] text-base leading-relaxed max-w-xs">
                        Everything your digital product needs — from idea to massive scale — under one roof.
                    </p>
                </motion.div>

                {/* Service rows */}
                <div className="divide-y divide-black/8">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="group py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center cursor-pointer hover:pl-4 transition-all duration-300"
                        >
                            {/* Number */}
                            <div className="md:col-span-1">
                                <span className="font-mono-custom text-xs text-[#23717B] group-hover:text-[#12B2C1] transition-colors">{svc.num}</span>
                            </div>

                            {/* Icon */}
                            <div className="md:col-span-1">
                                <div className="w-12 h-12 rounded-xl bg-[#12B2C1]/10 flex items-center justify-center group-hover:bg-[#12B2C1] transition-colors">
                                    <span className="material-symbols-outlined text-[#12B2C1] group-hover:text-white transition-colors">{svc.icon}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="md:col-span-4">
                                <h3 className="font-display text-3xl text-[#1F2B2D] tracking-wide group-hover:text-[#12B2C1] transition-colors">
                                    {svc.title.toUpperCase()}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-4">
                                <p className="text-[#23717B] text-sm leading-relaxed">{svc.desc}</p>
                            </div>

                            {/* Arrow */}
                            <div className="md:col-span-2 flex flex-wrap gap-2 justify-end items-center">
                                <span className="material-symbols-outlined text-[#23717B] group-hover:text-[#12B2C1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                                    arrow_outward
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

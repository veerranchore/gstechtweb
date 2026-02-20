import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: '01',
        title: 'FinTrack Pro',
        category: 'Mobile + Backend',
        description: 'AI-powered financial tracking app for 200K+ users across iOS & Android.',
        result: '4.9★ App Store',
        color: '#1F2B2D',
        accent: '#12B2C1',
        tags: ['React Native', 'Node.js', 'MongoDB'],
    },
    {
        id: '02',
        title: 'MedCore Platform',
        category: 'Healthcare SaaS',
        description: 'Enterprise patient management system serving 5,000+ medical practitioners successfully.',
        result: '3M+ Records',
        color: '#12B2C1',
        accent: '#fff',
        tags: ['Next.js', 'PostgreSQL', 'AWS'],
    },
    {
        id: '03',
        title: 'FleetOps Suite',
        category: 'Logistics & IoT',
        description: 'Real-time fleet dispatch platform with live GPS tracking across 50+ cities.',
        result: '50+ Cities',
        color: '#E5F9F8',
        accent: '#1F2B2D',
        tags: ['Flutter', 'GraphQL', 'Firebase'],
    },
    {
        id: '04',
        title: 'EduStream LMS',
        category: 'EdTech Platform',
        description: 'Live-streaming learning platform with AI tutoring and adaptive quizzes.',
        result: '500K Students',
        color: '#1F2B2D',
        accent: '#12B2C1',
        tags: ['React', 'WebRTC', 'Python AI'],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="work" className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="orange-line"></span>
                            <span className="font-mono-custom text-xs text-[#12B2C1] tracking-widest uppercase">Selected Work</span>
                        </div>
                        <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-none text-[#1F2B2D] tracking-wide">
                            CASE<br />STUDIES
                        </h2>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#23717B] hover:text-[#12B2C1] transition-colors">
                        View all projects
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
                </motion.div>

                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group rounded-2xl overflow-hidden cursor-pointer"
                            style={{ background: proj.color }}
                        >
                            {/* Visual header */}
                            <div className="h-56 relative flex items-center justify-center border-b"
                                style={{ borderColor: proj.accent === '#fff' ? 'rgba(255,255,255,0.1)' : 'rgba(10,15,30,0.08)' }}
                            >
                                {/* Big number watermark */}
                                <span
                                    className="font-display text-[10rem] leading-none opacity-10 select-none absolute"
                                    style={{ color: proj.accent }}
                                >
                                    {proj.id}
                                </span>
                                {/* Result badge */}
                                <div
                                    className="relative px-5 py-3 rounded-full font-display text-2xl tracking-widest border"
                                    style={{
                                        color: proj.accent,
                                        borderColor: proj.accent === '#fff' ? 'rgba(255,255,255,0.3)' : 'rgba(10,15,30,0.2)',
                                        background: proj.accent === '#fff' ? 'rgba(255,255,255,0.1)' : 'rgba(10,15,30,0.05)',
                                    }}
                                >
                                    {proj.result}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <p
                                            className="font-mono-custom text-xs uppercase tracking-widest mb-2"
                                            style={{ color: proj.accent === '#fff' ? 'rgba(255,255,255,0.5)' : '#23717B' }}
                                        >
                                            {proj.category}
                                        </p>
                                        <h3
                                            className="font-display text-4xl tracking-wide"
                                            style={{ color: proj.accent }}
                                        >
                                            {proj.title.toUpperCase()}
                                        </h3>
                                    </div>
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform"
                                        style={{
                                            borderColor: proj.accent === '#fff' ? 'rgba(255,255,255,0.3)' : 'rgba(10,15,30,0.2)',
                                            color: proj.accent,
                                        }}
                                    >
                                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                    </div>
                                </div>

                                <p
                                    className="text-sm leading-relaxed mb-6"
                                    style={{ color: proj.accent === '#fff' ? 'rgba(255,255,255,0.6)' : '#23717B' }}
                                >
                                    {proj.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {proj.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full font-mono-custom text-[10px] border"
                                            style={{
                                                color: proj.accent === '#fff' ? 'rgba(255,255,255,0.6)' : '#23717B',
                                                borderColor: proj.accent === '#fff' ? 'rgba(255,255,255,0.15)' : 'rgba(10,15,30,0.12)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

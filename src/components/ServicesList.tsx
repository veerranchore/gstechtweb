
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'WEBSITE DESIGN',
        description: 'Bespoke Website Solutions Tailored for Your Success.',
        features: [
            'Static Website',
            'Custom Website Design',
            'Ecommerce Website',
            'Web Hosting'
        ],
        link: '/services'
    },
    {
        title: 'APP DEVELOPMENT',
        description: 'Tailored App Solutions Crafted for Your Success.',
        features: [
            'Customized Application Design',
            'Native iOS Apps',
            'Native Android Apps',
            'Cross-Platform Apps'
        ],
        link: '/services'
    }
];

const ServicesList: React.FC = () => {
    return (
        <section className="bg-navy py-20 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto space-y-20">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-20 border-b border-white/10 pb-20 last:border-b-0 last:pb-0"
                    >
                        {/* Title */}
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white uppercase leading-none tracking-tight">
                                {service.title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="lg:w-1/3 space-y-8">
                            <p className="text-xl text-white font-medium leading-snug">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/60 font-light">
                                        <span className="text-orange text-xl">+</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Button */}
                        <div className="lg:w-1/3 flex justify-start lg:justify-end">
                            <Link
                                to={service.link}
                                className="group w-32 h-32 rounded-full border border-white/20 flex flex-col items-center justify-center gap-2 hover:bg-white hover:border-white transition-all duration-300"
                            >
                                <span className="text-sm font-medium text-white group-hover:text-navy transition-colors">Details</span>
                                <span className="material-symbols-outlined text-white group-hover:text-navy group-hover:rotate-45 transition-all text-xl">
                                    arrow_outward
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesList;

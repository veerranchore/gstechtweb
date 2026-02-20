
import React from 'react';
import { motion } from 'framer-motion';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
        alt: 'Business professional',
        className: 'top-10 left-10 lg:left-20 w-32 h-40 lg:w-48 lg:h-64'
    },
    {
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400',
        alt: 'Team meeting',
        className: 'top-20 right-10 lg:right-32 w-40 h-32 lg:w-56 lg:h-40'
    },
    {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400',
        alt: 'Collaborative workspace',
        className: 'bottom-20 left-5 lg:left-40 w-48 h-32 lg:w-64 lg:h-48'
    },
    {
        src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        alt: 'Creative professional',
        className: 'bottom-10 right-5 lg:right-20 w-32 h-40 lg:w-40 lg:h-56'
    }
];

const TestimonialQuote: React.FC = () => {
    return (
        <section className="bg-navy py-20 lg:py-24 px-6 relative overflow-hidden flex items-center justify-center">
            {/* Scattered Images */}
            {images.map((img, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`absolute hidden lg:block grayscale hover:grayscale-0 transition-all duration-500 z-0 ${img.className}`}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded-none"
                    />
                </motion.div>
            ))}

            {/* Central Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-display text-8xl text-white block mb-8">“</span>
                    <h3 className="text-2xl lg:text-4xl text-white font-light italic leading-relaxed mb-12">
                        Working with GS Techt was an absolute game-changer for my business. Their expertise in website development and digital marketing helped me reach new heights of success. I couldn't be happier with the results!
                    </h3>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white font-bold tracking-widest uppercase text-sm lg:text-base">
                            SARAH M.
                        </span>
                        <span className="w-12 h-px bg-orange"></span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialQuote;

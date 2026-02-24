import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy text-white relative overflow-hidden border-t border-white/10">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

                {/* Column 1: Brand & Contact Info */}
                <div className="lg:col-span-4 p-8 lg:p-16 flex flex-col justify-start space-y-10 border-b lg:border-b-0 lg:border-r border-white/10">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded flex items-center justify-center shadow-lg">
                            <img
                                src="/GS TECHT LOGO.png"
                                alt="GS TECHT LOGO"
                                className="h-10 lg:h-14 w-auto object-contain"
                            />
                        </div>
                    </Link>

                    <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-sm">
                        GS Tech Solutions is a specialized development studio crafting high-performance digital products for scale leaders.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                            <span className="material-symbols-outlined text-white/50">location_on</span>
                            <p className="text-sm text-white/70">F/F7, Nakshatra Arcade, IOC Road, Chandkheda, Ahmedabad - 382424</p>
                        </div>
                        <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                            <span className="material-symbols-outlined text-white/50">call</span>
                            <a href="tel:+918320023540" className="text-base lg:text-lg font-medium hover:text-orange transition-colors">+91 83200 23540</a>
                        </div>
                        <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                            <span className="material-symbols-outlined text-white/50">mail</span>
                            <a href="mailto:gstecht7@gmail.com" className="text-base lg:text-lg font-medium hover:text-orange transition-colors">gstecht7@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Column 2: Social Grid / Middle Section */}
                <div className="lg:col-span-3 grid grid-cols-1 border-b lg:border-b-0 lg:border-r border-white/10">
                    {[
                        { label: 'INSTAGRAM', link: 'https://www.instagram.com/gstecht_official/' },
                        { label: 'FACEBOOK', link: '#' },
                        { label: 'LINKEDIN', link: '#' }
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.link}
                            target={social.link !== '#' ? "_blank" : undefined}
                            rel={social.link !== '#' ? "noopener noreferrer" : undefined}
                            className="flex items-center justify-center py-8 lg:py-0 border-b last:border-b-0 border-white/10 hover:bg-white hover:text-black transition-all duration-300 font-display text-xl tracking-widest"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>

                {/* Column 3: Massive LET'S TALK */}
                <div className="lg:col-span-5 flex items-center justify-center p-12 lg:p-20 bg-[#1F2B2D] relative overflow-hidden group">
                    <div className="relative z-10 text-center">
                        <h2 className="text-6xl lg:text-7xl font-display leading-none tracking-tighter text-[#12B2C1] group-hover:italic transition-all duration-500">
                            LET'S TALK
                        </h2>
                    </div>
                    {/* Background decoration for the talk section */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="border-t border-white/10 p-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-navy">
                <p className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                    © 2024 | All rights reserved by GS Tech Solutions
                </p>

                <div className="flex flex-wrap gap-8 items-center">
                    <div className="flex gap-8">
                        <Link to="/about" className="font-display text-sm tracking-widest hover:text-orange uppercase">About Us</Link>
                        <Link to="/contact" className="font-display text-sm tracking-widest hover:text-orange uppercase">Contact</Link>
                    </div>

                    {/* Scroll to top button imitation */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange hover:text-white transition-all transform hover:scale-110 shadow-xl"
                    >
                        <span className="material-symbols-outlined">north</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

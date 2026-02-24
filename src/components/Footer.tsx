import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy text-white relative overflow-hidden border-t border-white/10">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

                {/* Column 1: Brand & Contact Info */}
                <div className="lg:col-span-6 p-8 lg:p-16 flex flex-col justify-start space-y-10 border-b lg:border-b-0 lg:border-r border-white/10">
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

                {/* Column 3: Massive LET'S TALK */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center p-12 lg:p-20 bg-[#1F2B2D] relative overflow-hidden group">
                    <div className="relative z-10 text-center text-decoration-none">
                        <Link to="/contact" className="block mb-6">
                            <h2 className="text-6xl lg:text-7xl font-display leading-none tracking-tighter text-[#12B2C1] group-hover:italic transition-all duration-500 uppercase">
                                LET'S TALK
                            </h2>
                        </Link>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/8320023540"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-3 bg-[#25D366] text-white rounded-full font-display text-lg tracking-wide hover:bg-white hover:text-[#25D366] transition-all duration-300 shadow-xl group/wa"
                        >
                            <svg className="w-6 h-6 fill-current group-hover/wa:rotate-12 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WHATSAPP US
                        </a>
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

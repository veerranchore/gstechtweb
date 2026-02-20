import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => { setOpen(false); }, [pathname]);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled
                    ? 'bg-navy shadow-2xl py-2 border-b border-white/5'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2.5 group relative z-[110]">
                        <div className="flex items-center justify-center bg-white p-2 rounded shadow-sm">
                            <img
                                src="/GS TECHT LOGO.png"
                                alt="GS TECHT LOGO"
                                className="h-8 lg:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav: Smaller font */}
                    <nav className="hidden xl:flex items-center gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={`px-4 py-2 text-[10px] font-bold font-mono tracking-widest uppercase transition-colors relative ${isActive(link.href) ? 'text-orange' : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-4 right-4 h-[1px] bg-orange"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-6">
                        <Link to="/contact" className="px-5 py-2 bg-orange text-white rounded font-display text-sm tracking-wide hover:bg-white hover:text-navy transition-all duration-300">
                            GET STARTED
                        </Link>
                    </div>

                    {/* Mobile Trigger: Simple and Reliable */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[200]"
                    >
                        <motion.span
                            animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                            className="w-6 h-0.5 bg-white origin-center"
                        />
                        <motion.span
                            animate={{ opacity: open ? 0 : 1 }}
                            className="w-6 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
                            className="w-6 h-0.5 bg-white origin-center"
                        />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu: Moved OUT of header to prevent clipping and z-index issues */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] bg-navy flex flex-col pt-24 px-8 pb-10 overflow-hidden"
                    >
                        {/* Explicit Close Button for UX */}
                        <div className="absolute top-6 right-6 z-[160]">
                            <button
                                onClick={() => setOpen(false)}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        {/* Static links to prevent layout shifts during scroll glitches */}
                        <div className="flex flex-col gap-4 mt-10">
                            {links.map((l, i) => (
                                <motion.div
                                    key={l.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.03 }}
                                >
                                    <Link
                                        to={l.href}
                                        onClick={() => setOpen(false)}
                                        className={`font-display text-4xl tracking-tight uppercase block leading-none ${isActive(l.href) ? 'text-orange italic' : 'text-white/90'
                                            }`}
                                    >
                                        {l.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto py-10 border-t border-white/5 flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <span className="text-white/20 font-mono text-[9px] tracking-widest uppercase">Direct Contact</span>
                                <a href="mailto:gstecht7@gmail.com" className="text-white font-mono text-sm uppercase">gstecht7@gmail.com</a>
                                <a href="tel:+918320023540" className="text-white font-mono text-sm">+91 83200 23540</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

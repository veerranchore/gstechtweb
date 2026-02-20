import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const categories = ['All', 'Engineering', 'Design', 'Product', 'AI/ML'];

const posts = [
    {
        id: 1,
        cat: 'Engineering',
        title: 'THE ARCHITECTURE OF SCALE',
        excerpt: 'How we engineered a React Native ecosystem to support 1 million concurrent users without breaking the deployment pipeline.',
        author: 'ANANYA SHARMA',
        date: '12.02.25',
        read: '12 MIN',
        featured: true,
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 2,
        cat: 'AI/ML',
        title: 'AI IN THE WILD',
        excerpt: 'Real-world implementation of recommendation engines that drive 30%+ revenue growth.',
        author: 'FATIMA AL-RASHID',
        date: '28.01.25',
        read: '15 MIN',
        featured: false,
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        cat: 'DESIGN',
        title: 'PIXELS VS. PERFORMANCE',
        excerpt: 'The hidden cost of high-fidelity animations on low-end devices and how to optimize.',
        author: 'MARCUS WEBB',
        date: '30.12.24',
        read: '8 MIN',
        featured: false,
        img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
    }
];

const BlogPage: React.FC = () => {
    const [activeCat, setActiveCat] = useState('All');
    const featured = posts.find(p => p.featured)!;
    const filteredPosts = posts.filter(p => !p.featured && (activeCat === 'All' || p.cat === activeCat));

    return (
        <div className="bg-white min-h-screen text-navy overflow-hidden">
            {/* ── HERO: MAGAZINE BRUTALISM ── */}
            <section className="pt-40 pb-20 px-6 border-b-[10px] border-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
                <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-16 relative z-10">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
                        <div className="flex items-center gap-6 mb-12">
                            <span className="w-16 h-[1px] bg-orange"></span>
                            <span className="font-mono text-xs text-orange tracking-[0.6em] uppercase font-black italic">The GSTECH Journal / Vol. 25</span>
                        </div>
                        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.85] tracking-tighter uppercase mb-0 font-display">
                            RAW. DEEP. <span className="italic text-navy opacity-80 underline decoration-orange/20 decoration-[10px] underline-offset-[-5px]">TESTED.</span>
                        </h1>
                    </motion.div>
                    <div className="max-w-xl pb-10 border-l-[3px] border-navy pl-12">
                        <p className="text-2xl lg:text-3xl font-light leading-snug text-navy mb-12 italic tracking-tighter">
                            "No marketing fluff. Just technical observations from architects."
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(c => (
                                <button
                                    key={c}
                                    onClick={() => setActiveCat(c)}
                                    className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-all px-6 py-2 border-2 rounded-none font-black ${activeCat === c ? 'bg-navy border-navy text-white' : 'bg-transparent border-navy/10 text-navy/40 hover:border-navy hover:text-navy'}`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STREAMS ── */}
            <section className="py-24 lg:py-32 px-6 bg-[#1F2B2D] text-white">
                <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { name: 'ENGINEERING', count: '14 Articles', icon: 'settings_ethernet' },
                        { name: 'INTERFACE R&D', count: '09 Articles', icon: 'auto_awesome_motion' },
                        { name: 'PRODUCT OPS', count: '12 Articles', icon: 'hub' },
                        { name: 'AI FRONTIERS', count: '06 Articles', icon: 'psychology' }
                    ].map((cat) => (
                        <div key={cat.name} className="p-10 border border-white/5 bg-white/[0.02] flex flex-col justify-between min-h-[250px] hover:bg-orange transition-all duration-500 cursor-pointer group">
                            <span className="material-symbols-outlined text-3xl text-orange group-hover:text-white transition-colors">{cat.icon}</span>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display leading-none tracking-widest uppercase italic">{cat.name}</h3>
                                <p className="font-mono text-[9px] tracking-[0.5em] text-white/40 group-hover:text-white/60 uppercase">{cat.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FEATURED ── */}
            <section className="px-6 py-24 lg:py-40 bg-[#E5F9F8] border-b-[3px] border-navy/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-8 group cursor-pointer relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[10px] border-white">
                            <img src={featured.img} className="w-full aspect-[16/10] object-cover grayscale transition-all duration-[2.5s] group-hover:grayscale-0 group-hover:scale-105" alt={featured.title} />
                            <div className="absolute top-10 left-10 glass px-8 py-3 rounded-full border border-white/20">
                                <span className="font-mono text-[10px] text-white uppercase font-black tracking-widest italic">{featured.cat}</span>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-10">
                            <span className="font-mono text-[9px] text-orange tracking-[0.6em] font-black uppercase block mb-8 underline decoration-orange/20 decoration-2 underline-offset-8 italic">Issue No. 04.2 / {featured.date}</span>
                            <h2 className="text-5xl lg:text-7xl font-display leading-[0.85] text-navy uppercase italic tracking-tighter transition-all">{featured.title}</h2>
                            <p className="text-xl lg:text-2xl text-navy/50 italic font-light leading-relaxed border-l-4 border-orange pl-8">"{featured.excerpt}"</p>
                            <div className="pt-10 border-t border-navy/5 flex items-center justify-between">
                                <p className="text-2xl font-display uppercase tracking-widest">{featured.author}</p>
                                <button className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center hover:bg-orange transition-all shadow-2xl">
                                    <span className="material-symbols-outlined text-2xl">open_in_full</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEED ── */}
            <section className="px-6 py-24 lg:py-32 bg-white">
                <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    <AnimatePresence mode='wait'>
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="group flex flex-col gap-8 hover:bg-[#E5F9F8] p-8 rounded-[3rem] transition-all duration-700 cursor-pointer border border-transparent hover:border-black/5">
                                <div className="relative overflow-hidden rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 aspect-[5/4] shadow-2xl">
                                    <img src={post.img} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt={post.title} />
                                </div>
                                <div className="space-y-4">
                                    <span className="font-mono text-[10px] text-orange uppercase font-black tracking-[0.5em] italic">{post.cat} / {post.date}</span>
                                    <h3 className="text-3xl lg:text-4xl text-navy leading-none tracking-tighter group-hover:italic transition-all uppercase font-display ">{post.title}</h3>
                                    <p className="text-lg text-navy/40 italic font-light leading-relaxed">"{post.excerpt}"</p>
                                </div>
                            </article>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── NEWSLETTER ── */}
            <section className="py-24 lg:py-40 px-6 bg-navy text-white relative lg:rounded-[5rem] mx-0 lg:mx-6 my-20 overflow-hidden shadow-2xl italic">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
                    <span className="font-mono text-orange tracking-[1em] uppercase text-[10px] font-black block">Weekly Dispatch Protocol</span>
                    <h2 className="text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.85] text-white tracking-widest uppercase italic">SUBSCRIBE <br />OR MISS OUT.</h2>
                    <p className="text-white/30 text-xl lg:text-2xl max-w-2xl font-light italic leading-relaxed">
                        "High-density engineering insights transmitted to your inbox every Friday. Zero noise. All signal."
                    </p>
                    <form className="w-full max-w-xl flex flex-col md:flex-row gap-4">
                        <input type="email" placeholder="YOUR@DEPLOYMENT.IO" className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 font-display text-2xl lg:text-3xl text-white outline-none focus:border-orange transition-all placeholder:opacity-5 tracking-tighter" />
                        <button className="bg-orange text-white px-10 py-4 rounded-full font-display text-2xl hover:bg-white hover:text-navy transition-all shadow-2xl italic">JOIN</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;

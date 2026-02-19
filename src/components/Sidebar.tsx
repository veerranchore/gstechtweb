import React from 'react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
    const navItems = [
        { icon: 'dashboard', label: 'Home', active: true },
        { icon: 'settings_input_component', label: 'Services' },
        { icon: 'account_tree', label: 'Projects' },
        { icon: 'corporate_fare', label: 'About Us' },
        { icon: 'alternate_email', label: 'Contact' },
    ];

    return (
        <aside className="w-72 bg-white dark:bg-neutral-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 h-screen">
            <div className="p-6 flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">GS TECH</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Digital Intelligence</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto sidebar-scroll">
                {navItems.map((item, index) => (
                    <motion.a
                        key={item.label}
                        whileHover={{ x: 4 }}
                        href="#"
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${item.active
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary'
                            }`}
                    >
                        <span className={`material-symbols-outlined ${item.active ? 'fill-1' : ''}`}>{item.icon}</span>
                        <span className="text-sm font-semibold">{item.label}</span>
                    </motion.a>
                ))}

                <div className="pt-8 pb-2 px-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Our Headquarters</p>
                </div>

                <div className="space-y-4 px-3 py-2">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Chandkheda, Ahmedabad</span>
                        <div className="w-full h-12 rounded bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                            <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-primary/5"></div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-lg">support_agent</span>
                    Contact Support
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="bg-white dark:bg-neutral-800 border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-900 dark:text-white"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-800 transition-all text-slate-600 dark:text-slate-400"
                >
                    <span className="material-symbols-outlined">
                        {isDark ? 'light_mode' : 'dark_mode'}
                    </span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-800 transition-all text-slate-600 dark:text-slate-400"
                >
                    <span className="material-symbols-outlined">notifications</span>
                </motion.button>

                <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>

                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Admin User</p>
                        <p className="text-[10px] text-slate-500 font-medium">Enterprise Plan</p>
                    </div>
                    <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                        <span className="material-symbols-outlined text-primary">person</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

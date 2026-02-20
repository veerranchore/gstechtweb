
import React from 'react';
import { motion } from 'framer-motion';

interface RollRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const RollReveal: React.FC<RollRevealProps> = ({ children, delay = 0, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, rotateX: 60, y: 120, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1], // "Expo Out" style: Fast start, very slow smooth settling
                delay
            }}
            style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transformOrigin: '50% 100%'
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RollReveal;

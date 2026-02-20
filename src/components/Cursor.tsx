import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference"
                style={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? 'rgba(255, 255, 255, 0.5)' : '#ffffff'
                }}
                transition={{ type: "spring", stiffness: 800, damping: 40, mass: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                animate={{
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "spring", stiffness: 120, damping: 15, mass: 0.5 }}
            />
        </>
    );
};

export default Cursor;

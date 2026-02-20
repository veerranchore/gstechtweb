import React from 'react';

const techItems = [
    'React Native', 'Flutter', 'iOS Swift', 'Android Kotlin',
    'Node.js', 'Next.js', 'GraphQL', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'Python', 'Figma'
];

const TechMarquee: React.FC = () => {
    const doubled = [...techItems, ...techItems];
    return (
        <div className="bg-[#1F2B2D] py-5 overflow-hidden">
            <div className="marquee-inner">
                {doubled.map((tech, i) => (
                    <div key={i} className="flex items-center gap-0 shrink-0">
                        <span className="font-display text-xl tracking-widest text-white/20 px-8">
                            {tech}
                        </span>
                        <span className="text-[#12B2C1] text-xl font-bold">·</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;

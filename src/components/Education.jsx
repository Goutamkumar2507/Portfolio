import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Engineering – CSE",
            institution: "Chandigarh University",
            year: "2026",
            score: "72%",
            icon: <GraduationCap />,
        },
        {
            degree: "Class XII – CBSE",
            institution: "Secondary School",
            year: "2022",
            score: "71%",
            icon: <Calendar />,
        },
        {
            degree: "Class X – CBSE",
            institution: "Secondary School",
            year: "2020",
            score: "85%",
            icon: <Calendar />,
        },
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="text-center mb-16">
                <h2 className="text-accent-blue font-mono mb-2">My Journey</h2>
                <h3 className="text-4xl font-bold">Education</h3>
            </div>

            <div className="max-w-4xl mx-auto relative px-4">
                {/* Vertical Line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-800"></div>

                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                        {/* Dot */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue glow-blue z-10 border-4 border-slate-950"></div>

                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                            <div className="glass-card p-6 rounded-2xl relative">
                                <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                    <span className="text-accent-blue bg-accent-blue/10 p-2 rounded-lg">
                                        {edu.icon}
                                    </span>
                                    <span className="text-sm text-slate-400 font-mono">{edu.year}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                                <p className="text-slate-300 font-medium mb-2">{edu.institution}</p>
                                <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-sm font-bold text-accent-blue">
                                    Score: {edu.score}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;

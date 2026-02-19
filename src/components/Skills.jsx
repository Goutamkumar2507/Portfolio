import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            skills: [
                { name: "Python", level: 90 },
                { name: "C++", level: 85 },
                { name: "Java", level: 80 },
                { name: "SQL", level: 85 }
            ]
        },
        {
            title: "Frameworks",
            skills: [
                { name: "Pandas", level: 90 },
                { name: "TensorFlow", level: 85 },
                { name: "Keras", level: 80 },
                { name: "Flask", level: 75 },
                { name: "Scikit-learn", level: 85 }
            ]
        },
        {
            title: "Databases & Tools",
            skills: [
                { name: "MySQL", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "Linux", level: 80 }
            ]
        },
        {
            title: "Core Concepts",
            skills: [
                { name: "OOP", level: 90 },
                { name: "DBMS", level: 85 },
                { name: "DSA", level: 80 },
                { name: "Algorithms", level: 85 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-accent-blue font-mono mb-2">Technical Proficiency</h2>
                <h3 className="text-4xl font-bold">Skills & expertise</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-2xl border-t-2 border-accent-blue/30"
                    >
                        <h4 className="text-xl font-bold mb-6 text-gradient">{category.title}</h4>
                        <div className="space-y-6">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                                        <span className="text-xs font-mono text-accent-blue">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

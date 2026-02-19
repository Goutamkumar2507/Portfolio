import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Artificial Intelligence Trainee",
            company: "IBM SkillsBuild",
            location: "Remote",
            period: "2025",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            tasks: [
                "Completed 40+ hours of advanced AI/ML training",
                "Successfully deployed conversational chatbots using IBM Watson",
                "Improved deployment efficiency by 30% through automated pipelines"
            ]
        },
        {
            title: "Machine Learning Intern",
            company: "Prernagati Technology",
            location: "India",
            period: "2024",
            logo: "https://www.prernagati.com/assets/img/logo.png", // Fallback to icon if this doesn't load
            tasks: [
                "8-week intensive internship focusing on predictive modeling",
                "Achieved 85–90% model accuracy on real-world datasets",
                "Reduced data preprocessing time by 40% using optimized Python scripts"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-accent-purple font-mono mb-2">My Career Path</h2>
                <h3 className="text-4xl font-bold">Industrial Experience</h3>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-start hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all"
                    >
                        <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 shrink-0">
                            {exp.logo && exp.logo.startsWith('http') ? (
                                <img src={exp.explogo || exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain filter grayscale invert brightness-200" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                            ) : null}
                            <Building2 size={32} className="text-accent-purple hidden" />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                                    <p className="text-accent-purple font-semibold">{exp.company}</p>
                                </div>
                                <div className="text-slate-400 font-mono mt-2 md:mt-0 flex items-center gap-2">
                                    <Briefcase size={16} /> {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.tasks.map((task, tIndex) => (
                                    <li key={tIndex} className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 size={18} className="text-accent-purple mt-1 shrink-0" />
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Target, Zap, Database, Award } from 'lucide-react';

const Achievements = () => {
    const stats = [
        { label: "Accuracy Achieved", value: 90, suffix: "%", icon: <Target className="text-accent-blue" /> },
        { label: "Efficiency Improvement", value: 40, suffix: "%", icon: <Zap className="text-accent-purple" /> },
        { label: "Data Samples Processed", value: 10000, suffix: "+", icon: <Database className="text-accent-neon" /> },
        { label: "AI Certification Hours", value: 40, suffix: "+", icon: <Award className="text-white" /> }
    ];

    return (
        <section className="py-20 my-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-accent-blue/5 rounded-[4rem] -skew-y-3 z-[-1]"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl text-center flex flex-col items-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {React.cloneElement(stat.icon, { size: 32 })}
                            </div>
                            <div className="text-4xl font-extrabold mb-2 text-white">
                                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                                {stat.suffix}
                            </div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

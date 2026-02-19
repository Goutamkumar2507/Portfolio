import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent-blue font-mono mb-4">Hi, my name is</h2>
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
                        <span className="text-white">Goutam</span>{' '}
                        <span className="text-gradient">Kumar</span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-semibold text-slate-400 mb-8 h-20">
                        <Typewriter
                            words={['AI Engineer', 'Machine Learning Developer', 'Data Science Enthusiast']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>

                    <p className="text-slate-400 text-lg mb-10 max-w-xl">
                        Passionate AI Engineer specializing in developing intelligent solutions that bridge the gap between complex data and real-world impact. Currently pursuing B.E. in CSE at Chandigarh University.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-accent-blue text-white rounded-full font-bold flex items-center gap-2 glow-blue hover:bg-blue-600 transition-all"
                        >
                            View Projects <ChevronRight size={20} />
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                            Download Resume <Download size={20} />
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden glass-card p-2 border-slate-800">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                            alt="Professional Developer"
                            className="rounded-xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-[100px] animate-pulse"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-accent-blue/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-accent-purple/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

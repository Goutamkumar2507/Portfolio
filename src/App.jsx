import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
    const [loading, setLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-950">
                <div className="w-16 h-16 border-4 border-accent-blue border-t-transparent rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="text-accent-blue font-mono text-xl animate-pulse">Initializing AI Neural Core...</div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-accent-blue/30">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-[100] origin-left shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{ scaleX }}
            />

            {/* Background Three.js / Particles */}
            <div className="fixed inset-0 z-[-1]">
                <BackgroundEffect />
            </div>

            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <Hero />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Achievements />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;

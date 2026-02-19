import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Code2 } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectData = [
        {
            id: 1,
            title: "E-commerce Product Recommendation Assistant",
            tech: ["LangChain", "OpenAI", "FAISS", "SQL", "Streamlit"],
            description: "Developed an AI-powered assistant that handles 1000+ daily queries, improving relevance by 25% with sub-second retrieval speed.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            github: "#",
            demo: "#",
            features: [
                "Vector database integration with FAISS",
                "Natural language processing for user intent",
                "Real-time product suggestions"
            ]
        },
        {
            id: 2,
            title: "Customer Review Sentiment Classifier",
            tech: ["Python", "NLP", "LSTM", "TensorFlow"],
            description: "A deep learning model achieving 90% accuracy in real-time sentiment analysis for customer feedback systems.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            github: "#",
            demo: "#",
            features: [
                "LSTM-based architecture for sequential data",
                "Visualization dashboard for sentiment trends",
                "API endpoint for integration"
            ]
        },
        {
            id: 3,
            title: "Fake Profile & Spam Detection System",
            tech: ["Random Forest", "XGBoost", "Flask"],
            description: "Advanced cybersecurity solution detecting fraud with 90% accuracy and 35% reduction in false positives.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            github: "#",
            demo: "#",
            features: [
                "Feature engineering for social media profiles",
                "Ensemble model optimization",
                "Real-time screening interface"
            ]
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-accent-neon font-mono mb-2">My Work</h2>
                <h3 className="text-4xl font-bold">Featured Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="group glass-card rounded-3xl overflow-hidden cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                            <div className="absolute top-4 right-4 flex gap-2">
                                <a href={project.github} className="p-2 bg-slate-900/80 rounded-full hover:bg-accent-blue text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                    <Github size={18} />
                                </a>
                                <a href={project.demo} className="p-2 bg-slate-900/80 rounded-full hover:bg-accent-blue text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-accent-neon/10 text-accent-neon rounded border border-accent-neon/20">
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 3 && <span className="text-[10px] text-slate-500">+{project.tech.length - 3} more</span>}
                            </div>
                            <h4 className="text-xl font-bold mb-3 group-hover:text-accent-neon transition-colors">{project.title}</h4>
                            <p className="text-slate-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                            <button className="text-accent-neon text-sm font-bold flex items-center gap-2">
                                View Details <ExternalLink size={14} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="glass max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-64">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-slate-950/60 text-white rounded-full hover:bg-red-500 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-accent-neon/20 text-accent-neon text-xs font-bold rounded-full border border-accent-neon/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h4 className="text-3xl font-bold mb-4">{selectedProject.title}</h4>
                                <p className="text-slate-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                                <div className="mb-8">
                                    <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                                        <Code2 size={18} className="text-accent-neon" /> Key Features
                                    </h5>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedProject.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-neon" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <a href={selectedProject.github} className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                                        <Github size={20} /> GitHub Code
                                    </a>
                                    <a href={selectedProject.demo} className="flex-1 py-3 bg-accent-neon text-slate-950 hover:bg-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                                        <ExternalLink size={20} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

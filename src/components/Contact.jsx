import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            toast.success("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-accent-blue font-mono mb-2">Get In Touch</h2>
                <h3 className="text-4xl font-bold">Contact Me</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h4 className="text-2xl font-bold mb-6">Let's discuss something <span className="text-accent-blue">great</span>.</h4>
                    <p className="text-slate-400 mb-8 max-w-md">
                        I'm currently looking for new opportunities in AI/ML engineering. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-accent-blue">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-mono">Mail me at</p>
                                <p className="text-lg font-bold">goutam.gkk03@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-accent-purple">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-mono">Call me at</p>
                                <p className="text-lg font-bold">+91-9592237576</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-accent-neon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-mono">Location</p>
                                <p className="text-lg font-bold">Mohali, Punjab, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <a href="#" className="p-4 glass-card rounded-2xl hover:bg-accent-blue transition-all group">
                            <Github className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="p-4 glass-card rounded-2xl hover:bg-accent-blue transition-all group">
                            <Linkedin className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-[2rem]"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-2 font-mono">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Goutam Kumar"
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-2 font-mono">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-2 font-mono">Your Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hi, I'd like to talk about..."
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${loading ? 'bg-slate-700' : 'bg-accent-blue glow-blue hover:bg-blue-600'}`}
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 py-12 mt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-gradient mb-6">GK.</h2>

                <div className="flex justify-center space-x-6 mb-8">
                    <a href="#" className="p-3 glass-card rounded-full text-slate-400 hover:text-accent-blue transition-all">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="p-3 glass-card rounded-full text-slate-400 hover:text-accent-blue transition-all">
                        <Github size={24} />
                    </a>
                    <a href="mailto:goutam.gkk03@gmail.com" className="p-3 glass-card rounded-full text-slate-400 hover:text-accent-blue transition-all">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-slate-500 mb-2">Designed & Built by Goutam Kumar</p>
                <p className="text-slate-600 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>

            {/* Background glow in footer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] z-[-1]"></div>
        </footer>
    );
};

export default Footer;

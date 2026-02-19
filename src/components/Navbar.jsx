import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#hero' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-gradient">GK.</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-accent-blue transition-colors px-3 py-2 rounded-md font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent-blue transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass animate-in slide-in-from-top-4 duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-accent-blue block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex space-x-4 px-3 py-2">
                            <a href="#" className="text-slate-300 hover:text-accent-blue"><Github size={20} /></a>
                            <a href="#" className="text-slate-300 hover:text-accent-blue"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'py-4 glass border-b border-[var(--border)] shadow-lg' : 'py-6 bg-transparent border-b-0'
            )}
        >
            <div className="container flex items-center justify-between">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter flex items-center gap-2"
                >
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm">P</span>
                    Pablo<span className="text-[var(--text-secondary)]">.dev</span>
                </motion.a>

                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hidden md:flex items-center gap-8"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.nav>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <a href="https://github.com/Pablovelazquezb" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors px-4 py-2 border border-[var(--border)] rounded-full hover:border-[var(--accent-primary)] hidden md:block">
                        GitHub Profile
                    </a>
                </motion.div>
            </div>
        </header>
    );
};

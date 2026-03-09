import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Github } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="home">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm font-medium mb-6 backdrop-blur-md"
                    >
                        👋 Welcome to my digital space
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
                    >
                        Building the next <br />
                        <span className="text-gradient">generation</span> of web experiences.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-lg leading-relaxed"
                    >
                        I'm a passionate developer focused on creating fast, accessible, and visually stunning applications. Explore my recent projects below.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a href="#projects">
                            <Button size="lg" className="group">
                                View My Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="https://github.com/Pablovelazquezb" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="lg">
                                <Github className="mr-2 w-5 h-5" />
                                GitHub
                            </Button>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:flex justify-end relative h-full items-center"
                >
                    {/* Abstract visual element instead of a generic portrait for a more premium vibe */}
                    <div className="relative w-full max-w-md aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl border border-[var(--border)] glass rotate-3 transform hover:rotate-6 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-[#0a0a0c] rounded-3xl border border-[var(--border)] -rotate-3 overflow-hidden shadow-2xl flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                            <div className="z-10 text-center font-mono opacity-60">
                                <p className="text-blue-400">const developer = {'{'}</p>
                                <p className="text-purple-400 pl-4">name: 'Pablo',</p>
                                <p className="text-purple-400 pl-4">status: 'Coding...',</p>
                                <p className="text-blue-400">{'}'};</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

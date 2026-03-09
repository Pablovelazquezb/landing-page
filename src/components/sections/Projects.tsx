import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Github, ExternalLink, Star } from 'lucide-react';
import { useGithubProjects } from '../../hooks/useGithub';

export const Projects = () => {
    const { projects, loading, error } = useGithubProjects('Pablovelazquezb');

    return (
        <section id="projects" className="py-24 relative">
            <div className="container">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Featured <span className="text-gradient">Work</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] mt-4 max-w-lg">
                            Check out some of my open-source projects, side hustles, and professional work directly from GitHub.
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://github.com/Pablovelazquezb?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors flex items-center font-medium"
                    >
                        View all repositories <ExternalLink className="ml-1 w-4 h-4" />
                    </motion.a>
                </div>

                {loading && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <Card key={i} className="h-64 animate-pulse opacity-20"><div /></Card>
                        ))}
                    </div>
                )}

                {error && (
                    <Card className="p-8 text-center text-red-400">
                        <p>Failed to load projects. View them directly on GitHub.</p>
                    </Card>
                )}

                {!loading && !error && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card
                                key={project.id}
                                className="p-6 flex flex-col h-full group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    {project.stargazers_count > 0 && (
                                        <div className="flex items-center text-xs font-medium text-[var(--text-secondary)] bg-[var(--surface-hover)] px-2 py-1 rounded-full border border-[var(--border)]">
                                            <Star className="w-3 h-3 mr-1 text-yellow-400 fill-yellow-400" />
                                            {project.stargazers_count}
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow line-clamp-3">
                                    {project.description || 'No description provided.'}
                                </p>

                                <div className="mt-auto pt-6 border-t border-[var(--border)] flex items-center justify-between">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        {project.language && (
                                            <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--surface-hover)] text-[var(--accent-primary)] whitespace-nowrap">
                                                {project.language}
                                            </span>
                                        )}
                                        {project.topics && project.topics.slice(0, 1).map(topic => (
                                            <span key={topic} className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--surface-hover)] text-[var(--text-secondary)] truncate">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-[var(--surface-hover)] hover:text-white text-[var(--text-secondary)] transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        {project.homepage && (
                                            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-[var(--surface-hover)] hover:text-[var(--accent-primary)] text-[var(--text-secondary)] transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

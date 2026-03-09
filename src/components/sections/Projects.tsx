import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useGithubProjects } from '../../hooks/useGithub';
import { VercelProjectCard } from '../ui/VercelProjectCard';

export const Projects = () => {
    const { projects, loading, error } = useGithubProjects('Pablovelazquezb');

    return (
        <section id="projects" className="py-24 relative bg-black">
            <div className="container max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4 border-b border-[#222] pb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold tracking-tight text-[#EDEDED]">
                            Projects
                        </h2>
                        <p className="text-[#888] mt-2">
                            Select a project to view its deployment details and repository.
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://github.com/Pablovelazquezb?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[#888] hover:text-[#EDEDED] transition-colors flex items-center text-sm font-medium border border-transparent hover:border-[#333] px-3 py-1.5 rounded-md hover:bg-[#111]"
                    >
                        View GitHub <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.a>
                </div>

                {loading && (
                    <div className="flex flex-col gap-12">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-[400px] bg-[#111] animate-pulse rounded-xl border border-[#222]" />
                        ))}
                    </div>
                )}

                {error && (
                    <div className="p-8 text-center text-red-400 bg-[#111] border border-red-900 rounded-xl">
                        <p>Failed to load projects. View them directly on GitHub.</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="flex flex-col gap-16">
                        {projects.map((project, index) => (
                            <div key={project.id} className="scroll-mt-32">
                                <h2 className="text-2xl font-bold text-[#EDEDED] mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                                    {project.name}
                                </h2>
                                <VercelProjectCard project={project} index={index} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

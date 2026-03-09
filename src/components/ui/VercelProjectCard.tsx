import { motion } from 'framer-motion';
import { Github, GitBranch } from 'lucide-react';
import type { Repository } from '../../hooks/useGithub';

interface VercelProjectCardProps {
    project: Repository;
    index: number;
}

export const VercelProjectCard = ({ project, index }: VercelProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
            {/* Header: Production Deployment Title & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-[#222] gap-4">
                <h3 className="text-[#EDEDED] font-medium">Production Deployment</h3>
                <div className="flex items-center gap-2">
                    <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#EDEDED] bg-transparent border border-[#333] hover:bg-[#222] rounded-md transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        Repository
                    </a>
                    {project.homepage && (
                        <a
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between min-w-[100px] px-3 py-1.5 text-sm font-medium text-[#000] bg-[#EDEDED] hover:bg-white rounded-md transition-colors"
                        >
                            Visit
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left side: Web Preview Frame */}
                {project.homepage ? (
                    <div className="w-full lg:w-[60%] lg:max-w-xl aspect-[16/10] bg-black border border-[#333] rounded-lg overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[#000] opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none" />
                        <iframe
                            src={project.homepage}
                            title={`${project.name} preview`}
                            className="w-[200%] h-[200%] border-0 origin-top-left scale-[0.5]"
                            style={{ pointerEvents: 'none' }} // disable interaction inside iframe for clean visual
                        />
                    </div>
                ) : (
                    <div className="w-full lg:w-[60%] lg:max-w-xl aspect-[16/10] bg-[#111] border border-[#333] rounded-lg flex flex-col items-center justify-center text-[#888]">
                        <Github className="w-12 h-12 mb-4 text-[#444]" />
                        <p className="text-sm">No live deployment url provided</p>
                    </div>
                )}

                {/* Right side: Deployment Information */}
                <div className="flex-1 flex flex-col gap-6 pt-2">
                    {/* Deployment Detail */}
                    <div>
                        <p className="text-sm text-[#888] mb-1">Deployment</p>
                        <a
                            href={project.homepage || project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#EDEDED] hover:underline"
                        >
                            {project.homepage ? project.homepage.replace('https://', '') : `${project.name} on GitHub`}
                        </a>
                    </div>

                    {/* Domains */}
                    {project.homepage && (
                        <div>
                            <p className="text-sm text-[#888] mb-1">Domains</p>
                            <a
                                href={project.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-[#EDEDED] flex items-center hover:underline"
                            >
                                {project.homepage.replace('https://', '')}
                                <svg className="ml-1 w-3 h-3 text-[#A1A1AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    )}

                    {/* Status & Created Date */}
                    <div className="flex items-center justify-between border-t border-[#222] pt-6 mt-2">
                        <div>
                            <p className="text-sm text-[#888] mb-2">Status</p>
                            <div className="flex items-center gap-2">
                                <span className="flex w-2.5 h-2.5 bg-[#0070F3] rounded-full shadow-[0_0_8px_rgba(0,112,243,0.8)]" />
                                <span className="text-sm font-medium text-[#EDEDED]">Ready</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-[#888] mb-2">Created</p>
                            <span className="text-sm text-[#EDEDED]">
                                {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(project.pushed_at))}
                            </span>
                        </div>
                    </div>

                    {/* Source */}
                    <div className="border-t border-[#222] pt-4">
                        <p className="text-sm text-[#888] mb-2">Source</p>
                        <div className="bg-[#111] border border-[#333] rounded-md px-3 py-2 flex items-center gap-3">
                            <GitBranch className="w-4 h-4 text-[#EDEDED]" />
                            <span className="text-sm font-medium text-[#EDEDED]">main</span>
                            <span className="text-xs text-[#888] ml-2 truncate">
                                update {project.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accordion/Settings Placeholder */}
            {project.topics && project.topics.length > 0 && (
                <div className="px-6 py-4 flex items-center gap-3 border-t border-[#222] bg-[#0c0c0c]">
                    <span className="text-[#888] text-sm font-medium">Topics:</span>
                    <div className="flex flex-wrap gap-2">
                        {project.topics.map(topic => (
                            <span key={topic} className="text-xs px-2.5 py-1 rounded-full bg-[#222] border border-[#333] text-[#EDEDED]">
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

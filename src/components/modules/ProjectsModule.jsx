import React from 'react';
import { Code2, ExternalLink, Github } from 'lucide-react';
import BentoItem from '../bento/BentoItem';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "DeepSeek + RAG System",
        description: "Designed a RAG architecture integrating DeepSeek 1.5B LLM with external data sources. Leveraged Ollama for model management and LangChain for orchestration.",
        tags: ["DeepSeek", "RAG", "LangChain", "Ollama"],
        link: "#",
        github: "#"
    },
    {
        title: "Financial Advisory Agent",
        description: "Autonomous Multi-Agent System for financial advisory with a Dynamic Reasoning Layer (CoT) to decompose ambiguous objectives into executable plans.",
        tags: ["OpenAI", "Multi-Agent", "CoT", "Python"],
        link: "#",
        github: "#"
    },
    {
        title: "Activity Recognition",
        description: "Contrastive Learning approach for Human Activity Recognition. Developed a self-supervised learning system to accurately classify various human activities.",
        tags: ["PyTorch", "Computer Vision", "Self-Supervised"],
        link: "#",
        github: "#"
    }
];

const ProjectsModule = () => {
    return (
        <BentoItem colSpan={3} rowSpan={2} className="group">
            <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-violet-500/20 rounded-lg">
                        <Code2 className="w-6 h-6 text-violet-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group/card relative overflow-hidden"
                        >
                            {/* Architecture Visual Overlay */}
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover/card:opacity-20 transition-opacity pointer-events-none">
                                <svg width="60" height="60" viewBox="0 0 100 100" className="text-violet-400 fill-current">
                                    <circle cx="20" cy="50" r="8" />
                                    <circle cx="50" cy="20" r="8" />
                                    <circle cx="50" cy="80" r="8" />
                                    <circle cx="80" cy="50" r="8" />
                                    <line x1="20" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
                                    <line x1="20" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
                                    <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
                                    <line x1="50" y1="80" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>

                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-lg font-bold text-white group-hover/card:text-violet-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                                        <a href={project.github} className="text-gray-400 hover:text-white"><Github className="w-4 h-4" /></a>
                                        <a href={project.link} className="text-gray-400 hover:text-white"><ExternalLink className="w-4 h-4" /></a>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-medium px-2.5 py-1 bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BentoItem>
    );
};

export default ProjectsModule;

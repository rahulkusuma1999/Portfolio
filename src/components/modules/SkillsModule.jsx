import React from 'react';
import { Cpu } from 'lucide-react';
import BentoItem from '../bento/BentoItem';

const skills = [
    "Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI", "BERT", "RAG", "Multi-Agent Systems",
    "React", "TypeScript", "Tailwind", "Next.js", "Node.js", "FastAPI", "Docker", "AWS", "MongoDB"
];

const SkillsModule = () => {
    return (
        <BentoItem colSpan={2} className="group overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Cpu className="w-6 h-6 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>

            <div className="flex-1 flex items-center relative mask-linear-gradient">
                {/* Marquee Container */}
                <div className="flex gap-3 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
                    {[...skills, ...skills, ...skills].map((skill, idx) => (
                        <span
                            key={idx}
                            className="text-sm font-medium px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-pink-500/20 hover:text-pink-200 hover:border-pink-500/30 transition-colors cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </BentoItem>
    );
};

export default SkillsModule;

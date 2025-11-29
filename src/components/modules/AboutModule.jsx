import React from 'react';
import { Sparkles } from 'lucide-react';
import BentoItem from '../bento/BentoItem';

const AboutModule = () => {
    return (
        <BentoItem colSpan={2} rowSpan={2}>
            <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-gray-100">About Me</h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                    MTech in Artificial Intelligence from NIT Silchar with a strong foundation in building intelligent systems.
                    Currently an AI/ML Engineer at RuDo Wealth, specializing in Autonomous Multi-Agent Systems,
                    LLM orchestration, and Dynamic Reasoning Layers.
                </p>
                <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                        <span className="text-sm text-gray-300">Architecting Multi-Agent Systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-violet-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div>
                        <span className="text-sm text-gray-300">Optimizing LLM Inference Pipelines</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>
                        <span className="text-sm text-gray-300">Financial AI & Healthcare Tech</span>
                    </div>
                </div>
            </div>
        </BentoItem>
    );
};

export default AboutModule;

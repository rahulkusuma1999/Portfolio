import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import BentoItem from '../bento/BentoItem';

const experiences = [
    {
        title: "AI/ML Engineer",
        company: "RuDo Wealth",
        period: "July 2025 - Present",
        description: "Spearheading the development of an AI-driven financial advisory Assistant using LLMs (OpenAI GPT, Claude) and LangChain. Architected an Autonomous Multi-Agent System for financial advisory and a Dynamic Reasoning Layer implementing Chain-of-Thought (CoT)."
    },
    {
        title: "AI/ML Engineer",
        company: "Vidal Health",
        period: "Oct 2023 - June 2025",
        description: "Built low-latency LLM model-serving pipelines with FastAPI & Docker (<300ms). Deployed AI-driven email automation automating 70% of emails and an anomaly-detection system for health-insurance claims."
    },
    {
        title: "R&D Intern",
        company: "Philips Healthcare",
        period: "Aug 2022 - July 2023",
        description: "Developed scalable AWS environments using CloudFormation and SageMaker. Automated infrastructure for data processing and training using AWS Boto3 SDK."
    }
];

const ExperienceModule = () => {
    return (
        <BentoItem colSpan={2} rowSpan={2}>
            <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Experience</h2>
                </div>

                <div className="space-y-8 relative pl-2 overflow-y-auto pr-2 custom-scrollbar">
                    {/* Timeline Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/50 to-transparent"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 group">
                            {/* Timeline Dot */}
                            <div className="absolute left-[3px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-gray-900 group-hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 px-2 py-1 rounded-full w-fit mt-1 sm:mt-0">
                                    <Calendar className="w-3 h-3" />
                                    {exp.period}
                                </div>
                            </div>

                            <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </BentoItem>
    );
};

export default ExperienceModule;

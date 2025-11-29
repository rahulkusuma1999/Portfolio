import React from 'react';
import { Activity, Cpu, Database, Wifi } from 'lucide-react';

const SystemStatus = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#1c1917]/80 backdrop-blur-md border-t border-amber-500/10 py-2 z-50 overflow-hidden">
            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap text-xs font-mono text-amber-400/80">
                <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> SYSTEM_CORE: ONLINE</span>
                <span className="flex items-center gap-2"><Activity className="w-3 h-3" /> GPU_USAGE: 98%</span>
                <span className="flex items-center gap-2"><Database className="w-3 h-3" /> MEMORY_ALLOC: 64GB</span>
                <span className="flex items-center gap-2"><Wifi className="w-3 h-3" /> LATENCY: 12ms</span>
                <span className="text-amber-200">/// NEURAL_LINK_ESTABLISHED ///</span>
                <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> MODEL_ACCURACY: 99.9%</span>
                <span className="flex items-center gap-2 text-red-400">⚠ COFFEE_LEVEL: CRITICAL</span>
                <span className="flex items-center gap-2"><Activity className="w-3 h-3" /> TRAINING_EPOCH: 1024/5000</span>
                {/* Duplicate for seamless loop */}
                <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> SYSTEM_CORE: ONLINE</span>
                <span className="flex items-center gap-2"><Activity className="w-3 h-3" /> GPU_USAGE: 98%</span>
                <span className="flex items-center gap-2"><Database className="w-3 h-3" /> MEMORY_ALLOC: 64GB</span>
                <span className="flex items-center gap-2"><Wifi className="w-3 h-3" /> LATENCY: 12ms</span>
                <span className="text-amber-200">/// NEURAL_LINK_ESTABLISHED ///</span>
            </div>
        </div>
    );
};

export default SystemStatus;

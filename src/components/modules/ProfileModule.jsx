import React from 'react';
import { User, Mail, Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import BentoItem from '../bento/BentoItem';
import { motion } from 'framer-motion';

const ProfileModule = () => {
    return (
        <BentoItem colSpan={2} rowSpan={2} className="flex flex-col justify-center relative group overflow-hidden">
            {/* Magic Border Animation */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
                <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d4b483_0%,#78350f_50%,#d4b483_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-[1px] bg-[#1c1917]/90 rounded-2xl -z-10" />

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-600/10 to-rose-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-6">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 ring-4 ring-white/5"
                    >
                        <User className="w-10 h-10 text-white" />
                    </motion.div>

                    <div>
                        <motion.h1
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight leading-tight"
                        >
                            Rahul <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200">Kusuma</span>
                        </motion.h1>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-stone-300 font-medium flex items-center gap-2"
                        >
                            AI/ML Engineer <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Full Stack Developer
                        </motion.p>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-stone-400 max-w-md leading-relaxed text-lg"
                    >
                        Building intelligent systems and scalable applications. Passionate about bridging the gap between AI research and production engineering.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center gap-4 mt-8"
                >
                    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d4b483_0%,#78350f_50%,#d4b483_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#1c1917] px-6 py-1 text-sm font-medium text-amber-100 backdrop-blur-3xl gap-2 hover:bg-[#292524] transition-colors">
                            Contact Me <ArrowRight className="w-4 h-4" />
                        </span>
                    </button>

                    <button className="flex items-center gap-2 px-6 py-3 bg-white/5 text-stone-200 rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/10">
                        <Download className="w-4 h-4" /> Resume
                    </button>

                    <div className="flex gap-3 ml-auto">
                        <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-stone-300 hover:text-white border border-white/10 hover:border-white/20"><Github className="w-5 h-5" /></a>
                        <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-stone-300 hover:text-white border border-white/10 hover:border-white/20"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-stone-300 hover:text-white border border-white/10 hover:border-white/20"><Mail className="w-5 h-5" /></a>
                    </div>
                </motion.div>
            </div>
        </BentoItem>
    );
};

export default ProfileModule;

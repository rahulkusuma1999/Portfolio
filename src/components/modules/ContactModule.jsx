import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import BentoItem from '../bento/BentoItem';

const ContactModule = () => {
    return (
        <BentoItem className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="grid grid-cols-2 gap-4 w-full">
                <a
                    href="mailto:rahulkusuma99@gmail.com"
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group border border-white/5 hover:border-white/10"
                >
                    <Mail className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors mb-2" />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Email</span>
                </a>
                <a
                    href="https://linkedin.com/in/rahulkusuma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group border border-white/5 hover:border-white/10"
                >
                    <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors mb-2" />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
                <a
                    href="https://github.com/rahulkusuma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group border border-white/5 hover:border-white/10"
                >
                    <Github className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors mb-2" />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group border border-white/5 hover:border-white/10"
                >
                    <Twitter className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors mb-2" />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Twitter</span>
                </a>
            </div>
        </BentoItem>
    );
};

export default ContactModule;

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';

const TerminalMode = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'Initializing NEURAL_INTERFACE v2.5...' },
        { type: 'system', content: 'Loading modules... [OK]' },
        { type: 'system', content: 'Connecting to host... [ESTABLISHED]' },
        { type: 'info', content: 'Welcome, User. Type "help" for available commands.' }
    ]);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = { type: 'output', content: '' };

        switch (cleanCmd) {
            case 'help':
                response.content = `Available commands:
  about     - Display user bio
  skills    - List technical capabilities
  projects  - Show recent deployments
  contact   - Display communication channels
  clear     - Clear terminal history
  exit      - Return to GUI mode`;
                break;
            case 'about':
                response.content = `USER: Rahul Kusuma
ROLE: AI/ML Engineer & Full Stack Developer
BIO: Building intelligent systems and scalable applications. Passionate about bridging the gap between AI research and production engineering.`;
                break;
            case 'skills':
                response.content = `[LANGUAGES] Python, JavaScript, TypeScript, SQL
[FRAMEWORKS] React, Next.js, FastAPI, PyTorch, TensorFlow
[AI/ML] LLMs, RAG, Multi-Agent Systems, Computer Vision
[DEVOPS] Docker, AWS, Git`;
                break;
            case 'projects':
                response.content = `1. DeepSeek + RAG System [ARCHITECT]
   > Integrated DeepSeek 1.5B LLM with external data sources.
   
2. Financial Advisory Agent [LEAD]
   > Autonomous Multi-Agent System with Dynamic Reasoning Layer.

3. Activity Recognition [RESEARCH]
   > Contrastive Learning approach for Human Activity Recognition.`;
                break;
            case 'contact':
                response.content = `EMAIL: rahulkusuma99@gmail.com
LINKEDIN: linkedin.com/in/rahulkusuma
GITHUB: github.com/rahulkusuma`;
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'exit':
                onClose();
                return;
            default:
                response.content = `Command not found: ${cleanCmd}. Type "help" for assistance.`;
                response.type = 'error';
        }

        setHistory(prev => [...prev, { type: 'input', content: `> ${cmd}` }, response]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-[#1c1917] text-amber-500 font-mono p-4 md:p-8 flex flex-col">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-4">
                <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    <span className="font-bold tracking-wider">TERMINAL_ACCESS_POINT</span>
                </div>
                <div className="flex gap-4">
                    <button onClick={onClose} className="hover:text-amber-400"><Minimize2 className="w-5 h-5" /></button>
                    <button onClick={onClose} className="hover:text-red-500"><X className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Terminal Output */}
            <div className="flex-1 overflow-y-auto space-y-2 mb-4 custom-scrollbar">
                {history.map((line, idx) => (
                    <div key={idx} className={`${line.type === 'input' ? 'text-amber-100' : line.type === 'error' ? 'text-red-400' : 'text-amber-500'} whitespace-pre-wrap`}>
                        {line.content}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-2 border-t border-amber-500/30 pt-4">
                <span className="text-amber-500 animate-pulse">{'>'}</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-amber-100 focus:ring-0 placeholder-amber-500/30"
                    placeholder="Enter command..."
                    autoFocus
                />
            </div>
        </div>
    );
};

export default TerminalMode;

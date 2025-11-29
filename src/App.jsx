import React, { useState } from 'react';
import './index.css';
import BentoGrid from './components/bento/BentoGrid';
import ProfileModule from './components/modules/ProfileModule';
import AboutModule from './components/modules/AboutModule';
import ExperienceModule from './components/modules/ExperienceModule';
import ProjectsModule from './components/modules/ProjectsModule';
import SkillsModule from './components/modules/SkillsModule';
import ContactModule from './components/modules/ContactModule';
import NeuralBackground from './components/ui/NeuralBackground';
import SystemStatus from './components/ui/SystemStatus';
import TerminalMode from './components/TerminalMode';
import { Terminal } from 'lucide-react';

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen text-white relative pb-12">
      {terminalOpen ? (
        <TerminalMode onClose={() => setTerminalOpen(false)} />
      ) : (
        <>
          <NeuralBackground />

          {/* Terminal Toggle */}
          <button
            onClick={() => setTerminalOpen(true)}
            className="fixed top-4 right-4 z-50 p-3 bg-black/50 backdrop-blur-md border border-green-500/30 rounded-full text-green-500 hover:bg-green-500/10 transition-all hover:scale-110 group"
            title="Enter Terminal Mode"
          >
            <Terminal className="w-5 h-5" />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              DEV_MODE
            </span>
          </button>

          <div className="relative z-10 py-8">
            <BentoGrid>
              <ProfileModule />
              <ContactModule />
              <AboutModule />
              <ExperienceModule />
              <ProjectsModule />
              <SkillsModule />
            </BentoGrid>
          </div>
          <SystemStatus />
        </>
      )}
    </div>
  );
}

export default App;

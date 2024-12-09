import React from 'react';
import Terminal from './Terminal';
import ThemeToggle from './ThemeToggle';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ProfileImage from './ProfileImage';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-black text-green-400' : 'bg-gray-100 text-gray-800'
    }`}>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <ThemeToggle />
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TerminalIcon className={`w-8 h-8 ${isDark ? 'text-green-500' : 'text-gray-700'}`} />
            <h1 className="text-4xl font-bold">Terminal CV</h1>
          </div>
          <p className={isDark ? 'text-green-500' : 'text-gray-600'}>
            Access granted to classified personnel file
          </p>
        </div>

        <ProfileImage />
        <Terminal />
        
        <footer className="text-center mt-8 text-sm">
          <p>© {new Date().getFullYear()} | All rights reserved | Secured with quantum encryption</p>
        </footer>
      </div>
    </div>
  );
};

export default AppContent;
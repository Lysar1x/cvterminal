import React, { useState, useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { commands } from '../utils/terminalCommands';
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';

const Terminal: React.FC = () => {
  const { isDark } = useTheme();
  const { isAuthenticated, login, logout } = useAuth();
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [initialized, setInitialized] = useState(false);
  const [authStep, setAuthStep] = useState<'none' | 'username' | 'password'>('none');
  const [tempUsername, setTempUsername] = useState('');
  
  const terminalClass = isDark 
    ? 'bg-black text-green-500 border border-green-500'
    : 'bg-white text-gray-800 border border-gray-300';

  const handleCommand = (command: string) => {
    if (authStep === 'username') {
      setTempUsername(command);
      setAuthStep('password');
      setHistory(prev => [...prev, 
        { command: command, output: 'Password:' }
      ]);
      return;
    }

    if (authStep === 'password') {
      const success = login(tempUsername, command);
      if (success) {
        setHistory(prev => [...prev, 
          { command: '*'.repeat(command.length), output: 'Authentication successful. Welcome to the system.' }
        ]);
      } else {
        setHistory(prev => [...prev, 
          { command: '*'.repeat(command.length), output: 'Authentication failed. Please try again.' }
        ]);
      }
      setAuthStep('none');
      setTempUsername('');
      return;
    }

    const normalizedCommand = command.toLowerCase().trim();

    if (normalizedCommand === 'clear') {
      setHistory([]);
      return;
    }

    if (normalizedCommand === 'logout') {
      logout();
      setHistory([]);
      return;
    }

    if (normalizedCommand === 'sudo') {
      setAuthStep('username');
      setHistory(prev => [...prev, 
        { command: command, output: 'Username:' }
      ]);
      return;
    }

    const output = commands[normalizedCommand] || 'Command not found. Type "help" for available commands.';
    setHistory(prev => [...prev, { command, output }]);
  };

  return (
    <div className={`${terminalClass} p-4 rounded-lg shadow-lg font-mono`}>
      <div className={`flex items-center gap-2 mb-4 border-b ${
        isDark ? 'border-green-500' : 'border-gray-300'
      } pb-2`}>
        <TerminalIcon className="w-5 h-5" />
        <span>lysar1x_terminal.exe</span>
      </div>
      
      <div className="space-y-4">
        {!initialized ? (
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Initializing system...')
                  .pauseFor(1000)
                  .typeString('<br>Loading profile...')
                  .pauseFor(500)
                  .typeString('<br>Type "sudo" to gain administrative access')
                  .pauseFor(500)
                  .typeString('<br>Type "help" for available commands.')
                  .callFunction(() => setInitialized(true))
                  .start();
              }}
              options={{
                delay: 50,
                cursor: '_',
              }}
            />
          </div>
        ) : (
          <>
            <TerminalOutput history={history} isDark={isDark} />
            <TerminalInput 
              onCommand={handleCommand} 
              isDark={isDark}
              isPassword={authStep === 'password'}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;
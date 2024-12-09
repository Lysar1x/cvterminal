import React, { useState, useRef, useEffect } from 'react';

interface TerminalInputProps {
  onCommand: (command: string) => void;
  isDark: boolean;
  isPassword?: boolean;
}

const TerminalInput: React.FC<TerminalInputProps> = ({ onCommand, isDark, isPassword = false }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <span className={isDark ? 'text-green-500' : 'text-gray-600'}>{'>'}</span>
      <input
        ref={inputRef}
        type={isPassword ? "password" : "text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`flex-1 bg-transparent border-none outline-none cursor ${
          isDark ? 'text-green-500' : 'text-gray-800'
        } font-mono`}
        autoFocus
      />
    </form>
  );
};

export default TerminalInput;
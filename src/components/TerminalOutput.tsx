import React from 'react';

interface TerminalOutputProps {
  history: Array<{ command: string; output: string }>;
  isDark: boolean;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ history, isDark }) => {
  return (
    <div className="space-y-2">
      {history.map((entry, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={isDark ? 'text-green-500' : 'text-gray-600'}>{'>'}</span>
            <span>{entry.command}</span>
          </div>
          <div className="ml-4 whitespace-pre-wrap">{entry.output}</div>
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;
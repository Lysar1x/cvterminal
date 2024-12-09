import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProfileImage: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <div className="flex justify-center mb-6">
      <div 
        className={`
          relative w-32 h-32 rounded-full overflow-hidden 
          border-4 ${isDark ? 'border-[#00ff00]' : 'border-gray-700'}
          shadow-lg transition-all duration-300
          ${isDark 
            ? 'shadow-[0_0_30px_rgba(0,255,0,0.6)] animate-pulse' 
            : 'shadow-lg'
          }
          hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,0,0.8)]
        `}
      >
        <img
          src="https://images.unsplash.com/photo-1553272725-086100aecf5e?auto=format&fit=crop&w=300"
          alt="Hacker Profile"
          className="w-full h-full object-cover"
        />
        <div 
          className={`
            absolute inset-0 bg-gradient-to-b 
            ${isDark 
              ? 'from-green-400/10' 
              : 'from-gray-600/10'
            } 
            to-transparent transition-colors duration-300
          `}
        ></div>
      </div>
    </div>
  );
};

export default ProfileImage;
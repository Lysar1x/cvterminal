import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Terminal as TerminalIcon } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { isDark } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Authentication failed. Try sudo/admin');
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} flex items-center justify-center p-4`}>
      <div className={`w-full max-w-md ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg p-6 space-y-6 border ${isDark ? 'border-green-500' : 'border-gray-200'}`}>
        <div className="flex items-center justify-center space-x-2">
          <TerminalIcon className={`w-8 h-8 ${isDark ? 'text-green-500' : 'text-gray-700'}`} />
          <h2 className={`text-2xl font-bold ${isDark ? 'text-green-500' : 'text-gray-900'}`}>
            Terminal Access
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className={`block text-sm font-medium ${isDark ? 'text-green-500' : 'text-gray-700'}`}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`mt-1 block w-full rounded-md ${
                isDark 
                  ? 'bg-black border-green-500 text-green-500 focus:border-green-400' 
                  : 'border-gray-300 text-gray-900 focus:border-gray-400'
              } shadow-sm focus:ring-0 cursor`}
            />
          </div>
          
          <div>
            <label htmlFor="password" className={`block text-sm font-medium ${isDark ? 'text-green-500' : 'text-gray-700'}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 block w-full rounded-md ${
                isDark 
                  ? 'bg-black border-green-500 text-green-500 focus:border-green-400' 
                  : 'border-gray-300 text-gray-900 focus:border-gray-400'
              } shadow-sm focus:ring-0`}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${
              isDark
                ? 'bg-green-600 hover:bg-green-700 text-black'
                : 'bg-gray-800 hover:bg-gray-900 text-white'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDark ? 'focus:ring-green-500' : 'focus:ring-gray-500'
            }`}
          >
            Login
          </button>
        </form>
        
        <p className={`text-sm text-center ${isDark ? 'text-green-500' : 'text-gray-600'}`}>
          Use sudo/admin to login
        </p>
      </div>
    </div>
  );
};

export default Login;
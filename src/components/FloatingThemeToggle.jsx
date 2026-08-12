import UseTheme from '../context/UseTheme';
import { useState } from 'react';

function FloatingThemeToggle() {
    const { theme, toggleTheme } = UseTheme();
  const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full -z-10" />
        )}
        
        {/* Toggle Switch */}
        <button
          onClick={toggleTheme}
          className={`
            relative w-14 h-8 rounded-full transition-all duration-300 ease-in-out
            ${theme === 'dark' 
              ? 'bg-linear-to-r from-purple-600 to-blue-500' 
              : 'bg-linear-to-r from-gray-300 to-gray-400'
            }
            shadow-lg hover:scale-105 transform transition
          `}
          aria-label="Toggle theme"
        >
          {/* Sliding circle with icons */}
          <div
            className={`
              absolute top-1 left-1 w-6 h-6 rounded-full bg-white 
              transition-all duration-300 ease-in-out flex items-center justify-center
              ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}
              shadow-md
            `}
          >
            {theme === 'dark' ? (
              <span className="text-sm">🌙</span>
            ) : (
              <span className="text-sm">☀️</span>
            )}
          </div>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 right-0 bg-gray-800 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
          {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        </div>
      </div>
    </div>
    )
}
export default FloatingThemeToggle

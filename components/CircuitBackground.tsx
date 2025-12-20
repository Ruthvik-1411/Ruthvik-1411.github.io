
import React from 'react';

const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20 dark:opacity-10 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="200" height="200" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent-light dark:text-accent-dark">
              <path d="M10,50 L30,50 L30,30 L50,30 L50,10" />
              <path d="M50,90 L50,70 L70,70 L70,50 L90,50" />
              <path d="M10,30 L30,30 L30,10" />
              <path d="M70,90 L70,70 L90,70" />
              <path d="M90,30 L70,30 L70,10" />
              <circle cx="10" cy="50" r="2" />
              <circle cx="10" cy="30" r="2" />
              <circle cx="30" cy="10" r="2" />
              <circle cx="50" cy="10" r="2" />
              <circle cx="50" cy="90" r="2" />
              <circle cx="70" cy="90" r="2" />
              <circle cx="90" cy="70" r="2" />
              <circle cx="90" cy="50" r="2" />
              <circle cx="90" cy="30" r="2" />
              <circle cx="70" cy="10" r="2" />
              <circle cx="30" cy="30" r="2" />
              <circle cx="30" cy="50" r="2" />
              <circle cx="50" cy="30" r="2" />
              <circle cx="50" cy="70" r="2" />
              <circle cx="70" cy="30" r="2" />
              <circle cx="70" cy="50" r="2" />
              <circle cx="70" cy="70" r="2" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default CircuitBackground;

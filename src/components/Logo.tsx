import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  iconOnly = false,
}) => {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Abstract geometric symbol communicating kinetic automation, connection & intelligence */}
      <div className={`relative flex items-center justify-center ${iconDimensions} shrink-0`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer continuous kinetic loop */}
          <rect
            x="3"
            y="3"
            width="30"
            height="30"
            rx="9"
            className="stroke-[#222834]"
            strokeWidth="2"
          />
          {/* Inner flow trajectory */}
          <path
            d="M10 24C10 16.268 16.268 10 24 10"
            className="stroke-[#9ee82b]"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M26 12C26 19.732 19.732 26 12 26"
            className="stroke-[#3a4457]"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Central intelligent focal point */}
          <circle cx="24" cy="10" r="3" className="fill-[#9ee82b]" />
          <circle cx="12" cy="26" r="2.5" className="fill-[#e4e4e7]" />
        </svg>
      </div>

      {!iconOnly && (
        <span className={`font-semibold tracking-[-0.03em] text-[#f4f4f2] ${textSizes}`}>
          Wildcard Labs
          <span className="text-[#9ee82b] inline-block ml-0.5">.</span>
        </span>
      )}
    </div>
  );
};

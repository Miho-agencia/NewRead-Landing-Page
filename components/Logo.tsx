
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2">
        {/* Target/Crosshair Icon */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className={`absolute inset-0 border-2 rounded-full ${variant === 'light' ? 'border-white' : 'border-slate-900'}`}></div>
          <div className={`absolute w-4 h-0.5 ${variant === 'light' ? 'bg-white' : 'bg-slate-900'}`}></div>
          <div className={`absolute h-4 w-0.5 ${variant === 'light' ? 'bg-white' : 'bg-slate-900'}`}></div>
          <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 ${variant === 'light' ? 'bg-white' : 'bg-slate-900'}`}></div>
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 ${variant === 'light' ? 'bg-white' : 'bg-slate-900'}`}></div>
          <div className={`absolute top-1/2 -left-1 -translate-y-1/2 h-0.5 w-1.5 ${variant === 'light' ? 'bg-white' : 'bg-slate-900'}`}></div>
          <div className={`absolute top-1/2 -right-1 -translate-y-1/2 h-0.5 w-1.5 ${variant === 'light' ? 'bg-white' : 'bg-slate-900'}`}></div>
        </div>
        
        {/* Brand Text */}
        <div className="flex items-baseline leading-none">
          <span className={`text-2xl font-bold tracking-tight ${textColor}`}>New</span>
          <span className="text-2xl font-bold tracking-tight text-[#FFB35B]">Read</span>
        </div>
      </div>
      
      {/* Subtitle and Progress Bar */}
      <div className="flex items-center gap-2 w-full mt-0.5">
        <div className="flex h-1.5 w-24 rounded-full overflow-hidden bg-slate-800">
          <div className="w-1/4 bg-[#007BFF]"></div>
          <div className="w-1/4 bg-slate-400"></div>
          <div className="w-1/2 bg-[#FFB35B]"></div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-slate-500">Manager</span>
      </div>
    </div>
  );
};

export default Logo;

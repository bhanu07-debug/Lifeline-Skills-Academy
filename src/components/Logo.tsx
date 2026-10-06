import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Emblem Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 shadow-sm border border-white/20 shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Subtle shield outline */}
          <path
            d="M24 4L10 9V22C10 32.5 16 39.5 24 43C32 39.5 38 32.5 38 22V9L24 4Z"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Academic Mortarboard Cap Peak subtle silhouette */}
          <path
            d="M24 10L16 14L24 18L32 14L24 10Z"
            fill="#38bdf8"
            fillOpacity="0.4"
          />

          {/* Medical Cross Center Accent */}
          <rect x="22" y="19" width="4" height="12" rx="1" fill="#ffffff" />
          <rect x="18" y="23" width="12" height="4" rx="1" fill="#ffffff" />

          {/* Dynamic Lifeline Pulse Wave with red accent heart-pulse point */}
          <path
            d="M12 25H18L21 16L24 33L27 22L29 27L31 25H36"
            stroke="#14b8a6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Red pulse vitality dot */}
          <circle cx="24" cy="33" r="2" fill="#ef4444" />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== 'compact' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight text-lg ${
                isLight ? 'text-white' : 'text-slate-900'
              }`}
            >
              LIFE LINE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span
              className={`text-[10px] font-bold tracking-wider uppercase ${
                isLight ? 'text-teal-300' : 'text-teal-700'
              }`}
            >
              Skills Academy
            </span>
            <span
              className={`text-[9px] font-medium tracking-normal ${
                isLight ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Pvt. Ltd. · Nepal
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

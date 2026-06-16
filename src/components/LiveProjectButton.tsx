import React from 'react';

interface LiveProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ 
  label = "Live Project", 
  className = "", 
  ...props 
}) => {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base select-none ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

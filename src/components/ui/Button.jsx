import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyle = "w-full py-3.5 px-4 rounded-[14px] font-semibold flex items-center justify-center transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-[0_4px_12px_rgba(15,118,110,0.25)] hover:shadow-[0_6px_16px_rgba(15,118,110,0.35)] hover:-translate-y-0.5",
    secondary: "bg-white text-textMain border border-slate-200 shadow-sm hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5",
    success: "bg-secondary text-white hover:bg-secondary-hover shadow-[0_4px_12px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_16px_rgba(16,185,129,0.35)] hover:-translate-y-0.5",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

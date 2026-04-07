import React from 'react';

export function Input({ label, type = "text", className = "", ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-textMain">{label}</label>}
      <input 
        type={type}
        className="px-4 py-3.5 border border-slate-200 rounded-[14px] bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-sm placeholder:text-slate-400 text-slate-800"
        {...props}
      />
    </div>
  );
}

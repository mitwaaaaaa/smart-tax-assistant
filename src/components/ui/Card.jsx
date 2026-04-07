import React from 'react';

export function Card({ children, className = '', ...props }) {
  return (
    <div 
      className={`bg-white rounded-[20px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

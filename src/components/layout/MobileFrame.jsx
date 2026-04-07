import React from 'react';

export function MobileFrame({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center p-4 sm:p-8">
      {/* Simulate a mobile device view */}
      <div className="w-full max-w-[390px] h-[844px] max-h-[90vh] bg-background rounded-[48px] shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden relative border-[12px] border-black flex flex-col ring-1 ring-white/20">
        {/* Fake mobile status bar */}
        <div className="h-7 w-full flex justify-between items-center px-6 pt-2 pb-1 z-50 absolute top-0 text-[11px] font-bold text-slate-800">
          <span>9:41</span>
          <div className="flex space-x-1.5 items-center">
            <div className="w-4 h-3 bg-slate-800 flex flex-col justify-center space-y-0.5 px-0.5 rounded-[2px]"><div className="bg-background h-px w-full"></div><div className="bg-background h-px w-full"></div></div>
            <div className="w-4 h-3 bg-slate-800 rounded-[6px] border-[2px] border-background"></div>
            <div className="w-[22px] h-3 bg-slate-800 rounded-sm pb-1 items-center flex px-0.5"><div className="w-[18px] h-[7px] bg-background rounded-[1px]"></div></div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto mt-6 pb-6 no-scrollbar relative w-full h-full">
            {children}
        </div>
        
        {/* Fake Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-800 rounded-full z-50"></div>
      </div>
    </div>
  );
}

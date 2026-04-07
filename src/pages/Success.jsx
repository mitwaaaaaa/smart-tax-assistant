import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Check, CheckCircle2, Download, Share2 } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';

export default function Success() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");

  const handleAction = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  };

  return (
    <PageTransition className="p-6 mt-6 min-h-full flex flex-col bg-gradient-to-br from-primary via-primary to-slate-900 text-white relative overflow-hidden h-full rounded-[36px]">
      
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      {toastMessage && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold z-50 animate-in fade-in slide-in-from-top-4 shadow-lg border border-white/10">
          {toastMessage}
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 -mt-10">
        
        <div className="relative mb-8 mt-4">
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping shadow-[0_0_40px_rgba(255,255,255,0.4)]"></div>
          <div className="bg-white/20 p-5 rounded-full relative z-10 backdrop-blur-sm border border-white/30 shadow-lg animate-in zoom-in duration-500 delay-100 fill-mode-both">
            <CheckCircle2 className="w-16 h-16 text-white drop-shadow-md" />
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold mb-3 tracking-tight animate-in fade-in slide-in-from-bottom-4 delay-200 fill-mode-both">Woohoo!</h1>
        <p className="text-sm mb-10 w-5/6 mx-auto leading-relaxed text-white/90 font-medium animate-in fade-in slide-in-from-bottom-4 delay-300 fill-mode-both">
          Your Income Tax Return for F.Y. 2023-24 has been filed successfully.
        </p>

        <Card className="w-full bg-white text-textMain text-left p-6 mb-8 relative animate-in fade-in slide-in-from-bottom-8 delay-500 fill-mode-both shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border-none">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
            <span className="text-xs text-textMuted font-bold uppercase tracking-wider">Acknowledgement No.</span>
            <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">ITR19385029</span>
          </div>
          
          <div className="space-y-6 relative">
            {/* Timeline UI */}
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center shadow-sm">
                   <Check className="w-3 h-3" />
                </div>
                <div className="w-0.5 h-8 bg-secondary/30 my-1"></div>
              </div>
              <div className="pt-0.5">
                <h4 className="text-sm font-semibold">Return Submitted</h4>
                <p className="text-xs text-textMuted mt-0.5">Today, Just now</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 border-2 border-slate-200 bg-white rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              <div className="pt-0.5">
                <h4 className="text-sm font-semibold text-slate-500">Refund Issued</h4>
                <p className="text-xs text-slate-400 mt-0.5">Within 15-20 days</p>
              </div>
            </div>
            
          </div>
        </Card>

        <div className="flex w-full space-x-4 animate-in fade-in delay-700 fill-mode-both">
          <Button 
            variant="secondary" 
            onClick={() => handleAction("Receipt Downloaded!")}
            className="flex-1 bg-white/10 text-white border border-white/20 hover:bg-white/20 pointer-events-auto backdrop-blur-md shadow-none font-bold transition-all active:scale-95"
          >
            <Download className="w-4 h-4 mr-2" /> Receipt
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleAction("Link Copied to Clipboard!")}
            className="flex-1 bg-white/10 text-white border border-white/20 hover:bg-white/20 pointer-events-auto backdrop-blur-md shadow-none font-bold transition-all active:scale-95"
          >
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
        </div>
      </div>

      <div className="pt-4 z-10 w-full mb-4 animate-in fade-in slide-in-from-bottom-2 delay-[800ms] fill-mode-both">
        <Button 
          variant="secondary" 
          onClick={() => navigate('/dashboard')}
          className="bg-white text-primary hover:bg-slate-50 border-none font-extrabold shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-transform"
        >
          Back to Dashboard
        </Button>
      </div>

    </PageTransition>
  );
}

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { UploadCloud, CheckCircle2, ChevronLeft, File as FileIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { useAppContext } from '../context/AppContext';

export default function UploadDocs() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { setUploadedDoc, updateTaxData } = useAppContext();
  
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAnalyzing(true);
      
      // Simulate progress
      let p = 0;
      const interval = setInterval(() => {
        p += 15;
        if (p > 100) p = 100;
        setProgress(p);
        
        if (p === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setAnalyzing(false);
            setUploadedDoc(selectedFile.name);
            updateTaxData({ status: 'in-progress' });
            navigate('/summary');
          }, 800);
        }
      }, 300);
    }
  };

  return (
    <PageTransition className="p-6 mt-6 min-h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="w-full flex space-x-1 ml-4 pr-6">
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2">Upload Form 16</h1>
      <p className="text-textMuted mb-8 text-sm">We'll automatically extract your income and deduction details.</p>

      {/* Upload Zone */}
      <div className="flex-1">
        {!file ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-primary/30 bg-primary/5 rounded-[24px] p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 h-64 group"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="application/pdf,image/*" 
              onChange={handleFileChange}
            />
            <div className="bg-white p-4 rounded-[20px] shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-md">
              <UploadCloud className="w-8 h-8 text-primary group-hover:text-primary-hover transition-colors" />
            </div>
            <h3 className="font-bold mb-1 text-slate-800">Tap to upload PDF</h3>
            <p className="text-xs text-textMuted font-medium">Supports PDF or Image</p>
          </div>
        ) : (
          <div className="border border-slate-100 bg-white rounded-[24px] p-8 flex flex-col items-center justify-center text-center h-64 shadow-md transition-all relative overflow-hidden">
            {analyzing ? (
              <div className="w-full max-w-[200px] flex flex-col items-center animate-in fade-in zoom-in duration-300">
                 <FileIcon className="w-12 h-12 text-primary/70 mb-4 animate-pulse" />
                 <h3 className="font-bold text-primary text-lg mb-4">Analyzing...</h3>
                 <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-primary transition-all duration-300 ease-out" 
                     style={{ width: `${progress}%` }}
                   ></div>
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold mt-3 uppercase tracking-wider">{progress}% extracted</p>
              </div>
            ) : (
              <div className="animate-in zoom-in duration-300">
                <div className="bg-green-50 p-4 rounded-full mb-4 inline-block">
                   <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-bold text-secondary text-lg">Extraction Complete</h3>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
          <Card className="bg-slate-50 border-none">
            <h4 className="text-sm font-semibold mb-2">Why Form 16?</h4>
            <p className="text-xs text-textMuted">It contains your salary and TDS details, replacing the need for manual data entry.</p>
          </Card>
        </div>
      </div>
      
    </PageTransition>
  );
}

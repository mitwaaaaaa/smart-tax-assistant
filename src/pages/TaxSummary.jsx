import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ChevronLeft, Info, PieChart, RefreshCw } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { useAppContext } from '../context/AppContext';

export default function TaxSummary() {
  const navigate = useNavigate();
  const { taxData, calculateTax } = useAppContext();

  const handleToggleRegime = () => {
    const newRegime = taxData.regime === 'old' ? 'new' : 'old';
    calculateTax(newRegime);
  };

  const totalTaxable = taxData.salaryIncome + taxData.otherIncome - (taxData.regime === 'old' ? taxData.deductions : 0);

  return (
    <PageTransition className="p-6 mt-6 min-h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-200 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="w-full flex space-x-1 ml-4 pr-6">
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>

      <h1 className="text-3xl font-extrabold mb-6 tracking-tight text-slate-900">Your Tax Summary</h1>

      <div className="flex-1 space-y-5">
        
        {/* Dynamic Highlight Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/60 rounded-[24px] p-8 text-center shadow-sm relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
          <p className="text-sm font-bold text-green-700 mb-1 tracking-wide uppercase">Great news!</p>
          <p className="text-sm text-green-600/80 font-medium mb-3">You are eligible for a refund</p>
          <h2 className="text-5xl font-extrabold text-green-700 tracking-tight animate-in slide-in-from-bottom-2">
            ₹{taxData.refund.toLocaleString('en-IN')}
          </h2>
        </div>

        {/* Breakdown Card */}
        <Card className="p-0 overflow-hidden border-slate-200/60 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
             <div className="flex items-center">
               <PieChart className="w-5 h-5 text-slate-400 mr-3" />
               <h3 className="font-bold text-sm text-slate-800">Income Breakdown</h3>
             </div>
          </div>
          
          <div className="p-6 space-y-4 bg-white text-sm relative">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Salary Income</span>
              <span className="font-bold text-slate-800">₹{taxData.salaryIncome.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Other Income</span>
              <span className="font-bold text-slate-800">₹{taxData.otherIncome.toLocaleString('en-IN')}</span>
            </div>
            
            <div className={`flex justify-between items-center py-1 rounded-lg transition-all duration-300 ${taxData.regime === 'old' ? 'text-green-600 bg-green-50/50 -mx-2 px-2' : 'text-slate-400 opacity-50'}`}>
              <span className="flex items-center font-medium line-through decoration-slate-300 decoration-2">
                Deductions (80C) <Info className="w-3.5 h-3.5 ml-1.5 opacity-70" />
              </span>
              {taxData.regime === 'old' ? (
                <span className="font-bold">- ₹{(taxData.deductions).toLocaleString('en-IN')}</span>
              ) : (
                <span className="font-bold">Not Allowed</span>
              )}
            </div>
            
            <div className="pt-5 mt-2 border-t border-slate-100 flex justify-between font-extrabold text-base text-slate-900 border-dashed">
              <span>Taxable Income</span>
              <span className="transition-all duration-300">₹{totalTaxable.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </Card>

        <div className="flex justify-between items-center px-2 py-1 animate-in fade-in duration-500 delay-200">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-200/60 px-2.5 py-1 rounded-md">
            {taxData.regime === 'old' ? 'Old Regime' : 'New Regime'}
          </span>
          <button 
            onClick={handleToggleRegime}
            className="flex items-center text-primary text-sm font-bold hover:underline transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            Switch Regime
          </button>
        </div>
      </div>

      <div className="mt-8 animate-in slide-in-from-bottom-8 duration-500 delay-300">
        <Button onClick={() => navigate('/submit')}>Looks Good, Let's File</Button>
      </div>
      
    </PageTransition>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { ChevronLeft, Lock, Loader2 } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { useAppContext } from '../context/AppContext';

export default function SubmitReturn() {
  const navigate = useNavigate();
  const { updateTaxData } = useAppContext();
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(45);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(45);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(otp.length === 6) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        updateTaxData({ status: 'filed' });
        navigate('/success');
      }, 1500);
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
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-extrabold mb-2 tracking-tight text-slate-900">Final Step</h1>
        <p className="text-slate-500 mb-8 text-sm leading-relaxed">Verify your identity using Aadhaar to officially submit your return.</p>

        <Card className="mb-8 relative overflow-hidden bg-slate-50 border-none shadow-none">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-l-2xl"></div>
          <div className="flex items-start space-x-4 pl-2">
             <div className="bg-primary/10 p-2.5 rounded-[12px]">
               <Lock className="w-5 h-5 text-primary" />
             </div>
             <div>
               <h3 className="font-bold text-sm mb-1 text-slate-900">Aadhaar E-Verification</h3>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">
                 An OTP has been sent to the mobile number linked with your Aadhaar ending in <b className="text-slate-800">XXXX 4512</b>.
               </p>
             </div>
          </div>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <Input 
              label="Enter 6-digit OTP" 
              placeholder="• • • • • •" 
              type="number"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="tracking-[0.5em] text-center text-2xl font-bold bg-white focus:ring-primary"
            />
            <div className="flex justify-between text-xs font-bold px-2 mt-3">
              <span className="text-slate-400">00:{timeLeft.toString().padStart(2, '0')}</span>
              <button 
                type="button" 
                onClick={handleResend}
                disabled={timeLeft > 0}
                className={`${timeLeft > 0 ? 'text-slate-400 cursor-not-allowed' : 'text-primary hover:text-primary-hover'} transition-colors`}
              >
                Resend OTP
              </button>
            </div>
          </div>

          <div className="pt-4">
             <Button type="submit" disabled={otp.length !== 6 || isVerifying} className="relative">
               {isVerifying ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'E-Verify & Submit'}
             </Button>
          </div>
        </form>
      </div>

      <div className="text-center pb-4 text-[10px] text-textMuted px-4 mt-8">
        By submitting, you agree that the details provided are correct to the best of your knowledge under the Income Tax Act, 1961.
      </div>
      
    </PageTransition>
  );
}

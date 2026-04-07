import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Shield, Loader2 } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { useAppContext } from '../context/AppContext';

export default function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAppContext();
  const [step, setStep] = useState('mobile');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetOtp = (e) => {
    e.preventDefault();
    if(mobile.length > 5) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep('otp');
      }, 1000);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if(otp.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        loginUser(mobile);
        navigate('/dashboard');
      }, 1200);
    }
  };

  return (
    <PageTransition className="flex flex-col h-[calc(100%-24px)] p-6 mt-6">
      
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        <div className="bg-primary/10 w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 shadow-sm group hover:scale-[1.05] transition-transform duration-300">
          <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <h1 className="text-4xl font-extrabold mb-3 tracking-tight text-slate-900">Tax filing,<br/>simplified.</h1>
        <p className="text-slate-500 mb-10 leading-relaxed text-sm">
          {step === 'mobile' ? 'Enter your mobile number to get started securely via Aadhaar OTP.' : `OTP sent to ${mobile}. Please enter to securely login.`}
        </p>

        {step === 'mobile' ? (
          <form onSubmit={handleGetOtp} className="space-y-6">
            <Input 
              label="Mobile Number" 
              placeholder="+91 98765 43210" 
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <Button type="submit" disabled={isLoading} className="relative">
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Get OTP'}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <Input 
              label="Enter 6-digit OTP" 
              placeholder="• • • • • •" 
              type="number"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="tracking-[0.5em] text-center text-xl font-bold"
            />
            <Button type="submit" disabled={isLoading || otp.length !== 6}>
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Secure Login'}
            </Button>
            <button type="button" onClick={() => setStep('mobile')} className="text-xs text-primary w-full font-bold pt-2 hover:underline">
              Change Mobile Number
            </button>
          </form>
        )}
      </div>

      <div className="text-center pb-4 text-xs text-textMuted">
        <p>Govt. authorized filing portal.</p>
        <p>100% Secure & Encrypted.</p>
      </div>

    </PageTransition>
  );
}

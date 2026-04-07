import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileText, Clock, Bell, User, CheckCircle2, ChevronRight } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { useAppContext } from '../context/AppContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, taxData } = useAppContext();

  return (
    <PageTransition className="p-6 mt-6 bg-slate-50 min-h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-sm font-medium text-textMuted">Welcome back,</h2>
          <h1 className="text-2xl font-bold">{user?.name || 'Rohan S.'}</h1>
        </div>
        <div className="bg-white p-2 border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <User className="w-5 h-5 text-slate-600" />
        </div>
      </div>

      {taxData.status !== 'filed' && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 flex items-start space-x-3 shadow-sm animate-in fade-in duration-500">
          <Bell className="w-5 h-5 text-amber-500 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-800">Action Required</h3>
            <p className="text-sm text-amber-700 mt-1">F.Y. 2023-24 returns are due in 15 days. Avoid late fees.</p>
          </div>
        </div>
      )}

      {taxData.status === 'filed' ? (
        <Card className="mb-6 border-secondary/20 bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4">
             <div className="bg-secondary text-white p-2.5 rounded-xl shadow-sm">
               <CheckCircle2 className="w-6 h-6" />
             </div>
             <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-secondary border border-secondary/20 shadow-sm">
               F.Y. 2023-24
             </span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-slate-900">Return Filed Successfully</h2>
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">Your return is being processed by the ITD. We will notify you once your refund is issued.</p>
          <Button variant="secondary" className="w-full bg-white text-secondaryborder border-secondary/20 hover:bg-slate-50 font-bold" onClick={() => navigate('/success')}>
            View Receipt
          </Button>
        </Card>
      ) : (
        <Card className="mb-6 border-primary/20 bg-gradient-to-br from-primary/5 to-white hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4">
             <div className="bg-primary text-white p-2.5 rounded-xl shadow-sm">
               <FileText className="w-6 h-6" />
             </div>
             <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20 shadow-sm">
               F.Y. 2023-24
             </span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-slate-900">File your return</h2>
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">Answer simple questions, we'll auto-calculate your tax.</p>
          <Button onClick={() => navigate('/upload')}>Start Filing Now</Button>
        </Card>
      )}

      {/* Past Filings */}
      <div className="flex items-center justify-between mb-4 mt-8">
        <h3 className="font-bold text-lg text-slate-900">Past Filings</h3>
      </div>
      <Card className="flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
        <div className="flex items-center space-x-4">
           <div className="bg-green-50 p-2.5 rounded-xl border border-green-100 group-hover:scale-105 transition-transform">
             <Clock className="w-5 h-5 text-green-600" />
           </div>
           <div>
             <h4 className="font-bold text-slate-900">F.Y. 2022-23</h4>
             <p className="text-xs text-textMuted font-medium mt-0.5">Processed <span className="mx-1">•</span> <span className="text-green-600 font-semibold">₹2,100 Refund</span></p>
           </div>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
      </Card>

    </PageTransition>
  );
}

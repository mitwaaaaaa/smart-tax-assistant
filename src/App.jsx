import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MobileFrame } from './components/layout/MobileFrame';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UploadDocs from './pages/UploadDocs';
import TaxSummary from './pages/TaxSummary';
import SubmitReturn from './pages/SubmitReturn';
import Success from './pages/Success';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadDocs />} />
        <Route path="/summary" element={<TaxSummary />} />
        <Route path="/submit" element={<SubmitReturn />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <MobileFrame>
        <AnimatedRoutes />
      </MobileFrame>
    </Router>
  );
}

export default App;

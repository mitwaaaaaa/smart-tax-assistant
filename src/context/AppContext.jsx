import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [taxData, setTaxData] = useState({
    salaryIncome: 1250000,
    otherIncome: 15000,
    deductions: 150000,
    regime: 'old', // 'old' or 'new'
    refund: 4500,
    status: 'unfiled' // 'unfiled', 'filed'
  });
  
  const [uploadedDoc, setUploadedDoc] = useState(null);

  const loginUser = (mobile) => setUser({ mobile, name: 'Rohan S.' });
  const logoutUser = () => setUser(null);

  const updateTaxData = (data) => {
    setTaxData(prev => ({ ...prev, ...data }));
  };

  const calculateTax = (regime) => {
    let totalTaxable = taxData.salaryIncome + taxData.otherIncome;
    if (regime === 'old') {
      totalTaxable -= taxData.deductions;
    }
    
    // Fake mock refund update just to show interactivity
    const newRefund = regime === 'old' ? 4500 : 1200;
    
    setTaxData(prev => ({
      ...prev,
      regime,
      refund: newRefund
    }));
  };

  return (
    <AppContext.Provider value={{ user, loginUser, logoutUser, taxData, updateTaxData, calculateTax, uploadedDoc, setUploadedDoc }}>
      {children}
    </AppContext.Provider>
  );
}
